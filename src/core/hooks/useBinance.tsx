"use client";
import { useEffect, useState } from "react";

import { useObservable, useServices } from "@/core";

export const useBinance = () => {
  const { binanceService } = useServices();
  const prices = useObservable(binanceService.prices$);

  const [isLoading, setIsLoading] = useState(!prices);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!prices) {
      binanceService.getPrices();
    }

    const subscription = binanceService.prices$.subscribe({
      next: (data) => {
        setIsLoading(false);
        setIsError(!data || data.length === 0);
      },
      error: () => {
        setIsLoading(false);
        setIsError(true);
      },
    });

    return () => subscription.unsubscribe();
  }, [binanceService, prices]);

  return { prices: prices ?? [], isLoading, isError };
};
