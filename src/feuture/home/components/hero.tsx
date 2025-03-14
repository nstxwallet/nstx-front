import type { User } from "@/core";
import { Button, Row, Text } from "@/shared";

interface HeroProps {
  navigation: {
    handleLogin: () => void;
    handleWallet: () => void;
    handleSupport: () => void;
    handleSignUp: () => void;
  };
  user?: User;
}

export const Hero = ({ navigation, user }: HeroProps) => {
  const { handleLogin, handleWallet, handleSupport, handleSignUp } = navigation;
  return (
    <div className="bg-gradient-to-b from-black min-h-screen flex flex-col items-center justify-center w-full px-6 text-center">
      <Text size="body1" className="max-w-2xl">
        Your one-stop shop for all things crypto. Exchange, store, and monitor your assets with
        ease.
      </Text>
      <Text size="h1" className="mt-4">
        Exchange, Store, and Monitor Your Crypto Assets
      </Text>
      <Row justify="center" className="gap-4 mt-6">
        {user ? (
          <Button onClick={handleWallet}>Wallet</Button>
        ) : (
          <Button onClick={handleSignUp}>Sign Up</Button>
        )}
        <Button onClick={handleLogin}>{user ? "Dashboard" : "Get Started"}</Button>
        <Button variant="transparent" onClick={handleSupport}>
          Support
        </Button>
      </Row>
    </div>
  );
};
