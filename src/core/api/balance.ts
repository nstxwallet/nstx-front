import { type Balance, handleRequest, instance } from "@/core";

export const getUserBalances = async ({
  userId,
}: {
  userId: string;
}): Promise<Balance[]> => {
  return handleRequest(instance.get("/balances", { params: { userId } }));
};

export const getUserBalance = async ({
  userId,
  id,
}: {
  userId: string;
  id: string;
}): Promise<Balance> => {
  return handleRequest(instance.get(`/balances/${id}`, { params: { userId } }));
};

export const createUserBalance = async ({ currency }: { currency: string }) => {
  return handleRequest(instance.post("/balances/create", { currency }));
};
