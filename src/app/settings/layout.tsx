"use client"; 
import ClientLayout from "@/shared/layout/clientLayout";
import React from "react"; 

export default function Settings({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
