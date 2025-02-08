"use client"; // This makes it a Client Component

import { Product } from "../../../types/products";
import { cartProducts } from "../changer/changer";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
        toast: true, // Makes it look like a modern toast notification
        position: "top-end",
        icon: "success",
        title: `${product.productName} added to cart!`,
        showConfirmButton: false,
        timer: 2000,
        background: "#fff", // Dark mode styling
        color: "#333", // Text color
        iconColor: "#4CAF50", // Green success icon
      });
    cartProducts(product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-4 py-2 w-[300px] h-[50px] rounded-[70px] bg-black text-white hover:bg-transparent hover:border-[2px] hover:border-black hover:text-black font-semibold text-[18px] mt-4"
    >
      Add To Bag
    </button>
  );
};

export default AddToCartButton;
