"use client";
import { useRouter } from "next/navigation";
import React from "react";

import {
	FaCalendarAlt,
	FaCheckCircle,
	FaDollarSign,
	FaInfoCircle,
} from "react-icons/fa";

import type { Transaction } from "@/core";
import { Loading } from "@/shared";

interface TransactionProps {
	transactions?: Transaction[];
	isTransactionsLoading?: boolean;
	isTransactionsError?: boolean;
}

export const TransactionsTable = ({
	transactions,
	isTransactionsLoading,
	isTransactionsError,
}: TransactionProps) => {
	const router = useRouter();

	if (isTransactionsLoading) {
		return <Loading />;
	}
	if (isTransactionsError || !transactions) {
		return <div>Error loading transactions.</div>;
	}

	const sortedTransactions = [...transactions].sort(
		(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
	);

	return (
		<table
			className="min-w-full bg-neutral-900 border-teal-500 border-l-4
		shadow-lg transition-shadow duration-300 w-full text-white"
		>
			<thead>
				<tr className="text-left">
					<th className="p-4">ID</th>
					<th className="p-4">Status</th>
					<th className="p-4">Type</th>
					<th className="p-4">Amount</th>
					<th className="p-4">Currency</th>
					<th className="p-4">Date</th>
				</tr>
			</thead>
			<tbody>
				{sortedTransactions.map((transaction) => (
					<tr
						key={transaction.id}
						className="border-t border-gray-800 hover:bg-zinc-800"
					>
						<td className="p-4">
							<button
								onClick={() => router.push(`/transactions/${transaction.id}`)}
								className="text-teal-300"
							>
								{transaction.id}
							</button>
						</td>
						<td className="p-4 flex items-center">
							{transaction.status === "completed" ? (
								<FaCheckCircle className="mr-2 text-green-500" />
							) : (
								<FaInfoCircle className="mr-2 text-yellow-500" />
							)}
							{transaction.status}
						</td>
						<td className="p-4">{transaction.type}</td>
						<td className="p-4">
							{transaction.type === "deposit" ? (
								<h1 className="text-green-500">+ {transaction.amount}</h1>
							) : (
								<h1 className="text-red-500">- {transaction.amount}</h1>
							)}
						</td>
						<td className="p-4">
							<FaDollarSign className="inline-block mr-1 text-blue-500" />
							{transaction.currency}
						</td>
						<td className="p-4 flex items-center">
							<FaCalendarAlt className="mr-2 text-gray-500" />
							{transaction.createdAt}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
