import { useEffect, useState } from "react"
import { Product } from "../../../types/products"
import { client } from "@/sanity/lib/client"
import { Data } from "@/sanity/lib/queries"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"

export default function Latest(){

  const [latest , setLatest] = useState<Product[]>([])
   
  useEffect(() => {
     async function fetchlatest (){
        const fetchedlatest : Product[] = await client.fetch(Data)
        setLatest(fetchedlatest)
     }
     fetchlatest()
  }, [])

  return <div className="grid grid-cols-4 pl-[80px] pt-[45px]">
   {
    latest.map((latest) => (
        <Link href={`/productDetail/${latest.slug.current}`}>
          <div key={latest._id}>
            {latest.image && (
              <Image src={urlFor(latest.image).url()} alt="" width={400} height={400}/>
            )}

           <div className="flex justify-between w-[400px] font-bold text-[18px] px-[10px] pt-[15px]">
             <p>{latest.productName}</p>
             <p className="text-gray-400">PKR: {latest.price}</p>
            </div>
        </div>
        </Link>
    ))
   }
</div>
}