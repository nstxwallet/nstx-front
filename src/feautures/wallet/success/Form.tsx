"use client";

import { useAuth, useBalances } from "@/core";
import { Button, Container, Paper, Typography } from "@/shared";
import React from "react";

interface WalletSuccessProps {
	handleGoToWallet: () => void;
	handleCreateAnotherBalance: () => void;
}

export const WalletSuccess = ({
	handleGoToWallet,
	handleCreateAnotherBalance,
}: WalletSuccessProps) => {
	const { user } = useAuth();
	const { balances } = useBalances({
		userId: user?.id,
	});
	const balance = balances?.[0];
	return (
		<Container className="flex items-center justify-center min-h-screen">
			<Paper className="max-w-md p-6 space-y-4">
				<Typography variant="h4">Balance Created Successfully!</Typography>
				<Typography variant="body1">
					Your new wallet balance has been created. You can now manage your
					funds or create additional balances.
				</Typography>
				<div className="bg-gray-100 p-4 rounded-lg text-left space-y-2">
					<Typography variant="body2" color="secondary">
						Owner: <span className="text-gray-700">{user?.email}</span>
					</Typography>
					<Typography variant="body2" color="secondary">
						Balance ID: <span className="text-gray-700">{balance?.id}</span>
					</Typography>
					<Typography variant="body2" color="secondary">
						Currency: <span className="text-gray-700">{balance?.currency}</span>
					</Typography>
					<Typography variant="body2" color="secondary">
						Date Created:{" "}
						<span className="text-gray-700">
							{new Date().toLocaleDateString()}
						</span>
					</Typography>
					<Typography variant="body2" color="secondary">
						Status: <span className="text-green-600 font-semibold">Active</span>
					</Typography>
				</div>
				<Button onClick={handleGoToWallet} variant="primary" fullWidth>
					Go to Wallet
				</Button>
				<Button
					fullWidth
					onClick={handleCreateAnotherBalance}
					variant="bordered"
				>
					Create Another Balance
				</Button>
			</Paper>
		</Container>
	);
};
