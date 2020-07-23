export const countProducts = (items) =>
  items.reduce((acc, curr) => acc + curr.quantity, 0);
