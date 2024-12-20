import type { Transaction } from "@/core";
import {
	Button,
	Grid,
	Paper,
	Row,
	TransactionsList,
	TransactionsTable,
	Typography,
} from "@/shared";
import React from "react";

interface TransactionsFormProps {
	transactions?: Transaction[];
	isLoading?: boolean;
	isError?: boolean;
}

export const TransactionsForm = ({
	transactions,
	isLoading,
	isError,
}: TransactionsFormProps) => {
	return (
		<Grid>
			<Paper color="secondary" className="flex items-center justify-between">
				<Typography variant="h5" className="text-lg font-medium">
					TransactionHistory.pdf
				</Typography>
				<Button variant="bordered">Download</Button>
			</Paper>
			<Row className="hidden lg:flex p-6 ">
				<TransactionsTable
					transactions={transactions}
					isTransactionsLoading={isLoading}
				/>
			</Row>
			<Row className="flex lg:hidden p-6   ">
				<TransactionsList
					transactions={transactions}
					isTransactionsLoading={isLoading}
					isTransactionsError={isError}
				/>
			</Row>
			<Paper className="p-8 lg:p-12 bg-zinc-800 rounded-lg shadow-lg space-y-6">
				<Typography
					variant="h2"
					className="text-2xl lg:text-3xl font-semibold mb-6"
				>
					Document Contents
				</Typography>
				<ul>
					{[
						"General provisions and definitions.",
						"Rules for collecting and protecting personal data.",
						"Cookie usage rules.",
					].map((item) => (
						<li key={item} className="flex items-start">
							<span className="text-green-400 mr-2">●</span>
							<Typography className="text-base lg:text-lg">{item}</Typography>
						</li>
					))}
				</ul>
			</Paper>
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
