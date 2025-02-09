"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";
import { getItems } from "../changer/changer";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";


export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getItems()); 
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item:any) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
     
    Swal.fire({
        title : "Processing your order",
        text : "please wait a moment",
        icon : "info",
        showCancelButton : true,
        confirmButtonColor : "#3085d6",
        cancelButtonColor : "#d33",
        confirmButtonText : "Proceed",
     }).then((result) => {
         if(result.isConfirmed){
             if(validateForm()){
                localStorage.removeItem("appliedDiscount")

                Swal.fire(
                    "Success",
                    "Your order has been successfully proceed",
                    "success"
                )
             } else {
                Swal.fire(
                    "Error!",
                    "Please fill all fields",
                    "error"
                )
             }
         }
     })


    const orderData = {
        _type : 'order',
        firstName : formValues.firstName,
        lastName : formValues.lastName,
        address : formValues.address,
        city : formValues.city,
        zipCode : formValues.zipCode,
        phone : formValues.phone,
        email : formValues.email,
        
        cartItems : cartItems.map(item => ({
            _type : 'reference',
            _ref : item._id,

        })),

        total : total,
        discount : discount,
        orderDate : new Date().toISOString
    }

    try {
        await client.create(orderData)
        localStorage.removeItem("appliedDiscount")

    } catch (error) {
        console.error("error creating order", error)
    }
  };
  return  <div className="lg:container lg:mx-auto ex:w-full p-4 md:p-8 lg:p-12">
  <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Contact Information */}
    <div className="lg:col-span-2 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name*" id="firstName" value={formValues.firstName} onChange={handleInputChange} className="p-3 border rounded-md w-full" />
        <input type="text" placeholder="Last Name*" id="lastName" value={formValues.lastName} onChange={handleInputChange} className="p-3 border rounded-md w-full" />
      </div>
      <input type="text" placeholder="Address*" id="address" value={formValues.address} onChange={handleInputChange} className="p-3 border rounded-md w-full mt-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input type="email" placeholder="Email*" id="email" value={formValues.email} onChange={handleInputChange} className="p-3 border rounded-md w-full" />
        <input type="number" placeholder="Phone*" id="phone" value={formValues.phone} onChange={handleInputChange} className="p-3 border rounded-md w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input type="text" placeholder="City*" id="city" value={formValues.city} onChange={handleInputChange} className="p-3 border rounded-md w-full" />
        <input type="number" placeholder="Zip Code*" id="zipCode" value={formValues.zipCode} onChange={handleInputChange} className="p-3 border rounded-md w-full" />
      </div>
      <button className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">Place Order</button>
    </div>

    {/* Order Summary */}
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">In Your Bag</h2>
      <p className="text-lg font-medium">Subtotal: ${subtotal.toFixed(2)}</p>
      <p className="text-lg font-medium">Discount: ${discount}</p>
      <p className="text-xl font-bold mt-2">Total: ${total.toFixed(2)}</p>
      {cartItems.length > 0 ? (
        cartItems.map((item: any) => (
          <div key={item._id} className="flex items-center gap-4 mt-4 border-b pb-4">
            <Image src={urlFor(item.image).url()} alt="product" width={80} height={80} className="rounded-md mt-[20px]" />
            <div>
              <p className="text-lg font-semibold">{item.productName}</p>
              <p>Qty: {item.inventory}</p>
              <p className="font-semibold">${item.price * item.inventory}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mt-4">🛒 Your cart is empty</p>
      )}
    </div>
  </div>
</div>
                      

}
