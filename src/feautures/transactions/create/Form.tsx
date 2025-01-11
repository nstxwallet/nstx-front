"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { CiCreditCard2 } from "react-icons/ci";

import { PaymentOptionCard } from "@/feautures";
import { Col, NstxLogo, PayPalLogo, Typography } from "@/shared";

export const PaymentsForm = () => {
  const router = useRouter();

  return (
    <Col className="grid grid-cols-1 xs:grid-cols-1 gap-6 text-white">
      <>
        <PaymentOptionCard
          icon={<NstxLogo />}
          description="Nstx"
          onClick={() => router.push("/transactions/create/nstx")}
          className="mb-4"
        />
        <PaymentOptionCard
          icon={<PayPalLogo />}
          description="PayPal"
          onClick={() => router.push("/transactions/create/paypal")}
          className="mb-4"
        />
        <PaymentOptionCard
          icon={<CiCreditCard2 />}
          description="Bank transfer"
          onClick={() => router.push("/transactions/create")}
          className="mb-4"
        />
        <PaymentOptionCard
          icon={<CiCreditCard2 />}
          description="Debit/Credit card"
          onClick={() => router.push("/transactions/create")}
          className="mb-4"
        />
      </>

      <>
        <Typography variant="h4">Overview of NSTX System Transfer Capabilities</Typography>
        <Typography variant="body2">
          Internal User-to-User Transfers within NSTX: NSTX enables users to securely transfer funds
          to each other within the platform.
        </Typography>
        <Typography variant="body2">
          Transfers from NSTX to Bank Cards: users can also withdraw funds from NSTX to their
          personal bank cards.
        </Typography>
        <Typography variant="body2">
          Funding NSTX Wallet via PayPal: users have the option to fund their NSTX wallet directly
          using PayPal, making it easy to add funds from an external payment provider.
        </Typography>
      </>
    </Col>
  );
};
