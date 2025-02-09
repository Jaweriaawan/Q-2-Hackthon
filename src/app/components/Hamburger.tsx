'use client'

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen((open) => !open)}
        className="text-gray-800 dark:text-white focus:outline-none"
      >
        {!isOpen ? (
          <GiHamburgerMenu className="w-8 h-8" />
        ) : (
          <RxCross2 className="w-8 h-8" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-start p-6 space-y-5 text-gray-700 dark:text-gray-300">
          <Link href="/NewFeature" className="text-lg font-semibold hover:text-gray-900 dark:hover:text-white transition-colors">
            New & Featured
          </Link>
          <Link href="male" className="text-lg font-semibold hover:text-gray-900 dark:hover:text-white transition-colors">
            Men
          </Link>
          <Link href="Female" className="text-lg font-semibold hover:text-gray-900 dark:hover:text-white transition-colors">
            Women
          </Link>
          <Link href="#" className="text-lg font-semibold hover:text-gray-900 dark:hover:text-white transition-colors">
            Kids
          </Link>
          <Link href="#" className="text-lg font-semibold hover:text-gray-900 dark:hover:text-white transition-colors">
            Sale
          </Link>
          <Link href="#" className="text-lg font-semibold hover:text-gray-900 dark:hover:text-white transition-colors">
            SNKRS
          </Link>
        </div>
      </div>
    </div>
  );
}
