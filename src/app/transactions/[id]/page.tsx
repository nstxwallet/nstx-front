"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TransactionService, useToast } from "@/core";
import { TransactionDetails } from "@/feuture";
import { ErrorАlert, Loading } from "@/shared";

const transactionService = new TransactionService();

export default function TransactionDetailsPage() {
  const { id } = useParams();
  const { toast } = useToast();
  const router = useRouter();

  const [transaction, setTransaction] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const transactionId = Array.isArray(id) ? id[0] : id;

    if (!transactionId) return;
    setIsLoading(true);
    const subscription = transactionService.fetchTransactionById(transactionId).subscribe({
      next: (data) => { 
        setTransaction(data);
        setIsLoading(false);
      },
      error: (error) => {
        toast({ title: "Error", description: error.message });
        setIsLoading(false);
      },
    });

    return () => subscription.unsubscribe();
  }, [id]);  

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  if (isLoading) {
    return <Loading />;
  }

  if (!transaction || !transaction?.id) {
    return (
        <ErrorАlert
            title="Transaction not found"
            description="The transaction you are looking for does not exist"
        />
    );
  }
  return (
    <TransactionDetails
      router={router}
      transaction={transaction}
      isExpanded={isExpanded}
      toggleExpand={toggleExpand}
    />
  );
}
