import { prefixUrl } from "@/constants/constants";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <View
      style={styles.footer}
      className="h-[65vh] flex justify-start pt-20 pb-10"
    >
      <Text className="text-[4rem] text-[#e9e9e9] font-bold text-center">
        CYCLY OF LIFE.
      </Text>

      <View className="absolute bottom-24 w-full h-[300]">
        <Image
          source={{ uri: `${prefixUrl}/cityBike.png` }}
          alt=""
          className="h-full w-full object-cover"
        />
      </View>

      <View className="flex absolute flex-row bottom-4  w-full justify-between px-2">
        <Text className="text-white">Israel x Moyowa</Text>
        <Text className="text-white">&copy; Cycly {currentYear}</Text>
        <Text className="text-white">Designooasis</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: "#151515",
    position: "relative",
  },
});

export default Footer;
