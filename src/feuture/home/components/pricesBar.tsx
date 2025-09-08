import React from "react";

import type { Price } from "@/core";
import { NstxLogo } from "@/public";

interface PricesBarProps {
  prices?: Price[];
}

export const PricesBar = ({ prices }: PricesBarProps) => (
  <div className="top-0 absolute w-full inset-x-0 p-8 scrollbar-none">
    <div className="w-full text-white">
      <div className="mx-auto flex items-center space-x-4 lg:max-w-7xl">
        <NstxLogo className="text-white" />
        <div className="flex overflow-x-auto no-scrollbar space-x-4">
          {prices?.map((coin) => (
            <div key={coin.symbol} className="flex items-center space-x-2">
              <span>{coin.symbol}</span>
              <span className="text-green-400">${Number(coin.price).toFixed(6)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
