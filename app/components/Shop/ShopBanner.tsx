import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const ShopBanner = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/mountainBikesImage.jpg")}
      style={styles.background}
    >
      <Text className="text-5xl text-[#ffffff] font-bold">Bikes</Text>
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
});
