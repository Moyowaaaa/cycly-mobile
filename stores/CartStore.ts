import { bikes } from "@/constants/bikes";
import { bike, Item } from "@/types/declarations";
import Toast from "react-native-toast-message";
import { create } from "zustand";

type CartStore = {
  cart: Item[];
  itemCount: number;
  itemsInCart: number;
  totalAmountOfItemInCart: number;
  productsInCart: bike[];
  currentStateValues: () => void;
  addItemToCart: (slug: string, quantity?: number) => void;
  removeItemFromCart: (slug: string) => void;
  decreaseItemQuantity: (slug: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  itemCount: 0,
  itemsInCart: 0,
  totalAmountOfItemInCart: 0,
  productsInCart: [],

  currentStateValues() {
    const { cart } = get();
    set({
      itemCount: cart.length,
      itemsInCart: cart.reduce((total, item) => total + item.quantity, 0),
      totalAmountOfItemInCart: cart.reduce((total, item) => {
        const product = bikes.find((p) => p.slug === item.slug);
        return product && typeof product.price === "number"
          ? total + product.price * item.quantity
          : total;
      }, 0),
      productsInCart: cart.map((item) => {
        const product = bikes.find((bike) => bike.slug === item.slug);
        return product ? { ...product, quantity: item.quantity } : null;
      }) as bike[],
    });
  },

  addItemToCart(slug, quantity = 1) {
    set((state) => {
      const existingItem = state.cart.find((item) => item.slug === slug);
      const updatedCart = existingItem
        ? state.cart.map((item) =>
            item.slug === slug
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...state.cart, { slug, quantity }];
      Toast.show({
        type: "success",
        text1: "Item Added",
        text2: `Added to the cart.`,
        position: "top",
      });

      return { cart: updatedCart };
    });

    get().currentStateValues();
  },

  removeItemFromCart(slug) {
    set((state) => ({
      cart: state.cart.filter((item) => item.slug !== slug),
    }));
    Toast.show({
      type: "error",
      text1: "Item Removed",
      text2: `Removed from cart.`,
      position: "top",
    });
    get().currentStateValues();
  },

  decreaseItemQuantity(slug) {
    set((state) => {
      const updatedCart = state.cart
        .map((item) =>
          item.slug === slug ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      return { cart: updatedCart };
    });
    get().currentStateValues();
  },

  clearCart() {
    set(() => ({ cart: [] }));
    get().currentStateValues();
  },
}));
