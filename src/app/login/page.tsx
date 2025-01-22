import Image from "next/image"
import logo from "@/app/images/logo.png"
import Link from "next/link"

export default function Login(){
 return <div className="w-full">
    <div className="lg:w-[380px] h-[489px] ex:w-[300px] border-[#BCBCBC] mb-[60px] border-[1px] rounded-[10px] lg:ml-[800px] ex:ml-[66px] mt-[96px] pt-[28px] shadow-gray-400 shadow-md hover:shadow-lg hover:shadow-slate-600">
   <div className="w-[324px] h-[128px] ml-[28px]">
      <Image src={logo} alt="logo" className="lg:ml-[135px] ex:ml-[100px]" />
      <p className="w-[186px] h-[60px] font-bold text-[19px] text-center lg:ml-[76px] ex:ml-[26px] mt-[15px]">YOUR ACCOUNT FOR EVERYTHING NIKE</p>
   </div>
   <div className="w-[324px] h-[305px] mt-[2px] lg:ml-[28px] ex:ml-[9px]">
      <input type="email" placeholder="Email address" className="lg:w-[324px] ex:w-[280px] h-[40px] font-normal text-[14px] mt-[20px] text-[#8D8D8D] border-[1px] border-[#E5E5E5] outline-none px-[10px]" />
      <input type="Password" placeholder="Password" className="lg:w-[324px] ex:w-[280px] h-[40px] text-[#8D8D8D] mt-[20px] border-[1px] border-[#E5E5E5] outline-none px-[10px]" />
      <div className="lg:w-[324px] ex:w-[300px] h-[20px] mt-[20px] flex lg:ml-0 ex:ml-[10px]">
         <input type="checkbox" className="lg:w-[20px] lg:h-[20px] ex:w-[12px] ex:h-[12px] lg:mt-0 ex:mt-[5px] rounded-[6px] border-[#BCBCBC] border-[1px]" />
         <p className="font-normal lg:text-[12px] ex:text-[11px] leading-[14px] text-[#8D8D8D] mt-[4px] ml-[5px]">Keep me signed in</p>
         <p className="text-[#BCBCBC] font-normal lg:text-[12px] ex:text-[11px] leading-[13.8px] lg:ml-[50px] ex:ml-[30px] mt-[4px]">Forgotten your password?</p>
      </div>
      <p className="w-[275px] h-[30px] mt-[25px] lg:ml-[27px] ex:ml-[8px] text-[#8D8D8D] font-normal ex:text-[12px] lg:text-[14px] leading-4 text-center">By logging in, you agree to Nike's Privacy Policy and Terms of Use.</p>
      <div className="lg:w-[324px] lg:h-[40px] ex:w-[280px] ex:h-[35px] bg-black mt-[20px] lg:ml-0 ex:ml-[px] rounded-[4px] text-white lg:py-[8px] ex:py-[6px] text-center">
         <p className="">SIGN IN</p>
      </div>
      <p className=" font-normal ex:text-[12px] lg:text-[14px] leading-[14px] text-[#8D8D8D] lg:ml-[93px] ex:ml-[70px] mt-[20px]">Not a Member? <Link href="/joinus"><span className="text-black underline">Join Us.</span></Link></p>
   </div>
</div>
 </div>
}