import { Item } from "@/types/declarations";
import { create } from "zustand";

type cartStore = {
  cart: Item[];
};

export const useCartStore = create<cartStore>(() => ({
  cart: [],
}));
