"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { TermsForm } from "@/feuture";

export default function Terms() {
  const router = useRouter();
  const handleBack = () => router.back();

  return <TermsForm handleBack={handleBack} />;
}
