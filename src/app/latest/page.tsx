'use client'

import React, {useEffect, useState} from "react"
import { Product } from "../../../types/products"
import { client } from "@/sanity/lib/client"
import { threeProducts } from "@/sanity/lib/queries"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"

export default function Shoes (){
   
    const [product , setproduct] = useState<Product []>([])

    useEffect(() => {
      async function fetchproduct(){
        const fecthData : Product[] = await client.fetch(threeProducts)
        setproduct(fecthData)
      }
      fetchproduct()
    }, [])

  return <div className="grid grid-cols-4 gap-[30px] pl-[120px] pt-[20px]">
     {
        product.map((product) => (
        <Link href={`/productDetail/${product.slug.current}`}>
            <div>
              {product.image && (
                <Image src={urlFor(product.image).url()} alt="" width={400} height={400}/>
              )}
          <div className="flex justify-between w-[400px] font-bold text-[18px] px-[10px] pt-[15px]">
             <p>{product.productName}</p>
             <p className="text-gray-400">PKR: {product.price}</p>
          </div>
        </div>
        </Link>
     ))
  }
</div>


}