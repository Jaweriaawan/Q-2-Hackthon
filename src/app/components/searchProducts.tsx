import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

export default function SearchProducts() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  const fetchProducts = async (selectedCategory: string) => {
    let query = `*[_type == "product" ${selectedCategory !== "all" ? `&& category == "${selectedCategory}"` : ""}]{
      productName,
      price,
      category,
      status,
      "productImage": image.asset->url,
      "productSlug": slug.current
    }`;

    try {
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  return (
    <div className="flex justify-center mt-6">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-[250px] md:w-[300px] lg:w-[350px] h-[40px] rounded-full border border-gray-500 bg-white text-black px-4 shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-gray-600 transition duration-300 ease-in-out"
      >
        <option value="all">All Categories</option>
        <option value="Men's Shoes">Men’s Shoes</option>
        <option value="Women's Shoes">Women’s Shoes</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>
  );
}
