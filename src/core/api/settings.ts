import { handleRequest, instance } from "@/core";

interface RequestPasswordResetParams {
  email: string;
}

interface ConfirmResetPasswordParams {
  token: string;
  newPassword: string;
}

export const sendResetPassword = async ({ email }: RequestPasswordResetParams): Promise<void> => {
  await handleRequest<void>(instance.post("/reset-password/request", { email }));
};

export const confirmResetPassword = async ({
  token,
  newPassword,
}: ConfirmResetPasswordParams): Promise<void> => {
  await handleRequest<void>(instance.post("/reset-password/confirm", { token, newPassword }));
};
