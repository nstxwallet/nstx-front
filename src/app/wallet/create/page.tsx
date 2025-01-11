"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react"; 
import * as Yup from "yup";

import { useAuth, useBalances, useToast } from "@/core";
import { CreateWalletForm } from "@/feautures"; 

export default function CreateBalanceForm() {
  const router = useRouter();
  const { user } = useAuth();
  const { showToast } = useToast();
  const { createBalance } = useBalances({ userId: user?.id });

  const formik = useFormik({
    initialValues: {
      currency: "",
      terms: true,
    },
    validationSchema: Yup.object({
      currency: Yup.string().required("Currency is required"),
      terms: Yup.boolean().oneOf([true], "You must accept the terms"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await createBalance(values.currency);
        setSubmitting(false);
        router.push("/wallet");
      } catch (error) {
        setSubmitting(false);
        showToast({
          title: "Error creating balance",
          description: error
        });
      }
    }
  }); 

  const handleCancel = () => router.push("/wallet"); 

  return (
    <CreateWalletForm 
      formik={formik}
      handleCancel={handleCancel}
    />
  );
}
