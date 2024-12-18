import React from "react";
import { Text, View } from "react-native";
import CustomButton from "../general/CustomButton";
import { useRouter } from "expo-router";

const QoutesSection = () => {
  const router = useRouter();
  return (
    <View className="flex flex-col self-start pb-16 pt-6  w-full bg-[#202020] flex flex-col  px-10 justify-center">
      <Text className="text-[5rem] text-[#dddddd] font-[DmMono]">"</Text>
      <Text className="font-[DmMono]  text-[1.5rem] text-[#dddddd]">
        A good service I wish I could buy all the bikes. I recommend them 100%{" "}
      </Text>

      <View className="flex flex-col gap-4 pt-6">
        <Text className="text-[1.5rem] text-[#ffffff]  font-[DmMono]">
          Olurotomi Israel
        </Text>
        <Text className="text-[1.125rem] text-[#dddddd] font-[DmMono]">
          CEO, REBRAND
        </Text>
      </View>

      <View className="mt-10">
        <CustomButton variant="light" action={() => router.push("/shop")} />
      </View>
    </View>
  );
};

export default QoutesSection;
