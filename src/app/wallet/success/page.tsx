"use client";

import { useRouter } from "next/navigation";

import { WalletSuccess } from "@/feautures";

export default function Page() {
  const router = useRouter();
  const handleGoToWallet = () => router.push("/wallet");
  const handleCreateAnotherBalance = () => router.push("/wallet/create");

  return (
    <WalletSuccess
      handleGoToWallet={handleGoToWallet}
      handleCreateAnotherBalance={handleCreateAnotherBalance}
    />
  );
}
