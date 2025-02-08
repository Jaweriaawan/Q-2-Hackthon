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
    <div className="container mx-auto p-6 flex justify-between">
      <div className="w-2/3 bg-white shadow-md rounded-lg p-4 mr-[200px]">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cartItem.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cartItem.map((item) => (
            <div key={item._id} className="flex items-center justify-between border-b py-4">
              <div>
                <h3 className="text-lg font-semibold">{item.productName}</h3>
                <p className="text-gray-500">${item.price}</p>
                {item.image && (
                  <Image src={urlFor(item.image).url()} alt='' width={200} height={200} />
                )}
                <p>{item.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1 bg-gray-200 rounded-md"
                  onClick={() => handleDecrement(item._id)}
                >
                  -
                </button>
                <span className="text-lg">{item.inventory}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded-md"
                  onClick={() => handleIncrement(item._id)}
                >
                  +
                </button>
              </div>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-md"
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className="w-1/3 p-6 bg-white shadow-lg rounded-lg h-fit">
        <p className="text-xl font-bold border-b pb-2 mb-4">Total: ${Total()}</p>
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleProceed}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;







// 'use client'
// import { useState, useEffect } from 'react'
// import { Product } from '../../../types/products'
// import { getItems, removeProduct, updateQuantity } from '../changer/changer'
// import Swal from 'sweetalert2'

// const cartPage = () => {

//   const [cartItem, setCartItem] = useState <Product[]>([])

//   useEffect(() => {
//     setCartItem(getItems())
//   }, [])

  
//   const handleRemove = (id : string) => {
//     Swal.fire({
//       title : "Are You Sure",
//       item: "You Will Not Be Able To Recover This Item",
//       icon : "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, remove it",
//     }).then((result) => {
//       if(result.isConfirmed){
//         removeProduct(id),
//         setCartItem (getItems())

//         Swal.fire("Removed!", "Item has been removed", "success")
//       }
//     })
//   }

//   const handleQuantityChange = (id : string, quantity : number) => {
//     updateQuantity(id, quantity)
//     setCartItem(getItems())
//   }

//   const handleIncrement = (id : string) => {
//     const product = cartItem.find((item) => item._id === id)
//      if(product){
//        handleQuantityChange(id , product.inventory + 1)
//      }
//   }

//   const handledecrement = (id : string) => {
//     const product = cartItem.find((item) => item._id === id)
//      if(product && product.inventory > 1){
//        handleQuantityChange(id , product.inventory - 1)
//      }
//   }

//   const handleProceed = () => {
//     Swal.fire ({
//       title : "Proceed to Checkout",
//       text : "Please review your cart before checkout",
//       icon : "question",
//       showCancelButton : true,
//       confirmButtonColor : "#3085d6",
//       cancelButtonColor : "#d33",
//       confirmButtonText : "Yes, Proceed!"
//     }).then((result) => {
//        if (result.isConfirmed){
//          Swal.fire("success", "Your Order has been successfully proceed")
//          setCartItem([])
//        }
//     })
//   }

//   const Total = () => {
//     return cartItem.reduce((total, item) => total + item.price * item.inventory,0)
//   }
//  return <div>
//       {cartItem.map((item) => (
//         <div key={item._id}>
//            {item.productName}
//            {item.price}
//         </div>
//       ))}
//   </div>
// }

// export default cartPage