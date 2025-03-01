import { Product } from "./products";

export type cartItem = {
  product: Product;
  quantity: number;
};

export type cartState = {
  cart: cartItem[];
  quantity: number;
  addProduct: (payload: Product) => void;
  removeProduct: (id: string) => void;
};
