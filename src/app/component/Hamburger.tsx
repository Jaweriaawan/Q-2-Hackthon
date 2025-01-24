'use client'

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import {useState} from "react"
import Link from "next/link";


export default function Hamburger(){
    const [isOpen, setIsOpen] = useState(false)

 return <div className="ml-[100px] mt-[100px]">
   <button onClick={() => setIsOpen((open) => !open)}>
     {!isOpen ? (
        <GiHamburgerMenu className="w-[30px] h-[30px]" />
     ): (
        <RxCross2 className="w-[30px] h-[30px]" />
     )}
   </button>

   {isOpen && (
 <>
     <div className="w-[200px] h-[220px] text-gray-400 font-bold text-[20px] gap-[5px] ex:pt-[20px] lg:pt-0 relative transition-transform tracking-[1px] duration-300 ease-in-out">
       <Link href="/NewFeature"><p>New & Featured</p></Link>
       <Link href=""><p>Men</p></Link>
       <Link href=""><p>Women</p></Link>
       <Link href=""><p>Kids</p></Link>
       <Link href=""><p>Sale</p></Link>
       <Link href=""><p>SNKRS</p></Link>
     </div>
       
 </>
   )}
</div> 
}   
