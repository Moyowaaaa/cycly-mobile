import React from "react";
import { ImageBackground, ImageBackgroundBase, Text, View } from "react-native";
import CustomButton from "../general/CustomButton";
import { useRouter } from "expo-router";

const TitleSection = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center h-screen">
      <ImageBackground
        source={require(`../../../assets/images/titleBike.png`)}
        className="h-full w-full  -z-20"
      >
        <View className="w-full  h-full flex flex-col justify-center gap-4 ">
          <Text className="font-[SansBold]  mx-auto relative text-[5rem] text-[#d9d9d9]  text-center ">
            CYCLE OF LIFE.
          </Text>

          <Text className="font-[SansRegular] text-[#d9d9d9] text-center max-w-[28rem] mx-auto text-[30px]">
            Discover the joy of cycling with our premium range of bicycles.
          </Text>

          <CustomButton variant="dark" action={() => router.push("/shop")} />
        </View>
        {/*  */}
      </ImageBackground>
    </View>
  );
};

export default TitleSection;
