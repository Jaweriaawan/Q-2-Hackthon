'use client'
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { threeProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Shoes() {
  const [product, setproduct] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchShoes() {
      const fetchedShoes: Product[] = await client.fetch(threeProducts);
      setproduct(fetchedShoes);
    }
    fetchShoes();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % product.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + product.length) % product.length);
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16 pt-5">
      {/* Large screen grid layout */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Small screen slider */}
      <div className="relative md:hidden w-full overflow-hidden">

           {/* Navigation buttons */}
        {product.length > 1 && (
          <div className="ml-[250px]">
            <button onClick={prevSlide} className="p-1 bg-gray-400 text-white rounded-full ml-[5px]">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className=" p-1 bg-gray-400 text-white rounded-full ml-[10px]">
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {product.length > 0 && (
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {product.map((product) => (
              <Link key={product._id} href={`/ProductDetails/${product.slug.current}`} className="min-w-full">
                <div className="w-full">
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.productName}
                      width={250}
                      height={250}
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
        )}
      </div>
    </div>
  );
}
