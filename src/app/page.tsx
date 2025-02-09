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

export default function Home(){
 return <div className="font-sans">
    <div className="lg:w-full ex:w-full h-[5442.36px]">
       <div className="lg:w-full ex:w-full lg:h-[65px] ex:h-[60px] bg-[#E5E5E5] lg:text-center text-center py-[15px]">
         <p className="font-bold lg:text-[25px] ex:text-[16px] leading-4">Hello Nike App</p>
         <p className="font-normal lg:text-[16px] ex:text-[12px] leading-6 mt-[7px] mb-[20px]">Download the app to access everything Nike. <Link href="NewFeature"><span className="underline">Get Your Great</span></Link></p>
       </div>
       <div className="lg:w-full ex:w-full h-[1000px] lg:mb-[300px]">
          <Image src={pic1} alt="pic" className="lg:w-full lg:h-[900px] ex:w-full ex:h-[200px]" />
          <div className="w-full h-[229px] lg:mt-[45px] ex:mt-[20px] text-center lg:pl-[3px] ex:pl-[10px]">
             <p className="font-semibold lg:text-[18px] ex:text-[13] leading-4">First Look</p>
             <p className="lg:font-bold ex:font-bold lg:text-[60px] ex:text-[30px] leading-[60px] lg:mt-[5px]">NIKE AIR MAX PULSE</p>
             <p className="lg:w-[511px] ex:w-full h-[48px] font-normal lg:text-[18px] ex:text-[12px] lg:leading-6 ex:leading-[22px] lg:ml-[700px] lg:mt-[12px]">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.</p>
              <div className="flex gap-[10px] lg:ml-[800px] lg:mt-[70px] ex:mt-[30px] ex:ml-[100px] w-full">
                <button className="ex:w-[90px] lg:w-[140px] lg:h-[42px] ex:h-[35px] rounded-[40px] lg:text-[18px] ex:text-[12px] lg:font-semibold bg-black text-white text-center hover:text-black hover:border-[2px] hover:border-black hover:bg-transparent duration-200">Notify Me</button>
                <button className="ex:w-[100px] lg:w-[140px] lg:h-[42px] ex:h-[35px] rounded-[40px] lg:text-[18px] ex:text-[12px] lg:font-semibold bg-black text-white text-center hover:text-black hover:border-[2px] hover:border-black hover:bg-transparent duration-200">Shop Air Max</button>
              </div>
          </div>
       </div>

       <div className="lg:w-full ex:w-[360px] lg:h-[604.36px] ex:h-[1300px] lg:mt-[80px] ex:mt-[-560px] lg:ml-0 ex:ml-[10px] mb-[100px]">
         <div className="lg:w-full ex:w-[360px] h-[52px] flex justify-between pr-[10px]">
           <p className="font-semibold lg:text-[30px] ex:text-[25px] leading-7 lg:ml-[48px] ex:ml-[20px] lg:mt-0 ex:mt-[10px]">Best of Air Max</p>
         </div>
          <div className="lg:flex mt-[20px] lg:w-full lg:h-[540px] ex:w-[380px] ex:h-[1200px] lg:pl-0 ex:pl-[10px]">
          <Shoes />
          </div>
       </div>

       <div className="w-full h-[977px] lg:mt-[50px] lg:mb-[500px] ex:mt-[-800px]">
         <p className="font-semibold lg:text-[32px] ex:text-[20px] lg:ml-[48px] ex:ml-[10px] leading-7">Featured</p>
         <Image src={pic4} alt="pics" className="lg:w-full ex:w-full ex:h-[230px] lg:h-[1000px] mt-[20px] lg:ml-0" />
         <div className="lg:w-full ex:w-full h-[177px] lg:mt-[50px] ex:mt-[20px] text-center">
           <p className="font-bold lg:text-[65px] ex:text-[35px] lg:leading-[60px]">STEP INTO WHAT FEELS GOOD</p>
           <p className="font-medium lg:text-[20px] ex:text-[12px] leading-6 mt-[10px]">Cause everyone should know the feeling of running in that perfect pair.</p>
           <button className="ex:w-[152.42px] lg:w-[190px] ex:h-[39px] lg:h-[46px] py-[6px] font-semibold text-[18px] text-center bg-black rounded-[30px] text-white hover:text-black hover:border-[2px] hover:border-black hover:bg-transparent duration-200 lg:mt-[40px] ex:mt-[20px]">
            <Link href="/NewFeature">Find Your Shoe</Link>
           </button>
          </div>
       </div>

       <div className="lg:w-full ex:w-[380px] ex:h-[1700px] lg:h-[561px] lg:mt-[-80px] ex:mt-[-450px] lg:mb-[100px]">
         <p className="font-semibold lg:text-[32px] ex:text-[25px] leading-7 lg:ml-[48px] ex:ml-[20px]">Gear Up</p>
            <div className="w-full mt-[20px] lg:h-[540px] lg:mt-0 pl-[-20px]">
              <Latest />
            </div>
       </div>

       <div className="lg:w-full ex:w-full h-[977px] lg:mt-[50px] lg:mb-[300px] ex:mt-[-1130px]">
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

       <div className="lg:w-full ex:w-full h-[592px] lg:mt-[500px] ex:mt-[-500px] mb-[300px]">
         <p className="font-semibold lg:text-[32px] ex:text-[25px] lg:ml-[45px] ex:ml-[7px] leading-7 lg:mb-[30px]">The Essentials</p>
         <div className="lg:w-full ex:w-full ex:h-[1500px] lg:h-[540px] lg:flex lg:gap-[15px] mt-[30px]">
           <div><Image src={pic10} alt="pics" className="lg:w-[640px] lg:h-[740px] ex:w-full ex:h-[470px]" />
             <div className="w-[85px] h-[39px] relative mt-[-80px] ml-[30px] bg-white rounded-[30px] text-center py-[6px]"><p className="text-[16px] font-semibold leading-6">Men's</p></div>
           </div>
           <div><Image src={pic11} alt="pics" className="lg:w-[640px] lg:h-[740px] ex:w-full ex:h-[470px] lg:mt-0 ex:mt-[60px]" />
             <div className="w-[108px] h-[39px] relative mt-[-80px] ml-[30px] bg-white rounded-[30px] text-center py-[6px]"><p className="text-[16px] font-semibold leading-6">Women's</p></div>
           </div>
           <div><Image src={pic12} alt="pics" className="lg:w-[640px] lg:h-[740px] ex:w-full ex:h-[470px] lg:mt-0 ex:mt-[60px]" />
              <div className="w-[85px] h-[39px] relative mt-[-80px] ml-[30px] bg-white rounded-[30px] text-center py-[6px]"><p className="text-[16px] font-semibold leading-6">Kids'</p></div>
           </div>
         </div>
       </div>

       <div className="lg:w-full lg:h-[250px] ex:w-[380px] ex:h-[740px] ex:ml-[7px] lg:flex ex:hidden lg:gap-[300px] mb-[100px] pl-[200px] mt-[200px]">
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
}
