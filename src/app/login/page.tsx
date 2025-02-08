import Image from "next/image"
import logo from "@/app/images/logo.png"
import Link from "next/link"
import { SignedOut, SignInButton } from "@clerk/nextjs"
 

export default function Login(){
 return <div className="w-full font-sans">
    <div className="lg:w-[450px] ex:h-[489px] lg:h-[540px] ex:w-[300px] border-[#BCBCBC] mb-[60px] border-[1px] rounded-[10px] lg:ml-[800px] ex:ml-[40px] mt-[96px] pt-[28px] shadow-gray-400 shadow-md hover:shadow-lg hover:shadow-slate-600">
   <div className="w-[324px] h-[128px] ml-[28px]">
      <Image src={logo} alt="logo" className="lg:ml-[160px] ex:ml-[100px]" />
      <p className="w-[186px] h-[60px] font-bold lg:text-[21px] ex:text-[19px] text-center lg:ml-[90px] ex:ml-[26px] mt-[15px]">YOUR ACCOUNT FOR EVERYTHING NIKE</p>
   </div>
   <div className="w-[324px] h-[305px] mt-[2px] lg:ml-[35px] ex:ml-[9px]">
      <input type="email" placeholder="Email address" className="lg:w-[360px] ex:w-[280px] ex:h-[40px] lg:h-[50px] font-normal ex:text-[14px] lg:text-[17px] hover:border-black mt-[20px] text-[#8D8D8D] border-[3px] rounded-[6px] border-[#E5E5E5] outline-none px-[14px]" />
      <input type="Password" placeholder="Password" className="lg:w-[360px] ex:w-[280px] ex:h-[40px] lg:h-[50px] font-normal ex:text-[14px] lg:text-[17px] hover:border-black mt-[20px] text-[#8D8D8D] border-[3px] rounded-[6px] border-[#E5E5E5] outline-none px-[14px]" />
      <div className="lg:w-[360px] ex:w-[300px] h-[20px] mt-[20px] flex lg:ml-0 ex:ml-[10px]">
         <input type="checkbox" className="lg:w-[20px] lg:h-[20px] ex:w-[12px] ex:h-[12px] lg:mt-0 ex:mt-[5px] rounded-[6px] border-[#BCBCBC] border-[1px]" />
         <p className="font-normal lg:text-[13px] ex:text-[11px] leading-[12px] text-[#8D8D8D] mt-[4px] ml-[5px]">Keep me signed in</p>
         <p className="text-[#BCBCBC] font-normal lg:text-[14px] ex:text-[11px] leading-[12px] lg:ml-[50px] ex:ml-[30px] mt-[4px]">Forgotten your password?</p>
      </div>
      <p className="w-[225px] h-[30px] lg:mt-[28px] ex:mt-[25px] lg:ml-[55px] ex:ml-[8px] text-[#8D8D8D] font-normal ex:text-[12px] lg:text-[15px] leading-4 text-center">By logging in, you agree to Nike's Privacy Policy and Terms of Use.</p>
      <button className="lg:w-[360px] lg:h-[50px] ex:w-[280px] ex:h-[35px] bg-black ex:mt-[20px] lg:mt-[25px] hover:bg-white hover:text-black rounded-[30px] lg:ml-[5px] ex:ml-[px] hover:border-black hover:border-[3px] font-semibold text-white lg:py-[8px] ex:py-[6px] text-center">
           <SignedOut>
              <SignInButton />
           </SignedOut>
      </button>
      <p className=" font-normal ex:text-[12px] lg:text-[16px] leading-[14px] text-[#8D8D8D] lg:ml-[93px] ex:ml-[70px] mt-[20px]">Not a Member? <Link href="/joinus"><span className="text-black underline">Join Us.</span></Link></p>
   </div>
</div>
 </div>

}

