"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
