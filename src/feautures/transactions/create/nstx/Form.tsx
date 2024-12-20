"use client";

import { type Balance, type User, useTransactions } from "@/core";
import {
	Button,
	Form,
	Input,
	Paper,
	Row,
	Select,
	Typography,
} from "@/shared/components";
import type { FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface NstxPaymentProps {
	showConfirmation: boolean;
	formik: FormikProps<{
		receiverId: string;
		currency: string;
		amount: string;
		message: string;
	}>;
	balances?: Balance[];
	user?: User;
}

export const NstxPaymentForm = ({
	showConfirmation,
	formik,
	balances = [],
	user,
}: NstxPaymentProps) => {
	const balanceAfterPayment =
		Number(
			balances.find((balance) => balance.currency === formik.values.currency)
				?.value || 0,
		) - Number(formik.values.amount);
	const router = useRouter();
	const { createNSTXTransfer } = useTransactions({ userId: user?.id });

	const handleConfirm = async () => {
		try {
			const values = {
				senderId: user?.id || "",
				receiverId: formik.values.receiverId,
				amount: Number.parseFloat(formik.values.amount),
				currency: formik.values.currency,
			};
			createNSTXTransfer(values);
			await router.push("/transactions");
		} catch (error) {
			toast.error("Failed to create transaction 228");
			console.error("Failed to create transaction 228", error);
		}
	};

	const handleCancel = () => {
		router.push("/transactions/create").then((r) => r);
	};

	return (
		<Paper
			variant="gradient"
			elevation={3}
			className="max-w-lg mx-auto p-6 space-y-6"
		>
			{!showConfirmation ? (
				<>
					<Typography center variant="h3">
						Send Crypto to NSTX Wallet
					</Typography>
					<Form onSubmit={formik.handleSubmit}>
						<Input
							id="receiverId"
							name="receiverId"
							placeholder="Receiver ID"
							value={formik.values.receiverId}
							onChange={formik.handleChange}
							fullWidth
						/>
						<Select
							id="currency"
							name="currency"
							value={formik.values.currency}
							onChange={formik.handleChange}
							fullWidth
						>
							<option value="" disabled>
								Select Currency
							</option>
							{balances.map((balance) => (
								<option key={balance.currency} value={balance.currency}>
									{balance.currency}
								</option>
							))}
						</Select>
						<Input
							id="amount"
							name="amount"
							type="number"
							placeholder="Amount"
							value={formik.values.amount}
							onChange={formik.handleChange}
							fullWidth
						/>
						<Input
							id="message"
							name="message"
							placeholder="Message (Optional)"
							value={formik.values.message}
							onChange={formik.handleChange}
							fullWidth
						/>
						<Button type="submit" variant="primary" fullWidth>
							Send
						</Button>
					</Form>
				</>
			) : (
				<>
					<Typography center variant="h4">
						Confirm Payment
					</Typography>
					<Typography center variant="h2">
						{formik.values.amount} {formik.values.currency}
					</Typography>
					<Row justify="between">
						<Typography>To:</Typography>
						<Typography>{formik.values.receiverId || "Unknown"}</Typography>
					</Row>
					<Row justify="between">
						<Typography>From:</Typography>
						<Typography>{user?.id || "Unknown"}</Typography>
					</Row>
					<Row justify="between">
						<Typography>Balance after payment:</Typography>
						<Typography
							className={balanceAfterPayment < 0 ? "text-red-500" : ""}
						>
							{balanceAfterPayment.toFixed(2)} {formik.values.currency}
						</Typography>
					</Row>
					<div className="flex justify-between space-x-4">
						<Button onClick={handleCancel} variant="danger" fullWidth>
							Cancel
						</Button>
						<Button onClick={handleConfirm} variant="primary" fullWidth>
							Confirm
						</Button>
					</div>
				</>
			)}
		</Paper>
	);
};
