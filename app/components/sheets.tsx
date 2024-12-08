import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import CartSheet from "./sheets/CartSheet";
import WishlistSheet from "./sheets/WishlistSheet";

registerSheet("cartSheet", CartSheet);
registerSheet("wishlistSheet", WishlistSheet);

declare module "react-native-actions-sheet" {
  interface Sheets {
    exampleSheet: SheetDefinition;
    cartSheet: SheetDefinition;
  }
}

export {};
