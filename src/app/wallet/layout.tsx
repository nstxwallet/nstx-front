"use client";
import ClientLayout from "@/shared/layout/ClientLayout";
import type React from "react";

export default function WalletPage({
	children,
}: { children: React.ReactNode }) {
	return <ClientLayout>{children}</ClientLayout>;
}
