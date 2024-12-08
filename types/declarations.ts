import { ImageURISource } from "react-native";

export type collectionType = {
  title: string;
  image?: string;
  backgroundColor: string;
};

export type bikeTypes =
  | "Mountain Bikes"
  | "City Bikes"
  | "Road Bikes"
  | "Electric Bikes";

export type bike = {
  name: string;
  rating?: number;
  type: bikeTypes[];
  imageName?: string;
  price: number;
  slug?: string;
  images?: Record<string, ImageURISource>;
};

export interface wishListItem {
  slug: string;
  inList?: boolean;
}

export interface Item {
  slug: string;
  quantity: number;
}

export interface cartItem extends bike {
  slug: string;
  quantity: number;
}

export interface onWishlist extends bike {
  slug: string;
  inList?: boolean;
}
