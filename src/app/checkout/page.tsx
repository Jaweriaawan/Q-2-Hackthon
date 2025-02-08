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
  return <div className="font-sans">
      <div className="mt-6">
           <div className="w-full text-center">
                 <span className="text-4xl font-bold mt-[40px]">CheckOut</span>
           </div>
      </div>

    <div>
         <div className="flex w-full pl-[200px] pr-[230px] pt-[60px] justify-between">
              <div>
                  <p className="text-4xl font-semibold pt-[20px]">Contact Information</p>
                  <div>
                      <div className="pt-[60px] flex w-[750px] gap-[15px] pb-[30px]">
                         <div className="flex flex-col">
                           <input type="text" placeholder="FirstName*" id="firstName" value={formValues.firstName} onChange={handleInputChange} className="w-[350px] h-[65px] rounded-[15px] outline-none border-[2px] hover:border-black hover:border-[2px] border-gray-300 text-gray-500 px-[25px] text-[19px]" />
                             {formErrors.firstName && (
                             <p className="block text-red-500 mt-[5px] ml-[8px]">LastName is required</p>
                            )}
                         </div>

                         <div className="flex flex-col">
                            <input type="text" placeholder="lastName*" id="lastName" value={formValues.lastName} onChange={handleInputChange} className="w-[350px] h-[65px] rounded-[15px] outline-none border-[2px] hover:border-black hover:border-[2px] border-gray-300 text-gray-500 px-[25px] text-[19px]"/>
                             {formErrors.lastName && (
                              <p className="block text-red-500 mt-[5px] ml-[8px]">LastName is required</p>
                             )}
                         </div>
                      </div>

                      
                      <div className="pb-[30px] flex flex-col">
                        <input type="text" placeholder="address" id="address" value={formValues.address} onChange={handleInputChange} className="w-[715px] h-[65px] rounded-[15px] outline-none border-[2px] hover:border-black hover:border-[2px] border-gray-300 text-gray-500 px-[25px] text-[19px]"/>
                          {formErrors.address && (
                            <p className="block text-red-500 mt-[5px] ml-[8px]">Address is required</p>
                          )}
                      </div>

                      <div className="flex gap-[15px] pb-[30px]">
                          <div className="flex flex-col">
                            <input type="email" placeholder="email*" id="email" value={formValues.email} onChange={handleInputChange} className="w-[350px] h-[65px] rounded-[15px] outline-none border-[2px] hover:border-black hover:border-[2px] border-gray-300 text-gray-500 px-[25px] text-[19px]"/>
                              {formErrors.email && (
                              <p className="block text-red-500 mt-[5px] ml-[8px]">E-mail is required</p>
                              )}
                          </div>
                           <div className="flex flex-col">
                           <input type="number" placeholder="phone*" id="phone" value={formValues.phone} onChange={handleInputChange} className="w-[350px] h-[65px] rounded-[15px] outline-none border-[2px] hover:border-black hover:border-[2px] border-gray-300 text-gray-500 px-[25px] text-[19px]"/>
                              {formErrors.phone && (
                                <p className="block text-red-500 mt-[5px] ml-[8px]">Phone Number is required</p>
                              )}
                           </div>
                      </div>
                      
                      <div className="flex gap-[15px] pb-[30px]">
                         <div className="flex flex-col">
                           <input type="text" placeholder="city" id="city" value={formValues.city} onChange={handleInputChange} className="w-[350px] h-[65px] rounded-[15px] outline-none border-[2px] hover:border-black hover:border-[2px] border-gray-300 text-gray-500 px-[25px] text-[19px]"/>
                             {formErrors.city && (
                              <p className="block text-red-500 mt-[5px] ml-[8px]">City Name is required</p>
                            )}
                         </div>
                         <div className="flex flex-col">
                           <input type="number" placeholder="zip-code" id="zipCode" value={formValues.zipCode} onChange={handleInputChange} className="w-[350px] h-[65px] rounded-[15px] outline-none border-[2px] hover:border-black hover:border-[2px] border-gray-300 text-gray-500 px-[25px] text-[19px]"/>
                             {formErrors.zipCode && (
                              <p className="block text-red-500 mt-[5px] ml-[8px]">Zip-code is required</p>
                            )}
                         </div>
                      </div> 
                      <button onClick={handlePlaceOrder} className="w-[350px] h-[65px] rounded-[50px] bg-black text-white hover:bg-transparent hover:border-[2px] hover:border-black hover:text-black ml-[150px] mt-[30px] font-semibold">
                          Place Order
                      </button>
                  </div>
              </div>


              <div>
                <p className="text-4xl font-semibold pt-[20px]">In Your Bag</p>

                <div className="pt-[60px] pb-[30px] border-b-[2px] border-gray-400">
                    <p className="text-[20px] font-semibold">SubTotal : <span>${subtotal}</span></p>
                    <p className="text-[20px] font-semibold">Discount : <span>{discount}</span></p>
                    <p className="text-[20px] font-semibold">Total : ${subtotal.toFixed(2)}</p>
                </div>

                {cartItems.length > 0 ? (
                    cartItems.map ((item:any) => (
                        <div key={item._id} className="flex w-[480px] h-[125px] gap-[15px] pt-[5px] mt-[20px]">
                            <div>
                                {item.image && (
                                    <Image src={urlFor(item.image).url()} alt="image" width={120} height={120} />
                                )}
                            </div>

                            <div className="pt-[15px]">  
                                <p className="font-semibold text-[18px]">{item.productName}</p>
                                <p>Quantity: <span>{item.inventory}</span></p>
                                <p className="font-semibold text-[18px] mt-[20px]">${item.price * item.inventory}</p>
                            </div>
                        </div>
                    ))

                ) : (
                    <p className="w-[480px]">🛒 Your cart is empty</p>
                )}

              </div>
         </div>
    </div>
    
