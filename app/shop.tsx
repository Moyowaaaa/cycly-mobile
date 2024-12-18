import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CustomSafeAreaView from "./components/general/CustomSafeAreaView";
import ShopBanner from "./components/Shop/ShopBanner";
import { StatusBar } from "expo-status-bar";
import CustomHeader from "./components/general/CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Products from "./components/Shop/Products";
import Footer from "./components/general/Footer";
import { useRoute } from "@react-navigation/native";
import { SheetManager } from "react-native-actions-sheet";
import { useStore } from "zustand";
import { useCartStore } from "@/stores/CartStore";

const ShopScreen = () => {
  const router = useRouter();
  const { itemsInCart } = useStore(useCartStore);
  return (
    <>
      <CustomSafeAreaView>
        <ScrollView>
          <CustomHeader background="transparent">
            <View className="flex flex-row gap-4 items-center py-6">
              <Ionicons
                name="arrow-back"
                size={24}
                className=""
                color={"#151515"}
                onPress={() => router.push("/")}
              />
              <Text className="text-[1.5rem] text-[#151515]">Shop</Text>
            </View>

            <View className="flex flex-row gap-2 items-center">
              <TouchableOpacity
                onPress={() => SheetManager.show("wishlistSheet")}
              >
                <Ionicons name="heart-outline" color={"#151515"} size={32} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => SheetManager.show("cartSheet")}
                className="flex gap-1 flex-row items-center"
              >
                <Ionicons name="cart-outline" color={"#151515"} size={32} />
                <Text className="text-[#151515] text-[1.2rem]">
                  ({itemsInCart})
                </Text>
              </TouchableOpacity>
            </View>
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
