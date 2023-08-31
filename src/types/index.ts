export enum CoinType {
  BTC = "BTC",
  ETH = "ETH",
  XRP = "XRP",
}

export interface CoinData {
  sell: string;
  buy: string;
  ask: number;
  bid: number;
  rate: number;
  spotRate: number;
  market: string;
  timestamp: string;
  rateType: string;
  rateSteps: string;
}
