"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function FetchProducts() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  const fetchProducts = async (selectedCategory: string) => {
    let query = `
      *[_type == "product" ${
        selectedCategory !== "all" ? `&& category == "${selectedCategory}"` : ""
      }]{
        productName,
        price,
        category,
        status,
        "productImage": image.asset->url,
        "productSlug": slug.current
      }
    `;
    const fetchedProducts = await client.fetch(query);
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  return (
    <div className="w-full">
      <div className="flex justify-center mt-10">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All</option>
          <option value="Men's Shoes">Men Shoes</option>
          <option value="Women's Shoes">Women Shoes</option>
          <option value="Accessories">Accessories</option>
          {/* Add more categories here as needed */}
        </select>
      </div>

      <div className="grid lg:grid-cols-3 lg:gap-[50px] ex:gap-[25px] lg:pl-[40px] ex:pl-[47px] mt-[50px] mb-[100px]">
        {products.map((data: any) => (
          <Link href={`productDetail/${data.productSlug}`} key={data.productSlug}>
            <div className="lg:w-[600px] lg:h-[720px] ex:w-[300px] ex:h-[430px]">
              <img
                src={urlFor(data.productImage).url()}
                alt={data.productName}
                className="lg:w-[600px] lg:h-[600px] ex:w-[300px] ex:h-[300px]" 
              />
              <div className="pl-[20px] pt-[20px] font-sans">
                <h1 className="lg:text-[24px] ex:text-[18px] lg:font-semibold ex:font-bold">
                  {data.productName}
                </h1>
                <p className="lg:text-[19px] ex:text-[17px] text-gray-400">
                  {data.category}
                </p>
                <p className="lg:text-[21px] ex:text-[18px] lg:font-semibold ex:font-bold">
                  PKR: {data.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

