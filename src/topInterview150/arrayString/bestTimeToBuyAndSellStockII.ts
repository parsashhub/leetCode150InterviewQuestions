export function maxProfitII(prices: number[]): number {
    let totalProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        let difference = prices[i + 1] - prices[i];

        // If the difference is positive, it means selling on the next day would yield a profit.
        if (difference > 0) {
            totalProfit += difference;
            // console.log(`Bought on day ${i} at ${prices[i]}, sold on day ${i + 1} at ${prices[i + 1]}, profit: ${difference}`);
        }
    }
    return totalProfit;
}
