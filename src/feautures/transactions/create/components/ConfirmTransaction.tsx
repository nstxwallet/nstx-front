"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

import { type Balance, type User, useTransactions } from "@/core";
import { Button, Paper, Row, Typography } from "@/shared";

interface ConfirmTransactionProps {
	user: User | undefined;
	receiverId?: string;
	amount: string;
	currency: string;
	balances?: Balance[];
}

export const ConfirmTransaction = ({
	user,
	receiverId,
	amount,
	currency,
	balances,
}: ConfirmTransactionProps) => {
	const router = useRouter();
	const [agreeToTerms, setAgreeToTerms] = useState(false);

	const balance = balances?.find((b) => b.currency === currency);
	const currentBalance = balance?.value ?? 0;
	const amountToDeduct = Number.parseFloat(amount) || 0;
	const balanceAfterPayment = currentBalance - amountToDeduct;

	const { createNSTXTransfer } = useTransactions({ userId: user?.id });

	const onConfirm = () => {
		if (!agreeToTerms) {
			toast.warn("Please agree to the terms and conditions before proceeding.");
			return;
		}

		if (!receiverId || !user?.id) {
			toast.error("Missing sender or receiver information.");
			return;
		}

		if (balanceAfterPayment < 0) {
			toast.error("Insufficient balance for this transaction.");
			return;
		}

		createNSTXTransfer({
			senderId: user?.id,
			receiverId,
			amount: amountToDeduct,
			currency,
		});
	};

	const onCancel = () => {
		router.push("/transactions/create");
	};

	return (
		<Paper variant="gradient" className="max-w-xl mx-auto p-8">
			<Typography variant="h4" center>
				Confirm Payment
			</Typography>
			<Typography center variant="h2">
				{amount} {currency}
			</Typography>
			<Row justify="between">
				<Typography variant="body1">To:</Typography>
				<Typography variant="body1">{receiverId || "Unknown"}</Typography>
			</Row>
			<Row justify="between">
				<Typography variant="body1">From:</Typography>
				<Typography variant="body1">{user?.id}</Typography>
			</Row>
			<Row justify="between">
				<Typography variant="body1">Current balance:</Typography>
				<Typography variant="body1">
					{currentBalance.toFixed(2)} {currency}
				</Typography>
			</Row>
			<Row justify="between">
				<Typography variant="body1">Balance after payment:</Typography>
				<Typography
					variant="body1"
					className={balanceAfterPayment < 0 ? "text-red-500" : ""}
				>
					{balanceAfterPayment.toFixed(2)} {currency}
				</Typography>
			</Row>

			<Row justify="center">
				<input
					type="checkbox"
					name="terms"
					id="terms"
					checked={agreeToTerms}
					onChange={(e) => setAgreeToTerms(e.target.checked)}
					className="rounded text-blue-500"
				/>
				<label
					htmlFor="terms"
					className="ml-2 text-sm font-medium text-gray-300"
				>
					<Typography variant="body2">
						I agree with the{" "}
						<a href="/terms" className="text-blue-500 hover:underline">
							terms and conditions
						</a>
						.
					</Typography>
				</label>
			</Row>

			<div className="flex justify-between space-x-4">
				<Button onClick={onCancel} variant="danger" fullWidth>
					Cancel Payment
				</Button>
				<Button onClick={onConfirm} variant="primary" fullWidth>
					Confirm Payment
				</Button>
			</div>
		</Paper>
	);
};
