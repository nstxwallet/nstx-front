import type { Balance } from "@/core";
import { instance } from "@/core";

export const getUserBalances = async ({
	userId,
}: {
	userId: string;
}): Promise<Balance[]> => {
	const response = await instance.get("/balances", {
		params: {
			userId,
		},
	});
	return response.data;
};

export const getUserBalance = async ({
	userId,
	id,
}: {
	userId: string;
	id: string;
}): Promise<Balance> => {
	const response = await instance.get(`/balances/${id}`, {
		params: {
			userId,
		},
	});
	return response.data;
};

export const createUserBalance = async ({ currency }: { currency: string }) => {
	const response = await instance.post("/balances/create", {
		currency,
	});
	return response.data;
};
