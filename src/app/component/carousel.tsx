'use client'

import { useState } from "react";
import { SlArrowRightCircle } from "react-icons/sl";
import { SlArrowLeftCircle } from "react-icons/sl";

export default function Carousel({ Slides }:any) {
   
   let [current, useCurrent] = useState(0);

   let previousSlide = () => {
     if(current === 0) useCurrent(Slides.length -1);
     else useCurrent(current - 1)
   }

   let nextSlide = () => {
    if(current === Slides.length) useCurrent(0);
    else useCurrent(current + 1)
  }
 
 return <div className="overflow-hidden relative">
  <div className={`flex transition ease-out duration-40`}
    style={{transform: `translateX(-${current * 100}%)`}}
  >
  {Slides.map((s:any) => {
    return <img src={s} alt="" />
  })}
</div>

   <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10">
     <button onClick={previousSlide}><SlArrowLeftCircle className="w-[30px] h-[30px]" onClick={previousSlide} /></button>
     <button onClick={nextSlide}><SlArrowRightCircle className="w-[30px] h-[30px]" onClick={nextSlide} /></button>
   </div>
 </div>
}