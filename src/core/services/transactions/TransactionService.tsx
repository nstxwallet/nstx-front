"use client";

import "reflect-metadata";
import { BehaviorSubject, type Observable, defer, from, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { injectable } from "tsyringe";

import {
  type Transaction,
  createNSTXTransfer,
  getTransactionById,
  getTransactions,
  updateTransactionNote,
} from "@/core";

@injectable()
export class TransactionService {
  private readonly transactionsSubject = new BehaviorSubject<Transaction[] | null>(null);
  public readonly transactions$ = this.transactionsSubject.asObservable();

  private readonly transactionSubject = new BehaviorSubject<Transaction | null>(null);
  public readonly transaction$ = this.transactionSubject.asObservable();

  fetchTransactions(userId: string): Observable<Transaction[]> {
    return from(getTransactions({ id: userId })).pipe(
      tap((transactions) => this.transactionsSubject.next(transactions)),
    );
  }

  fetchTransactionById(id: string): Observable<Transaction> {
    return from(getTransactionById({ id })).pipe(
      tap((transaction) => this.transactionSubject.next(transaction)),
    );
  }

  createTransfer(
    senderId: string,
    receiverId: string,
    amount: number,
    currency: string,
  ): Observable<void> {
    return defer(() => createNSTXTransfer({senderId, receiverId, amount, currency})).pipe(
        tap(() => this.fetchTransactions(senderId).subscribe()),
      catchError((error) => throwError(error))
    );
  }

  updateTransactionNote(id: string, note: string): Observable<void> {
    return from(updateTransactionNote({ id, note }));
  }
}
