import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

export default function SearchProducts(){
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
  return <div>
    <div className="flex justify-center mt-10">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-[250px] hidden md:flex lg:h-[40px] ex:h-[35px] ex:ml-[60px] ex:mt-[8px] rounded-full bg-[#F5F5F5] border border-black text-black lg:ml-[180px] px-[10px] hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          <option value="all">All</option>
          <option value="Men's Shoes">Men Shoes</option>
          <option value="Women's Shoes">Women Shoes</option>
          <option value="Accessories">Accessories</option>
          {/* Add more categories here as needed */}
        </select>
      </div>
  </div>
}