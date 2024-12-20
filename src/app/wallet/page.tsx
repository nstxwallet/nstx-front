"use client";

import { useAuth, useBalances, useTransactions } from "@/core";
import { WalletForm } from "@/feautures";

export default function Wallet() {
	const { user } = useAuth();

	const { balances } = useBalances({ userId: user?.id });
	const { transactions } = useTransactions({ userId: user?.id });

	return (
		<WalletForm
			balances={balances ?? undefined}
			user={user ?? undefined}
			transactions={transactions ?? undefined}
		/>
	);
}
