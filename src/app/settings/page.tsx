"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

import { useAuth, useBalances, useToast } from "@/core";
import { SettingsForm } from "@/feuture";
import { Loading } from "@/shared";

export default function Settings() {
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const { balances } = useBalances();

  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phone: user?.phone || "",
      employmentType: user?.employmentType || "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      employmentType: Yup.string().required("Employment Type is required"),
    }),
    onSubmit: () => {
      toast({
        title: "User information updated",
        description: "Your changes have been saved successfully",
      });
      setOpen(false);
    },
  });

  if (!user || !balances) {
    return <Loading />;
  }

  return (
    <SettingsForm
      isVerified={user.isVerified}
      router={router}
      user={user}
      balances={balances}
      open={open}
      setOpen={setOpen}
      formik={formik}
    />
  );
}
