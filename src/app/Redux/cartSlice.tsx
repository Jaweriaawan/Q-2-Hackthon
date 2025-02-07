"use client"; 

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  productImage: string;
}

// ✅ Ye check karega ke code sirf client-side par chale
const getInitialCartState = (): CartItem[] => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  return []; // SSR ke case me empty array return karega
};

const initialState: CartItem[] = getInitialCartState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.find((product: any) => product.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push(item);
      }

      // ✅ Local storage ko sirf browser me update karein
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    remove(state, action: PayloadAction<string>) {
      const updatedCart = state.filter((item: any) => item.id !== action.payload);

      // ✅ Local storage ko sirf browser me update karein
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      return updatedCart;
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

