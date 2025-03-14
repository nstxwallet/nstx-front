"use client";

import bg from "@/public/farming-bg.png";
import { Button, Form, Input, Paper, Row, Text } from "@/shared";
import { Container } from "@radix-ui/themes";
import type { FormikProps } from "formik";
import { useRouter } from "next/navigation";

interface ForgotPasswordFormProps {
  formik: FormikProps<{ email: string }>;
  step: "email" | "check";
}

export const ForgotPasswordForm = ({ formik, step }: ForgotPasswordFormProps) => {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container size="1" className="p-6">
        <Paper>
          {step === "email" ? (
            <EmailStep formik={formik} />
          ) : (
            <CheckEmailStep onBackToLogin={() => router.push("/auth/login")} />
          )}
        </Paper>
      </Container>
    </div>
  );
};

interface EmailStepProps {
  formik: FormikProps<{ email: string }>;
}

const EmailStep = ({ formik }: EmailStepProps) => (
  <Form onSubmit={formik.handleSubmit}>
    <Text size="h3" align="center">
      Reset Password
    </Text>
    <Input
      type="email"
      name="email"
      placeholder="Email Address"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
    <Row className="flex space-x-2 mt-4">
      <Button fullWidth variant="transparent" onClick={() => formik.resetForm()}>
        Cancel
      </Button>
      <Button fullWidth type="submit">
        Send Code
      </Button>
    </Row>
  </Form>
);

interface CheckEmailStepProps {
  onBackToLogin: () => void;
}

const CheckEmailStep = ({ onBackToLogin }: CheckEmailStepProps) => (
  <div className="text-center space-y-4">
    <Text size="h3" align="center">
      Check Your Email
    </Text>
    <Text size="body1" align="center" className="text-gray-500">
      We’ve sent a reset password link to your email. Please check your inbox.
    </Text>
    <Button fullWidth onClick={onBackToLogin}>
      Back to Login
    </Button>
  </div>
);
