"use client";

import { CoinData } from "@/types";
import { useState } from "react";
import ThemeSwitch from "@/components/theme-switch";
import PricePanel from "@/components/price-panel";
import CoinButtons from "@/components/coin-buttons";

const Client = () => {
  const [data, setData] = useState<CoinData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onClick = async (coin: string) => {
    try {
      const res = await fetch(
        `https://trade.cointree.com/api/prices/aud/${coin}`
      );
      if (!res.ok) {
        throw new Error("Received an 'not ok' HTTP response.");
      }

      const json = await res.json();

      if (!json) {
        throw new Error("Received empty data.");
      }

      setData(json);
      setError(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while fetching data.");
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CoinButtons onClick={onClick} />

      {data ? (
        <PricePanel data={data} />
      ) : (
        <div className="text-gray-600">Select a coin to check the price</div>
      )}
      {error && <div className="text-red-600">{error}</div>}
      <ThemeSwitch />
    </div>
  );
};

export default Client;
