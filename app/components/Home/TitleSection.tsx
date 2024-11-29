import React from "react";
import { ImageBackground, ImageBackgroundBase, Text, View } from "react-native";
import CustomButton from "../general/CustomButton";
import { prefixUrl } from "@/constants/constants";

const TitleSection = () => {
  return (
    <View className="flex-1 justify-center h-screen">
      <ImageBackground
        source={{ uri: `${prefixUrl}titleBike.png` }}
        className="h-full w-full  -z-10"
      >
        <View className="w-screen  h-full flex flex-col justify-center gap-4 ">
          <Text className=" w-full text-[5rem] text-[#d9d9d9] font-bold text-center ">
            CYCLE OF LIFE.
          </Text>

          <Text className="text-[#d9d9d9] text-center max-w-[30rem] mx-auto text-[30px]">
            Discover the joy of cycling with our premium range of bicycles.
          </Text>

          <CustomButton variant="dark" />
        </View>
        {/*  */}
      </ImageBackground>
    </View>
  );
};

export default TitleSection;
