"use client";

import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart); // Access the cart state directly since it's an array

  return (
    <div>
      <div className="flex bg-slate-400 bg-opacity-20 w-full h-[100px] border-b-[3px] border-black mb-[50px] justify-around pt-[20px]">
        <Link href="/" className="text-[25px] font-bold">
          Home
        </Link>
        <Link href="/cart" className="text-[25px] font-bold">
          Cart ({cartItems.length}) {/* Display cart item count */}
        </Link>
        <IoBagOutline className="w-[28px] h-[28px]" />
      </div>
    </div>
  );
}
