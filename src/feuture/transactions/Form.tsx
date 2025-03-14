"use client";

import { Container, Grid } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillFund } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa";

import { TransactionOption } from "@/feuture";
import { NstxLogo, Text } from "@/shared";

interface TransactionOptionsFormProps {
  router: ReturnType<typeof useRouter>;
}

export const TransactionOptionsForm = ({ router }: TransactionOptionsFormProps) => {
  return (
    <Container size="4">
      <Text align="center" size="h5" className="m-8">
        Fund Your Account
      </Text>
      <Grid
        columns={{
          xs: "1",
          md: "2",
        }}
        gap="4"
      >
        <TransactionOption
          icon={<NstxLogo />}
          title="From Another User"
          description="Fund your account from another user."
          onClick={() => router.push("/transactions/fund")} />
        <TransactionOption
          icon={<FaPaypal />}
          title="PayPal"
          description="Fund your account via PayPal."
          onClick={ () => router.push("/transactions/fund/paypal")}/>
      </Grid>
      <Text align="center" size="h5" className="m-8">
        Transfer to оther Users
      </Text>
      <Grid
        columns={{
          xs: "1",
          md: "2",
        }}
        gap="4"
      >
        <TransactionOption
          icon={<NstxLogo />}
          title="NSTX Transfer"
          description="Vith NSTX balance."
          onClick={() => router.push("/transactions/withdraw/nstx")} />
        <TransactionOption
          icon={<AiFillFund />}
          title="Bank Transfer"
          description="Vith bank transfer."
          onClick={() => router.push("/transactions/withdraw/bank")} />
      </Grid>
    </Container>
  );
};
