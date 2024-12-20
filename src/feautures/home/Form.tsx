import "reflect-metadata";
import type { User } from "@/core";
import { BiGlobe, BiHome, BiShield, BiSupport } from "react-icons/bi";

import { Hero } from "@/feautures";
import { Accordition, Card, Col, Container } from "@/shared";

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
	const features = [
		{
			icon: BiHome,
			title: "Easy to use",
			description:
				"Our platform is user-friendly and easy to navigate, making it simple for you to manage your crypto assets.",
		},
		{
			icon: BiShield,
			title: "Secure",
			description:
				"We take security seriously, implementing the latest security measures to protect your assets and data.",
		},
		{
			icon: BiSupport,
			title: "24/7 Support",
			description:
				"Our team is available around the clock to provide support and answer any questions you may have.",
		},
		{
			icon: BiGlobe,
			title: "Global",
			description:
				"We support a wide range of cryptocurrencies and are available to users around the world.",
		},
	];

	const faqItems = [
		{
			question: "What is cryptocurrency?",
			answer:
				"Cryptocurrency is a digital currency that uses encryption techniques.",
		},
		{
			question: "How can I buy Bitcoin?",
			answer:
				"You can buy Bitcoin on various exchanges like Coinbase or Binance.",
		},
		{
			question: "Is cryptocurrency safe?",
			answer:
				"Cryptocurrency is secure, but you need to take precautions to protect your assets.",
		},
		{
			question: "What is a blockchain?",
			answer:
				"A blockchain is a decentralized digital ledger that records transactions across a network of computers.",
		},
		{
			question: "How do I store my cryptocurrency?",
			answer:
				"You can store your cryptocurrency in a digital wallet or on an exchange.",
		},
	];

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
				<Accordition items={faqItems} />
				<Card features={features} />
			</Container>
		</>
	);
};
