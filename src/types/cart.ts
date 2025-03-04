import { Product } from "./products";

export type cartItem = {
  product: Product;
  quantity: number;
};

export type cartState = {
  cart: cartItem[];
  totalQuantity: number;
  totalPrice: number;
  addItem: (payload: Product) => void;
  removeItem: (id: string) => void;
};
