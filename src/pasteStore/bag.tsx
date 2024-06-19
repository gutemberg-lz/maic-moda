import { Product } from "@/Classes/productClass";
import { Cart } from "@/pasteTypes/cart";
import { create } from "zustand";

type States = {
  cart: Cart[]
};

type Actions = {
  upsertCartItem: (cart: Cart) => void;
  quantityMinusCart: (id: number) => void;
  quantityPlusCart: (id: number) => void;
};
const initState: States = {
  cart: []
};
export const useBagStore = create<States & Actions>()((set) => ({
  ...initState,
  upsertCartItem: (cart) =>
    set((state) => {
      let newCart = state.cart;
      let cartIndex = newCart.findIndex(
        (cartItem) =>
          cartItem.data.title === cart.data.title &&
          cartItem.size === cart.size
      );

      if (cartIndex < 0) {
        newCart.push(cart);
        cartIndex = newCart.findIndex(
          (cartItem) =>
            cartItem.data.title === cart.data.title &&
            cartItem.size === cart.size
        );
      }

      newCart[cartIndex].quantity += 1;
      newCart[cartIndex].size = cart.size;

      return { ...state, cart: newCart };
    }),
  quantityMinusCart: (id) =>
    set((state) => {
      let newCart = state.cart;
      let cartIndex = newCart.findIndex((cartItem) => cartItem.id === id);

      if (cartIndex >= 0) {
        newCart[cartIndex].quantity -= 1;
      }

      if (newCart[cartIndex].quantity <= 0) {
        newCart = newCart.filter((cartItem) => cartItem.id !== id);
      }

      return { ...state, cart: newCart };
    }),
  quantityPlusCart: (id) =>
    set((state) => {
      let newCart = state.cart;
      let cartIndex = newCart.findIndex((cartItem) => cartItem.id === id);
      if (cartIndex >= 0) {
        newCart[cartIndex].quantity += 1;
      }
      return { ...state, cart: newCart };
    }),
}));
