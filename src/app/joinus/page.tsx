import Image from "next/image"
import logo from "@/app/images/logo.png"

export default function Joinus(){
 return <div className="w-full">
  <div className="w-[380px] lg:h-[833px] ex:h-[780px] font-sans lg:ml-[750px] ex:ml-[5px] mt-[80px] mb-[100px] lg:pt-[28px] ex:pt-[12px] border-[#E5E5E5] border-[2px] rounded-[10px] lg:mt-[80px] lg:mb-[90px]  shadow-gray-400 shadow-md hover:shadow-lg hover:shadow-slate-600">
  <div className="w-[324px] h-[182px] text-center ml-[28px]">
    <Image src={logo} alt="logo" className="ml-[135px]" />
    <p className="font-bold text-[18px] leading-[16px] lg:mt-[30px] ex:mt-[25px] ex:ml-[-20px]">BECOME A NIKE MEMBER</p>
    <p className="w-[282px] h-[60px] lg:ml-[18px] text-[#8D8D8D] lg:mt-[30px] ex:ml-[18px] ex:mt-[10px] font-normal text-[14px] leading-[22px]">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
  </div>
  <div className="w-[324px] h-[561px] mt-[2px] lg:ml-[28px] ex:ml-[50px]">
    <input type="email" placeholder="Email address" className="lg:w-[324px] lg:h-[40px] ex:w-[280px] ex:h-[40px] text-[#8D8D8D] px-[8px] border-[#E5E5E5] outline-none border-[1px] rounded-[4px]" />
    <input type="password" placeholder="Password" className="lg:w-[324px] lg:h-[40px] ex:w-[280px] ex:h-[40px] text-[#8D8D8D] px-[8px] border-[#E5E5E5] outline-none border-[1px] rounded-[4px] mt-[10px]" />
    <input type="text" placeholder="First Name" className="lg:w-[324px] lg:h-[40px] ex:w-[280px] ex:h-[40px] text-[#8D8D8D] px-[8px] border-[#E5E5E5] outline-none border-[1px] rounded-[4px] mt-[10px]" />
    <input type="text" placeholder="Last Name" className="lg:w-[324px] lg:h-[40px] ex:w-[280px] ex:h-[40px] text-[#8D8D8D] px-[8px] border-[#E5E5E5] outline-none border-[1px] rounded-[4px] mt-[10px]" />
    <input type="date" placeholder="" className="lg:w-[324px] lg:h-[40px] ex:w-[280px] ex:h-[40px] px-[8px] text-[#8D8D8D] border-[#E5E5E5] outline-none border-[1px] rounded-[4px] mt-[10px]" />
    <input type="text" placeholder="India" className="lg:w-[324px] lg:h-[40px] ex:w-[280px] ex:h-[40px] px-[8px] text-[#8D8D8D] border-[#E5E5E5] outline-none border-[1px] rounded-[4px] mt-[10px]" />
    <div className="lg:w-[324px] lg:h-[40px] ex:w-[280px] ex:h-[40px] mt-[10px] flex">
       <input type="text" placeholder="Male" className="lg:w-[153px] lg:h-[40px] ex:w-[130px] ex:h-[40px] px-[8px] text-[#8D8D8D] border-[#E5E5E5] outline-none border-[1px] rounded-[4px]" />
       <input type="text" placeholder="Female" className="lg:w-[153px] lg:h-[40px] ex:w-[130px] ex:h-[40px] px-[8px] text-[#8D8D8D] border-[#E5E5E5] ml-[18px] outline-none border-[1px] rounded-[4px]" />
    </div>
    <div className="w-[324px] h-[28px] mt-[20px] flex">
       <input type="checkbox" className="w-[20px] h-[20px] mt-[3px] ml-[3px] px-[8px] border-[#BCBCBC] border-[1px] rounded-[4px] " />
       <p className="w-[247px] h-[28px] ml-[20px] font-normal ex:text-[11px] lg:text-[12px] leading-[14px] text-[#8D8D8D]">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
    </div>
    <p className="w-[290px] h-[30px] mt-[20px] lg:ml-[18px] text-center font-normal ex:text-[12px] lg:text-[14px] leading-4 text-[#8D8D8D]">By creating an account, you agree to Nike's Privacy Policy and Terms of Use.</p>
    <div className="lg:w-[324px] lgLh-[40px] ex:w-[280px] bg-black mt-[25px] rounded-[3px] py-[10px] lg:ml-0 ex:ml-[5px]">
      <p className="font-normal text-[15px] leading-[17px] text-white text-center">JOIN US</p>
    </div>
    <p className="font-normal ex:text-[12px] lg:text-[14px] leading-[14px] text-center text-[#8D8D8D] ex:mt-[15px] lg:mt-[25px] lg:ml-0 ex:ml-[-35px]">Already a Member? <span className="font-medium underline text-black">Sign In.</span></p>
  </div>
</div>
 </div>
}