"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

import { useAuth, useToast } from "@/core";
import { LoginForm } from "@/feuture";

export default function LoginPage() {
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password is too short").required("Password is required"),
    }),
    onSubmit: (values) => {
      login(values).subscribe({
        next: () => {
          toast({
            title: "Login successful",
            description: "Welcome back!",
          });
          navigate.push("/transactions");
        },
        error: () => {
          toast({
            title: "Login failed",
            description: "Invalid email or password",
          });
        },
      });
    },
  });

  return <LoginForm formik={formik} />;
}
