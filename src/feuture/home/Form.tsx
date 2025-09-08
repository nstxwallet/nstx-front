import "reflect-metadata";
import type { Price, User } from "@/core";

import { Container } from "@radix-ui/themes";
import { BuySellTabs, PricesBar } from "./components";
import { Button, Row, Text } from "@/shared";

interface HomeProps {
  navigation: {
    handleLogin: () => void;
    handleWallet: () => void;
    handleSupport: () => void;
    handleSignUp: () => void;
  };
  user: User;
  prices?: Price[];
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  amountUSD: string;
  setAmountUSD: (amount: string) => void;
  handleSubmit: (action: "buy" | "sell") => void;
  isAuth?: boolean | string | false | null
}

export const Home = ({
  navigation,
  user,
  prices = [],
  selectedCurrency,
  setSelectedCurrency,
  amountUSD,
  setAmountUSD,
  isAuth,
  handleSubmit,
}: HomeProps) => (
  <>
  <div className="bg-gradient-to-b from-black min-h-screen flex flex-col items-center justify-center w-full px-6 text-center">
    <Text size="body1" className="max-w-2xl">
      Your one-stop shop for all things crypto. Exchange, store, and monitor your assets with
      ease.
    </Text>
    <Text size="h1" className="mt-4">
      Exchange, Store, and Monitor Your Crypto Assets
    </Text>
      <Row justify="center" className="gap-4 mt-6">
        {isAuth ? (
          <Button variant="primary" onClick={navigation.handleWallet}>
            Wallet
          </Button>
        ) : (
          <>
            <Button variant="primary" onClick={navigation.handleSignUp}>
              Sign Up
            </Button>
            <Button variant="transparent" onClick={navigation.handleLogin}>
              Login
            </Button>
          </>
        )}
        <Button variant="transparent" onClick={navigation.handleSupport}>
          Support
        </Button>
      </Row>
    </div>
    <PricesBar prices={prices} />
    <Container size="4">
      <BuySellTabs
        user={user}
        prices={prices}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        amountUSD={amountUSD}
        setAmountUSD={setAmountUSD}
        handleSubmit={handleSubmit}
      />
    </Container>
  </>
);
