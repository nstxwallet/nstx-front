"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import type { Transaction } from "@/core";
import { Paper } from "@/shared";
import { format, isThisWeek, isToday, isYesterday } from "date-fns";

interface TransactionProps {
	transactions?: Transaction[];
}

const groupTransactionsByDate = (transactions: Transaction[] = []) => {
	const groups = {
		today: [] as Transaction[],
		yesterday: [] as Transaction[],
		thisWeek: [] as Transaction[],
		older: [] as Transaction[],
	};

	for (const transaction of transactions) {
		const transactionDate = new Date(transaction.createdAt);
		if (Number.isNaN(transactionDate.getTime())) {
			console.warn("Invalid date format for transaction:", transaction);
			continue;
		}

		if (isToday(transactionDate)) {
			groups.today.push(transaction);
		} else if (isYesterday(transactionDate)) {
			groups.yesterday.push(transaction);
		} else if (isThisWeek(transactionDate)) {
			groups.thisWeek.push(transaction);
		} else {
			groups.older.push(transaction);
		}
	}

	return groups;
};

export const TransactionsList = ({ transactions }: TransactionProps) => {
	const router = useRouter();
	const groupedTransactions = groupTransactionsByDate(transactions || []);

	return (
		<div className="space-y-8">
			{Object.entries(groupedTransactions).map(([group, items]) =>
				items.length > 0 ? (
					<div key={group}>
						<h2 className="text-lg font-semibold text-gray-300 capitalize mb-4">
							{group === "today" && "Today"}
							{group === "yesterday" && "Yesterday"}
							{group === "thisWeek" && "This Week"}
							{group === "older" && "Older"}
						</h2>
						<ul className="space-y-4">
							{items.map((transaction) => (
								<li key={transaction.id}>
									<Paper
										className="bg-zinc-800 rounded-lg hover:shadow-lg transition-shadow duration-300"
										elevation={3}
									>
										<button
											onClick={() =>
												router.push(`/transactions/${transaction.id}`)
											}
											className="block w-full text-left"
										>
											<div className="flex items-center justify-between mb-3">
												<div className="flex items-center text-base sm:text-lg font-medium">
													{transaction.type === "deposit" ? (
														<FaArrowDown className="text-green-500 mr-2" />
													) : (
														<FaArrowUp className="text-red-500 mr-2" />
													)}
													<span className="text-gray-300 capitalize">
														{transaction.type}
													</span>
												</div>
												<div className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-500">
													<span>ID:</span>
													<span className="text-gray-400">
														{transaction.id}
													</span>
												</div>
											</div>
											<div className="flex items-center justify-between mb-3">
												<span className="text-xl sm:text-2xl font-bold text-white">
													{transaction.amount} USD
												</span>
											</div>
											<div className="text-xs sm:text-sm text-gray-400">
												{format(
													new Date(transaction.createdAt),
													"HH:mm, dd MMM yyyy",
												)}
											</div>
										</button>
									</Paper>
								</li>
							))}
						</ul>
					</div>
				) : null,
			)}
		</div>
	);
};
