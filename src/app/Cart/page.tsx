'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Redux/cartSlice';
import { IoMdTrash } from "react-icons/io";
import { urlFor } from '@/sanity/lib/image';
import { url } from 'inspector';
import { FiShoppingBag } from "react-icons/fi";

interface CartItem {
  id: string;
  productImage: string;
  name: string;
  price: number;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: { cart: CartItem[] }) => state.cart);

  const handleRemove = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <div className='font-sans w-full'>
      <h3 className='text-4xl font-semibold text-center mt-[100px]'>Cart Page</h3>
      <div className='mt-[100px] ex:grid ex:grid-cols-1 gap-[20px] lg:ml-0 ex:ml-[50px]'>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className='lg:flex justify-around items-center lg:w-[1000px] lg:h-[340px] ex:w-[330px] h-[400px] bg-opacity-15 lg:ml-[100px] rounded-xl '>
              <img src={item.productImage} alt={item.productImage} width={'300px'} height={'300px'} className='rounded-[10px]' />
              <h5 className='ex:text-[20px] font-semibold lg:text-[23px] ex:mt-[5px] lg:mt-0'>{item.name}</h5>
              <h5 className='ex:text-[18px] font-semibold lg:text-[20px] ex:mt-[5px] lg:mt-0'>PKR: {item.price}</h5>
              <button onClick={() => handleRemove(item.id)}>
                <IoMdTrash className='w-[27px] h-[27px] text-red-600 ex:ml-[270px] lg:ml-0' />
              </button>
            </div>
          ))
        ) : (
          <div className='px-[15px]'> 
             <p className='text-lg font-sans font-semibold text-center ex:text-[26px] lg:text-[60px] ex:ml-[-50px] lg:ml-0 ex:mt-[60px] lg:mt-0'>Your cart is feeling a bit lonely! 🛒</p>
             <p className='text-[18px] ex:mt-[20px] lg:mt-[20px] ex:ml-[-25px] lg:ml-[] text-center'>Looks like you haven't added anything yet. Start exploring and find your favorites</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
