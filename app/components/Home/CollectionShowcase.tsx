import React from "react";
import { ScrollView, Text, View } from "react-native";
import { collections } from "@/constants/constants";
import CollectionCard from "./CollectionCard";

const CollectionShowcase = () => {
  return (
    <View className="w-full px-4 flex-1 gap-4 py-24">
      <Text
        className="
      font-[SansBold]
      text-[4rem] text-[#151515]  text-left"
      >
        OUR COLLECTION
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex flex-row gap-4"
      >
        {collections?.map((collection, index) => (
          <CollectionCard
            key={index}
            backgroundColor={collection.backgroundColor}
            title={collection.title}
            image={collection.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CollectionShowcase;
