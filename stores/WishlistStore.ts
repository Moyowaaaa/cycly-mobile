import { bikes } from "@/constants/bikes";
import { bike, wishListItem } from "@/types/declarations";
import { create } from "zustand";

type WishlistStore = {
  wishlist: wishListItem[];
  productsInWishlist: bike[];
  isInWishList: (slug: string) => boolean;
  addItemToWishList: (slug: string) => void;
  removeItemFromWishlist: (slug: string) => void;
};

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  wishlist: [],
  productsInWishlist: [],

  isInWishList(slug) {
    return get().wishlist.some((item) => item.slug === slug);
  },

  addItemToWishList(slug) {
    set((state) => {
      const isInList = state.wishlist.some((item) => item.slug === slug);
      const updatedWishlist = isInList
        ? state.wishlist
        : [...state.wishlist, { slug, inList: true }];

      const updatedProductsInWishlist = updatedWishlist
        .map((item) => {
          const product = bikes.find((bike) => bike.slug === item.slug);
          return product ? { ...product, slug: item.slug } : null;
        })
        .filter(Boolean) as bike[];

      return {
        wishlist: updatedWishlist,
        productsInWishlist: updatedProductsInWishlist,
      };
    });
  },

  removeItemFromWishlist(slug) {
    set((state) => {
      const updatedWishlist = state.wishlist.filter(
        (item) => item.slug !== slug
      );

      const updatedProductsInWishlist = updatedWishlist
        .map((item) => {
          const product = bikes.find((bike) => bike.slug === item.slug);
          return product ? { ...product, slug: item.slug } : null;
        })
        .filter(Boolean) as bike[];
      return {
        wishlist: updatedWishlist,
        productsInWishlist: updatedProductsInWishlist,
      };
    });
  },
}));
