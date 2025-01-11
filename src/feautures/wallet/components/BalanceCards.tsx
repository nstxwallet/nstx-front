"use client";

import type { Balance, User } from "@/core";
import { BankCard } from "@/feautures";
import React, { useState } from "react";

interface BalanceCardsProps {
  balances: Balance[];
  user: User;
}

export const BalanceCards = ({ balances, user }: BalanceCardsProps) => {
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
          <div key={balance.id} className="w-full flex-shrink-0 flex justify-center">
            <BankCard balance={balance} user={user} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={handlePrev}
          className="bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-600 active:scale-95 focus:outline-none"
          aria-label="Previous"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-600 active:scale-95 focus:outline-none"
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {balances.map((balance) => (
          <div
            key={balance.id}
            className={`h-3 w-3 rounded-full bg-gray-300 ${
              balance.id === balances[currentIndex].id ? "bg-gray-700" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};
