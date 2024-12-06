import { useCartStore } from "@/stores/CartStore";
import React from "react";
import { Text, View } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import { useStore } from "zustand";
import CartEmptyState from "../cart/CartEmptyState";

const CartSheet = () => {
  const { cart } = useStore(useCartStore);

  return (
    <>
      <ActionSheet
        gestureEnabled
        containerStyle={{
          paddingTop: 10,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 500,
          padding: 4,
          position: "relative",
        }}
        indicatorStyle={{ width: 50.45, backgroundColor: "#B3B3B3" }}
      >
        <View className="flex flex-col gap-6 pt-6">
          <View className="flex flex-row justify-between items-center w-full px-4 ">
            <Text className="font-[SansBold] text-4xl">Cart</Text>
            {cart.length > 0 && (
              <Text>
                {cart.length} Item{cart.length > 1 && `s`}
              </Text>
            )}
          </View>
        </View>
        <CartEmptyState />
      </ActionSheet>
    </>
  );
};

export default CartSheet;
