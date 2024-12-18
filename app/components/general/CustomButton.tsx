import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type buttonProps = {
  variant: "light" | "dark";
  action?: () => void;
};

const CustomButton = ({ variant, action }: buttonProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (action) {
          action();
        }
      }}
      className="flex w-full   self-start"
    >
      <View
        className={`self-center py-6 px-6  flex flex-row gap-4 items-center rounded-[5px] ${
          variant === "dark" ? "bg-[black]" : "bg-[white]"
        }`}
      >
        <Text
          className={`${variant !== "dark" ? "text-[black]" : "text-[white]"}
          font-[SansBold]
          `}
        >
          Shop
        </Text>
        <MaterialIcons
          name="arrow-forward"
          color={variant === "dark" ? "white" : "black"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
