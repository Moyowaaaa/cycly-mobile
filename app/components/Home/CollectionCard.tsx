import { collectionType } from "@/types/declarations";
import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

const CollectionCard = ({ title, backgroundColor, image }: collectionType) => {
  const imageMap = {
    "cityBike.png": require("../../../assets/images/cityBike.png"),
    "mountainBike.png": require("../../../assets/images/mountainBike.png"),
    "roadBike.png": require("../../../assets/images/roadBike.png"),
    "electricBike.png": require("../../../assets/images/electricBike.png"),
  };

  return (
    <View
      style={[
        styles.card,
        { marginRight: 16, backgroundColor: backgroundColor },
      ]}
    >
      <Text
        className="
      font-[SansMedium]
      text-[3.1rem] text-[black]
      font-[700]"
      >
        {title}
      </Text>

      <View style={styles.image}>
        <Image
          source={imageMap[image as keyof typeof imageMap]}
          alt=""
          className="h-full w-full object-cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 400,
    position: "relative",
    width: 300,
    display: "flex",
    borderRadius: 10,
    paddingVertical: Platform.OS === "ios" ? 25 : 20,
    paddingHorizontal: Platform.OS === "ios" ? 15 : 10,
  },

  image: {
    width: 300,
    position: "absolute",
    bottom: 0,
    height: 200,
  },
});

export default CollectionCard;
