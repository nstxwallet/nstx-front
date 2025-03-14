"use client";

import { Container, Grid } from "@radix-ui/themes";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaChevronDown, FaChevronUp, FaCopy, FaInfoCircle } from "react-icons/fa";

import { type Transaction, useToast } from "@/core";
import { Button, Col, Loading, Paper, Row, Text } from "@/shared";

interface TransactionProps {
  transactions: Transaction[] | null | undefined;
  isTransactionsLoading?: boolean;
  isTransactionsError?: boolean;
}

export const TransactionsTable = ({
  transactions,
  isTransactionsLoading,
  isTransactionsError,
}: TransactionProps) => {

  const router = useRouter();
  const { toast } = useToast();
  const [expandedTransaction, setExpandedTransaction] = useState<string | null>(null);

  useEffect(() =>{
    if (isTransactionsError) {
      toast({
        title: "Error",
        description: "Failed to load transactions",
      });
    }
  }, [isTransactionsError, toast]);

  const handleCopyToClipboard = (text: string) =>{
    navigator.clipboard.writeText(text).then(() =>{
      toast({
        title: "Copied to Clipboard",
        description: `Transaction ID ${text} has been copied.`,
      });
    });
  };

  if (isTransactionsLoading) {
    return <Loading />;
  }

  if (!transactions || transactions.length === 0) {
    return(
      <Container size="2">
        <Grid columns="1" rows="1" gap="6" className="mt-8 flex justify-center">
          <Paper justify="center" align="center" className="p-8">
            <FaInfoCircle className="text-gray-400 text-4xl mb-4" />
            <Text size="h5">No transactions found</Text>
            <Text size="body1" align="center" className="text-center">
              Start by depositing money to your wallet to begin transactions.
            </Text>
            <Button onClick={ () => router.push("/transactions/fund")} className="mt-4" >
              Deposit Money
            </Button>
          </Paper>
        </Grid>
      </Container>
    );
  }

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const toggleTransaction = (id: string) =>
    setExpandedTransaction(expandedTransaction === id ? null : id);

  return (
    <Grid columns="1" gap="4">
      {sortedTransactions.map( (transaction) => (
        <div
          key={transaction.id}
          className={`p-4 rounded-lg shadow-md transition-colors duration-300 ${
            expandedTransaction === transaction.id
              ? "border-b-2 border-green-500"
              : "border-b border-zinc-600 opacity-90 hover:opacity-100"
          }`}
        >
          <Row justify="between" className="mb-2">
            <button
              type="button"
              className="dark:text-gray-300 light:text-gray-700
               hover:text-cyan-500"
              onClick={() => router.push(`/transactions/${transaction.id}`)}
            >
              Id: {transaction.id}
            </button>
            <Button
              variant="transparent"
              icon={<FaCopy size={12} />}
              onClick={() => handleCopyToClipboard(transaction.id)}
            >
              <span className="text-xs">Copy</span>
            </Button>
          </Row>
          <Row justify="between">
            <Text size="body1">
              <span className={transaction.type === "deposit" ? "text-green-500" : "text-red-500"}>
                {transaction.type === "deposit" ? "+" : "-"} {transaction.amount}
                {transaction.currency}
              </span>
            </Text>
            <button
              type="button"
              onClick={() =>toggleTransaction(transaction.id)}
              className="text-gray-300 hover:text-green-500"
            >
              {expandedTransaction === transaction.id ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </button>
          </Row>

          {expandedTransaction === transaction.id && ( <Grid columns={{ xs: "1", md: "4" }} gap="6" className="mt-4 xs:text-left">
              <Row className="xs:justify-between md:around items-center gap-2">
                <Text size="body1">Status:</Text>
                {transaction.status === "completed" ? (<FaCheckCircle className="text-green-500" />
                ) : ( <FaInfoCircle className="text-yellow-500" />
                )}
                <Text size="body1">{transaction.status}</Text>
              </Row>
              <Row className="xs:justify-between md:around items-center gap-2">
                <Text size="body1">Type:</Text>
                <Text size="body1">{transaction.type}</Text>
              </Row>
              <Row className="xs:justify-between md:around items-center gap-2">
                <Text size="body1">Date:</Text>
                <Text size="body1">{format(new Date(transaction.createdAt), "MMM dd, yyyy")}</Text>
              </Row>
              <Row className="xs:justify-between md:around items-center gap-2">
                <Text size="body1">Time:</Text>
                <Text size="body1">{format(new Date(transaction.createdAt), "hh:mm a")}</Text>
              </Row>
            </Grid>
          ) 
          }
        </div>
      ) 
      )
      }
    </Grid>
  );
};
