import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import CartSheet from "./sheets/CartSheet";

registerSheet("cartSheet", CartSheet);

declare module "react-native-actions-sheet" {
  interface Sheets {
    exampleSheet: SheetDefinition;
    cartSheet: SheetDefinition;
  }
}

export {};
