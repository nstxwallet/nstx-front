"use client";

import React from "react"; 
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import { useAuth, useToast } from "@/core";
import { SignUpForm } from "@/feautures";

export default function SignUp() {
  const { showToast } = useToast();
  const { signup } = useAuth();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      firstName: Yup.string().required("name required"),
      lastName: Yup.string().required("surname required"),
    }),
    onSubmit: (values) => {
      signup(values).subscribe({
        error: (error) => {
          showToast({
            title: "Sign up failed",
            description: error
          });
        },
        complete: () => {
          showToast({
            title: "Sign up successful",
            description: "You can now login",
          });
          router.push("/auth/login");
        },
      });
    },
  });

  return <SignUpForm formik={formik} onSubmit={formik.handleSubmit} />;
}
