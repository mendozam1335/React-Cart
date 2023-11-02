export const getTotals = (cart) => {
  let totalCost = 0;
  let totalAmount = 0;
  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost = totalCost + price * 100 * amount;
  }
  totalCost = totalCost / 100;
  return { totalAmount, totalCost };
};
