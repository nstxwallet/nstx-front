"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useTransactions } from "@/core";
import { TransactionDetails } from "@/feautures/transactions/transaction/Form";

export default function TransactionDetailsPage() {
	const [isExpanded, setIsExpanded] = useState(true);
	const { id } = useParams();
	const { transaction, getTransactionById } = useTransactions({});

	const toggleExpand = () => setIsExpanded(!isExpanded);

	const handleCopyId = () => {
		navigator.clipboard.writeText(id as string).then((r) => r);
		alert("Transaction ID copied to clipboard!");
	};

	useEffect(() => {
		if (id) {
			getTransactionById(id as string);
		}
	}, [id, getTransactionById]);

	return (
		<TransactionDetails
			transaction={transaction}
			isExpanded={isExpanded}
			toggleExpand={toggleExpand}
			handleCopyId={handleCopyId}
		/>
	);
}
