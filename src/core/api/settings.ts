import { instance } from "@/core";

interface RequestPasswordResetParams {
	email: string;
}

interface ConfirmResetPasswordParams {
	token: string;
	newPassword: string;
}

export const sendResetPassword = async ({
	email,
}: RequestPasswordResetParams): Promise<void> => {
	try {
		const response = await instance.post("/reset-password/request", { email });
		return response.data;
	} catch (error) {
		handleError(error, "Failed to send password reset request.");
	}
};
export const confirmResetPassword = async ({
	token,
	newPassword,
}: ConfirmResetPasswordParams): Promise<void> => {
	try {
		const response = await instance.post("/reset-password/confirm", {
			token,
			newPassword,
		});
		return response.data;
	} catch (error) {
		handleError(error, "Failed to reset the password.");
	}
};

export const handleError = (error: unknown, defaultMessage: string): void => {
	if (error instanceof Error) {
		throw new Error(error.message || defaultMessage);
	}
};
