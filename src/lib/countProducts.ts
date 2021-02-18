export const countProducts = (items: any[]): number =>
  items.reduce((acc, curr) => acc + curr.quantity, 0);
