import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ActionSheet, { ScrollView } from "react-native-actions-sheet";
import WishlistEmptyState from "../wishlist/WishlistEmptyState";
import { useStore } from "zustand";
import { useWishlistStore } from "@/stores/WishlistStore";
import { onWishlist } from "@/types/declarations";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

const WishlistSheet = () => {
  const { wishlist, productsInWishlist, removeItemFromWishlist } =
    useStore(useWishlistStore);

  const toggleAddToWishlist = (bike: onWishlist) => {
    removeItemFromWishlist(bike.slug as string);
    Toast.show({
      type: "info",
      text1: "Item Removed",
      text2: `Removed item from your wishlist.`,
      position: "top",
    });
  };

  return (
    <ActionSheet
      gestureEnabled
      containerStyle={{
        paddingTop: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 4,
        position: "relative",
      }}
      indicatorStyle={{ width: 60, backgroundColor: "#B3B3B3" }}
    >
      <View>
        {wishlist?.length === 0 ? (
          <WishlistEmptyState />
        ) : (
          <ScrollView>
            <View className="flex flex-col gap-6 pt-6 px-4">
              <Text className="font-[SansBold] text-4xl">Wishlist</Text>

              <View className="py-10 relative gap-4 flex  w-max">
                {(productsInWishlist as onWishlist[]).map((product, index) => (
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

                      <Text className="text-[1.2rem] font-[bold] font-[DmMono]">
                        ${product?.price}
                      </Text>

                      <Text>{product.inList}</Text>

                      <TouchableOpacity
                        onPress={() => toggleAddToWishlist(product)}
                      >
                        <Ionicons
                          name="heart-outline"
                          color={"#F59504"}
                          size={24}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </ActionSheet>
  );
};

export default WishlistSheet;
