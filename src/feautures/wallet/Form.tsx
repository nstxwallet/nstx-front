"use client";

import type { Balance, Transaction, User } from "@/core";
import { BankCardSlider } from "@/feautures";
import {
	Col,
	Grid,
	Row,
	TransactionsList,
	TransactionsTable,
	Typography,
} from "@/shared";
import React from "react";
import { BiDownload } from "react-icons/bi";
export const WalletForm = ({
	user,
	balances,
	transactions,
}: {
	user?: User | null;
	balances?: Balance[] | null;
	transactions?: Transaction[] | null;
}) => {
	return (
		<Grid>
			<div className="flex items-center justify-between p-4 bg-zink-800 border-b-2 border-blue-500 rounded-md shadow-sm">
				<Typography variant="h5" className="text-lg font-medium text-white">
					TransactionHistory.pdf
				</Typography>
				<button
					onClick={() => {}}
					className="flex items-center justify-center w-10 h-10 text-white rounded-full hover:text-indigo-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					aria-label="Download Transaction History"
				>
					<BiDownload className="w-6 h-6" />
				</button>
			</div>
			<Row className="w-full justify-center">
				<Col className="w-full">
					<BankCardSlider balances={balances || []} user={user} />
				</Col>
			</Row>
			<Row className="hidden lg:flex flex-col">
				<TransactionsTable transactions={transactions || []} />
			</Row>
			<Row className="flex flex-col lg:hidden">
				<TransactionsList transactions={transactions || []} />
			</Row>
			<Typography className="text-center text-sm lg:text-base mt-4">
				By using our services, you agree to our{" "}
				<a href="/terms" className="text-blue-400 hover:underline">
					terms and conditions
				</a>
				. Please read them carefully before using our services.
			</Typography>
		</Grid>
	);
};
