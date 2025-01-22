"use client";

import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { add } from "@/app/Redux/cartSlice";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  id: string;
  productName: string;
  price: number;
  inventory: number;
  category: string;
  colors: string;
  status: string;
  description: string;
  productSlug: string;
  productImage: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    // Map Product to CartItem
    const cartItem: CartItem = {
      id: product.id,
      name: product.productName,
      price: product.price,
      quantity: 1, // Default quantity
    };
    dispatch(add(cartItem));
  };

  return (
    <div className="w-full">
       <div className="lg:flex lg:gap-[50px] ex:gap-[20px] lg:pl-[350px] pt-[100px] mb-[100px]">
      <img
        src={urlFor(product.productImage).url()}
        alt={product.productName}
        className="lg:w-[800px] lg:h-[800px] ex:w-full ex:h-[400px]"
      />
      <div className="font-sans text-[20px] pt-[100px]">
        <h1 className="lg:text-[26px] ex:text-[24px] ex:font-bold lg:font-semibold ex:px-[5px] lg:px-0">{product.productName}</h1>
        <p className="text-[22px] text-gray-400 mt-[10px] font-semibold ex:px-[10px] lg:px-0">
          {product.category}
        </p>
        <p className="text-[19px] text-red-500 font-semibold mt-[10px] ex:px-[10px] lg:px-0">
          {product.status}
        </p>
        <p className="text-[23px] font-semibold mt-[10px] ex:px-[10px] lg:px-0">
          PKR: {product.price}
        </p>
        <p className="text-[22px] text-gray-500 mt-[10px] ex:px-[10px] lg:px-0">
          Color Shown: {product.colors}
        </p>
        <p className="text-[20px] text-gray-600 mt-[20px] lg:w-[600px] ex:px-[10px] lg:px-0">
          {product.description}
        </p>
        <div
          className="lg:w-[450px] ex:w-[400px] ex:ml-[5px] lg:ml-0 h-[60px] bg-black text-white flex pl-[140px] rounded-full lg:mt-[50px] ex:mt-[60px] cursor-pointer"
          onClick={handleAdd}
        >
          <button className="font-semibold text-[22px]">Add to cart</button>
          <MdOutlineShoppingCart className="w-[30px] h-[30px] mt-[15px] ml-[10px]" />
        </div>
    </div>
  </div>
  </div>
  );
}
