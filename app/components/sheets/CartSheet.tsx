import { useCartStore } from "@/stores/CartStore";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ActionSheet, {
  ScrollView,
  SheetManager,
} from "react-native-actions-sheet";
import { useStore } from "zustand";
import CartEmptyState from "../cart/CartEmptyState";
import { Ionicons } from "@expo/vector-icons";
import CartItem from "../cart/CartItem";
import { cartItem } from "@/types/declarations";
import { Link, router } from "expo-router";

const CartSheet = () => {
  const { itemsInCart, clearCart, productsInCart } = useStore(useCartStore);

  return (
    <>
      <ActionSheet
        gestureEnabled
        containerStyle={{
          paddingTop: 10,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: productsInCart.length > 1 ? 600 : 500,
          padding: 4,
          position: "relative",
        }}
        indicatorStyle={{ width: 60, backgroundColor: "#B3B3B3" }}
      >
        {itemsInCart === 0 ? (
          <View className="flex flex-col gap-6 h-[400px]">
            <CartEmptyState />
          </View>
        ) : (
          <>
            <ScrollView>
              <View className="flex flex-col gap-6 pt-6">
                <View className="flex flex-row justify-between items-center w-full px-4 ">
                  <View className="flex flex-col gap-1">
                    <Text className="font-[SansBold] text-4xl">Cart</Text>

                    {itemsInCart > 0 && (
                      <TouchableOpacity
                        onPress={() => clearCart()}
                        className="flex gap-1 items-center flex-row"
                      >
                        <Text className="text-[1.2rem]">Clear</Text>
                        <Ionicons
                          name="remove-circle-sharp"
                          size={24}
                          color={"black"}
                        />
                      </TouchableOpacity>
                    )}
                  </View>

                  {itemsInCart > 0 && (
                    <TouchableOpacity
                      onPress={() => {
                        router.push("/checkout");
                        SheetManager.hide("cartSheet");
                      }}
                    >
                      <View className="flex flex-row gap-2 items-center">
                        <View className="px-6 py-4 bg-black rounded-xl gap-2 items-center flex flex-row items-center">
                          <Text className="text-white ">
                            Checkout {itemsInCart} Item
                            {itemsInCart > 1 && `s`}
                          </Text>
                          <Ionicons
                            name="arrow-forward"
                            size={15}
                            color={"white"}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              </View>

              <View className="py-10 relative gap-4 flex  w-max">
                {productsInCart?.map((product, index) => (
                  <CartItem bike={product as cartItem} key={index} />
                ))}
              </View>
            </ScrollView>
          </>
        )}
      </ActionSheet>
    </>
  );
};

export default CartSheet;
