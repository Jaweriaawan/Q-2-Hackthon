import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { Data } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function Latest() {
  const [latest, setLatest] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchLatest() {
      const fetchedLatest: Product[] = await client.fetch(Data);
      setLatest(fetchedLatest);
    }
    fetchLatest();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16 pt-5">
      {latest.map((product) => (
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
