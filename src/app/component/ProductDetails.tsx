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
  productImage: string;
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
      quantity: 1,
      productImage: product.productImage, // Default quantity
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
      <div className="font-sans text-[20px] lg:pt-[100px] ex:pt-[20px]">
        <h1 className="lg:text-[26px] ex:text-[22px] ex:font-bold lg:font-semibold ex:px-[5px] lg:px-0">{product.productName}</h1>
        <p className="lg:text-[22px] ex:text-[19px] text-gray-400 lg:mt-[10px] ex:mt-[6px] font-semibold ex:px-[10px] lg:px-0">
          {product.category}
        </p>
        <p className="text-[19px] text-red-500 font-semibold lg:mt-[10px] ex:mt-[6px] ex:px-[10px] lg:px-0">
          {product.status}
        </p>
        <p className="lg:text-[23px] ex:text-[19px] ex:font-bold lg:font-semibold lg:mt-[10px] ex:mt-[6px] ex:px-[10px] lg:px-0">
          PKR: {product.price}
        </p>
        <p className="lg:text-[22px] ex:text-[19px] text-gray-500 lg:mt-[10px] ex:mt-[6px] ex:px-[10px] lg:px-0">
          Color Shown: {product.colors}
        </p>
        <p className="lg:text-[20px]v ex:text-[18px] text-gray-600 lg:mt-[10px] ex:mt-[6px] lg:w-[600px] ex:px-[10px] lg:px-0">
          {product.description}
        </p>
        <div
          className="lg:w-[450px] ex:w-[400px] ex:ml-[5px] lg:ml-0 h-[60px] bg-black text-white flex lg:pl-[140px] ex:pl-[120px] rounded-full lg:mt-[50px] ex:mt-[30px] cursor-pointer"
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
