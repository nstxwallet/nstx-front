"use client"
import { useRouter } from "next/navigation";
import React from "react";

import type { Balance, User } from "@/core";
import { BalanceCards, NoBalances } from "@/feautures";
import { Button, Typography } from "@/shared";

interface BankCardSliderProps {
	balances?: Balance[] | null | undefined;
	user?: User | null | undefined;
}

export const BankCardSlider = ({ balances, user }: BankCardSliderProps) => {
	const router = useRouter();

	const handleCreateBalance = () => {
		router.push("/wallet/create");
	};

	if (!balances) {
		return (
			<div className="text-center">
				<Typography variant="h6">Failed to load balances</Typography>
				<Button onClick={handleCreateBalance} variant="primary">
					Create Balance
				</Button>
			</div>
		);
	}

	return balances.length > 0 ? (
		<BalanceCards balances={balances} user={user} />
	) : (
		<NoBalances onCreateBalance={handleCreateBalance} />
	);
};
