import { IoSearchOutline } from "react-icons/io5";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiMessageFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationPin } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div className="font-sans mt-10 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold">GET HELP</h1>
        <div className="flex items-center border border-gray-500 rounded-lg p-2 mt-4 w-full max-w-lg mx-auto">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="flex-1 outline-none text-gray-700 bg-transparent px-2"
          />
          <IoSearchOutline className="text-gray-600 w-6 h-6" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row mt-10 gap-10">
        {/* Left Side - FAQs */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="text-gray-600 mt-4">
            We want to make buying your favorite Nike shoes and gear online fast
            and easy. We accept:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Visa, Mastercard, Diners Club, Discover</li>
            <li>American Express, Visa Electron, Maestro</li>
            <li>Apple Pay</li>
          </ul>
          <p className="mt-4 text-gray-600">
            If you enter your PAN information at checkout, you can also pay
            using PayTM or a local credit/debit card.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-black text-white px-5 py-2 rounded-full">
              JOIN US
            </button>
            <button className="bg-black text-white px-5 py-2 rounded-full">
              SHOP NIKE
            </button>
          </div>

          {/* FAQs */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold">FAQs</h3>
            <div className="space-y-4 mt-4">
              <details className="border-b pb-2">
                <summary className="cursor-pointer text-gray-800 font-medium">
                  Does my card need international purchases enabled?
                </summary>
                <p className="text-gray-600 mt-2">
                  Yes, we recommend enabling international purchases with your
                  bank. Some banks may charge a small fee.
                </p>
              </details>

              <details className="border-b pb-2">
                <summary className="cursor-pointer text-gray-800 font-medium">
                  Can I pay for my order with multiple methods?
                </summary>
                <p className="text-gray-600 mt-2">
                  No, Nike orders cannot be split between multiple payment
                  methods.
                </p>
              </details>

              <details className="border-b pb-2">
                <summary className="cursor-pointer text-gray-800 font-medium">
                  Why don’t I see Apple Pay as an option?
                </summary>
                <p className="text-gray-600 mt-2">
                  Apple Pay is available only on compatible Apple devices with
                  Safari and an iCloud account.
                </p>
              </details>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="mt-6">
            <p className="text-gray-800 font-medium">Was this answer helpful?</p>
            <div className="flex space-x-3 mt-2">
              <BiSolidLike className="w-6 h-6 text-gray-700 cursor-pointer" />
              <BiSolidDislike className="w-6 h-6 text-gray-700 cursor-pointer" />
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8">
            <p className="font-semibold">RELATED</p>
            <p className="underline cursor-pointer">WHAT ARE NIKE’S DELIVERY OPTIONS?</p>
            <p className="underline cursor-pointer">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="lg:w-80 border-l lg:pl-10">
          <h2 className="text-2xl font-semibold text-center mb-6">CONTACT US</h2>

          {/* Contact Methods */}
          <div className="grid gap-6">
            <div className="text-center">
              <IoIosPhonePortrait className="w-12 h-12 mx-auto text-gray-800" />
              <p className="font-medium mt-2">000 800 919 0566</p>
              <p className="text-gray-600 text-sm">
                Products & Orders: 24/7 <br />
                Company Info: 07:30 - 16:30 (Mon-Fri)
              </p>
            </div>

            <div className="text-center">
              <RiMessageFill className="w-12 h-12 mx-auto text-gray-800" />
              <p className="font-medium mt-2">24 hours a day</p>
              <p className="text-gray-600 text-sm">7 days a week</p>
            </div>

            <div className="text-center">
              <TfiEmail className="w-12 h-12 mx-auto text-gray-800" />
              <p className="font-medium mt-2">We'll reply within</p>
              <p className="text-gray-600 text-sm">five business days</p>
            </div>

            <div className="text-center">
              <FaLocationPin className="w-12 h-12 mx-auto text-gray-800" />
              <p className="font-medium mt-2">STORE LOCATOR</p>
              <p className="text-gray-600 text-sm">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}