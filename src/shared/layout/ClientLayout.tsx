"use client";

import "reflect-metadata";
import type React from "react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { ServicesProvider, useAuth } from "@/core";
import { Header } from "@/shared";

interface ClientLayoutProps {
	children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
	const queryClient = new QueryClient();
	const { user } = useAuth();
	const [isLoading, _setIsLoading] = useState(false);

	if (isLoading) return <div>Loading...</div>;

	if (!user) {
		return (
			<div className="text-center p-4 text-red-500">
				<h2>You must be logged in to access this page</h2>
			</div>
		);
	}

	return (
		<ServicesProvider>
			<QueryClientProvider client={queryClient}>
				<Header />
				<div className="p-6">{children}</div>
			</QueryClientProvider>
		</ServicesProvider>
	);
}
