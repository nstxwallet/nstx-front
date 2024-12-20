"use client";

import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { useResetPassword } from "@/core";
import { ResetPasswordForm } from "@/feautures";

export default function ResetPasswordPage() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { confirmResetPassword } = useResetPassword();

	const token = searchParams.get("token");

	if (!token) {
		toast.error("Invalid or missing reset token.");
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
					toast.error("Failed to reset the password.");
				},
				complete: () => {
					toast.success("Password reset successfully.");
					router.push("/auth/login");
				},
			});
		},
	});

	return <ResetPasswordForm formik={formik} token={token} />;
}
