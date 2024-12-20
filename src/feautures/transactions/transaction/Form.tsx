import type { Transaction } from "@/core";
import { Button, Col, Paper, Row, Typography } from "@/shared";
import { useRouter } from "next/navigation";
import React from "react";
import { BiShare, BiSupport } from "react-icons/bi";
import {
	FiArrowLeft,
	FiChevronDown,
	FiChevronUp,
	FiCopy,
} from "react-icons/fi";

interface TransactionDetailsProps {
	transaction: Transaction;
	isExpanded: boolean;
	toggleExpand: () => void;
	handleCopyId: () => void;
}

export const TransactionDetails = ({
	transaction,
	isExpanded,
	toggleExpand,
	handleCopyId,
}: TransactionDetailsProps) => {
	const router = useRouter();
	if (!transaction) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen">
				<Typography variant="h5">Transaction not found</Typography>
				<Button
					variant="secondary"
					onClick={() => router.push("/transactions")}
					className="mt-4"
				>
					Go back to transactions
				</Button>
			</div>
		);
	}

	return (
		<Paper className="max-w-lg mx-auto">
			<Row justify="between">
				<Button onClick={() => router.push("/transactions")} variant="bordered">
					<FiArrowLeft />
				</Button>
				<Typography variant="h5" className="text-lg font-medium">
					Transaction Details
				</Typography>
				<span
					className={`text-sm px-3 py-1 rounded-full ${
						transaction.status === "completed"
							? "bg-green-100 text-green-600"
							: "bg-yellow-100 text-yellow-600"
					}`}
				>
					{transaction.status === "completed" ? "Success" : "Pending"}
				</span>
			</Row>
			<Typography
				center
				variant="h2"
				color={transaction?.type === "transfer" ? "danger" : "primary"}
			>
				{transaction.type === "transfer" ? "-" : "+"}
				{transaction.amount} {transaction.currency}
			</Typography>
			<div className="border-t border-gray-200 py-4">
				<div className="flex items-center justify-between">
					<Typography variant="body2">
						Transaction ID:
						<Typography variant="body2">{transaction.id}</Typography>
					</Typography>
					<div className="flex items-center space-x-3">
						<button
							onClick={handleCopyId}
							className="text-gray-500 hover:text-gray-700"
						>
							<FiCopy className="w-5 h-5" />
						</button>
						<button
							onClick={toggleExpand}
							className="text-gray-500 hover:text-gray-700"
						>
							{isExpanded ? (
								<FiChevronUp className="w-5 h-5" />
							) : (
								<FiChevronDown className="w-5 h-5" />
							)}
						</button>
					</div>
				</div>
				{isExpanded && (
					<div className="mt-6 space-y-3 text-gray-600">
						<div className="flex justify-between">
							<Typography variant="body2">Type:</Typography>
							<span>{transaction.type}</span>
						</div>
						<div className="flex justify-between">
							<Typography variant="body2">Status:</Typography>
							<span>{transaction.status}</span>
						</div>
						<div className="flex justify-between">
							<Typography variant="body2">Currency:</Typography>
							<span>{transaction.currency}</span>
						</div>
						<div className="flex justify-between">
							<Typography variant="body2">Created at:</Typography>
							<span>{transaction.createdAt}</span>
						</div>
						<div className="flex justify-between">
							<Typography variant="body2">Updated at:</Typography>
							<span>{transaction.updatedAt}</span>
						</div>
					</div>
				)}
			</div>
			<Col
				justify="between"
				className={`mt-6 ${isExpanded ? "block" : "hidden"}`}
			>
				<Button
					variant="transparent"
					icon={<BiSupport />}
					onClick={() => router.push("/support")}
				>
					Support Center
				</Button>
				<Button icon={<BiShare />} onClick={() => router.push("/")}>
					Share
				</Button>
			</Col>
		</Paper>
	);
};
