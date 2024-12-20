"use client";

import "reflect-metadata";
import type React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { ServicesProvider } from "@/core";
import { Footer } from "@/shared";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	const queryClient = new QueryClient();

	return (
		<ServicesProvider>
			<QueryClientProvider client={queryClient}>
				<div className="flex flex-col min-h-screen overflow-auto bg-zinc-900 w-full text-white">
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
			</QueryClientProvider>
		</ServicesProvider>
	);
};
