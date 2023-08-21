function maxProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - min);
    }
  }
  
  return maxProfit;
}

const stockPrices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(stockPrices));
