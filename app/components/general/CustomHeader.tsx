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
         w-full flex items-center justify-between flex-row px-2 `}
      >
        {children}
      </View>
    </>
  );
};

export default CustomHeader;
