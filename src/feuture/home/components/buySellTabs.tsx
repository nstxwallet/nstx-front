import { Box, Flex, Grid } from "@radix-ui/themes";
import Link from "next/link";
import * as React from "react";

import type { Price, User } from "@/core";
import {
  Button,
  Form,
  Input,
  Loading,
  Paper,
  Select,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from "@/shared";

interface BuySellProps {
  user: User;
  prices?: Price[];
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  amountUSD: string;
  setAmountUSD: (amount: string) => void;
  handleSubmit: (action: "buy" | "sell") => void;
}

export const BuySellTabs = ({
  user,
  prices,
  selectedCurrency,
  setSelectedCurrency,
  amountUSD,
  setAmountUSD,
  handleSubmit,
}: BuySellProps) => {
  if (!prices || !Array.isArray(prices)) {
    return <Loading />;
  }

  const selectedPrice = prices?.find((p) => p.symbol === selectedCurrency)?.price || 0;
  const convertedAmount = amountUSD ? Number.parseFloat(amountUSD) / selectedPrice : 0;

  return (
    <Tabs defaultValue="buy">
      <TabsList>
        <TabsTrigger value="buy">Buy and Sell</TabsTrigger>
        <TabsTrigger value="depositfiat">Deposit Fiat</TabsTrigger>
        <TabsTrigger value="withdrawfiat">Withdraw Fiat</TabsTrigger>
      </TabsList>
      <TabsContent value="buy">
        <Grid columns={{ md: "2", sm: "1" }} gap="6">
          <Box>
            <Text size="body1">Crypto Prices</Text>
            <ul className="space-y-4 mt-4">
              {prices.slice(0, 5).map(({ symbol, price }) => (
                <li key={symbol} className="flex justify-between p-4 rounded-lg">
                  <span className="flex items-center">{symbol}</span>
                  <span>${price.toLocaleString()}</span>
                </li>
              ))}
            </ul>
            <Link href="/prices" className="text-blue-500 mt-4 block">
              View all prices
            </Link>
          </Box>
          <Box>
            <Text size="body1">Buy & Sell Crypto</Text>
            <Form onSubmit={() => handleSubmit("buy")}>
              <Flex gap="4" align="center" className="mt-4">
                <Input
                  name="amountUSD"
                  placeholder="Enter amount"
                  value={amountUSD}
                  onChange={(e) => setAmountUSD(e.target.value)}
                />
                <Select
                  options={prices.map((p) => p.symbol)}
                  value={selectedCurrency}
                  onChange={(value) => setSelectedCurrency(value)}
                />
              </Flex>
              <Paper>
                <Text size="body1">You will {amountUSD ? "buy" : "sell"}:</Text>
                <Text size="body1">
                  {convertedAmount.toFixed(6)} {selectedCurrency}
                </Text>
                <Text size="body1">Total price:</Text>
                <Text size="body1">{amountUSD || 0} USD</Text>
              </Paper>
              <Flex gap="4" className="mt-4">
                <Button
                  type="submit"
                  fullWidth
                  variant="secondary"
                  onClick={() => handleSubmit("buy")}
                >
                  Buy
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="danger"
                  onClick={() => handleSubmit("sell")}
                >
                  Sell
                </Button>
              </Flex>
              {!user?.isVerified && (
                <Text size="body1" className="text-red-400">
                  Verify your account to trade crypto.
                </Text>
              )}
            </Form>
          </Box>
        </Grid>
      </TabsContent>
    </Tabs>
  );
};
