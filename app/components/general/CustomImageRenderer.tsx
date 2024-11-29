import React from "react";
import { Image, Text } from "react-native";

const CustomImageRenderer = ({ image }: { image: string }) => {
  return (
    <>
      {/* <Image source={aaa} alt="" className="h-full w-full object-cover" /> */}
      <Text className="text-white">hello</Text>
    </>
  );
};

export default CustomImageRenderer;
