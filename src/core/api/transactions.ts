import { type Transaction, instance } from "@/core";

export const getTransactions = async ({
  id,
}: {
  id: string;
}): Promise<Transaction[]> => {
  const response = await instance.get("/transactions", {
    params: { id },
  });
  return response.data;
};

export const getTransactionById = async ({ id }: { id: string }): Promise<Transaction> => {
  const response = await instance.get(`/transaction/${id}`);
  return response.data;
};

export const getTransactionsForCurrency = async ({
  currency,
}: { currency: string }): Promise<Transaction[]> => {
  const response = await instance.get("/transactions/currency", {
    params: {
      currency,
    },
  });
  return response.data;
};

export const createNSTXTransfer = async ({
  senderId,
  receiverId,
  amount,
  currency,
}: {
  senderId: string;
  receiverId: string;
  amount: number;
  currency: string;
}): Promise<void> => {
  try {
    await instance.post("/transactions/transfer", {
      senderId,
      receiverId,
      amount,
      currency,
    });
  } catch (error) {
    throw new Error(`Error creating transfer${error}`);
  }
};

export const updateTransactionNote = async ({
  id,
  note,
}: { id: string; note: string }): Promise<void> => {
  await instance.put(`/transaction/${id}/note`, {
    id,
    note,
  });
};
