"use client";

import { useEffect, useState } from "react";
import { catchError, finalize, firstValueFrom, throwError } from "rxjs";

import { type Transaction, useObservable, useServices } from "@/core";

interface UseTransactionsProps {
  userId?: string;
}

export const useTransactions = ({ userId }: UseTransactionsProps) => {
  const { transactionService } = useServices();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const transactions = useObservable<Transaction[] | null>(transactionService.transactions$);
  const transaction = useObservable<Transaction | null>(transactionService.transaction$);

  useEffect(() => {
    if (!userId) {
      return;
    }
    setIsLoading(true);
    setIsError(false);
    const subscription = transactionService.fetchTransactions(userId).subscribe({
      error: (error) => {
        if (error?.status !== 500) {
          setIsError(true);
        }
      },
      complete: () => setIsLoading(false),
    });

    return () => subscription.unsubscribe();
  }, [userId, transactionService]);

  const getTransactionById = async (id: string) => {
    return firstValueFrom(
      transactionService.fetchTransactionById(id).pipe(
        finalize(() => setIsLoading(false)),
        catchError((error) => {
          if (error?.status !== 500) {
            setIsError(true);
          }
          return throwError(() => error);
        }),
      ),
    );
  };

  const createNSTXTransfer = (
    senderId: string,
    receiverId: string,
    amount: number,
    currency: string,
  ) => {
    return transactionService.createTransfer(senderId, receiverId, amount, currency).pipe(
      catchError((error) => {
        if (error?.status !== 500) {
          setIsError(true);
        }
        return throwError(() => error);
      }),
      finalize(() => setIsLoading(false)),
    );
  };

  return {
    transactions,
    transaction,
    isLoading,
    isError,
    getTransactionById,
    createNSTXTransfer,
  };
};
