"use client";
import des from "@/app/images/des.png"
import Image from "next/image";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import logo from "@/app/images/logo.png";
import { CiHeart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart); // Access the cart state directly since it's an array 

  return (
    <div className="w-full">
    {/* Top Bar */}
    <div className="w-full lg:h-[50px] ex:h-[40px] flex justify-between ex:pl-[20px] ex:pr-[20px] lg:pl-[100px] bg-[#F5F5F5] py-[10px] mb-[10px]">
      <Image src={des} alt="" className="w-[30px] h-[30px]" />
      <div className="lg:w-[450.81px] lg:h-[36px] lg:pt-[10px] ex:pt-[2px] lg:text-[22px] ex:text-[15px] text-[#00000098] font-semibold leading-[14px] flex lg:gap-[20px] ex:gap-[12px] lg:mr-[50px]">
        <Link href="/">Home</Link>
        <hr className="lg:w-[3px] ex:w-[2px] lg:h-[20px] ex:h-[13px] bg-[#00000060]" />
        <Link href="/login">Login</Link>
        <hr className="lg:w-[3px] ex:w-[2px] lg:h-[20px] ex:h-[13px] bg-[#00000060]" />
        <Link href="/joinus">Join us</Link>
        <hr className="lg:w-[3px] ex:w-[2px] lg:h-[20px] ex:h-[13px] bg-[#00000060]" />
        <Link href="/Help">Help</Link>
      </div>
    </div>
  
    {/* Bottom Navbar */}
    <div className="w-full lg:h-[80px] lg:px-[150px] flex mt-[12px] items-center justify-between lg:mb-[15px] py-[15px]">
      {/* Logo */}
      <Image
        src={logo}
        alt="logo"
        className="lg:w-[60px] h-[20.54px] lg:flex ex:hidden"
      />
  
      {/* Hamburger Menu */}
      <div className="lg:hidden ex:flex relative ml-[-90px] mt-[-90px]">
       <Hamburger/>
      </div>
  
      {/* Navbar Links */}
      <div className="lg:w-[610px] lg:h-[30px] justify-between font-semibold text-[23px] leading-5 lg:flex ex:hidden lg:ml-[500px] ex:ml-[12px] lg:mt-[10px]">
       <Link href="/NewFeature"><p>New & Featured</p></Link>
       <Link href=""><p>Men</p></Link>
       <Link href="/Female"><p>Women</p></Link>
       <Link href=""><p>Kids</p></Link>
       <Link href=""><p>Sale</p></Link>
       <Link href=""><p>SNKRS</p></Link>
      </div>
  
      {/* Search Bar */}
      <div className="w-[250px] hidden md:flex lg:h-[40px] ex:h-[35px] ex:ml-[60px] ex:mt-[8px] rounded-[100px] bg-[#F5F5F5] lg:ml-[180px] gap-[12px] lg:mt-[-1px]">
        <IoSearchOutline className="ml-[10px] lg:mt-[7px] ex:mt-[5px] w-[24px] h-[24px] text-[#CCCCCC]" />
        <p className="text-[#CCCCCC] mt-[8px]">Search</p>
      </div>
  
      {/* Cart and Wishlist */}
      <div className="w-[84px] h-[60px] flex lg:ml-[35px] ex:ml-[8px] lg:gap-[20px] ex:gap-[10px]">
        <div className="relative flex items-center">
          <Link href="/Cart">
            <IoBagOutline className="w-[30px] h-[30px]" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 text-[14px] font-semibold w-[19px] h-[19px] bg-red-500 text-white flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )} 
          </Link>
        </div>
        <CiHeart className="w-[33px] h-[33px] mt-[14px]" />
      </div>
    </div>
  </div>
  
  );
}



{/* <div className="relative flex items-center">
<Link href="/Cart">
   <IoBagOutline className="w-[30px] h-[30px]" />
  {cartItems.length > 0 && (
  <span className="absolute top-0 right-0 text-[14px] font-semibold w-[19px] h-[19px] bg-red-500 text-white  mt-[26px] flex items-center justify-center rounded-full">
    {cartItems.length}
  </span>)}
</Link>
</div> */}


{/* <div className="w-full">

<div className="w-full lg:h-[36px] flex justify-between ex:pl-[20px] ex:pr-[20px] lg:pl-[50px] lg:pr-[40px] bg-slate-300">
     <Image src={des} alt="" />
     <div className="lg:w-[450.81px] lg:h-[36px] lg:pt-[10px] ex:pt-[2px] lg:text-[17px] ex:text-[14px] text-[#00000098] font-semibold leading-[14px] flex lg:gap-[10px] ex:gap-[9px]">
        <Link href="/">Home</Link>
        <hr className="w-[3px] h-[16px] bg-[#00000060]" />
        <Link href="/login">Login</Link>
        <hr className="w-[3px] h-[16px] bg-[#00000060]" />
        <Link href="/joinus">Join us</Link>
     </div>
  </div>
      
  <div className="w-full lg:h-[60px] ex:px-[7px] lg:px-[60px] flex mt-[12px] bg-slate-400">
     <Image src={logo} alt="logo" className="lg:w-[60px] h-[20.54px] mt-[20px] lg:flex ex:hidden" />
     <Hamburger className="lg:hidden ex:flex relative" />
     <div className="lg:w-[520px] lg:h-[30px] justify-between font-semibold lg:text-[19px] ex:text-[11px] leading-5 lg:flex ex:hidden lg:ml-[500px] ex:ml-[12px] mt-[19px]">
       <p>New & Featured</p>
       <p>Men</p>
       <p>Women</p>
       <p>Kids</p>
       <p>Sale</p>
       <p>SNKRS</p>
     </div>
     <div className="w-[250px] lg:h-[40px] ex:h-[35px] ex:ml-[60px] ex:mt-[13px] rounded-[100px] bg-[#F5F5F5] lg:mt-[10px] lg:ml-[180px] flex gap-[12px]">
       <IoSearchOutline className="ml-[10px] lg:mt-[7px] ex:mt-[5px] w-[24px] h-[24px] text-[#CCCCCC]" />
       <p className="text-[#CCCCCC] mt-[8px]">Search</p>
     </div>
     <div className="w-[84px] h-[60px] flex lg:ml-[35px] ex:ml-[8px] lg:gap-[20px] ex:gap-[10px] bg-slate-500">
        <div className="relative flex items-center">
           <Link href="/Cart">
              <IoBagOutline className="w-[30px] h-[30px]" />
             {cartItems.length > 0 && (
             <span className="absolute top-0 right-0 text-[14px] font-semibold w-[19px] h-[19px] bg-red-500 text-white  mt-[26px] flex items-center justify-center rounded-full">
               {cartItems.length}
             </span>)}
           </Link>
         </div>
       <CiHeart className="w-[33px] h-[33px] mt-[14px]" />
     </div>
  </div>  */}