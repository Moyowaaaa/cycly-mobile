import { prefixUrl } from "@/constants/constants";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import CustomButton from "../general/CustomButton";
import { useRouter } from "expo-router";

const QoutesSection = () => {
  const router = useRouter();
  return (
    <View className="flex flex-col self-start pb-16 pt-6  w-full bg-[#202020] flex flex-col  px-10 justify-center">
      <Text className="text-[5rem] text-[#dddddd] font-bold">"</Text>
      <Text className="text-[2rem] text-[#dddddd]">
        {" "}
        A good service I wish I could buy all the bikes. I recommend them 100%{" "}
      </Text>

      <View className="flex flex-col gap-4 pt-6">
        <Text className="text-[2rem] text-[#ffffff]">Olurotomi Israel</Text>
        <Text className="text-[1.125rem] text-[#dddddd]">CEO, REBRAND</Text>
      </View>

      <View className="mt-10">
        <CustomButton variant="light" action={() => router.push("/shop")} />
      </View>
    </View>
  );
};

export default QoutesSection;
