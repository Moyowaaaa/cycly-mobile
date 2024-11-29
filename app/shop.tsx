import React from "react";
import { ScrollView, Text, View } from "react-native";
import CustomSafeAreaView from "./components/general/CustomSafeAreaView";
import ShopBanner from "./components/Shop/ShopBanner";
import { StatusBar } from "expo-status-bar";
import CustomHeader from "./components/general/CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Products from "./components/Shop/Products";
import Footer from "./components/general/Footer";

const ShopScreen = () => {
  const router = useRouter();
  return (
    <>
      <StatusBar style="dark" />

      <CustomSafeAreaView>
        <ScrollView>
          <CustomHeader background="#151515">
            <Ionicons
              name="arrow-back"
              size={24}
              className="mr-10"
              color={"white"}
              onPress={() => router.push("/")}
            />

            <Text className="text-[1.5rem] text-white ">Shop</Text>
            <Ionicons name="cart-outline" color={"#e9e9e9"} size={24} />
          </CustomHeader>

          <ShopBanner />

          <Products />
          <Footer />
        </ScrollView>
      </CustomSafeAreaView>
    </>
  );
};

export default ShopScreen;
