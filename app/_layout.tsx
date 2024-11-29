import { Stack } from "expo-router";
import "../global.css";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Footer from "./components/general/Footer";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
