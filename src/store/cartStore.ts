import { create } from "zustand";
import { persist } from "zustand/middleware";
import { cartItem, cartState } from "../types/cart";
import { Product } from "../types/products";

export const useCartStore = create<cartState>()(
  persist(
    (set) => ({
      cart: [],
      quantity: 0,
      addProduct(payload: Product) {
        set((state: cartState) => {
          const existingProduct = state.cart.find(
            (item) => item.product.id === payload.id
          );

          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.product.id === payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              quantity: state.quantity + 1,
            };
          }

          return {
            cart: [...state.cart, { product: payload, quantity: 1 }],
            quantity: state.quantity + 1,
          };
        });
      },

      removeProduct(id: string) {
        set((state: cartState) => {
          const existingProduct = state.cart.find(
            (item: cartItem) => item.product.id === id
          );

          if (!existingProduct) return { cart: state.cart };

          if (existingProduct?.quantity > 1) {
            return {
              cart: state.cart.map((item) =>
                item.product.id === id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
              quantity: state.quantity - 1,
            };
          }

          return {
            cart: state.cart.filter((item: cartItem) => item.product.id !== id),
            quantity: state.quantity - 1,
          };
        });
      },
    }),

    { name: "cart-storage" }
  )
);
