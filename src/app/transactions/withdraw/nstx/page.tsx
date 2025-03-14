"use client";

import { Container } from "@radix-ui/themes";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

import { useAuth, useBalances, useToast, useTransactions } from "@/core";
import { WithdrawConfirm, WithdrawNstxForm } from "@/feuture";
import { ErrorАlert, Loading, calculateBalanceAfterPayment } from "@/shared";

export default function NSTXPaymentPage() {
  const { user } = useAuth();
  const { balances } = useBalances();
  const { createNSTXTransfer, isLoading, isError } = useTransactions({ userId: user?.id });
  const { toast } = useToast();

  const router = useRouter();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const formik = useFormik({
    initialValues: {
      receiverId: "",
      currency: "USDT",
      amount: "",
      message: "",
    },
    validationSchema: Yup.object({
      receiverId: Yup.string().required("Recipient is required"),
      currency: Yup.string().required("Choose the currency"),
      amount: Yup.number().required("Amount is required").min(0, "Amount must be greater than 0"),
    }),
    onSubmit: () => {
      setShowConfirmation(true);
    },
  });

  const handleConfirm = async () => {
    createNSTXTransfer(
      user?.id || "",
      formik.values.receiverId,
      Number.parseFloat(formik.values.amount),
      formik.values.currency,
    ).subscribe({
      next: () => {
        toast({
          title: "Success",
          description: "Payment successfully processed!",
        });
        router.push("/transactions");
      },
      error: () => {
        toast({
          title: "Error",
          description: "An error occurred while processing your payment.",
        });
      },
      complete: () => {
        setShowConfirmation(false);
        formik.resetForm();
      },
    });
  };

  const handleCancel = () => {
    setShowConfirmation(false);
    formik.resetForm();
  };

  const balanceAfterPayment = calculateBalanceAfterPayment(
    balances,
    formik.values.currency,
    formik.values.amount,
  );

  if (isLoading || !user || !balances) {
    return <Loading />;
  }

  return (
    <Container size="1" className="xs:p-4">
      {isError ? (
        <ErrorАlert title="Error" description="An error occurred while processing your payment." />
      ) : showConfirmation ? (
        <WithdrawConfirm
          isOpen={showConfirmation}
          user={user}
          values={formik.values}
          balanceAfterPayment={balanceAfterPayment}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      ) : (
        <WithdrawNstxForm formik={formik} balances={balances} user={user} />
      )}
    </Container>
  );
}
