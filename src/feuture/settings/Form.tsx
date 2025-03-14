"use client";

import { Container, Grid } from "@radix-ui/themes";
import { FormikProps } from "formik";
import * as React from "react";

import type { Balance, User } from "@/core";
import {
  Button,
  Dialog,
  Form,
  Input,
  Paper,
  Row,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from "@/shared";
import { useRouter } from "next/navigation";

interface SettingsFormProps {
  user: User;
  open: boolean;
  setOpen: (open: boolean) => void;
  balances: Balance[];
  isVerified: boolean;
  formik: FormikProps<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    employmentType: string;
  }>;
  router: ReturnType<typeof useRouter>;
}
export const SettingsForm = ({ user, open, setOpen, isVerified, formik }: SettingsFormProps) => {
  return (
    <Container size="2" className="p-6">
      <Tabs defaultValue="settings">
        <TabsList>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="settings">
          <Paper>
            <Grid columns={{ xs: "1", md: "2" }} gap="4">
              {[
                { label: "First Name", value: user.firstName },
                { label: "Last Name", value: user.lastName },
                { label: "Email", value: user.email },
                { label: "Phone", value: user.phone },
                { label: "Employment Type", value: user.employmentType },
                { label: "Monthly Income", value: user.monthlyIncome },
              ].map(({ label, value }) => (
                <div key={label} className="space-y-1">
                  <Text size="body1">{label}</Text>
                  <Text size="body1">{value || "Not provided"}</Text>
                </div>
              ))}
            </Grid>
            {!isVerified ? (
              <Row justify="between" align="center" className="mt-4">
                <Text className="text-amber-500">
                  {" "}
                  ⚠️ Unverified. Please verify your account to unlock all features.
                </Text>
                <Button variant="secondary" onClick={() => setOpen(true)}>
                  Verify Now
                </Button>
              </Row>
            ) : (
              <div className="bg-green-900 border border-green-600 p-3 rounded-md">
                <Text className="text-green-400">✅ Verified Account</Text>
                <Text className="text-green-300 text-sm mt-2">
                  You have full access to all features.
                </Text>
              </div>
            )}
          </Paper>
        </TabsContent>

        <TabsContent value="profile">
          <Grid columns="1" gap="6">
            <Row justify="between">
              <Button variant="secondary">Change Avatar</Button>
              <Button variant="secondary">Change Password</Button>
            </Row>
          </Grid>
        </TabsContent>
      </Tabs>
      <Dialog
        open={open}
        setOpen={setOpen}
        onSave={formik.handleSubmit}
        title="Edit Profile"
        description="Update your account details below:"
      >
        <Form onSubmit={formik.handleSubmit}>
          {[
            { name: "firstName", placeholder: "Enter your first name" },
            { name: "lastName", placeholder: "Enter your last name" },
            { name: "email", placeholder: "Enter your email" },
            { name: "phone", placeholder: "Enter your phone number" },
            { name: "employmentType", placeholder: "Enter your employment type" },
          ].map(({ name, placeholder }) => (
            <Input
              key={name}
              type="text"
              name={name}
              placeholder={placeholder}
              value={formik.values[name as keyof typeof formik.values]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ))}
        </Form>
      </Dialog>
    </Container>
  );
};
