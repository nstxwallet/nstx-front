"use client";
import { useFormik } from "formik";
import Link from "next/link";
import { toast } from "react-toastify";
import type * as yup from "yup";

import { Button, Form, Grid, Input, Paper, Row, Typography } from "@/shared";

interface LoginFormProps {
	onSubmit: (values: { email: string; password: string }) => void;
	validationSchema: yup.ObjectSchema<{ email: string; password: string }>;
}

export function LoginForm({ onSubmit, validationSchema }: LoginFormProps) {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema,
		onSubmit: (values) => {
			onSubmit(values);
			toast.success("Logged in successfully");
		},
	});

	return (
		<Grid container justify="center" align="center" className="min-h-screen">
			<Paper
				variant="gradient"
				type="square"
				border={false}
				className="w-full text-center p-8 absolute top-0 left-0"
			>
				<Typography variant="h1">Welcome Back!</Typography>
				<Typography variant="h6">
					Log in to your wallet account to get started with us.
				</Typography>
			</Paper>
			<div className="mt-40 flex justify-center">
				<Paper className="max-w-md">
					<Form onSubmit={formik.handleSubmit}>
						<Typography variant="h3" center>
							Auth to your wallet
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
						<Input
							fullWidth
							type="password"
							name="password"
							placeholder="Password"
							onChange={formik.handleChange}
							value={formik.values.password}
							error={
								formik.touched.password ? formik.errors.password : undefined
							}
						/>
						<Button fullWidth type="submit">
							{formik.isSubmitting ? "Loading..." : "Login"}
						</Button>
					</Form>
					<Row justify="between">
						<Link
							href="/auth/forgot-password"
							className="text-blue-500 hover:text-blue-400 text-xs"
						>
							Forgot Password?
						</Link>
						<Link
							href="/auth/sign-up"
							className="text-blue-500 hover:text-blue-400 text-xs"
						>
							Sign Up
						</Link>
					</Row>
				</Paper>
			</div>
		</Grid>
	);
}
