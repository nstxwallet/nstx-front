"use client";

import "reflect-metadata";
import { confirmResetPassword, sendResetPassword } from "@/core";
import { BehaviorSubject, type Observable, catchError, from } from "rxjs";
import { tap } from "rxjs/operators";
import { injectable } from "tsyringe";

interface RequestPasswordResetParams {
	email: string;
}

interface ConfirmResetPasswordParams {
	token: string;
	newPassword: string;
}

@injectable()
export class UserSettingsService {
	private readonly resetPassword = new BehaviorSubject<boolean>(false);
	public resetPassword$ = this.resetPassword.asObservable();

	private readonly newPassword = new BehaviorSubject<boolean>(false);
	public newPassword$ = this.newPassword.asObservable();

	confirmResetPassword(params: ConfirmResetPasswordParams): Observable<void> {
		return from(confirmResetPassword(params)).pipe(
			tap({
				next: () => {
					this.sendNewPassword(true);
				},
			}),
			catchError((error) => {
				this.sendNewPassword(false);
				throw error;
			}),
		);
	}

	sendResetPasswordRequest(
		params: RequestPasswordResetParams,
	): Observable<void> {
		return from(sendResetPassword(params)).pipe(
			tap({
				next: () => {
					this.sendResetPassword(true);
				},
			}),
			catchError((error) => {
				this.sendResetPassword(false);
				throw error;
			}),
		);
	}

	private sendResetPassword(state: boolean): void {
		this.resetPassword.next(state);
	}

	private sendNewPassword(state: boolean): void {
		this.newPassword.next(state);
	}
}
