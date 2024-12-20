"use client";
import { useAuth } from "@/core";
import { SignUpForm } from "@/feautures";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function SignUp() {
	const { signup } = useAuth();
	const navigate = useRouter();

	const validationSchema = Yup.object({
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		password: Yup.string()
			.min(6, "Password must be at least 6 characters")
			.required("Password is required"),
		firstName: Yup.string().required("First Name is required"),
		lastName: Yup.string().required("Last Name is required"),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
		},
		validationSchema: validationSchema,

		onSubmit: async (values) => {
			try {
				await signup(values);
				toast.success("Account created successfully");
				navigate.push("/wallet");
			} catch (_e) {
				toast.error("An error occurred. Please try again later.");
			}
		},
	});

	return <SignUpForm formik={formik} onSubmit={formik.handleSubmit} />;
}
