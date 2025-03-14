"use client";
import React from "react";

import type { Balance, User } from "@/core";
import { BalanceSlider, NoBalances } from "@/feuture";
import { Button } from "@/shared";
import { useRouter } from "next/navigation";

interface BankCardSliderProps {
  balances?: Balance[];
  user?: User | null | undefined;
  handleCreateBalance: () =>void;
   router: ReturnType<typeof useRouter>;
}

export const BalanceCardSlider = ({ balances, user, handleCreateBalance }: BankCardSliderProps) => {
  if (!balances) {
    return <Button onClick={handleCreateBalance}>Create Balance</Button>;
  }

  return balances.length >0 ? (
    <BalanceSlider balances={balances} user={user} />
  ) : (
    <NoBalances onCreateBalance={handleCreateBalance} />
  );
};
