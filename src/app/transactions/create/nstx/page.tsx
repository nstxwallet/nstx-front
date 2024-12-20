"use client";
import { useAuth, useBalances } from "@/core";
import { NstxPaymentForm } from "@/feautures/transactions/create/nstx";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function NSTXPaymentPage() {
	const { user } = useAuth();
	const { balances } = useBalances({ userId: user?.id });

	const [showConfirmation, setShowConfirmation] = useState(false);

	const validationSchema = Yup.object({
		receiverId: Yup.string().required("Recipient is required"),
		currency: Yup.string().required("Choose the currency"),
		amount: Yup.number()
			.required("Amount is required")
			.min(0, "Amount must be greater than 0"),
	});

	const formik = useFormik({
		initialValues: {
			receiverId: "",
			currency: "USDT",
			amount: "",
			message: "",
		},
		validationSchema,
		onSubmit: (_values) => {
			setShowConfirmation(true);
		},
	});

	return (
		<NstxPaymentForm
			user={user}
			formik={formik}
			balances={balances}
			showConfirmation={showConfirmation}
		/>
	);
}
