import { Product } from "../../../types/products";

export const cartProducts = (products : Product) => {
   const cart : Product[] = JSON.parse (localStorage.getItem('cart') || '[]' )
   
   const existProduct = cart.findIndex(item => item._id === products._id)

   if(existProduct > -1){
     cart[existProduct].inventory += 1
   }
   else {
     cart.push ({
        ...products, inventory: 1
     })
   }

   localStorage.setItem('cart', JSON.stringify(cart))
}


export const removeProduct = (productId : string) => {
   let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

   cart = cart.filter(item => item._id !== productId)
   localStorage.setItem('cart', JSON.stringify(cart))
}



export const updateQuantity = (productId : string, quantity : number ) => {
  const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

  const productIndex = cart.findIndex(item => item._id === productId)

  if(productIndex > - 1){
     cart[productIndex].inventory = quantity;
     localStorage.setItem('cart', JSON.stringify(cart))
  }
}



export const getItems = () : Product[] => {
   return JSON.parse(localStorage.getItem('cart') || '[]') 
}