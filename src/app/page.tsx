'use client'
import Link from "next/link";
import Image from "next/image";
import pic1 from "@/app/images/home1.png"
import pic4 from "@/app/images/home5.png"
import pic9 from "@/app/images/home10.png"
import pic10 from "@/app/images/home11.png"
import pic11 from "@/app/images/home12.png"
import pic12 from "@/app/images/home13.png"
import Shoes from "./latest/page";
import Latest from "./components/latest";

export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden">
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }
      `}</style>
      <div className="lg:w-full w-full">
        {/* Announcement Bar */}
        <div className="w-full h-[65px] bg-[#E5E5E5] text-center py-3">
          <p className="font-bold text-lg">Hello Nike App</p>
          <p className="text-sm">
            Download the app to access everything Nike. 
            <Link href="/NewFeature">
              <span className="underline">Get Your Great</span>
            </Link>
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative w-full">
          <Image src={pic1} alt="Nike Air Max Pulse" className="w-full h-auto" />
          <div className="text-center py-6 px-4 ex:mb-0">
            <p className="font-semibold text-lg">First Look</p>
            <p className="font-bold text-4xl">NIKE AIR MAX PULSE</p>
            <p className="max-w-xl mx-auto mt-2 text-sm">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="px-6 py-2 rounded-full bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black transition-all">
                Notify Me
              </button>
              <button className="px-6 py-2 rounded-full bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black transition-all">
                Shop Air Max
              </button>
            </div>
          </div>
        </div>

        {/* Best of Air Max */}
        <div className="w-full mt-10 px-4 ex:mb-0 lg:mb-[150px]">
          <p className="font-semibold ex:text-2xl lg:text-3xl">Best of Air Max</p>
          <div className="">
            <Shoes />
          </div>
        </div>

        {/* Featured Section */}
        <div className="w-full mt-10 px-4">
          <p className="font-semibold ex:text-2xl lg:text-3xl">Featured</p>
          <Image src={pic4} alt="Step into what feels good" className="w-full h-auto mt-4" />
          <div className="text-center mt-6">
            <p className="font-bold text-4xl">STEP INTO WHAT FEELS GOOD</p>
            <p className="text-sm mt-2">Cause everyone should know the feeling of running in that perfect pair.</p>
            <button className="mt-4 px-6 py-2 rounded-full bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black transition-all">
              <Link href="/NewFeature">Find Your Shoe</Link>
            </button>
          </div>
        </div>

        {/* Gear Up */}
        <div className="w-full mt-10 px-4 ex:mb-0 lg:mb-[150px]">
          <p className="font-semibold ex:text-2xl lg:text-3xl">Gear Up</p>
          <div className="">
            <Latest />
          </div>
        </div>


        <div className="lg:w-full ex:w-full h-[977px] lg:mt-[50px] lg:mb-[400px] ex:mt-[40px]">
         <p className="font-semibold lg:text-[32px] ex:text-[25px] lg:ml-[48px] ex:ml-[20px] leading-6 mb-[20px]">Don't Miss</p>
         <Image src={pic9} alt="pics" className="lg:w-full lg:h-[1000px] ex:w-full ex:h-[230px] lg:mt-[40px] ex:mt-[10px]" />
         <div className="lg:w-full ex:w-full h-[177px] lg:mt-[60px] text-center">
           <p className="font-semibold lg:text-[65px] ex:text-[35px] lg:leading-[60px] mt-[10px]">FLIGHT ESSENTIALS</p>
           <p className="font-normal lg:text-[20px] ex:text-[12px] leading-6 lg:mt-[20px]">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
           <button className="ex:w-[80px] lg:w-[180px] ex:h-[30px] lg:h-[45px] bg-black rounded-[30px] lg:pt-[px] lg:ml-[px] lg:mt-[30px] ex:mt-[10px] hover:border-[2px] text-white hover:text-black hover:border-black hover:bg-transparent duration-200">
             <Link href="" className="font-semibold lg:text-[16px] ex:text-[15px]">Shop</Link>
           </button>
         </div>
       </div>


        {/* The Essentials */}
        <div className="w-full lg:mt-10 px-4 ex:mt-[-500px]">
          <p className="font-semibold text-2xl">The Essentials</p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[pic10, pic11, pic12].map((pic, index) => (
              <div key={index} className="relative">
                <Image src={pic} alt="Essential" className="w-full h-auto" />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full font-semibold">
                  {index === 0 ? "Men's" : index === 1 ? "Women's" : "Kids'"}
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="lg:w-full lg:h-[250px] ex:w-[380px] ex:h-[740px] ex:ml-[7px] lg:flex ex:hidden lg:gap-[300px] mb-[100px] pl-[100px] lg:mt-[200px]">
          <div>
             <p className="font-medium ex:text-[15px] lg:text-[25px] leading-6">Icons</p>
            <div className="ex:w-[190px] lg:w-[200px] ex:h-[144px] lg:h-[200px] ex:text-[12px] lg:text-[18px] text-[#757575]">
                <p className="mt-[11px]">Air Force 1</p>
                <p className="mt-[11px]">Huarache</p>
                <p className="mt-[11px]">Air Max 90</p>
                <p className="mt-[11px]">Air Max 95</p>
            </div>
          </div>

         <div>
             <p className="font-medium ex:text-[15px] lg:text-[25px] leading-6">Shoes</p>
           <div className="w-[184px] h-[144px] ex:text-[12px] lg:text-[18px] text-[#757575]">
               <p className="mt-[11px]">All Shoes</p>
               <p className="mt-[11px]">Custom Shoes</p>
               <p className="mt-[11px]">Jordan Shoes</p>
               <p className="mt-[11px]">Running Shoes</p>
            </div>
          </div>

           <div>
               <p className="font-medium ex:text-[15px] lg:text-[25px]  leading-6">Clothing</p>
             <div className="w-[184px] h-[144px] ex:text-[12px] lg:text-[18px] text-[#757575]">
               <p className="mt-[11px]">All Clothing</p>
               <p className="mt-[11px]">Modest Wear</p>
               <p className="mt-[11px]">Hoodies & Pullovers</p>
               <p className="mt-[11px]">Shirts & Tops</p>
             </div>
           </div>

          <div>
              <p className="font-medium ex:text-[15px] lg:text-[25px] leading-6">Kids'</p>
              <div className="w-[184px] h-[144px] ex:text-[12px] lg:text-[18px] text-[#757575]">
                <p className="mt-[11px]">Infant & Toddler Shoes</p>
                <p className="mt-[11px]">Kids' Shoes</p>
                <p className="mt-[11px]">Kids' Jordan Shoes</p>
                <p className="mt-[11px]">Kids' Basketball Shoes</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
