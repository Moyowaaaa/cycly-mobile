import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CustomSafeAreaView from "./components/general/CustomSafeAreaView";
import CustomHeader from "./components/general/CustomHeader";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SheetManager } from "react-native-actions-sheet";
import { useStore } from "zustand";
import { useCartStore } from "@/stores/CartStore";
import { cartItem } from "@/types/declarations";

const CheckoutPage = () => {
  const { itemCount, totalAmountOfItemInCart, itemsInCart, productsInCart } =
    useStore(useCartStore);
  const router = useRouter();
  const route = useRoute();
  return (
    <>
      <CustomSafeAreaView>
        <ScrollView>
          <CustomHeader
            background={route.name === "index" ? "transparent" : "transparent"}
          >
            <TouchableOpacity
              onPress={() => {
                router.back();
                SheetManager.show("cartSheet");
              }}
            >
              <View className="flex flex-row gap-4 items-center py-6">
                <Ionicons
                  name="arrow-back"
                  size={24}
                  className=""
                  color={"#151515"}
                />
                <Text className="text-[1.5rem] text-[#151515]">Checkout</Text>
              </View>
            </TouchableOpacity>

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

          <View className="flex flex-col  gap-10 p-6 self-center w-10/12 bg-[#f5f5f5]">
            <Text className="text-4xl font-bold font-[SansBold]">
              Order Summary
            </Text>

            <View className="flex flex-col  gap-4">
              <View className="flex flex-row w-full items-center justify-between">
                <Text className="font-[SansMedium] ">Items</Text>
                <Text className="font-[SansMedium] text-[1.25rem]">
                  {itemCount}
                </Text>
              </View>

              <View className="flex flex-row w-full items-center justify-between">
                <Text className="font-[SansMedium] ">Sub Total</Text>
                <Text className="font-[SansMedium] text-[1.25rem]">
                  ${totalAmountOfItemInCart}
                </Text>
              </View>

              <View className="flex flex-row w-full items-center justify-between">
                <Text className="font-[SansMedium] ">Tax (7.5%)</Text>
                <Text className="font-[SansMedium] text-[1.25rem]">
                  ${(totalAmountOfItemInCart * 0.075).toFixed()}
                </Text>
              </View>

              <View className="flex flex-row w-full items-center justify-between">
                <Text className="font-[SansMedium] ">Discount</Text>
                <Text className="font-[SansMedium] text-[1.25rem]">$0</Text>
              </View>

              <View className="flex flex-row w-full items-center justify-between">
                <Text className="font-[SansMedium] ">Total</Text>
                <Text className="font-[SansMedium] text-[1.25rem]">
                  $
                  {(
                    totalAmountOfItemInCart +
                    totalAmountOfItemInCart * 0.07
                  ).toFixed()}
                </Text>
              </View>
            </View>

            <TouchableOpacity className="bg-[#151515]  rounded-md">
              <Text className="text-white text-center py-4">
                {" "}
                Proceed to Payment
              </Text>
            </TouchableOpacity>

            <View className="w-full flex border-t-2 pt-4 pb-2 ">
              <Text className="text-center font-[SansRegular] text-[14px]">
                Estimated delivery is within 3 working days
              </Text>
            </View>
          </View>

          <View className="flex self-center flex-col gap-4 mt-10 w-10/12">
            <Text className="text-[2rem] font-bold font-[SansBold]">
              Items Summary
            </Text>

            {(productsInCart as cartItem[])?.map((product, index) => (
              <View
                className="flex flex-row items-center my-4 gap-4 w-full"
                key={index}
              >
                <View className="h-[200] w-6/12 relative ">
                  <Image
                    source={product.images?.preview}
                    className="w-full h-full object-contain"
                    resizeMode="cover"
                  />
                </View>
                <View className="flex flex-col gap-4 w-5/12">
                  <Text className="text-[1.5rem] font-[SansMedium]  text-left">
                    {product.name}
                  </Text>

                  <Text className="text-[1.25rem] font-[DmMono] flex flex-row items-center">
                    ${product?.price} x {product.quantity}
                  </Text>

                  <Text className="text-[1.2rem] font-[bold] font-[DmMono]">
                    ${product?.price * product.quantity}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </CustomSafeAreaView>
    </>
  );
};

export default CheckoutPage;
