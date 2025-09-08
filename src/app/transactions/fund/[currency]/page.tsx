"use client";

import { useParams, useRouter } from "next/navigation";
import { FundOption, useFundingTypes } from "@/feuture";
import {  ErrorАlert, Loading } from "@/shared"; 
export default function FundCurrencyPage() {
  const router = useRouter();
  const params = useParams();

  const asset = params?.currency as string;
  const { networks, loading, error } = useFundingTypes(asset);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorАlert title="Error" description={error} />;
  }

  return <FundOption currency={asset} networks={networks} />;
}
