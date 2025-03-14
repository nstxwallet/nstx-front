"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

import { useAuth, useToast } from "@/core";
import { SignUpForm } from "@/feuture";

export default function SignUpPage() {
  const { toast } = useToast();
  const { signup } = useAuth();
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    firstName: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Surname is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema,
    onSubmit: (values) => {
      signup(values).subscribe({
        error: (error) => {
          toast({
            title: "Sign up failed",
            description: error?.message || "An unknown error occurred",
          });
        },
        complete: () => {
          toast({
            title: "Sign up successful",
            description: "You can now log in",
          });
          router.push("/auth/login");
        },
      });
    },
  });

  return <SignUpForm formik={formik} />;
}
