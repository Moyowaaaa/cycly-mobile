import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import ExampleSheet from "./sheets/ExampleSheet";
import CartSheet from "./sheets/CartSheet";

registerSheet("exampleSheet", ExampleSheet);
registerSheet("cartSheet", CartSheet);

declare module "react-native-actions-sheet" {
  interface Sheets {
    exampleSheet: SheetDefinition;
    cartSheet: SheetDefinition;
  }
}

export {};
