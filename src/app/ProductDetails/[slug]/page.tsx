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
            className="w-full max-w-[500px] h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="lg:col-span-2 flex flex-col justify-center">
        <p className="text-3xl font-bold">{product?.productName}</p>
        <p className="text-lg text-gray-400 mt-2">{product?.category}</p>
        <p className="text-2xl font-bold mt-2">${product?.price}</p>
        <p className="text-lg text-gray-500 mt-4">{product?.description}</p>

        <div className="mt-6">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}