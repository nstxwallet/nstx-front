"use client";

import ClientLayout from "@/shared/layout/clientLayout";
import type React from "react";

export default function Transactions({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
