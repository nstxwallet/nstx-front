"use client";

import { Container, Grid } from "@radix-ui/themes";
import React, { useState } from "react";

import type { Balance, User } from "@/core";
import { BalanceCard } from "@/feuture";
import { Button, Text } from "@/shared";

interface BalanceCardsProps {
  balances: Balance[];
  user?: User | null | undefined;
}

export const BalanceSlider = ({ balances, user }: BalanceCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? balances.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === balances.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {balances.map((balance) => (
          <div key={balance?.id} className="w-full flex-shrink-0 flex justify-center">
            <BalanceCard balance={balance} user={user} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-600 active:scale-95 focus:outline-none"
          aria-label="Previous"
          type="button"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-600 active:scale-95 focus:outline-none"
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {balances.map((balance, index) => (
          <div
            key={balance.id}
            className={`h-3 w-3 rounded-full bg-gray-300 ${
              index === currentIndex ? "bg-gray-700" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const NoBalances = ({ onCreateBalance }: { onCreateBalance: () => void }) => {
  return (
    <Container size="2">
      <Grid columns="1" gap="6">
        <Text align="center" size="h4">
          Your Wallet is Empty
        </Text>
        <Text align="center" size="body1">
          It looks like you haven’t added any balances yet. Create a new balance to start managing
          your funds effectively.
        </Text>
        <Button onClick={onCreateBalance}>Open first balance</Button>
      </Grid>
    </Container>
  );
};
