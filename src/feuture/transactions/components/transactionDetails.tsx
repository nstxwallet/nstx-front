"use client";

import { Container, Grid, Separator } from "@radix-ui/themes";
import React from "react";

import type { Transaction } from "@/core";
import { Button, Paper, Row, Text, handleCopy } from "@/shared";
import { useRouter } from "next/navigation";
import {
  FiArrowLeft,
  FiChevronDown,
  FiChevronUp,
  FiCopy,
  FiHelpCircle,
  FiShare,
} from "react-icons/fi";

interface TransactionDetailsProps {
  transaction?: Transaction;
  isExpanded: boolean;
  toggleExpand: () => void;
  router: ReturnType<typeof useRouter>;
}
export const TransactionDetails = ({
  transaction,
  router,
  isExpanded,
  toggleExpand,
}: TransactionDetailsProps) => { 
  return (
    <Container size="1">
      <Paper>
        <Row justify="between" align="center" className="mb-4">
          <Button
            variant="transparent"
            onClick={() => router.push("/transactions")}
            className="flex items-center"
          >
            <FiArrowLeft className="w-5 h-5 mr-2" />
          </Button>
          <Text>Transaction Details</Text>
          <span
            className={`text-sm px-3 py-1 rounded-full font-medium ${
              transaction?.status === "completed"
                ? "bg-green-100 text-green-600"
                : "bg-amber-100 text-amber-600"
            }`}
          >
            {transaction?.status === "completed" ? "Success" : "Pending"}
          </span>
        </Row>

        <Text
          align={"center"}
          size="h3"
          className={`mt-4 ${transaction?.type === "transfer" ? "text-red-500" : "text-green-500"}`}
        >
          {transaction?.type === "transfer" ? "-" : "+"}
          {transaction?.amount} {transaction?.currency}
        </Text>

        <Separator size="4" orientation="horizontal" />
        <Row justify="between">
          <Text size="body1">Id: {transaction?.id}</Text>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={(e) => handleCopy(e, transaction?.id)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiCopy className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={toggleExpand}
              className="text-gray-500 hover:text-gray-700"
            >
              {isExpanded ? (
                <FiChevronUp className="w-5 h-5" />
              ) : (
                <FiChevronDown className="w-5 h-5" />
              )}
            </button>
          </div>
        </Row>

        {isExpanded && (
          <Grid columns="2" gap="4" className="mt-4">
            <Text size="body1" color="gray">
              Type:
            </Text>
            <Text size="body1">{transaction?.type}</Text>
            <Text size="body1" color="gray">
              Status:
            </Text>
            <Text size="body1">{transaction?.status}</Text>
            <Text size="body1" color="gray">
              Currency:
            </Text>
            <Text size="body1">{transaction?.currency}</Text>
            <Text size="body1" color="gray">
              Created At:
            </Text>
            <Text size="body1">{new Date(transaction?.createdAt).toLocaleString()}</Text>
            <Text size="body1" color="gray">
              Updated At:
            </Text>
            <Text size="body1">{new Date(transaction?.updatedAt).toLocaleString()}</Text>
          </Grid>
        )}
        <Grid columns={{ md: "2", sm: "1" }} gap="4" className="mt-6">
          <Button
            fullWidth
            variant="transparent"
            icon={<FiHelpCircle />}
            onClick={() => router.push("/support")}
          >
            Support Center
          </Button>
          <Button variant="secondary" fullWidth icon={<FiShare />} onClick={() => router.push("/")}>
            Share
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};
