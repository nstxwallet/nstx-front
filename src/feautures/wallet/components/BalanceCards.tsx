"use client"

import type { Balance, User } from "@/core";
import { BankCard } from "@/feautures";
import React, { useState } from "react";

interface BalanceCardsProps {
	balances: Balance[];
	user?: User;
}

export const BalanceCards = ({ balances, user }: BalanceCardsProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? balances.length - 1 : prevIndex - 1,
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === balances.length - 1 ? 0 : prevIndex + 1,
		);
	};

	return (
		<div className="relative w-full max-w-lg mx-auto overflow-hidden">
			<div
				className="flex transition-transform duration-500"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{balances.map((balance) => (
					<div
						key={balance.id}
						className="w-full flex-shrink-0 flex justify-center"
					>
						<BankCard balance={balance} user={user} />
					</div>
				))}
			</div>
			<button
				onClick={handlePrev}
				className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600"
			>
				&#8249;
			</button>
			<button
				onClick={handleNext}
				className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600"
			>
				&#8250;
			</button>

			<div className="flex justify-center mt-4 space-x-2">
				{balances.map((balance) => (
					<div
						key={balance.id}
						className={`h-2 w-2 rounded-full ${
							balances.indexOf(balance) === currentIndex
								? "bg-indigo-600"
								: "bg-gray-300"
						}`}
					/>
				))}
			</div>
		</div>
	);
};
