'use client'

import React, { useEffect, useState } from "react"
import { Product } from "../../../types/products"
import { client } from "@/sanity/lib/client"
import { allProducts } from "@/sanity/lib/queries"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { cartProducts } from "../changer/changer"

export default function FetchProducts(){

  const [products , setproducts] =useState<Product[]> ([])

  useEffect(() => {
    async function fetching(){
      const fetchingProducts : Product[] = await client.fetch(allProducts)
      setproducts(fetchingProducts)
    }
    fetching()
  }, [])
    

  return  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
  {products.map((item: any) => (
   <Link key={item._id} href={`/ProductDetails/${item.slug.current}`}>
      <div key={item.id} className="bg-white rounded-lg p-4 duration-300">
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
}