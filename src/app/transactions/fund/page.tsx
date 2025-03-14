"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { currency } from "@/core";
import { ChooseFundCurrencyForm } from "@/feuture";

export default function FundNstxPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredCurrencies = currency.filter((cur) =>
    cur.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ChooseFundCurrencyForm
      filteredCurrencies={filteredCurrencies}
      search={search}
      setSearch={setSearch}
      router={router}
      currency={currency}
    />
  );
}
