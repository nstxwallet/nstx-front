"use client";

import { Container } from "@radix-ui/themes";
import type { FormikProps } from "formik";
import { useRouter } from "next/navigation";

import bg from "@/public/farming-bg.png";
import { Button, Form, Input, Paper, Row, Text } from "@/shared";

interface ResetPasswordProps {
  formik: FormikProps<{ newPassword: string; confirmPassword: string }>;
  router: ReturnType<typeof useRouter>;
}

export const ResetPasswordForm = ({ formik, router }: ResetPasswordProps) => {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container size="1" className="p-6">
        <Paper>
          <Text size="h3" align="center">
            Reset Your Password
          </Text>
          <Form onSubmit={formik.handleSubmit}>
            <Input
              type="password"
              name="newPassword"
              placeholder="New Password"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <Row className="mt-4">
              <Button fullWidth type="submit">
                Reset Password
              </Button>
              <Button fullWidth variant="transparent" onClick={() => router.push("/auth/login")}>
                Return to Login
              </Button>
            </Row>
          </Form>
        </Paper>
      </Container>
    </div>
  );
};
