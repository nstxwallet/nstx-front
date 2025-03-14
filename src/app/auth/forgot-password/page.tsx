"use client";

import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import { useResetPassword, useToast } from "@/core";
import { ForgotPasswordForm } from "@/feuture";

export default function ForgotPasswordPage() {
  const { sendResetPassword } = useResetPassword();
  const { toast } = useToast();
  const [step, setStep] = useState<"email" | "check">("email");

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: async ({ email }) => {
      sendResetPassword(email).subscribe({
        next: () => {
          toast({
            title: "Password reset request sent",
            description: "Check your email for further instructions.",
          });
          setStep("check");
        },
        error: () => {
          toast({
            title: "Password reset request failed",
            description: "Please try again later.",
          });
        },
      });
    },
  });

  return <ForgotPasswordForm formik={formik} step={step} />;
}
