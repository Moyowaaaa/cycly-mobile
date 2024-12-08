import { useCartStore } from "@/stores/CartStore";
import { useWishlistStore } from "@/stores/WishlistStore";
import { bike } from "@/types/declarations";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useMemo, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import Toast from "react-native-toast-message";
import { useStore } from "zustand";

const ProductCard = ({ bike }: { bike: bike }) => {
  const {
    wishlist,
    addItemToWishList,
    removeItemFromWishlist,
    productsInWishlist,
  } = useStore(useWishlistStore);
  const [status, setStatus] = useState<boolean>(false);
  const { addItemToCart } = useStore(useCartStore);

  const onAddToCart = () => {
    if (bike.slug) {
      addItemToCart(bike.slug, 1);
    }
  };

  useEffect(() => {
    if (bike.slug) {
      setStatus(wishlist.map((item) => item.slug).includes(bike.slug));
    }
  }, [productsInWishlist]);

  const toggleAddToWishlist = () => {
    if (status) {
      removeItemFromWishlist(bike.slug as string);
      setStatus(false);
      Toast.show({
        type: "info",
        text1: "Item Removed",
        text2: `Removed item from your wishlist.`,
        position: "top",
      });
    } else {
      addItemToWishList(bike.slug as string);
      setStatus(true);
      Toast.show({
        type: "success",
        text1: "Item Added",
        text2: `Added item to your wishlist.`,
        position: "top",
      });
    }
  };

  return (
    <View
      style={{
        width: "49%",
        marginBottom: 16,

        height: 500,
        backgroundColor: "#f9f6ff",
        justifyContent: "space-between",
        paddingBottom: 12,
      }}
    >
      <View className="h-4/6 w-full ">
        <Image
          source={bike?.images?.preview}
          className="w-full h-full object-contain"
          resizeMode="cover"
        />
      </View>

      <View className="flex gap-2 px-2 justify-between h-2/6 pt-4">
        <Text className="text-[1.3rem] font-[DmMono]  text-center">
          {bike.name}
        </Text>

        <Text className="text-[1.4rem] text-[black] font-[DmMono] text-center">
          ${bike.price}
        </Text>

        <View className="flex flex-row justify-center gap-1 items-center">
          <Text>{bike.rating}/5</Text>
          <Svg width=" 18" height="18" viewBox="0 0 24 24" fill="none">
            <Path
              d="M5.73986 16C5.84986 15.51 5.64986 14.81 5.29986 14.46L2.86986 12.03C2.10986 11.27 1.80986 10.46 2.02986 9.76C2.25986 9.06 2.96986 8.58 4.02986 8.4L7.14986 7.88C7.59986 7.8 8.14986 7.4 8.35986 6.99L10.0799 3.54C10.5799 2.55 11.2599 2 11.9999 2C12.7399 2 13.4199 2.55 13.9199 3.54L15.6399 6.99C15.7699 7.25 16.0399 7.5 16.3299 7.67L5.55986 18.44C5.41986 18.58 5.17986 18.45 5.21986 18.25L5.73986 16Z"
              fill={"#F59504"}
            />

            <Path
              d="M18.6998 14.4599C18.3398 14.8199 18.1398 15.5099 18.2598 15.9999L18.9498 19.0099C19.2398 20.2599 19.0598 21.1999 18.4398 21.6499C18.1898 21.8299 17.8898 21.9199 17.5398 21.9199C17.0298 21.9199 16.4298 21.7299 15.7698 21.3399L12.8398 19.5999C12.3798 19.3299 11.6198 19.3299 11.1598 19.5999L8.2298 21.3399C7.1198 21.9899 6.1698 22.0999 5.5598 21.6499C5.3298 21.4799 5.1598 21.2499 5.0498 20.9499L17.2098 8.7899C17.6698 8.3299 18.3198 8.1199 18.9498 8.2299L19.9598 8.3999C21.0198 8.5799 21.7298 9.0599 21.9598 9.7599C22.1798 10.4599 21.8798 11.2699 21.1198 12.0299L18.6998 14.4599Z"
              fill={"#F59504"}
            />
          </Svg>
        </View>

        <View className="flex flex-row gap-10 mx-auto self-start">
          <TouchableOpacity onPress={() => toggleAddToWishlist()}>
            <Ionicons
              name="heart-outline"
              color={status ? "#F59504" : "black"}
              size={24}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onAddToCart()}>
            <Ionicons name="cart-outline" color={"black"} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
