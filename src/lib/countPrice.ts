export const countPrice = (items: any[]): number =>
  items.reduce((acc, curr) => acc + curr.quantity * curr.price, 0).toFixed(2);
