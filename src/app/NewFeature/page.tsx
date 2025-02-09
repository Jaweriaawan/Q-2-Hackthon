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
    

  return <div className="grid grid-cols-4 gap-[30px] pl-[120px] pt-[20px]">
     {
        products.map((products) => (
        <Link href={`/ProductDetails/${products.slug.current}`}>
            <div>
              {products.image && (
                <Image src={urlFor(products.image).url()} alt="" width={400} height={400}/>
              )}
          <div className="flex justify-between w-[400px] font-bold text-[18px] px-[10px] pt-[15px]">
             <p>{products.productName}</p>
             <p className="text-gray-400 text-[16px] font-semibold">${products.price}</p>
          </div>
        </div>
        </Link>
     ))
  }
</div>
}