"use client";

import "reflect-metadata";
import React, { useState } from "react";

import { ServicesProvider, useAuth } from "@/core";
import { Container, Header, Loading, NotAllowed } from "@/shared";
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
    return <NotAllowed />;
  }

  return (
    <ServicesProvider>
      <Theme>
        <Header />
        <Container>
         <main>{children}</main>
        </Container>
      </Theme>
    </ServicesProvider>
  );
}
