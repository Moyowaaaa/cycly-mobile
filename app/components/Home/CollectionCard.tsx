import { prefixUrl } from "@/constants/constants";
import { collectionType } from "@/types/declarations";
import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

const CollectionCard = ({ title, backgroundColor, image }: collectionType) => {
  return (
    <View
      style={[
        styles.card,
        { marginRight: 16, backgroundColor: backgroundColor },
      ]}
    >
      <Text className="text-[3.1rem] font-bold">{title}</Text>

      <View style={styles.image}>
        <Image
          source={{ uri: `${prefixUrl}/${image}` }}
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