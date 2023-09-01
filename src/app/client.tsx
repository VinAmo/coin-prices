"use client";

import { CoinData, CoinType } from "@/types";
import dynamic from "next/dynamic";
import { useState } from "react";
import ThemeSwitch from "@/components/theme-switch";

const DynamicButton = dynamic(() => import("@/components/button"), {
  ssr: false,
});

const CoinPrice = ({ data }: { data: CoinData }) => {
  const time = new Date(data.timestamp).toLocaleString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  return (
    <>
      <div className="my-4 text-primary-600">
        Current ({time}) price of{" "}
        <span className="font-bold text-lg">{data.buy}</span> is
      </div>
      <div className="text-primary-800">
        <span className="text-7xl font-primary sm:text-9xl">
          {Number(data.ask).toFixed(2)}
        </span>
        <span>{data.market}</span>
      </div>
    </>
  );
};

const Client = () => {
  const [data, setData] = useState<CoinData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onClick = async (coin: string) => {
    try {
      const res = await fetch(
        `https://trade.cointree.com/api/prices/aud/${coin}`
      );
      if (!res.ok) {
        setError("Network response was not ok.");
        setData(null);
      }
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
        setData(null);
      } else {
        setError("An unknown error occurred while fetching data.");
        setData(null);
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div
        className="my-8 inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] "
        role="group"
      >
        <DynamicButton
          name={CoinType.BTC}
          category="solid"
          alignment="left"
          onClick={() => onClick(CoinType.BTC)}
        />
        <DynamicButton
          name={CoinType.ETH}
          category="solid"
          alignment="middle"
          onClick={() => onClick(CoinType.ETH)}
        />
        <DynamicButton
          name={CoinType.XRP}
          category="solid"
          alignment="right"
          onClick={() => onClick(CoinType.XRP)}
        />
      </div>

      {data ? (
        <CoinPrice data={data} />
      ) : (
        <div className="text-gray-600">Select a coin to check the price</div>
      )}
      {error && <div className="text-red-600">{error}</div>}
      <ThemeSwitch />
    </div>
  );
};

export default Client;
