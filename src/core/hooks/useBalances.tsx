"use client";
import "reflect-metadata";
import { useObservable, useServices } from "@/core";
import { useEffect } from "react";

interface UseBalancesProps {
	userId?: string;
}

export const useBalances = ({ userId }: UseBalancesProps) => {
	const { balanceService } = useServices();
	const balances = useObservable(balanceService.balances);
	const balance = useObservable(balanceService.balance);

	useEffect(() => {
		if (userId) {
			balanceService.fetchBalances();
		}
	}, [userId, balanceService]);

	const getBalances = () => {
		balanceService.fetchBalances();
	};

	const createBalance = (currency: string) => {
		balanceService.createBalance(currency);
	};

	const getBalance = (id: string) => {
		balanceService.fetchBalance(id);
	};
	return { balances, balance, getBalance, createBalance, getBalances };
};
