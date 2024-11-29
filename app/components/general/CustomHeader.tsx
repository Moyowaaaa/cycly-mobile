import React, { Children } from "react";
import { Text, View } from "react-native";

export type customHeaderProps = {
  background?: string;
  children: React.ReactNode;
};

const CustomHeader = ({ background, children }: customHeaderProps) => {
  return (
    <>
      <View
        style={{ backgroundColor: background }}
        className={`
         w-full flex items-center justify-between flex-row px-2 py-6`}
      >
        {children}
      </View>
    </>
  );
};

export default CustomHeader;
