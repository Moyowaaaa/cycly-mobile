import { SafeAreaView } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const CustomSafeAreaView = ({ children, ...rest }: PropsWithChildren) => {
  const route = useRoute();

  const containerStyle: ViewStyle =
    route.name === "shop" ? styles.containerUp : styles.containerDown;

  return (
    <SafeAreaView style={[styles.container, containerStyle]} {...rest}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1"
        keyboardVerticalOffset={10}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerDown: {
    paddingVertical: Platform.OS === "ios" ? 10 : 20,
  },
  containerUp: {
    paddingVertical: Platform.OS === "ios" ? 5 : 20,
  },
});
