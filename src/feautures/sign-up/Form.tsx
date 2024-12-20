import { Button, Form, Grid, Input, Paper, Typography } from "@/shared";
import type { FormikProps } from "formik";
import Link from "next/link";

interface SignUpProps {
	onSubmit: () => void;
	formik: FormikProps<{
		email: string;
		password: string;
		firstName: string;
		lastName: string;
	}>;
}

export const SignUpForm = ({ onSubmit, formik }: SignUpProps) => {
	return (
		<Grid
			container
			justify="center"
			align="center"
			className="min-h-screen p-8"
		>
			<Paper
				variant="gradient"
				type="square"
				border={false}
				className="w-full text-center absolute top-0 left-0 p-8"
			>
				<Typography variant="h2">Welcome Back!</Typography>
				<Typography variant="h6">
					Get ready to explore the best trading experience with seamless
					transactions and top-tier security.
				</Typography>
			</Paper>
			<div className="mt-40 flex justify-center">
				<Paper className="max-w-md">
					<Typography variant="h3" center className="mb-4">
						Join our team
					</Typography>
					<Form onSubmit={onSubmit}>
						<Input
							fullWidth
							type="text"
							name="firstName"
							placeholder="First Name"
							value={formik.values.firstName}
							onChange={formik.handleChange}
						/>
						<Input
							fullWidth
							type="text"
							name="lastName"
							placeholder="Last Name"
							value={formik.values.lastName}
							onChange={formik.handleChange}
						/>
						<Input
							fullWidth
							type="email"
							name="email"
							placeholder="Email Address"
							value={formik.values.email}
							onChange={formik.handleChange}
						/>
						<Input
							fullWidth
							type="password"
							name="password"
							placeholder="Password"
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
						<Button variant="bordered" type="submit" fullWidth>
							Sign Up
						</Button>
					</Form>
					<Link
						href="/auth/login"
						className="text-blue-500 hover:text-blue-400 block text-xs"
					>
						Already have an account? Log in
					</Link>
				</Paper>
			</div>
		</Grid>
	);
};
