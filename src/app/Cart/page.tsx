'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Redux/cartSlice';
import { IoMdTrash } from "react-icons/io";
import { urlFor } from '@/sanity/lib/image';
import { url } from 'inspector';

interface CartItem {
  id: string;
  image: string;
  title: string;
  price: number;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: { cart: CartItem[] }) => state.cart);

  const handleRemove = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3 className='text-4xl font-semibold text-center mt-[100px]'>Cart Page</h3>
      <div className='mt-[100px]'>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className='flex justify-around items-center w-[1000px] h-[350px] bg-slate-300 bg-opacity-15 lg:ml-[100px] rounded-xl '>
              <img src={item.image} alt={item.image} width={'300px'} height={'300px'} className='rounded-[10px]' />
              <h5>{item.title}</h5>
              <h5 className='text-[20px] font-semibold'>PKR: {item.price}</h5>
              <button onClick={() => handleRemove(item.id)}>
                <IoMdTrash className='w-[27px] h-[27px] text-red-600' />
              </button>
            </div>
          ))
        ) : (
          <p className='text-lg font-sans font-semibold text-green-600 text-center text-[20px] mt-[250px]'>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
