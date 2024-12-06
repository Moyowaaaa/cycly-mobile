import { BaseToast } from "react-native-toast-message";

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      text1Style={{ fontSize: 20, fontWeight: "400" }}
      text2Style={{ fontSize: 15, fontWeight: "400" }}
    />
  ),
};
