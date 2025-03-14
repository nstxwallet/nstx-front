"use client";

import { Grid } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

import { useAuth, useBalances, useTransactions } from "@/core";
import { BalanceCardSlider, TransactionOptionsForm, TransactionsTable } from "@/feuture";

export default function TransactionsPage() {
  const { user } = useAuth();
  const { balances } = useBalances();
  const router = useRouter();

  const { transactions, isLoading } = useTransactions({ userId: user?.id });

  (!transactions || !balances) && console.log("Loading...");
  
  const handleCreateBalance = () => {
    router.push("/transactions/new-wallet");
  };
  return (
    <Grid columns="1" gap="4">
      <BalanceCardSlider
        handleCreateBalance={handleCreateBalance}
        router={router}
        balances={balances}
        user={user}
      />
      <TransactionOptionsForm router={router} />
      <TransactionsTable transactions={transactions} isTransactionsLoading={isLoading} />
    </Grid>
  );
}
