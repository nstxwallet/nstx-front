"use client";

import { type Transaction, useObservable, useServices } from "@/core";
import { useEffect } from "react";

interface UseTransactionsProps {
	userId?: string;
}

export const useTransactions = ({ userId }: UseTransactionsProps) => {
	const { transactionService } = useServices();

	const transactions = useObservable<Transaction[] | null>(
		transactionService.transactions$,
	);
	const transaction = useObservable<Transaction | null>(
		transactionService.transaction$,
	);

	useEffect(() => {
		if (userId) {
			transactionService.fetchTransactions(userId).subscribe();
		}
	}, [userId, transactionService]);

	const createNSTXTransfer = ({
		senderId,
		receiverId,
		amount,
		currency,
	}: {
		senderId: string;
		receiverId: string;
		amount: number;
		currency: string;
	}) => {
		transactionService
			.createTransfer(senderId, receiverId, amount, currency)
			.subscribe();
	};

	const updateTransactionNote = (id: string, note: string) => {
		transactionService.updateTransactionNote(id, note).subscribe();
	};

	const getTransactionById = (id: string) => {
		transactionService.fetchTransactionById(id).subscribe();
	};

	return {
		transactions,
		transaction,
		getTransactionById,
		createNSTXTransfer,
		updateTransactionNote,
	};
};
