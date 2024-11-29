import { prefixUrl } from "@/constants/constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Navbar = () => {
  return (
    <>
      <View className="w-full absolute top-2 p-2 flex flex-row items-center justify-between">
        <View className=" relative h-[4rem] w-[8rem] ">
          <Image
            source={{ uri: `${prefixUrl}/logo.png` }}
            alt="logo"
            className="h-full w-full object-contain"
          />
        </View>

        <View className="">
          {/* <Text className="text-base text-[#E9E9E9] ">Cart (1)</Text> */}
          <Ionicons name="cart-outline" color={"#e9e9e9"} size={32} />
        </View>
      </View>
    </>
  );
};

export default Navbar;
