import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CustomSafeAreaView from "./components/general/CustomSafeAreaView";
import TitleSection from "./components/Home/TitleSection";
import CollectionShowcase from "./components/Home/CollectionShowcase";
import QoutesSection from "./components/Home/QoutesSection";
import Footer from "./components/general/Footer";
import JoinUsSection from "./components/Home/JoinUsSection";
import { StatusBar } from "expo-status-bar";
import CustomHeader from "./components/general/CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import { SheetManager } from "react-native-actions-sheet";
import { useStore } from "zustand";
import { useCartStore } from "@/stores/CartStore";

export default function Index() {
  const { itemsInCart } = useStore(useCartStore);

  return (
    <CustomSafeAreaView>
      <StatusBar style="dark" />

      <ScrollView
        className=" bg-white"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <CustomHeader background="transparent">
          <View className="w-full absolute top-2 p-2 flex flex-row items-center justify-between ">
            <View className=" relative h-[4rem] w-[8rem] ">
              <Image
                source={require(`../assets/images/logo.png`)}
                alt="logo"
                className="h-full w-full object-contain"
              />
            </View>

            <View className="flex flex-row gap-2 items-center">
              <Ionicons name="heart-outline" color={"#e9e9e9"} size={32} />

              <TouchableOpacity
                onPress={() => SheetManager.show("cartSheet")}
                className="flex gap-1 flex-row items-center"
              >
                <Ionicons name="cart-outline" color={"#e9e9e9"} size={32} />
                <Text className="text-white text-[1.2rem]">
                  ({itemsInCart})
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </CustomHeader>
        <View style={{ flexGrow: 1 }}>
          <TitleSection />
          <CollectionShowcase />
          <QoutesSection />
          <JoinUsSection />
        </View>
        <Footer />
      </ScrollView>
    </CustomSafeAreaView>
  );
}
