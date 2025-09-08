"use client";

import { Container } from "@radix-ui/themes";
import { FormikProps } from "formik";
import Link from "next/link";

import bg from "@/public/farming-bg.png";
import { Button, Form, Input, Paper, Row, Text } from "@/shared";

interface LoginFormProps {
  formik: FormikProps<{ email: string; password: string }>;
}

export function LoginForm({ formik }: LoginFormProps) {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}>
      <Container size="1" className="p-6">
        <Paper>
          <Form onSubmit={formik.handleSubmit}>
            <Text size="h3" align="center">
              Auth to your wallet
            </Text>
            <Input type="email" placeholder="Email Address" {...formik.getFieldProps("email")} />
            <Input type="password" placeholder="Password" {...formik.getFieldProps("password")} />
            <Button fullWidth type="submit" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "Loading..." : "Login"}
            </Button>
          </Form>
          <Row justify="between" className="mt-4">
            <Link href="/auth/reset-password" className="text-blue-500 hover:text-blue-400 text-xs">
              Forgot Password?
            </Link>
            <Link href="/auth/sign-up" className="text-blue-500 hover:text-blue-400 text-xs">
              Register
            </Link>
          </Row>
        </Paper>
      </Container>
    </div>
  );
}
