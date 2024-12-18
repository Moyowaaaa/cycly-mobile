import { useCartStore } from "@/stores/CartStore";
import { bike, cartItem } from "@/types/declarations";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useStore } from "zustand";

const CartItem = ({ bike }: { bike: cartItem }) => {
  const { decreaseItemQuantity, addItemToCart, removeItemFromCart } =
    useStore(useCartStore);
  return (
    <>
      <View
        style={{
          width: "80%",
          marginBottom: 16,
          alignSelf: "center",
          height: 500,
          backgroundColor: "#f9f6ff",
          paddingBottom: 4,
        }}
      >
        <View className="h-4/6 w-full rounded-4">
          <Image
            source={bike?.images?.preview}
            className="w-full h-full object-contain"
            resizeMode="cover"
          />
        </View>

        <View className="flex gap-4 mt-4 px-4">
          <Text className="text-[2rem] font-[DmMono]  text-left">
            {bike.name}
          </Text>

          <View className="flex flex-row justify-between items-center">
            <Text className="text-[1.5rem] font-[DmMono]">
              ${bike?.price * bike.quantity}
            </Text>

            <View className="flex gap-2 items-center flex-row">
              <TouchableOpacity
                onPress={() => addItemToCart(bike.slug as string, 1)}
              >
                <Ionicons name="add" color={"black"} size={32} />
              </TouchableOpacity>

              <Text className="text-xl font-[DmMono]">{bike.quantity}</Text>
              <TouchableOpacity
                onPress={() => decreaseItemQuantity(bike.slug as string)}
              >
                <Ionicons name="remove" color={"black"} size={32} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={() => removeItemFromCart(bike.slug)}>
            <View className="border-t-[1px] w-full pt-4 border-t-[grey] flex gap-2 flex-row items-center">
              <Ionicons name="trash" size={30} color={"red"} />
              <Text className="text-[1.2rem]">Remove</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CartItem;
