import { Stack, useRouter } from "expo-router";
import "../global.css";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Footer from "./components/general/Footer";
import Navbar from "./components/Navbar";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  const router = useRouter();
  return (
    <>
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
      </Stack>
    </>
  );
}
