"use client";
import "reflect-metadata";
import { useObservable, useServices } from "@/core";
import { useRouter } from "next/navigation";

export const useAuth = () => {
	const { authService } = useServices();
	const user = useObservable(authService.user);
	const router = useRouter();

	const login = async (values: { email: string; password: string }) => {
		authService.login(values);
	};

	const logout = async () => {
		authService.logout();
		sessionStorage.removeItem("token");
		router.push("/");
	};

	const signup = async (values: {
		email: string;
		password: string;
		firstName: string;
		lastName: string;
	}) => {
		authService.signup(values);
	};

	return { login, logout, signup, user };
};
