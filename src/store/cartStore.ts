import { create } from "zustand";
import { persist } from "zustand/middleware";
import { cartItem, cartState } from "../types/cart";
import { Product } from "../types/products";
import { calculateTotal } from "../utils/cart";

export const useCartStore = create<cartState>()(
  persist(
    (set) => ({
      cart: [],
      totalQuantity: 0,
      totalPrice: 0,
      addItem(payload: Product) {
        set((state: cartState) => {
          const existingProduct = state.cart.find(
            (item) => item.product.id === payload.id
          );

          const updatedCart = existingProduct
            ? state.cart.map((item) =>
                item.product.id === payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...state.cart, { product: payload, quantity: 1 }];

          return {
            cart: updatedCart,
            quantity: state.totalQuantity + 1,
            totalQuantity: state.totalQuantity + 1,
            totalPrice: calculateTotal(updatedCart),
          };
        });
      },

      removeItem(id: string) {
        set((state: cartState) => {
          const existingProduct = state.cart.find(
            (item: cartItem) => item.product.id === id
          );

          if (!existingProduct) return { cart: state.cart };

          const updatedCart =
            existingProduct?.quantity > 1
              ? state.cart.map((item) =>
                  item.product.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                )
              : state.cart.filter((item: cartItem) => item.product.id !== id);

          return {
            cart: updatedCart,
            quantity: state.totalQuantity - 1,
            totalQuantity: state.totalQuantity - 1,
            totalPrice: calculateTotal(updatedCart),
          };
        });
      },
      clearItem(id: string) {
        set((state) => {
          const itemQuantity =
            state.cart.find((item) => item.product.id === id)?.quantity || 0;

          const updatedCart = state.cart.filter(
            (item) => item.product.id !== id
          );

          return {
            cart: updatedCart,
            quantity: state.totalQuantity - itemQuantity,
            totalQuantity: state.totalQuantity - itemQuantity,
            totalPrice: calculateTotal(updatedCart),
          };
        });
      },
    }),

    { name: "cart-storage" }
  )
);
