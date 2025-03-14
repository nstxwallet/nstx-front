export const calculateBalanceAfterPayment = (
  balances: { currency: string; value: number }[],
  currency: string,
  amount: string,
): number => {
  const parsedAmount = Number.parseFloat(amount);
  if (Number.isNaN(parsedAmount)) {
    return 0;
  }

  const balance = balances.find((b) => b.currency === currency);
  return balance ? balance.value - parsedAmount : -parsedAmount;
};

export const handleCopy = (value: string | object) => {
  navigator.clipboard.writeText(value.toString());
};
