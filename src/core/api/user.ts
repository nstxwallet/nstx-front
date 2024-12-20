import { type User, instance } from "@/core";

export const login = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}): Promise<string> => {
	const response = await instance.post("/login", {
		email: email,
		password: password,
	});
	if (response.status !== 200 || !response.data.accessToken) {
		throw new Error("Login failed: Invalid response");
	}
	return response.data.accessToken;
};

export const logout = async (): Promise<void> => {
	const response = await instance.get("/logout", {
		withCredentials: true,
	});
	return response.data;
};

export const register = async (data: {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}): Promise<User> => {
	const response = await instance.post("/sign-up", data);
	return response.data;
};

export const getUser = async (): Promise<User> => {
	const response = await instance.get("/users/me", {
		withCredentials: true,
		headers: {
			Authorization: `Bearer ${sessionStorage.getItem("token")}`,
		},
	});
	return response.data;
};
