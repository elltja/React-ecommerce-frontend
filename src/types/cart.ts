import { Product } from "./products";

export type cartItem = {
  product: Product;
  quantity: number;
};

export type cartState = {
  cart: cartItem[];
  quantity: number;
  addItem: (payload: Product) => void;
  removeItem: (id: string) => void;
  clearItem: (id: string) => void;
};
