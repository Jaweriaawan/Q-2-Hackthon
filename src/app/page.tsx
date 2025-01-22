"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default async function FetchProducts() {

      const query = `
        *[_type == "product"]{
          productName,
          price,
          category,
          status,
          "productImage": image.asset->url,
          "productSlug": slug.current
        }
      `;
    const products = await client.fetch(query)
      
  
  return (
    <div className="w-full">
            <div className="grid lg:grid-cols-3 gap-[40px] lg:pl-[80px] ex:pl-[15px] mt-[100px] mb-[100px]">
      {products.map((Data:any) => (
        <Link href={`products/${Data.productSlug}`} key={Data.productSlug}>
          <div className="lg:w-[550px] lg:h-[800px] ex:w-[400px] ex:h-[600px] hover:shadow-slate-400 hover:shadow-lg shadow-md shadow-slate-300 rounded-lg">
            <img
              src={urlFor(Data.productImage).url()}
              alt=""
             className="lg:w-[550px] lg:h-[600px] ex:w-[400px] ex:h-[400px]"
            />
            <div className="pl-[20px] pt-[20px] font-sans">
              <p className="text-[20px] text-red-500 font-semibold">{Data.status}</p>
              <h1 className="text-[24px] font-semibold">{Data.productName}</h1>
              <p className="text-[19px] text-gray-400">{Data.category}</p>
              <p className="text-[21px] font-semibold">PKR: {Data.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}
