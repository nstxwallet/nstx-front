"use client";
import ClientLayout from "@/shared/layout/ClientLayout";
import type React from "react";

export default function Settings({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
