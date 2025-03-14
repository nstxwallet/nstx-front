"use client";

import type { FormikProps } from "formik";
import Link from "next/link";

import bg from "@/public/farming-bg.png";
import { Button, Form, Input, Paper, Text } from "@/shared";
import { Container } from "@radix-ui/themes";

interface SignUpProps {
  formik: FormikProps<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }>;
}

export const SignUpForm = ({ formik }: SignUpProps) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container size="1" className="p-6">
        <Paper>
          <Text size="h3" align="center" className="mb-4">
            Create an Account
          </Text>
          <Form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <Button fullWidth type="submit">
              Sign Up
            </Button>
          </Form>
          <Text align="center" className="mt-4">
            <Link href="/auth/login" className="text-blue-500 hover:text-blue-400 text-xs">
              Already have an account? Log in
            </Link>
          </Text>
        </Paper>
      </Container>
    </div>
  );
};
