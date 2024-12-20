"use client";

import { Button, Form, Grid, Input, Paper, Typography } from "@/shared";
import type { FormikProps } from "formik";
import { useRouter } from "next/navigation";

interface ForgotPasswordFormProps {
	formik: FormikProps<{ email: string }>;
	onSubmit: () => void;
	step: "email" | "check";
}

export const ForgotPasswordForm = ({
	formik,
	onSubmit,
	step,
}: ForgotPasswordFormProps) => {
	const router = useRouter();

	return (
		<Grid container justify="center" align="center" className="min-h-screen">
			<Paper className="w-full text-center p-8 absolute top-0 left-0 bg-gradient-to-b from-pink-400 to-purple-500">
				<Typography variant="h1">Reset Your Password</Typography>
				<Typography variant="h6">
					{step === "email"
						? "Enter your email to receive a verification code."
						: "Check your email for the reset link."}
				</Typography>
			</Paper>
			<div className="mt-40 flex justify-center">
				<Paper className="max-w-md p-6">
					{step === "email" ? (
						<Form onSubmit={onSubmit}>
							<Typography variant="h3" center>
								Reset Password
							</Typography>
							<Input
								fullWidth
								type="email"
								name="email"
								placeholder="Email Address"
								onChange={formik.handleChange}
								value={formik.values.email}
								error={formik.touched.email ? formik.errors.email : undefined}
							/>
							<Button fullWidth type="submit" onClick={formik.handleSubmit}>
								Send Code
							</Button>
						</Form>
					) : (
						<>
							<Typography variant="h5" className="text-center mb-4">
								We’ve sent a reset password link to your email. Please check
								your inbox and follow the instructions to reset your password.
							</Typography>
							<Button
								fullWidth
								onClick={() => {
									router.push("/auth/login");
								}}
							>
								Back to Login
							</Button>
						</>
					)}
				</Paper>
			</div>
		</Grid>
	);
};
