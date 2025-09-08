"use client";

import "reflect-metadata";
import type React from "react";
import { useState } from "react";

import { ServicesProvider, useAuth } from "@/core";
import { UserIdBar } from "@/feuture";
import { Footer, Header, Loading, NotAuthorized, ThemeProvider } from "@/shared";
import { Theme } from "@radix-ui/themes";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { user } = useAuth();
  const [isLoading] = useState(false);
  if (isLoading) {
    return <Loading />;
  }
  if (!user) {
    return <NotAuthorized />;
  }
  return (
    <ServicesProvider>
      <ThemeProvider>
        <Theme>
          <UserIdBar id={user.id} />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 xs:p-4 md:p-8 lg:p-12">{children}</main>
            <Footer />
          </div>
        </Theme>
      </ThemeProvider>
    </ServicesProvider>
  );
}
