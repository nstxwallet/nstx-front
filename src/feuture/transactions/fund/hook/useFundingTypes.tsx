import { useEffect, useState, useMemo } from "react";
import { instance } from "@/core";
import { filter } from "rxjs";

interface Network {
  network: string;
}

export function useFundingTypes(asset: string) {
  const [networks, setNetworks] = useState<Network[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFundingTypes = async () => {
      try {
        const { data } = await instance.get(`/binance/available-networks/${asset}`);
        setNetworks(data.networks || []);
      } catch (err) {
        setError("Failed to fetch funding types");
      } finally {
        setLoading(false);
      }
    };

    fetchFundingTypes();
  }, [asset]);

  return { networks, loading, error };
}
