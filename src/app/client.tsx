"use client";

import { CoinType } from "@/types";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicButton = dynamic(() => import("@/components/button"), {
  ssr: false,
});

const data = {
  sell: "AUD",
  buy: "BTC",
  ask: 42711.81772783,
  bid: 41929.27495688,
  rate: 0.000023412724,
  spotRate: 42320.54634236,
  market: "AUD",
  timestamp: "2023-08-30T07:01:43.7533048+00:00",
  rateType: "Ask",
  rateSteps: "",
};

const Client = () => {
  const [coin, setCoin] = useState<CoinType | null>(null);

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
    <div className="flex-1 flex flex-col justify-center items-center">
      <div
        className="my-8 inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] "
        role="group"
      >
        <DynamicButton
          name="BTH"
          position="left"
          onClick={() => setCoin(CoinType.BTC)}
        />
        <DynamicButton
          name="ETH"
          position="middle"
          onClick={() => setCoin(CoinType.ETH)}
        />
        <DynamicButton
          name="XRP"
          position="right"
          onClick={() => setCoin(CoinType.XRP)}
        />
      </div>

      <div className="my-4 text-gray-600">
        Current ({time}) price of {data.buy} is
      </div>
      <div className="text-primary-800">
        <span className="text-7xl font-primary sm:text-9xl">
          {Number(data.ask).toFixed(2)}
        </span>
        <span>{data.market}</span>
      </div>
    </div>
  );
};

export default Client;
