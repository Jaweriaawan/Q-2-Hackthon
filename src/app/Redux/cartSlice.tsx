"use client" ;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  productImage: string;
}

const initialState: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart") || "[]"),
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existingItem = state.find((product:any) => product.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push(item);
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    remove(state, action: PayloadAction<string>) {
      const updatedCart = state.filter((item:any) => item.id !== action.payload); 

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
  },
});


export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
