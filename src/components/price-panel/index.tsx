import { CoinData } from "@/types";

const PricePanel = ({ data }: { data: CoinData }) => {
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
          {Number(data.ask).toLocaleString("en-AU", {
            style: "currency",
            currency: "AUD",
          })}
        </span>
        <span>{data.market}</span>
      </div>
    </>
  );
};

export default PricePanel;
