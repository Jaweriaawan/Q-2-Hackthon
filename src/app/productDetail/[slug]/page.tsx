import { client } from "@/sanity/lib/client"
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import AddToCartButton from "@/app/component/cartButton";

interface ProductsPageProps {
  params : Promise<{slug : string}>
}

async function getProduct(slug : string): Promise<Product > {
  return client.fetch (
    groq `*[_type == "product" && slug.current == $slug][0] {
      _id,
      productName,
      category,
      _type,
      image,
      price,
      description,
    } `,{slug}
  )
}


export default async function ProductPage({params}: ProductsPageProps){
   const {slug} = await params;
   const product = await getProduct(slug)


   return <div className="w-full flex h-[560px] px-[300px] mt-[90px] font-sans">
      {product?.image && (
        <Image src={urlFor(product.image).url()} alt="" width={350} height={350} className="w-[500px] h-[500px]" />
      )}

      <div className="w-[600px] ml-[70px] mt-[45px]">
         <p className="text-[26px] font-bold">{product?.productName}</p>
         <p className="text-[19px] text-gray-400 mt-[5px]">{product?.category}</p>
         <p className="text-[22px] font-bold mt-[5px]">${product?.price}</p>
         <p className="text-[18px] text-gray-500 mt-[5px]">{product?.description}</p>

         <AddToCartButton product={product} />
      </div>
   </div>
}