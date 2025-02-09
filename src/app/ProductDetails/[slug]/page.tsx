import { client } from "@/sanity/lib/client"
import { Product } from "../../../../types/products"
import { groq } from "next-sanity"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import AddToCartButton from "@/app/components/cartButton"

interface ProductsPageProps {
  params: { slug: string }
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      productName,
      category,
      _type,
      image,
      price,
      description,
    }`,
    { slug }
  )
}

export default async function ProductPage({ params }: ProductsPageProps) {
  const { slug } = params
  const product = await getProduct(slug)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-32 py-12 font-sans">
      {product?.image && (
        <div className="flex justify-center">
          <Image
            src={urlFor(product.image).url()}
            alt={product?.productName}
            width={500}
            height={500}
            className="w-full lg:w-[500px] lg:h-[500px] ex:w-[300px] ex:h-[300px] object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="lg:col-span-2 flex flex-col justify-center">
        <p className="ex:text-xl lg:text-2xl lg:font-bold ex:font-semibold ex:px-[30px] lg:px-0">{product?.productName}</p>
        <p className="text-lg text-gray-400 mt-2 ex:px-[30px] lg:px-0">{product?.category}</p>
        <p className="ex:text-xl lg:text-2xl lg:font-bold ex:font-semibold mt-2 ex:px-[30px] lg:px-0">${product?.price}</p>
        <p className="text-lg text-gray-500 mt-2 ex:px-[30px] lg:px-0">{product?.description}</p>

        <div className="mt-3 ex:ml-[35px] lg:ml-0">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}