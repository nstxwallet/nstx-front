import "reflect-metadata";
import type { Price, User } from "@/core";
import { Switch } from "@/shared";
import { Container } from "@radix-ui/themes";
import { BuySellTabs, Hero, PricesBar } from ".";

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
}

export const Home = ({
  navigation,
  user,
  prices = [],
  selectedCurrency,
  setSelectedCurrency,
  amountUSD,
  setAmountUSD,
  handleSubmit,
}: HomeProps) => (
  <>
    <Hero navigation={navigation} user={user} />
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
