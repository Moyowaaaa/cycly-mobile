import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <View
      style={styles.footer}
      className="h-[70vh] flex justify-start pt-20 pb-10"
    >
      <Text className="text-[5rem] text-[#e9e9e9] font-[SansBold] text-center mx-auto">
        CYCLE OF LIFE.
      </Text>

      <View className="absolute bottom-24 w-full h-[300]">
        <Image
          source={require("../../../assets/images/cityBike.png")}
          alt=""
          className="h-full w-full object-cover"
        />
      </View>

      <View
        className="flex absolute flex-row bottom-4  w-full justify-between px-4
      
      "
      >
        <Text className="text-white font-[SansRegular]">Israel x Moyowa</Text>
        <Text className="text-white font-[SansRegular]">
          &copy; Cycly {currentYear}
        </Text>
        <Text className="text-white font-[SansRegular]">Designooasis</Text>
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
