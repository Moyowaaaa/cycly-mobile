import React from "react";
import { Image, Text, View } from "react-native";

const CartEmptyState = () => {
  return (
    <>
      <View className="h-[500px] mt-4  bottom-2 w-full relative">
        <View className="h-[350px] w-full  absolute bottom-0">
          <Text className="font-[SansMedium] text-center text-[1.5rem] text-[black] font-[500]">
            No items in cart :)
          </Text>

          <Image
            source={require("../../../assets/images/empty.png")}
            className="h-full w-full object-contain"
            alt="log"
          />
        </View>
      </View>
    </>
  );
};

export default CartEmptyState;
