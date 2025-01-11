import type { FormikProps } from "formik";
import React from "react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

import { Button, Container, Form, Input, Paper, Typography , Accordition, Row } from "@/shared";   
import { useRouter } from "next/navigation";

interface SupportPageProps {
	formik: FormikProps<{
		email: string;
		name: string;
		subject: string;
		message: string;
	}>;
}
 
export const SupportPage = ({ formik }: SupportPageProps) => {
  const router = useRouter();

	return (
		<Container className="space-y-8">
        <Typography variant="h4" center>
          We are here to help you with any questions or problems you may have.
        </Typography>
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
									onChange={formik.handleChange}
									value={formik.values.name}
									type="text"
									placeholder="Enter your name"
									className="mt-1"
								/>

								<Input
									name="email"
									onChange={formik.handleChange}
									value={formik.values.email}
									type="email"
									placeholder="Enter your email"
									className="mt-1"
								/>

								<Input
									name="subject"
									onChange={formik.handleChange}
									value={formik.values.subject}
									type="text"
									placeholder="Problem subject"
									className="mt-1"
								/>
							</div>

							<Input
								name="message"
								onChange={formik.handleChange}
								value={formik.values.message}
								type="textarea"
								placeholder="Write your message here..."
								className="mt-4"
							/>

							<Button type="submit" variant="bordered">
								Send Message
							</Button>
						</Form>
					</Paper>
          <div className="flex flex-row justify-around space-x-6  max-w-xs mx-auto">
            <a
              href="https://instagram.com/spelltaria"
              className="text-gray-400 hover:text-blue-500"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://t.me/spelltaria"
              className="text-gray-400 hover:text-blue-500"
            >
              <FaTelegram size={28} />
            </a>
            <a
              href="https://github.com/pasichmaria?tab=repositories"
              className="text-gray-400 hover:text-blue-500"
            >
              <FaGithub size={28} />
            </a>
          </div>
				</div>
        <Accordition
          items={[
            {
              value: "Password",
              title: "How to reset your password?",
              content:
                
              (
                <>
                  <Typography variant="body2">
                    You can reset your password in the profile menu. You need to enter
                    your email and we will send you a link to reset your password.
                  </Typography>
                  <Row className="mt-4">
                  <Button fullWidth variant='outlined' onClick={() => router.push("/settings")}>
                    Settings
                  </Button>
                    <Button fullWidth  onClick={() => router.push("/auth/forgot-password")}> 
                    Reset password
                  </Button>
                  </Row>

                </>
              ),
            },
            {
              value: "Security",
              title: "Security",
              content: "Security and settings can be changed in the profile menu.",
            },
            {
              value: "Balances",
              title: "Balances",
              content: "Balances can be added in the profile menu.",
            },
            {
              value: "Transactions",
              title: "Transactions",
              content:
              (
                <>
                  <Typography variant="body2">
                    You can see your transactions in the profile menu. You can see
                    the transaction history, the amount of the transaction, and the
                    date of the transaction.
                  </Typography>
                  <Button variant='outlined' fullWidth onClick={() => router.push("/settings")}>
                    Transactions
                  </Button>
                </>
              )
              
            },
            {
              value: "Verify your account",
              title: "Verify your account",
              content: (
                <>
                  <Typography variant="body2">
                    You can verify your account in the profile menu. You need to upload
                    your ID and a selfie with your ID.  We will verify your account within
                    24 hours.
                  </Typography>
                  <Button variant='outlined' fullWidth onClick={() => router.push("/settings")}>
                   Verify account
                  </Button>
                </>
              ),
            },
          ]}
        />
			</Container>

		</Container>
	);
};
