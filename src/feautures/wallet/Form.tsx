"use client";

import React from "react";
import { BiDownload } from "react-icons/bi";
import { Button , Grid} from "@radix-ui/themes";

import type { Balance, Transaction, User } from "@/core"; 
import { useToast } from "@/core";
import { BankCardSlider } from "@/feautures"; 
import {  Row, TransactionsList, TransactionsTable, Typography } from "@/shared";

export const WalletForm = ({
  user,
  balances,
  transactions,
}: {
  user?: User | null;
  balances?: Balance[] | null;
  transactions?: Transaction[] | null;
}) => {
  const { showToast } = useToast();
  return (
    <Grid columns="1" gap="6"  width="auto">
      <BankCardSlider balances={balances} user={user} />
      <div className="flex items-center justify-between p-4 bg-zink-800 border-b-2 border-blue-500 rounded-md shadow-sm">
        <Typography variant="h5" className="text-lg font-medium text-white">
          TransactionHistory.pdf
        </Typography>
        <Button
          onClick={() =>
            showToast({ title: "Coming soon", description: "This feature is not available yet" })}>
          <BiDownload />
        </Button>
      </div>
      <Row className="hidden lg:flex flex-col">
        <TransactionsTable transactions={transactions} />
      </Row>
      <Row className="flex flex-col lg:hidden">
        <TransactionsList transactions={transactions} />
      </Row>
      <Typography className="text-center text-sm lg:text-base mt-4">
        By using our services, you agree to our{" "}
        <a href="/terms" className="text-blue-400 hover:underline">
          terms and conditions.
        </a>
        Please read them carefully before using our services.
      </Typography>
    </Grid>
  );
};
