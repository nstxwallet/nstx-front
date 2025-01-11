"use client";

import { useAuth } from "@/core";
import { Button, Grid, Paper, Typography } from "@/shared";
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
  return (
    <Grid container justify="center" align="center" className="p-4">
      <Paper className="max-w-md p-6 space-y-4">
        <Typography center variant="body1">
          Successfully created a new balance
        </Typography>
        <Typography variant="body2">
          Owner: <span>{user?.email}</span>
        </Typography>

        <Typography variant="body2">
          Date Created:
          <span>{new Date().toLocaleDateString()}</span>
        </Typography>
        <Typography variant="body2">
          Status: <span className="text-green-600 font-semibold">Active</span>
        </Typography>
        <Button onClick={handleGoToWallet} variant="primary" fullWidth>
          Go to Wallet
        </Button>
        <Button fullWidth onClick={handleCreateAnotherBalance} variant="bordered">
          Create Another Balance
        </Button>
      </Paper>
    </Grid>
  );
};
