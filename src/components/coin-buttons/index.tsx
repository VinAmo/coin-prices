"use client";

import { CoinType } from "@/types";
import dynamic from "next/dynamic";

const DynamicButton = dynamic(() => import("@/components/button"), {
  ssr: false,
});

const CoinButtons = ({ onClick }: { onClick: (coin: string) => void }) => {
  return (
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
  );
};

export default CoinButtons;
