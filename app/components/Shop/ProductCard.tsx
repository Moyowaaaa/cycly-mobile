import { bikes } from "@/constants/bikes";
import { bike } from "@/types/declarations";
import { removeLastLetter } from "@/utils/utils";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

const ProductCard = ({ bike }: { bike: bike }) => {
  const type = removeLastLetter(bike.type);

  return (
    <View
      style={{
        width: "49%",
        marginBottom: 16,

        height: 400,
        backgroundColor: "#f9f6ff",
        justifyContent: "space-between",
        paddingBottom: 6,
      }}
    >
      <View className="h-4/6 w-full ">
        <Image
          source={bike?.images?.preview}
          className="w-full h-full object-contain "
          resizeMode="cover"
        />
      </View>

      <View className="flex gap-4 px-2">
        <Text className="text-[1.5rem] font-bold  text-center">
          {bike.name}
        </Text>
        <Text className="text-[1rem] text-[black] text-center">
          ${bike.price}
        </Text>

        <View className="flex flex-row gap-2 mx-auto self-start">
          <Ionicons name="heart-outline" color={"black"} size={24} />
          <Ionicons name="cart-outline" color={"black"} size={24} />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;