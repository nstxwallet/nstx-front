"use client";

import type { User } from "@/core";
import { Dialog } from "@/shared";

interface WithdrawConfirmProps {
  isOpen: boolean;
  user: User;
  values: {
    receiverId: string;
    currency: string;
    amount: string;
    message: string;
  };
  balanceAfterPayment: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export const WithdrawConfirm = ({
  isOpen,
  user,
  values,
  balanceAfterPayment,
  onConfirm,
  onCancel,
}: WithdrawConfirmProps) => {
  return (
    <Dialog
      open={isOpen}
      setOpen={onCancel}
      title="Confirm Payment"
      fields={[
        { label: "Sender", value: `${user.firstName} ${user.lastName}` },
        { label: "Receiver ID", value: values.receiverId },
        { label: "Currency", value: values.currency },
        { label: "Amount", value: values.amount },
        { label: "Message", value: values.message || "No message" },
      ]}
      balanceAfterPayment={balanceAfterPayment}
      onCancel={onCancel}
      onConfirm={onConfirm}
      cancelText="Go Back"
      confirmText="Send Payment"
    />
  );
};
