'use client'
import { useState, useEffect } from 'react'
import { Product } from '../../../types/products'
import { getItems, removeProduct, updateQuantity } from '../changer/changer'
import Swal from 'sweetalert2'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { useRouter } from 'next/navigation'

const CartPage = () => {
  const [cartItem, setCartItem] = useState<Product[]>([])

  useEffect(() => {
    setCartItem(getItems())
  }, [])

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are You Sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeProduct(id);
        setCartItem(getItems());
        Swal.fire('Removed!', 'Item has been removed.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
    setCartItem(getItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout',
      text: 'Please review your cart before checkout.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Proceed!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Your order has been successfully processed!', 'success');
        setCartItem([]);
        router.push("/checkout")
      }
    });
  };

  const Total = () => {
    return cartItem.reduce((total, item:any) => total + item.price * item.inventory, 0);
  };

 return (
  <div className="w-full p-4 md:p-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Cart Items */}
    <div className="md:col-span-2 bg-white rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {cartItem.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        cartItem.map((item) => (
          <div 
            key={item._id} 
            className="flex ex:px-[30px] w-full items-center justify-between border-b pb-6 gap-6 pt-[30px]"
          >
            {/* Left Side - Image */}
            <div className="flex flex-col items-center gap-2">
              {item.image && (
                <Image 
                  src={urlFor(item.image).url()} 
                  alt="" 
                  width={110} 
                  height={110} 
                  className="rounded-md ex:w-[110px] ex:h-[110px] lg:w-[200px] lg:h-[200px]"
                />
              )}
              {/* Quantity Controls in Rounded Box */}
              <div className="flex items-center gap-2 border rounded-full px-[25px] py-[3px] mt-[10px] border-black">
                <button onClick={() => handleDecrement(item._id)}>−</button>
                <span className="text-lg font-semibold">{item.inventory}</span>
                <button onClick={() => handleIncrement(item._id)}>+</button>
              </div>
            </div>

            {/* Center - Product Details */}
            <div className="text-center flex lg:gap-[10px]">
              <p className="text-gray-700 font-semibold">${item.price}</p>
            </div>

            {/* Right Side - Remove Button */}
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md"
              onClick={() => handleRemove(item._id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>

    {/* Cart Summary */}
    <div className="p-6 bg-white rounded-lg h-fit">
      <p className="text-xl font-bold border-b pb-3 mb-4">Total: ${Total()}</p>
      <button
        className="w-full px-6 py-3 lg:ml-0 bg-black text-white font-semibold rounded-md"
        onClick={handleProceed}
      >
        Checkout
      </button>
    </div>
  </div>
</div>

  );
};

export default CartPage;
