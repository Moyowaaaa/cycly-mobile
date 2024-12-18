import { Stack, useRouter } from "expo-router";
import "../global.css";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { SheetProvider } from "react-native-actions-sheet";
import Toast from "react-native-toast-message";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    SansBold: require("../assets/fonts/GeneralSans-Bold.otf"),
    SansLight: require("../assets/fonts/GeneralSans-Light.otf"),
    SansMedium: require("../assets/fonts/GeneralSans-Medium.otf"),
    SansRegular: require("../assets/fonts/GeneralSans-Regular.otf"),
    DmMono: require("../assets/fonts/DMMono-Regular.ttf"),
  });

  useEffect(() => {
    (async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} />
      <SheetProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#151515",
            },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="shop"
            options={{
              headerShown: false,

              title: "Shop",
              headerLeft: () => (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  className="mr-10"
                  color={"white"}
                  onPress={() => router.push("/")}
                />
              ),
              headerStyle: {
                backgroundColor: "#151515",
              },
              headerTintColor: "#FFFFFF",
            }}
          />
          <Stack.Screen
            name="checkout"
            options={{
              headerShown: false,
            }}
          />
        </Stack>

        <Toast />
      </SheetProvider>
    </React.Fragment>
  );
}
