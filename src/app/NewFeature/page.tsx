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
            <div className="grid lg:grid-cols-3 lg:gap-[50px] ex:gap-[25px] lg:pl-[40px] ex:pl-[47px] mt-[100px] mb-[100px]">
      {products.map((Data:any) => (
        <Link href={`products/${Data.productSlug}`} key={Data.productSlug}>
          <div className="lg:w-[600px] lg:h-[720px] ex:w-[300px] ex:h-[430px]">
            <img
              src={urlFor(Data.productImage).url()}
              alt=""
             className="lg:w-[600px] lg:h-[600px] ex:w-[300px] ex:h-[300px]"
            />
            <div className="pl-[20px] pt-[20px] font-sans">
              <h1 className="lg:text-[24px] ex:text-[18px] lg:font-semibold ex:font-bold">{Data.productName}</h1>
              <p className="lg:text-[19px] ex:text-[17px] text-gray-400">{Data.category}</p>
              <p className="lg:text-[21px] ex:text-[18px] lg:font-semibold ex:font-bold">PKR: {Data.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}
