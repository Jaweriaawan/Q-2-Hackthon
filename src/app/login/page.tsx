"use client";

import Image from "next/image";
import logo from "@/app/images/logo.png";
import Link from "next/link";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/checkout"); // Redirect to checkout if already signed in
    }
  }, [isSignedIn, router]);

  if (!isLoaded) return <p>Loading...</p>; // Wait until auth state is loaded

  return (
    <div className="w-full flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-sm border border-gray-300 rounded-lg shadow-md p-6">
        <div className="text-center">
          <Image src={logo} alt="logo" className="mx-auto" />
          <p className="font-bold text-lg mt-4">YOUR ACCOUNT FOR EVERYTHING NIKE</p>
        </div>
        <div className="mt-6">
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-12 border border-gray-300 rounded-md px-4 text-gray-700 outline-none focus:border-black mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 border border-gray-300 rounded-md px-4 text-gray-700 outline-none focus:border-black mb-4"
          />
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Keep me signed in</span>
            </label>
            <p className="text-gray-500 cursor-pointer hover:underline">Forgot password?</p>
          </div>
          <p className="text-xs text-gray-600 text-center mb-4">
            By logging in, you agree to Nike's Privacy Policy and Terms of Use.
          </p>

          {!isSignedIn ? (
            <SignInButton redirectUrl="/checkout" mode="modal">
              <button className="w-full h-12 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black font-semibold flex justify-center items-center">
                Sign In
              </button>
            </SignInButton>
          ) : (
            <SignOutButton>
              <button className="w-full h-12 bg-red-600 text-white rounded-full hover:bg-red-800 border border-red-600 font-semibold flex justify-center items-center">
                Sign Out
              </button>
            </SignOutButton>
          )}

          <p className="text-sm text-gray-600 text-center mt-4">
            Not a Member? <Link href="/joinus" className="text-black underline">Join Us.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
