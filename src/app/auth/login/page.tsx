"use client";
import { useAuth } from "@/core";
import { LoginForm } from "@/feautures";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
});

export default function Login() {
	const navigate = useRouter();
	const { login } = useAuth();

	return (
		<LoginForm
			onSubmit={(values) => {
				login(values)
					.then(() => {
						navigate.push("/wallet");
						toast.success("Logged in successfully");
					})
					.catch(() => {
						toast.error("Invalid email or password");
					});
			}}
			validationSchema={validationSchema}
		/>
	);
}
