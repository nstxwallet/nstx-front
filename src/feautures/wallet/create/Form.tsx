"use client";
import type React from "react";
import type { FormikProps } from "formik";
import { Button, Form, Paper, Col, Select, Typography, Checkbox } from "@/shared";
import { useRouter } from "next/navigation";  

interface CreateWalletFormProps {
  formik: FormikProps<{ currency: string; terms: boolean }>;
  handleCancel: () => void;
}

export const CreateWalletForm = ({
  formik,
  handleCancel,
}: CreateWalletFormProps) => {
  const router = useRouter();
  const currencyOptions = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
    { value: "JPY", label: "JPY" },
    { value: "CNY", label: "CNY" },
    { value: "BTC", label: "BTC" },
    { value: "ETH", label: "ETH" },
    { value: "LTC", label: "LTC" },
    { value: "XRP", label: "XRP" },
    { value: "ADA", label: "ADA" },
    { value: "DOT", label: "DOT" },
    { value: "DOGE", label: "DOGE" },
    { value: "BNB", label: "BNB" },
  ];

  return (
    <>
      <Paper className="p-8 w-full">
        <Typography variant="h4" className="mb-4">
          Open a new balance
        </Typography>
        <Typography variant="body1" className="mb-6">
          Select a currency to create a new balance in your account, you can
          choose one from a wide range of currencies.
        </Typography>

        <Form onSubmit={formik.handleSubmit}>
          <Select
            options={currencyOptions}
            id="currency"
            name="currency"
            value={formik.values.currency}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Select a currency"
          >
            <option value="" disabled />
            {currencyOptions.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </Select>
          <Checkbox onChange={formik.handleChange} id="terms" label="I agree to the terms and conditions" checked={true} />
          <Col justify="between" className="space-x-4">
            <Button fullWidth variant="bordered" onClick={handleCancel}>
              Cancel
            </Button>
            <Button fullWidth variant="primary" type="submit">
              {formik.values.currency
                ? `Create ${formik.values.currency} Balance`
                : "Create Balance"}
            </Button>
          </Col>
          <Button variant="bordered" onClick={() => router.push("/terms")}>
            Terms and Conditions
          </Button>
        </Form>
      </Paper> 
    </>
  );
};
