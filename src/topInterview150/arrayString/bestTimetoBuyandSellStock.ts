export function maxProfit(prices: number[]): number {
  let maxProfit: number = 0;
  let buyPrice: number = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) buyPrice = prices[i];
    else maxProfit = Math.max(maxProfit, prices[i] - buyPrice);
  }

  return maxProfit;
}
