"use client";

import { useObservable, useServices } from "@/core";
import type { Observable } from "rxjs";

export const useResetPassword = () => {
	const { userSettingsService } = useServices();

	const state = useObservable(userSettingsService.resetPassword$);

	const sendResetPassword = (email: string): Observable<void> => {
		return userSettingsService.sendResetPasswordRequest({ email });
	};

	const confirmResetPassword = (
		token: string,
		newPassword: string,
	): Observable<void> => {
		return userSettingsService.confirmResetPassword({ token, newPassword });
	};

	return {
		state,
		sendResetPassword,
		confirmResetPassword,
	};
};
