"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { useAuth, useBalances } from "@/core";
import { CreateWalletForm } from "@/feautures";

export default function CreateBalanceForm() {
	const router = useRouter();
	const { user } = useAuth();
	const { createBalance } = useBalances({ userId: user?.id });

	const formik = useFormik({
		initialValues: {
			currency: "",
			terms: false,
		},
		validationSchema: Yup.object({
			currency: Yup.string().required("Currency is required"),
			terms: Yup.boolean().oneOf([true], "You must accept the terms"),
		}),
		onSubmit: async (values, { setSubmitting }) => {
			try {
				createBalance(values.currency);
				setSubmitting(false);
			} catch (_e) {
				toast.error("An error occurred. Please try again later.");
			}
		},
	});

	const handleCancel = () => router.push("/wallet");
	const currency = ["USDT", "BNB", "DOT", "SOL", "BTC"];

	return (
		<CreateWalletForm
			currencyOptions={currency}
			formik={formik}
			handleCancel={handleCancel}
			onSuccess={() => toast.success("Balance created successfully")}
			onError={(error: string) => toast.error(error)}
		/>
	);
}
