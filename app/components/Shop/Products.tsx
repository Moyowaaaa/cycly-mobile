import React from "react";
import { View, Text } from "react-native";
import ProductCard from "./ProductCard";
import { bikes } from "@/constants/bikes";

const Products = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 6,
        paddingVertical: 60,
      }}
    >
      {bikes?.map((bike) => (
        <ProductCard bike={bike} key={bike.slug} />
      ))}
    </View>
  );
};

export default Products;
