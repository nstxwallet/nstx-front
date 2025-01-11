"use client";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

import { useAuth, useToast } from "@/core";
import { LoginForm } from "@/feautures";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const navigate = useRouter();
  const { login } = useAuth();
  const { showToast } = useToast();

  return (
    <LoginForm
      onSubmit={(values) => {
        login(values).subscribe({
          error: (error) => {
            showToast({
              title: "Login failed",
              description: error,
            });
          },
          next: () => {
            showToast({
              title: "Login successful",
              description: "Welcome back!",
            });
            navigate.push("/wallet");
          },
        });
      }}
      validationSchema={validationSchema}
    />
  );
}
