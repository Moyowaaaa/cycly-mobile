import { SafeAreaView } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";
import { Platform, KeyboardAvoidingView, StyleSheet } from "react-native";

const CustomSafeAreaView = ({ children, ...rest }: PropsWithChildren) => {
  return (
    <SafeAreaView style={styles.container} {...rest}>
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
    paddingVertical: Platform.OS === "ios" ? 10 : 20,
  },
});
