"use client";

import "reflect-metadata";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { ServicesProvider } from "@/core";
import { ThemeProvider } from "./ThemeProvider";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const queryClient = new QueryClient();

  return (
    <ServicesProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen overflow-auto w-full">{children}</div>
        </ThemeProvider>
      </QueryClientProvider>
    </ServicesProvider>
  );
};
