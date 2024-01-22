import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";

export const appStore = configureStore({
    reducer: {
        cart: cartSlice,
    }
});