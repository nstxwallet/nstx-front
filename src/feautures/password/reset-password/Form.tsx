"use client";

import type { FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button, Form, Grid, Input, Paper, Row, Typography } from "@/shared";

interface ResetPasswordProps {
	formik: FormikProps<{ newPassword: string; confirmPassword: string }>;
	token: string | null;
}

export const ResetPasswordForm = ({ formik, token }: ResetPasswordProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (!token) {
			router.push("/auth/login");
		}
	}, [token, router]);

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setIsLoading(true);
		formik.handleSubmit(e);
		setIsLoading(false);
	};

	return (
		<Grid container justify="center" align="center" className="min-h-screen">
			<Paper
				variant="gradient"
				type="square"
				border={false}
				className="w-full text-center p-8 absolute top-0 left-0 bg-gradient-to-b from-pink-400 to-purple-500"
			>
				<Typography variant="h1">Here to help you</Typography>
				<Typography variant="h6">
					Reset your password to get back to your account
				</Typography>
			</Paper>

			<div className="mt-40 flex justify-center">
				<Paper className="max-w-md">
					<Form onSubmit={handleFormSubmit}>
						<Typography variant="h1">Reset Your Password</Typography>

						<Input
							fullWidth
							type="password"
							name="newPassword"
							placeholder="New Password"
							onChange={formik.handleChange}
							value={formik.values.newPassword}
							error={
								formik.touched.newPassword
									? formik.errors.newPassword
									: undefined
							}
						/>

						<Input
							fullWidth
							type="password"
							name="confirmPassword"
							placeholder="Confirm New Password"
							onChange={formik.handleChange}
							value={formik.values.confirmPassword}
							error={
								formik.touched.confirmPassword
									? formik.errors.confirmPassword
									: undefined
							}
						/>

						<Row>
							<Button fullWidth type="submit">
								{isLoading ? "Resetting..." : "Set Password"}
							</Button>
							<Button
								fullWidth
								variant="bordered"
								onClick={() => router.push("/auth/login")}
							>
								Return to Login
							</Button>
						</Row>
					</Form>
				</Paper>
			</div>
		</Grid>
	);
};
