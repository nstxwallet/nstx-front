"use client";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { useResetPassword } from "@/core";
import { ForgotPasswordForm } from "@/feautures";

export default function ForgotPassword() {
	const { sendResetPassword } = useResetPassword();
	const [step, setStep] = useState<"email" | "check">("email");
	const emailValidationSchema = Yup.object({
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
	});
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: emailValidationSchema,
		onSubmit: async (values) => {
			sendResetPassword(values.email).subscribe({
				error: () => {
					toast.error("Failed to send password reset request.");
				},
				complete: () => {
					toast.success("Password reset request sent successfully.");
					setStep("check");
				},
			});
		},
	});

	return (
		<ForgotPasswordForm
			formik={formik}
			onSubmit={formik.handleSubmit}
			step={step}
		/>
	);
}
