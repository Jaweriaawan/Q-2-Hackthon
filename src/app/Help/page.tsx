import { IoSearchOutline } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiMessageFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationPin } from "react-icons/fa6";


export default function Contactus(){
    return <div className="font-sans lg:mt-[100px] ex:w-full ex:mt-[40px] lg:mb-[10px] overflow-x-hidden">
       <div className="lg:w-[1428px] lg:h-[1250px] ex:w-[390px] ex:px-[10px] py-[20px] pt-[80px] lg:ml-[100px]">
         <div className="lg:w-[1428px] lg:h-[132px] ex:w-full relative">
           <p className="font-semibold text-[32px] leading-9 lg:text-center ex:ml-[110px] mt-[-40px] mb-[20px]">GET HELP</p>
           <div className="lg:w-[457.33px] lg:h-[60] lg:ml-[540px] ex:w-[380px] ex:h-[40px] flex border-[1px] border-[#757575] rounded-[8px] mb-[20px] ex:ml-[-5px]">
             <p className=" font-medium lg:text-[15px] ex:text-[13px] leading-5 text-[#757575] lg:mt-[10px] lg:ml-[20px] ex:ml-[15px] ex:mt-[9px]">What can we help you with?</p>
             <IoSearchOutline className="lg:ml-[200px] ex:ml-[160px] lg:w-[24px] lg:h-[24px] ex:w-[20px] ex:h-[20px] text-[#757575] ex:mt-[9px] lg:mt-[10px]" />
           </div>
         </div>
                                          
         <div className="lg:w-[1309px] lg:h-[1098px] ex:w-full lg:ml-[60px] lg:flex gap-[55px]">
                                        {/* LHS  */}
            <div className="lg:w-[939px] lg:h-[1042px] ex:w-full lg:mt-[30px]">
              <p className="ex:w-[310px] ex:h-[60px] lg:w-[850px] lg:mb-[20px] lg:h-[31px] font-semibold lg:text-[32px] ex:text-[21px] lg:leading-9 ex:leading-6 lg:ml-[20px]">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</p>
              <p className="lg:w-[905px] ex:w-[380px] font-medium lg:text-[15px] ex:text-[13px] lg:leading-9 ex:leading-[20px] lg:ml-[20px] mb-[10px]">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
              <p className="lg:w-[590px] ex:w-[380px] font-medium lg:text-[15px] ex:text-[13px] lg:leading-9 ex:leading-[20px] lg:ml-[50px]">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
              <p className="lg:w-[870px] ex:w-[380px] lg:mt-0 ex:mt-[10px] font-medium lg:text-[15px] ex:text-[13px] ex:leading-[20px] lg:leading-9 lg:ml-[50px]">If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
              <p className="font-medium lg:text-[15px] ex:text-[13px] lg:mt-0 ex:mt-[10px] leading-9 lg:ml-[50px]">Apple Pay</p>
              <div className="w-[923px] h-[115px] mt-[10px]">
               <p className="lg:w-[894px] ex:w-[380px] font-medium lg:text-[15px] ex:text-[13px] lg:leading-9 ex:leading-[20px] lg:ml-[20px]">Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>
               <div className="flex gap-[20px] lg:ml-[20px] lg:mt-[10px] ex:mt-[20px] ex:ml-[50px]">
                 <div className="w-[106.13px] h-[39px] bg-black rounded-[30px] py-[2px] pl-[22px]">
                   <p className="font-normal text-[16px] leading-9 text-white">JOIN US</p>
                 </div>
                 <div className="w-[129.84px] h-[39px] bg-black rounded-[30px] py-[2px] pl-[23px]">
                   <p className="font-normal text-[16px] leading-9 text-white">SHOP NIKE</p>
                 </div>
               </div>
               <div className="lg:w-[923px] ex:w-full lg:h-[168px] mt-[15px]">
                  <p className="font-semibold text-[20px] leading-9">FAQs</p>
                  <p className="lg:w-[500px] ex:w-[380px] font-semibold lg:text-[18px] ex:text-[15px] ex:leading-[20px] lg:leading-9 mt-[10px]">Does my card need international purchases enabled?</p>
                  <p className="lg:w-[842px] ex:w-[380px] font-medium lg:text-[15px] ex:text-[12px] lg:leading-9 ex:leading-[20px]">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                  <p className="lg:w-[923px] ex:w-[380px] font-medium lg:text-[15px] ex:text-[12px] lg:leading-9 ex:leading-[20px]">Please note, some banks may charge a small transaction fee for international orders.</p>
               </div>
               <p className="lg:w-[400px] ex:w-[380px] font-semibold lg:text-[18px] ex:text-[15px] lg:leading-9 ex:leading-[20px] mt-[20px]">Can I pay for my order with multiple methods?</p>
               <p className="lg:w-[600px] ex:w-[380px] font-medium lg:text-[15px] ex:text-[12px] lg:leading-9 ex:leading-[20px] lg:mt-[-10px]">No, payment for Nike orders can't be split between multiple payment methods.</p>
   
               <p className="lg:w-[500px] ex:w-[380px] font-semibold lg:text-[18px] ex:text-[15px] lg:leading-9 ex:leading-[20px] mt-[20px]">What payment method is accepted for SNKRS orders?</p>
               <p className="lg:w-[500px] ex:w-[380px] font-medium lg:text-[15px] ex:text-[12px] lg:leading-9 ex:leading-[20px] lg:mt-[-10px]">You can use any accepted credit card to pay for your SNKRS order.</p>
   
               <p className="lg:w-[350px] ex:w-[380px] font-semibold lg:text-[18px] ex:text-[15px] lg:leading-9 ex:leading-[20px] mt-[20px]">Why don't I see Apple Pay as an option?</p>
               <p className="lg:w-[922px] ex:w-[380px] font-medium lg:text-[15px] ex:text-[12px] lg:leading-9 ex:leading-[20px] lg:mt-[-5px]">To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
   
               <p className="font-medium lg:text-[16px] ex:text-[15px] lg:leading-9 lg:mt-0 mt-[10px]">Was this answer helpful?</p>
               <div className="flex"><BiSolidLike className="w-[30px] h-[30px]" /><BiSolidDislike className="w-[30px] h-[30px]" /></div>
   
               <div className="lg:w-[923px] ex:w-full h-[108px] mt-[20px]">
                 <p className="font-medium text-[16px] leading-9">RELATED</p>
                 <p className="font-medium text-[16px] leading-9 lg:ml-[40px] underline">WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
                 <p className="font-medium text-[16px] leading-9 lg:ml-[40px] underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
               </div>
   
              </div>
            </div>
                                         {/* RHS  */}
       <div className="lg:w-[300.25px] lg:h-[1042px] ex:w-[380px] ex:h-auto ex:mt-[800px] lg:mt-[30px] lg:border-l-[3px] border-[#CCCCCC]">
              <p className="font-semibold text-[32px] leading-9 text-center mb-[30px]">CONTACT US</p>
   
                                       {/* Grid Container */}
           <div className="grid ex:grid-cols-2 lg:grid-cols-1 gap-[30px] lg:w-[265px] lg:ml-[30px] ex:ml-[-20px] lg:h-auto ex:gap-x-4 ex:gap-y-6 ex:px-2">
                                       {/* Item 1 */}
               <div className="p-4 text-center">
                <a href=""><IoIosPhonePortrait className="w-[64px] h-[64px] mx-auto" /></a>
                <p className="font-medium lg:text-[16px] ex:text-[13px] leading-5 mt-[20px]">000 800 919 0566</p>
                <p className="font-normal lg:text-[16px] ex:text-[13px] leading-5 mt-[5px]">
                 Products & Orders: 24 hours a day, 7 days a week <br />
                 Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </p>
               </div>
   
                                       {/* Item 2 */}
               <div className="p-4 text-center">
                 <a href=""><RiMessageFill className="w-[64px] h-[64px] mx-auto" /></a>
                 <p className="font-medium lg:text-[16px] ex:text-[13px] leading-5 mt-[20px]">24 hours a day</p>
                 <p className="font-normal lg:text-[16px] ex:text-[13px] leading-5">7 days a week</p>
               </div>
   
                                       {/* Item 3 */}
               <div className="p-4 text-center">
                 <a href=""><TfiEmail className="w-[64px] h-[64px] mx-auto" /></a>
                   <p className="font-medium lg:text-[16px] ex:text-[13px] leading-5 mt-[20px]">We'll reply within</p>
                    <p className="font-normal lg:text-[16px] ex:text-[13px] leading-5">five business days</p>
                  </div>
   
                                           {/* Item 4 */}
                  <div className="p-4 text-center">
                     <a href=""><FaLocationPin className="w-[64px] h-[64px] mx-auto" /></a>
                     <p className="font-medium lg:text-[16px] ex:text-[13px] leading-5 mt-[20px]">STORE LOCATOR</p>
                     <p className="font-normal lg:text-[16px] ex:text-[13px] leading-5">Find Nike retail stores near you</p>
                  </div>
              </div>
          </div>
   
            </div>
       </div>
      </div>
   }
























