import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const JoinUsSection = () => {
  return (
    <>
      <ImageBackground
        source={require("../../../assets/images/joinUsBackgroundd.png")}
        style={styles.background}
      >
        <View className="pt-12 pb-16 flex justify-center w-full gap-10 w-[25rem] self-start mx-auto items-center">
          <Text className="text-[4rem] text-[#ffffff] font-bold text-center">
            Join the Cycle Revolution
          </Text>
          <Text className="text-[1.5rem] text-white text-center">
            {" "}
            Join the e-bike revolution with ReCycle. Our sustainable e-bikes
            save you money and reduce your carbon footprint. Choose your model
            and join the revolution today!{" "}
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default JoinUsSection;

const styles = StyleSheet.create({
  background: {
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
  },
});
