"use client";

import "reflect-metadata";
import React from "react";

import { useAuth } from "@/core";
import { Home } from "@/feautures";
import { useRouter } from "next/navigation";

export default function HomePage() {
	const router = useRouter();

	const { user } = useAuth();

	const handleLogin = () => {
		router.push("/auth/login");
	};
	const handleWallet = () => {
		router.push("/wallet");
	};

	const handleSupport = () => {
		router.push("/support");
	};
	const handleSignUp = () => {
		router.push("/auth/sign-up");
	};

	return (
		<Home
			user={user}
			handleLogin={handleLogin}
			handleSupport={handleSupport}
			handleSignUp={handleSignUp}
			handleWallet={handleWallet}
		/>
	);
}
