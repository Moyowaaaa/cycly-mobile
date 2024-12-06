import { Link } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const ShopBanner = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/bikesImage.png")}
      style={styles.background}
    >
      <Text className="text-7xl text-[#ffffff] font-[SansBold]">Bikes</Text>
    </ImageBackground>
  );
};

export default ShopBanner;

const styles = StyleSheet.create({
  background: {
    height: 250,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
});
