import "reflect-metadata";
import type { User } from "@/core";

import { Hero } from "@/feautures";
import { Accordition, Col, Container } from "@/shared";
interface HomeProps {
  handleLogin: () => void;
  handleWallet: () => void;
  handleSupport: () => void;
  handleSignUp: () => void;
  user: User | null | undefined;
}

export const Home = ({
  handleLogin,
  handleWallet,
  handleSupport,
  handleSignUp,
  user,
}: HomeProps) => {

  return (
    <>
      <Col span={12}>
        <Hero
          handleLogin={handleLogin}
          handleWallet={handleWallet}
          handleSupport={handleSupport}
          handleSignUp={handleSignUp}
          user={user}
        />
      </Col>

      <Container>
        
        <Accordition
          items={[
            {
              value: "What is cryptocurrency?",
              title: "What is cryptocurrency?",
              content: "Cryptocurrency is a digital currency that uses encryption techniques.",
            },
            {
              value: "How can I buy Bitcoin?",
              title: "How can I buy Bitcoin?",
              content: "You can buy Bitcoin on various exchanges like Coinbase or Binance.",
            },
            {
              value: "Is cryptocurrency safe?",
              title: "Is cryptocurrency safe?",
              content:
                "Cryptocurrency is secure, but you need to take precautions to protect your assets.",
            },
            {
              value: "What is a blockchain?",
              title: "What is a blockchain?",
              content:
                "A blockchain is a decentralized digital ledger that records transactions across a network of computers.",
            },
          ]}
        />
      </Container>
    </>
  );
};
