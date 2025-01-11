"use client";

import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";

import { useResetPassword, useToast } from "@/core";
import { ResetPasswordForm } from "@/feautures";

export default function ResetPasswordPage() {
  const { showToast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { confirmResetPassword } = useResetPassword();

  const token = searchParams.get("token");

  if (!token) {
    showToast({
      title: "Invalid token",
      description: "Token is missing or invalid.",
    });
    router.push("/");
    return null;
  }

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required("New password is required")
        .min(6, "Password must be at least 6 characters long"),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("newPassword")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      confirmResetPassword(token, values.newPassword).subscribe({
        error: () => {
          showToast({
            title: "Error",
            description: "An error occurred while resetting your password.",
          });
        },
        complete: () => {
          showToast({
            title: "Password reset",
            description: "Your password has been reset. You can now log in with your new password.",
          });
          router.push("/auth/login");
        },
      });
    },
  });

  return <ResetPasswordForm formik={formik} token={token} />;
}
