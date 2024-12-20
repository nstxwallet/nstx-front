import type { FormikProps } from "formik";
import React from "react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

import { Button, Container, Form, Input, Paper, Typography } from "@/shared";

interface SupportPageProps {
	formik: FormikProps<{
		email: string;
		name: string;
		subject: string;
		message: string;
	}>;
}

export const SupportPage = ({ formik }: SupportPageProps) => {
	return (
		<Container className="space-y-12 py-8">
			<header className="text-center space-y-2">
				<Typography color="blue" variant="h3">
					Welcome to Our Support Center
				</Typography>
				<Typography color="primary" variant="body1">
					Were here to help with any questions or concerns you may have.
				</Typography>
			</header>

			<Container className="flex justify-center items-center space-x-2 mt-6">
				<Input
					onChange={formik.handleChange}
					value={formik.values.email}
					type="email"
					placeholder="Enter your email"
					className="rounded-r-none w-full"
				/>
				<Button size="md" variant="bordered" className="rounded-l-none">
					Subscribe
				</Button>
			</Container>

			<Container className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="space-y-8">
					<Paper space={3}>
						<Typography center color="primary" variant="h4" className="mb-4">
							Write a problem and we solve it
						</Typography>
						<Form onSubmit={formik.handleSubmit}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<Input
									name="name"
									fullWidth
									onChange={formik.handleChange}
									value={formik.values.name}
									type="text"
									placeholder="Enter your name"
									className="mt-1"
								/>

								<Input
									name="email"
									fullWidth
									onChange={formik.handleChange}
									value={formik.values.email}
									type="email"
									placeholder="Enter your email"
									className="mt-1"
								/>

								<Input
									name="subject"
									fullWidth
									onChange={formik.handleChange}
									value={formik.values.subject}
									type="text"
									placeholder="Problem subject"
									className="mt-1"
								/>
							</div>

							<Input
								name="message"
								fullWidth
								onChange={formik.handleChange}
								value={formik.values.message}
								type="textarea"
								placeholder="Write your message here..."
								className="mt-4"
							/>

							<Button size="md" type="submit" variant="bordered">
								Send Message
							</Button>
						</Form>
					</Paper>
				</div>
				<div className="space-y-4">
					<Paper color="secondary" className="p-8">
						<Typography color="primary" variant="h4">
							Additional information
						</Typography>
						<Typography color="primary" variant="body2">
							<a
								href="mailto:pasichmaria@gmail.com"
								className="text-blue-500 underline"
							>
								Email: pasichmaria@gmail.com
							</a>
						</Typography>
						<Typography color="primary" variant="body2">
							<a href="tel:+380997484505" className="text-blue-500 underline">
								Phone: +( 380 ) 99-748-45-05
							</a>
						</Typography>
						<Typography color="secondary" variant="body2">
							Mon-Fri: 10 AM - 5 PM (GMT+2)
						</Typography>
					</Paper>
					<div className="text-center space-y-4">
						<Typography color="primary" variant="h6">
							Follow us on Social Media
						</Typography>
						<div className="flex justify-center space-x-6">
							<a
								href="https://instagram.com"
								className="text-gray-400 hover:text-blue-500"
							>
								<FaInstagram size={28} />
							</a>
							<a
								href="https://t.me/Blueremelka"
								className="text-gray-400 hover:text-blue-500"
							>
								<FaTelegram size={28} />
							</a>
							<a
								href="https://t.me/Blueremelka"
								className="text-gray-400 hover:text-blue-500"
							>
								<FaGithub size={28} />
							</a>
						</div>
					</div>
				</div>
			</Container>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{[
					"Security",
					"Transactions",
					"Verification",
					"Payment",
					"Delivery",
					"Technical Support",
				].map((category) => (
					<div
						key={category}
						className="p-6 bg-zinc-800 rounded-lg shadow-md max-w-lg hover:bg-gray-700 transition-colors"
					>
						<Typography color="primary" variant="h4">
							{category}
						</Typography>
						<Typography color="primary" variant="body1">
							Find help and support articles for {category.toLowerCase()}.
						</Typography>
					</div>
				))}
			</div>

			<Container className="space-y-12">
				<div className="space-y-6">
					{[
						{
							question: "How do I reset my password?",
							answer:
								"You can reset your password by clicking 'Forgot password' on the login page.",
						},
						{
							question: "How can I contact support?",
							answer:
								"You can contact our support team via email or phone. See the contact section below.",
						},
						{
							question: "How to verify my account?",
							answer:
								"Account verification can be done through the settings.ts page. Follow the instructions provided there.",
						},
						{
							question: "What are the supported payment methods?",
							answer:
								"We support various payment methods including credit/debit cards, PayPal, and cryptocurrencies.",
						},
					].map(({ question, answer }) => (
						<Paper
							color="transparent"
							key={question}
							className="p-6 bg-zinc-800 rounded-lg shadow-md"
						>
							<Typography color="cyan" variant="h3">
								{question}
							</Typography>

							<Typography variant="h6">{answer}</Typography>
						</Paper>
					))}
				</div>
			</Container>

			<Container className="flex justify-center items-center space-x-2 mt-6">
				<Input
					onChange={formik.handleChange}
					value={formik.values.email}
					type="email"
					placeholder="Enter your email"
					className="rounded-r-none w-full"
				/>
				<Button size="md" variant="bordered" className="rounded-l-none">
					Subscribe
				</Button>
			</Container>
		</Container>
	);
};
