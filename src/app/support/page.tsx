"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";

import { useToast } from "@/core";
import { SupportForm } from "@/feuture";

export default function Support() {
  const router = useRouter();
  const { toast } = useToast();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      name: Yup.string().min(6, "Name must be at least 6 characters").required("Name is required"),
      message: Yup.string().min(3, "Message must be at least 3 characters"),
    }),
    onSubmit: () => {
      toast({
        title: "Support request sent",
        description: "We will get back to you as soon as possible",
      });
    },
  });

  return <SupportForm formik={formik} router={router} />;
}
