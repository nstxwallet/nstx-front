"use client";
import "reflect-metadata";
import { useObservable, useServices } from "@/core";

export const useBalances = () => {
  const { balanceService } = useServices();

  const balances = useObservable(balanceService.balances);
  const balance = useObservable(balanceService.balance);

  const getBalances = () => balanceService.fetchBalances();
  const getBalance = (id: string) => balanceService.fetchBalance(id);
  const createBalance = (currency: string) => balanceService.createBalance(currency);

  return { balances, balance, getBalance, createBalance, getBalances };
};
