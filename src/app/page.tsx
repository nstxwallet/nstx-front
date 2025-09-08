"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { User, useAuth, useBinance, useToast } from "@/core";
import { Home } from "@/feuture";

export default function HomePage() {
  const { user } = useAuth();
  const { prices } = useBinance();
  const router = useRouter();
  const navigation = {
    handleLogin: () => router.push("/auth/login"),
    handleWallet: () => router.push("/transactions"),
    handleSupport: () => router.push("/support"),
    handleSignUp: () => router.push("/auth/sign-up"),
  };
  const [selectedCurrency, setSelectedCurrency] = React.useState("BTC");
  const [amountUSD, setAmountUSD] = React.useState("");
  const { toast } = useToast();
  const handleSubmit = (action: "buy" | "sell") => {
    toast({
      title: `${action.charAt(0).toUpperCase() + action.slice(1)} feature is under development.`,
    });
  };

  const isAuth = user && Object.keys(user).length > 0 && user.email;

  return (
    <Home
      isAuth={isAuth}
      prices={prices}
      user={user || ({} as User)}
      navigation={navigation}
      selectedCurrency={selectedCurrency}
      setSelectedCurrency={setSelectedCurrency}
      amountUSD={amountUSD}
      setAmountUSD={setAmountUSD}
      handleSubmit={handleSubmit}
    />
  );
}
