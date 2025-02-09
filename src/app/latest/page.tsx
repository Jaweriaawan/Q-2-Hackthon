'use client'

import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { threeProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function Shoes() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchData: Product[] = await client.fetch(threeProducts);
      setProduct(fetchData);
    }
    fetchProduct();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16 pt-5">
      {product.map((product) => (
        <Link key={product._id} href={`/ProductDetails/${product.slug.current}`}>
          <div className="w-full">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            )}
            <div className="flex justify-between font-bold text-lg px-2 pt-3">
              <p>{product.productName}</p>
              <p className="text-gray-400">PKR: {product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
