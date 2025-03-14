"use client";

import { useParams, useRouter } from "next/navigation";

import { fundingTypesMock } from "@/core";
import { FundOption } from "@/feuture";

export default function FundCurrencyPage() {
  const router = useRouter();
  const params = useParams();

  const currency = params?.currency as string;
  const fundingTypes = fundingTypesMock[currency];

  !fundingTypes && router.push("/transactions/fund");

  return <FundOption currency={currency} fundingTypes={fundingTypes} router={router} />;
}
