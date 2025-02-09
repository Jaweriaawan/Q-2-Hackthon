import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { TiSocialInstagram } from "react-icons/ti";
import { MdLocationPin } from "react-icons/md";

export default function Footer() {
  return (
    <div className="font-sans bg-black text-white mt-[60px]">
      {/* Main Footer Container */}
      <div className="max-w-[1411px] mx-auto p-5">
        {/* Info Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-8">
          {/* Column 1 */}
          <div className="flex-1">
            <p className="font-medium text-sm mb-4">Find A Store</p>
            <p className="font-medium text-sm mb-2">Become A Member</p>
            <p className="font-medium text-sm mb-2">Sign Up for Email</p>
            <p className="font-medium text-sm mb-2">Send Us Feedback</p>
            <p className="font-medium text-sm mb-2">Student Discounts</p>
          </div>

          {/* Column 2 */}
          <div className="flex-1">
            <p className="font-medium text-sm mb-4">Get Help</p>
            <p className="text-[#7E7E7E] text-sm mb-2">Order Status</p>
            <p className="text-[#7E7E7E] text-sm mb-2">Delivery</p>
            <p className="text-[#7E7E7E] text-sm mb-2">Returns</p>
            <p className="text-[#7E7E7E] text-sm mb-2">Payment Options</p>
            <p className="text-[#7E7E7E] text-sm mb-2">Contact Us On Nike.com Inquiries</p>
            <p className="text-[#7E7E7E] text-sm mb-2">Contact Us On All Other Inquiries</p>
          </div>

          {/* Column 3 */}
          <div className="flex-1">
            <p className="font-medium text-sm mb-4">About Nike</p>
            <p className="text-[#7E7E7E] text-sm mb-2">News</p>
            <p className="text-[#7E7E7E] text-sm mb-2">Careers</p>
            <p className="text-[#7E7E7E] text-sm mb-2">Investors</p>
            <p className="text-[#7E7E7E] text-sm mb-2">Sustainability</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-end gap-4 mb-8">
          <a href="#" className="w-8 h-8 bg-[#7E7E7E] rounded-full flex items-center justify-center hover:bg-white">
            <FaTwitter className="text-white hover:text-black" />
          </a>
          <a href="#" className="w-8 h-8 bg-[#7E7E7E] rounded-full flex items-center justify-center hover:bg-white">
            <FaFacebookF className="text-white hover:text-black" />
          </a>
          <a href="#" className="w-8 h-8 bg-[#7E7E7E] rounded-full flex items-center justify-center hover:bg-white">
            <TfiYoutube className="text-white hover:text-black" />
          </a>
          <a href="#" className="w-8 h-8 bg-[#7E7E7E] rounded-full flex items-center justify-center hover:bg-white">
            <TiSocialInstagram className="text-white hover:text-black" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-[#7E7E7E] pt-4">
          {/* Left Side */}
          <div className="flex items-center gap-2 mb-4 lg:mb-0">
            <MdLocationPin className="text-white" />
            <p className="font-medium text-sm">Pakistan</p>
            <p className="font-medium text-sm text-[#7E7E7E] ml-2">
              © 2023 Nike, Inc. All Rights Reserved
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-wrap gap-4 lg:gap-8">
            <p className="font-medium text-sm text-[#7E7E7E]">Guides</p>
            <p className="font-medium text-sm text-[#7E7E7E]">Terms of Sale</p>
            <p className="font-medium text-sm text-[#7E7E7E]">Terms of Use</p>
            <p className="font-medium text-sm text-[#7E7E7E]">Nike Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}