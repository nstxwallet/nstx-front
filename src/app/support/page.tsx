"use client";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

import { useToast } from "@/core";
import { SupportPage } from "@/feautures";

export default function Support() {
  const { showToast } = useToast();
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    name: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    message: Yup.string().min(3),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      showToast({
        title: "Support request sent",
        description: "We will get back to you as soon as possible",
      });
    },
  });
  return <SupportPage formik={formik} />;
}
