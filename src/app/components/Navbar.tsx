"use client";
import Image from "next/image";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { CiHeart } from "react-icons/ci";
import Hamburger from "./Hamburger";
import SearchProducts from "./searchProducts";
import { useEffect } from "react";
import logo from "@/app/images/logo.png";
import des from "@/app/images/des.png";

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    console.log("cartUpdated", cartItems);
  }, [cartItems]);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="w-full h-[35px] flex justify-between px-5 md:px-10 lg:px-24 bg-gray-100 py-2">
        <Image src={des} alt="icon" className="w-[20px] h-[20px]" />
        <div className="flex space-x-4 text-gray-600 font-semibold text-sm md:text-base">
          <Link href="/">Home</Link>
          <span className="w-px h-5 bg-gray-400"></span>
          <Link href="/login">Login</Link>
          <span className="w-px h-5 bg-gray-400"></span>
          <Link href="/joinus">Join us</Link>
          <span className="w-px h-5 bg-gray-400"></span>
          <Link href="/Help">Help</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full flex items-center justify-between px-5 md:px-10 lg:px-24 py-4">
        {/* Logo */}
        <Image src={logo} alt="logo" className="hidden md:block" />

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <Hamburger />
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-6 font-semibold text-lg ml-[250px]">
          <Link href="/NewFeature" className="hover:underline">New & Featured</Link>
          <Link href="/male" className="hover:underline">Men</Link>
          <Link href="/Female" className="hover:underline">Women</Link>
          <Link href="" className="hover:underline">Kids</Link>
          <Link href="#" className="hover:underline">Sale</Link>
          <Link href="#" className="hover:underline">SNKRS</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block mb-[15px]">
          <SearchProducts />
        </div>

        {/* Cart & Wishlist */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Link href="/Cart">
              <IoBagOutline className="w-7 h-7" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
          <CiHeart className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
