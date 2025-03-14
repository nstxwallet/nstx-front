"use client";

import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";

import { useResetPassword, useToast } from "@/core";
import { ResetPasswordForm } from "@/feuture";

export default function ResetPasswordPage() {
  const { confirmResetPassword } = useResetPassword();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  if (!token) {
    router.push("/auth/login");
  }

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .required("New password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("newPassword")], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: ({ newPassword }) => {
      confirmResetPassword(token!, newPassword).subscribe({
        next: () => {
          toast({
            title: "Password Reset",
            description: "Your password has been reset successfully. You can now log in.",
          });
          router.push("/auth/login");
        },
        error: () => {
          toast({
            title: "Error",
            description: "An error occurred while resetting your password.",
          });
        },
      });
    },
  });

  return <ResetPasswordForm router={router} formik={formik} />;
}
