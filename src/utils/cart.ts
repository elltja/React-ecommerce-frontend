import { cartItem } from "../types/cart";

export const calculateTotalPrice = (cart: cartItem[]): number => {
  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  return Math.round(total * 100) / 100;
};
