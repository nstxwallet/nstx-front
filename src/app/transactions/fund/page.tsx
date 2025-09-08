"use client";

import { instance } from "@/core";
import { ChooseFundCurrencyForm } from "@/feuture";
import { Loading , ErrorАlert} from "@/shared";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FundNstxPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const { data } = await instance.get("/binance/available-networks");
        setCurrencies(data); 
      } catch (err) {
        setError("Failed to fetch currencies");
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorАlert title="Error" description={error} />;

  return (
    <ChooseFundCurrencyForm
      currencies={currencies}
      search={search}
      setSearch={setSearch}
      router={router}
    />
  );
}
