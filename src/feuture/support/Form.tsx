import { Container, Grid } from "@radix-ui/themes";
import type { FormikProps } from "formik";
import { useRouter } from "next/navigation";
import React from "react";

import { Accordition, Button, Form, Input, Paper, Row, Text } from "@/shared";

interface SupportFormProps {
  formik: FormikProps<{
    email: string;
    name: string;
    subject: string;
    message: string;
  }>;
  router: ReturnType<typeof useRouter>;
}

export const SupportForm = ({ formik, router }: SupportFormProps) => {
  return (
    <Grid justify="center" align="center" gap="6" className="min-h-screen xs: p-4">
      <Container size="4">
        <Text size="h3" align="center" className="mb-4">
          Support
        </Text>
        <Text align="center">Have a question? We are here to help.</Text>
        <Grid columns="1" gap="6" className="mt-6">
          <Row justify="between" align="center">
            <Input
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              placeholder="Enter your email"
            />
            <Button variant="transparent" onClick={() => router.push("/auth/login")}>
              Subscribe
            </Button>
          </Row>
        </Grid>
        <Grid columns={{ xs: "1", sm: "2" }} gap="6" className="mt-6 xs:p-4">
          <Paper>
            <Text align="center">Here to solve your problems, 24/7</Text>
            <Form onSubmit={formik.handleSubmit}>
              <Input
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                placeholder="Enter your name"
              />
              <Input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                placeholder="Enter your email"
              />
              <Input
                name="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
                type="text"
                placeholder="Problem subject"
              />
              <Input
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                type="textarea"
                placeholder="Write your message here..."
                className="h-24"
              />
              <Button type="submit" variant="transparent" fullWidth>
                Send Message
              </Button>
            </Form>
          </Paper>
          <div className="space-y-6 justify-center align-center">
            <Accordition
              items={[
                {
                  value: "Password",
                  title: "How to reset your password?",
                  content: (
                    <>
                      <Text size="body1">
                        You can reset your password in the profile menu. Enter your email, and we
                        will send you a reset link.
                      </Text>
                      <Row className="mt-4 space-x-4">
                        <Button
                          fullWidth
                          variant="transparent"
                          onClick={() => router.push("/settings")}
                        >
                          Settings
                        </Button>
                        <Button
                          variant="secondary"
                          fullWidth
                          onClick={() => router.push("/auth/forgot-password")}
                        >
                          Reset Password
                        </Button>
                      </Row>
                    </>
                  ),
                },
                {
                  value: "Security",
                  title: "Security",
                  content:
                    "Security and settings can be changed in the profile menu. You can enable 2FA, change your password and more.",
                },
                {
                  value: "Balances",
                  title: "Balances",
                  content: "Balances can be added in the profile menu.",
                },
                {
                  value: "Transactions",
                  title: "Transactions",
                  content: (
                    <>
                      <Text size="body1">
                        You can see your transaction history, including amounts and dates, in the
                        profile menu.
                      </Text>
                      <Button
                        variant="secondary"
                        fullWidth
                        onClick={() => router.push("/settings")}
                        className="mt-4"
                      >
                        Transactions
                      </Button>
                    </>
                  ),
                },
                {
                  value: "Verify your account",
                  title: "Verify your account",
                  content: (
                    <>
                      <Text size="body1">
                        Upload your ID and a selfie with your ID to verify your account.
                        Verification is processed within 24 hours.
                      </Text>
                      <Button
                        variant="secondary"
                        fullWidth
                        onClick={() => router.push("/settings")}
                        className="mt-4"
                      >
                        Verify Account
                      </Button>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </Grid>
      </Container>
    </Grid>
  );
};
