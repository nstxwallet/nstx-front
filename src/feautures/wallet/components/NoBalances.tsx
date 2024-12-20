"use client";

import { Button, Typography } from "@/shared";

export const NoBalances = ({
	onCreateBalance,
}: {
	onCreateBalance: () => void;
}) => {
	return (
		<div className="flex flex-col items-center justify-center p-8 bg-zinc-800 rounded-lg shadow-md">
			<Typography variant="h4">Your Wallet is Empty</Typography>
			<Typography
				variant="body1"
				className="text-gray-500 text-center max-w-md m-6"
			>
				It looks like you haven’t added any balances yet. Create a new balance
				to start managing your funds effectively.
			</Typography>
			<Button
				onClick={onCreateBalance}
				variant="primary"
				className="px-6 py-3 text-lg font-medium shadow-md hover:shadow-lg"
			>
				Create Your First Balance
			</Button>
		</div>
	);
};
