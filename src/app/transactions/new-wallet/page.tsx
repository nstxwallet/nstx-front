"use client";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";

import { Balance, currency, useAuth, useBalances, useToast } from "@/core";
import { NewWallet } from "@/feuture";
import { Dialog, Text } from "@/shared";

export default function NewWalletForm() {
  const { toast } = useToast();
  const { user } = useAuth();

  const router = useRouter();

  const { createBalance } = useBalances();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [pendingCurrency, setPendingCurrency] = useState("");

  const handleSubmit = (values: { currency: string }) => {
    setPendingCurrency(values.currency);
    setIsConfirmOpen(true);
  };

  const handleConfirm = () => {
    createBalance(pendingCurrency).subscribe({
      error: (error) => {
        toast({
          title: error.error,
          description: error.message,
        });
      },
      next: () => {
        toast({
          title: "Create balance successful",
          description: "Balance created successfully",
        });
        router.push("/transactions");
      },
    });
    setIsConfirmOpen(false);
  };

  const handleCancel = () => {
    setIsConfirmOpen(false);
    router.push("/transactions");
  };

  const formik = useFormik({
    initialValues: {
      currency: "",
      terms: false,
    },
    validationSchema: Yup.object({
      currency: Yup.string().required("Currency is required"),
      terms: Yup.boolean().oneOf([true], "You must accept the terms"),
    }),
    onSubmit: handleSubmit,
  });

const cardBalance: Balance = {
  id: "",  
  userId: user?.id || "", 
  currency: formik.values.currency,
  value: 0,  
};

  return isConfirmOpen ? (
    <Dialog
      open={isConfirmOpen}
      setOpen={setIsConfirmOpen} 
      title="Confirm Wallet Creation"
      fields={[
        { label: "Currency", value: pendingCurrency },
        {
          label: "Owner",
          value: `${user?.firstName} ${user?.lastName}` || "Unknown",
        },
      ]}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      confirmText="Confirm"
      cancelText="Cancel"
    >
      <Text size="body1">
        You are about to create a new wallet for <b>{pendingCurrency}</b>. Please ensure that you
        have read and accepted the{" "}
        <Link href="/terms">
          <Text size="body1" color="primary" className="underline">
            terms and conditions
          </Text>
        </Link>
      </Text>
    </Dialog>
  ) : (
    <NewWallet
      user={user}
      balance={cardBalance}
      currency={currency}
      router={router}
      formik={formik}
      handleCancel={handleCancel}
    />
  );
}
