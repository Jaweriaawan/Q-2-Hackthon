'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { Female } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function WomensItems() {
   const [womenShoes , setWomenShoes] =useState<Product[]>([])

   useEffect(() => {
      async function womenItems(){
        const fetchItems : Product[] = await client.fetch(Female)
        setWomenShoes(fetchItems)
      } 
      womenItems()
   }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {womenShoes.map((item: any) => (
       <Link key={item._id} href={`/ProductDetails/${item.slug.current}`}>
          <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
             {item.image && (
                   <Image 
                     src={urlFor(item.image).url()} 
                     alt={item.productName} 
                     width={400} 
                     height={400} 
                     className="w-full h-auto"
                   />
                 )}
          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800">{item.productName}</h2>
            <p className="text-gray-500 text-sm">{item.category}</p>
            <p className="text-xl font-bold text-gray-900 mt-2">${item.price}</p>
          </div>
        </div>
       </Link>
      ))}
    </div>
  );
}
