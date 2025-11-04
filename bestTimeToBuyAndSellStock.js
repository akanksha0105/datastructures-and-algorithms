//Problem 4 : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

const bestTimeToBuyAndSellStock = (prices) => {
	let minPrice = prices[0];
	let maxProfit = 0;

	for (let i = 0; i < prices.length; i++) {
		let profit = prices[i] - minPrice;
		maxProfit = Math.max(profit, maxProfit);
		minPrice = Math.min(minPrice, prices[i]);
	}

	return maxProfit;
};
