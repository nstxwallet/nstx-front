"use client";

import { Button, Form, Grid, Input, Paper, Typography } from "@/shared";
import type { FormikProps } from "formik";
import { useRouter } from "next/navigation";

interface ForgotPasswordFormProps {
  formik: FormikProps<{ email: string }>;
  step: "email" | "check";
}

export const ForgotPasswordForm = ({ formik, step }: ForgotPasswordFormProps) => {
  const router = useRouter();

  return (
    <Grid container justify="center" align="center" className="min-h-screen">  
      <Paper className="w-full text-center p-8 absolute top-0 left-0 bg-gradient-to-b from-pink-400 to-purple-500">
        <Typography variant="h1">Reset Your Password</Typography>
        <Typography variant="h6">
          {step === "email"
            ? "Enter your email to receive a verification code."
            : "Check your email for the reset link."}
        </Typography>
      </Paper> 
      <div className="mt-40 flex justify-center">
        <Paper className="max-w-md p-6">
          {step === "email" ? (
            <EmailStep formik={formik} />
          ) : (
            <CheckEmailStep onBackToLogin={() => router.push("/auth/login")} />
          )}
        </Paper>
      </div>
    </Grid>
  );
};

interface EmailStepProps {
  formik: FormikProps<{ email: string }>;
}

const EmailStep = ({ formik }: EmailStepProps) => (
  <Form onSubmit={formik.handleSubmit}>
    <Typography variant="h3" center className="mb-4">
      Reset Password
    </Typography>
    <Input
      type="email"
      name="email"
      placeholder="Email Address"
      onChange={formik.handleChange}
      value={formik.values.email}
      required
    />
    <Button fullWidth type="submit">
      Send Code
    </Button>
  </Form>
);

interface CheckEmailStepProps {
  onBackToLogin: () => void;
}

const CheckEmailStep = ({ onBackToLogin }: CheckEmailStepProps) => (
  <>
    <Typography variant="h5" center className="mb-4">
      We’ve sent a reset password link to your email. Please check your inbox and follow the
      instructions to reset your password.
    </Typography>
    <Button fullWidth onClick={onBackToLogin}>
      Back to Login
    </Button>
  </>
);
