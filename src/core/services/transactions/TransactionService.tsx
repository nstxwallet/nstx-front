"use client";

import "reflect-metadata";
import {
	type Transaction,
	createNSTXTransfer,
	getTransactionById,
	getTransactions,
	getTransactionsForCurrency,
	updateTransactionNote,
} from "@/core";
import { BehaviorSubject, type Observable, from } from "rxjs";
import { tap } from "rxjs/operators";
import { injectable } from "tsyringe";

@injectable()
export class TransactionService {
	private readonly transactionsSubject = new BehaviorSubject<
		Transaction[] | null
	>(null);
	public transactions$ = this.transactionsSubject.asObservable();

	private readonly transactionSubject = new BehaviorSubject<Transaction | null>(
		null,
	);
	public transaction$ = this.transactionSubject.asObservable();

	constructor() {
		console.log("TransactionService initialized");
	}

	fetchTransactions(userId: string): Observable<Transaction[]> {
		return from(getTransactions({ id: userId })).pipe(
			tap((transactions) => this.updateTransactions(transactions)),
		);
	}

	fetchTransactionById(id: string): Observable<Transaction> {
		return from(getTransactionById({ id })).pipe(
			tap((transaction) => this.updateTransaction(transaction)),
		);
	}

	fetchTransactionsForCurrency(currency: string): Observable<Transaction[]> {
		return from(getTransactionsForCurrency({ currency })).pipe(
			tap((transactions) => this.updateTransactions(transactions)),
		);
	}

	createTransfer(
		senderId: string,
		receiverId: string,
		amount: number,
		currency: string,
	): Observable<void> {
		return from(createNSTXTransfer({ senderId, receiverId, amount, currency }));
	}

	updateTransactionNote(id: string, note: string): Observable<void> {
		return from(updateTransactionNote({ id, note }));
	}

	private updateTransactions(transactions: Transaction[]): void {
		this.transactionsSubject.next(transactions);
	}

	private updateTransaction(transaction: Transaction): void {
		this.transactionSubject.next(transaction);
	}
}
