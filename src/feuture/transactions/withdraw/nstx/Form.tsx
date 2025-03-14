import { Grid } from "@radix-ui/themes";
import type { FormikProps } from "formik";
import React from "react";

import type { Balance } from "@/core";
import { Button, Form, Input, Paper, Select, Text } from "@/shared";

interface WithdrawNstxFormProps {
  formik: FormikProps<{
    receiverId: string;
    currency: string;
    amount: string;
    message: string;
  }>;
  balances: Balance[];
}

export const WithdrawNstxForm = ({ formik, balances }: WithdrawNstxFormProps) => {
  return (
    <Grid columns="1" gap="4" justify="center">
      <Text size="body1">
        This page allows users to transfer funds from their NSTX wallet to another wallet. Users
        must select a recipient, choose a currency, enter an amount, and optionally add a message.
      </Text>
      <Paper>
        <Text size="body1" align="center" color="warning">
          Get funds from another NSTX wallet. This page allows you to send funds to another wallet.
        </Text>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            id="receiverId"
            name="receiverId"
            placeholder="Receiver ID"
            value={formik.values.receiverId}
            onChange={formik.handleChange}
          />
          <Grid columns="2" gap="4" justify="center" align="center">
            <Input
              id="amount"
              name="amount"
              type="number"
              placeholder="Amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
            />
            <Select
              options={balances?.map((b) => b.currency)}
              placeholder="Select a currency"
              value={formik.values.currency}
              search={true}
              onChange={(value) => formik.setFieldValue("currency", value)}
            />
            <Input
              id="message"
              name="message"
              placeholder="Message (Optional)"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            <Button type="submit" fullWidth>
              Send
            </Button>
          </Grid>
        </Form>
      </Paper>
    </Grid>
  );
};
