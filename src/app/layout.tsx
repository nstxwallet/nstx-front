import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import { Nunito } from "next/font/google";

import { Layout } from "@/shared";

const nunito = Nunito({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NSTX",
  description: "Crypto currency exchange platform",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