</div>

}

  






  // return (
//     <div className="min-h-screen bg-gray-50">
//     {/* Breadcrumb */}
//     <div className="mt-6">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <nav className="flex items-center gap-2 py-4">
//           <Link
//             href="/cart"
//             className="text-[#666666] hover:text-black transition text-sm"
//           >
//             Cart
//           </Link>
//           <CgChevronRight className="w-4 h-4 text-[#666666]" />
//           <span className="text-sm">Checkout</span>
//         </nav>
//       </div>
//     </div>

//     {/* Main Content */}
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Order Summary */}
//         <div className="bg-white border rounded-lg p-6 space-y-4">
//           <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex items-center gap-4 py-3 border-b"
//               >
//                 <div className="w-16 h-16 rounded overflow-hidden">
//                   {item.image && (
//                     <Image
//                       src={urlFor(item.image).url()}
//                       alt={item.productName}
//                       width={64}
//                       height={64}
//                       className="object-cover w-full h-full"
//                     />
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-sm font-medium">{item.productName}</h3>
//                   <p className="text-xs text-gray-500">
//                     Quantity: {item.inventory}
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium">
//                   ${item.price * item.inventory}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-gray-500">Your cart is empty.</p>
//           )}
//           <div className="text-right pt-4">
//             <p className="text-sm">
//               Subtotal: <span className="font-medium">${subtotal}</span>
//             </p>
//             <p className="text-sm">
//               Discount: <span className="font-medium">-${discount}</span>
//             </p>
//             <p className="text-lg font-semibold">
//               Total: ${total.toFixed(2)}
//             </p>
//           </div>
//         </div>

//         {/* Billing Form */}
//         <div className="bg-white border rounded-lg p-6 space-y-6">
//           <h2 className="text-xl font-semibold">Billing Information</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="firstName">First Name</label>
//               <input
//                 id="firstName"
//                 placeholder="Enter your first name"
//                 value={formValues.firstName}
//                 onChange={handleInputChange}
//                 className="border"
//               />
//               {formErrors.firstName && (
//                 <p className="text-sm text-red-500">
//                   First name is required.
//                 </p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="lastName">Last Name </label>
//               <input
//                 id="lastName"
//                 placeholder="Enter your last name"
//                 value={formValues.lastName}
//                 onChange={handleInputChange}
//               />
//               {formErrors.lastName && (
//                 <p className="text-sm text-red-500">
//                   Last name is required.
//                 </p>
//               )}
//             </div>
//           </div>
//           <div>
//             <label htmlFor="address">Address </label>
//             <input
//               id="address"
//               placeholder="Enter your address"
//               value={formValues.address}
//               onChange={handleInputChange}
//             />
//             {formErrors.address && (
//               <p className="text-sm text-red-500">Address is required.</p>
//             )}
//           </div>
//           <div>
//             <label htmlFor="city">City</label>
//             <input
//               id="city"
//               placeholder="Enter your city"
//               value={formValues.city}
//               onChange={handleInputChange}
//             />
//             {formErrors.city && (
//               <p className="text-sm text-red-500">City is required.</p>
//             )}
//           </div>
//           <div>
//             <label htmlFor="zipCode">Zip Code</label>
//             <input
//               id="zipCode"
//               placeholder="Enter your zip code"
//               value={formValues.zipCode}
//               onChange={handleInputChange}
//             />
//             {formErrors.zipCode && (
//               <p className="text-sm text-red-500">Zip Code is required.</p>
//             )}
//           </div>
//           <div>
//             <label htmlFor="phone">Phone</label>
//             <input
//               id="phone"
//               placeholder="Enter your phone number"
//               value={formValues.phone}
//               onChange={handleInputChange}
//             />
//             {formErrors.phone && (
//               <p className="text-sm text-red-500">Phone is required.</p>
//             )}
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               placeholder="Enter your email address"
//               value={formValues.email}
//               onChange={handleInputChange}
//             />
//             {formErrors.email && (
//               <p className="text-sm text-red-500">Email is required.</p>
//             )}
//           </div>
//           <button
//             className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
//             onClick={handlePlaceOrder}
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }