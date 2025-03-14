"use client";

import React, { createContext, type FC, type ReactNode, useEffect, useState } from "react";
import "reflect-metadata";
import {
  AuthService,
  BalanceService,
  ToastProvider,
  ToastService,
  TransactionService,
} from "@/core";
import { BinanceService } from "@/core/services/binance/BinancePricesService";
import { UserSettingsService } from "@/core/services/settings";
import { Loading } from "@/shared";
import { container } from "tsyringe";

interface Services {
  authService: AuthService;
  balanceService: BalanceService;
  transactionService: TransactionService;
  userSettingsService: UserSettingsService;
  toastService: ToastService;
  binanceService: BinanceService;
}

interface ServicesProviderProps {
  children: ReactNode;
}

export const ServicesContext = createContext<Services | null>(null);

export const ServicesProvider: FC<ServicesProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState<Services | null>(null);

  useEffect(() => {
    const init = async () => {
      const authService = container.resolve(AuthService);
      const balanceService = container.resolve(BalanceService);
      const transactionService = container.resolve(TransactionService);
      const userSettingsService = container.resolve(UserSettingsService);
      const toastService = container.resolve(ToastService);
      const binanceService = container.resolve(BinanceService);

      setServices({
        authService,
        balanceService,
        transactionService,
        userSettingsService,
        toastService,
        binanceService,
      });
      setLoading(false);
    };
    init().then((r) => r);
  }, []);

  if (loading || !services) {
    return <Loading />;
  }

  return (
    <ServicesContext.Provider value={services}>
      <ToastProvider>{children}</ToastProvider>
    </ServicesContext.Provider>
  );
};
