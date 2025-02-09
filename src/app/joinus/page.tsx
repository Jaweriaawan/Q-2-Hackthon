import Image from "next/image";
import logo from "@/app/images/logo.png";

export default function Joinus() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-sm bg-white border-2 border-gray-300 shadow-md hover:shadow-lg rounded-lg p-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Image src={logo} alt="logo" width={100} height={50} />
        </div>

        {/* Heading */}
        <h2 className="text-center text-lg font-bold mt-4">BECOME A NIKE MEMBER</h2>
        <p className="text-center text-gray-600 text-sm mt-2">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
        </p>

        {/* Form Fields */}
        <div className="mt-4 space-y-3">
          <input type="email" placeholder="Email address" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black" />
          <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black" />
          <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black" />
          <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black" />
          <input type="date" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black" />
          <input type="text" placeholder="India" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black" />
        </div>

        {/* Gender Selection */}
        <div className="flex justify-between mt-3">
          <input type="text" placeholder="Male" className="w-[48%] p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black" />
          <input type="text" placeholder="Female" className="w-[48%] p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black" />
        </div>

        {/* Checkbox */}
        <div className="flex items-start mt-4">
          <input type="checkbox" className="mt-1" />
          <p className="text-xs text-gray-600 ml-2">
            Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
          </p>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-600 text-center mt-3">
          By creating an account, you agree to Nike's <span className="underline cursor-pointer">Privacy Policy</span> and <span className="underline cursor-pointer">Terms of Use</span>.
        </p>

        {/* Join Button */}
        <button className="w-full bg-black text-white py-2 mt-4 rounded hover:opacity-80">JOIN US</button>

        {/* Sign In Link */}
        <p className="text-xs text-gray-600 text-center mt-3">
          Already a Member? <span className="underline cursor-pointer text-black">Sign In.</span>
        </p>
      </div>
    </div>
  );
}
