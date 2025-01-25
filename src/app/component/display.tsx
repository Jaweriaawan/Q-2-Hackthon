export default function Display(){
  return <>
      <div className="w-[80%] h-[600px] bg-slate-300 ml-[200px] mt-[100px]">
         <div className="flex">
          {
              data.map((da) => (
                 <div>
                   <p>{da.name}</p>
                   <img src={da.image} alt="" width={'500px'} height={'500px'} />
                   <p>{da.category}</p>
                   <p>{da.price}</p>
                   
                 </div>
              ))
          }
          
         </div>
      </div>
  </>
}

const data = [
  {
    name: "Nike Air Zoom Spiridon SP",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9d5f55c7-936a-4b7c-916c-bfe28996ac56/AIR+ZOOM+SPIRIDON+SP.png",
    category : "Mens's Shoes",
    price: "$210"    
  },

  {
    name: "Nike Air Zoom Spiridon SP",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9d5f55c7-936a-4b7c-916c-bfe28996ac56/AIR+ZOOM+SPIRIDON+SP.png",
    category : "Mens's Shoes",
    price: "$210"    
  },

  {
    name: "Nike Air Zoom Spiridon SP",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9d5f55c7-936a-4b7c-916c-bfe28996ac56/AIR+ZOOM+SPIRIDON+SP.png",
    category : "Mens's Shoes",
    price: "$210"    
  },

  {
    name: "Nike Air Zoom Spiridon SP",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9d5f55c7-936a-4b7c-916c-bfe28996ac56/AIR+ZOOM+SPIRIDON+SP.png",
    category : "Mens's Shoes",
    price: "$210"    
  },

  {
    name: "Nike Air Zoom Spiridon SP",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9d5f55c7-936a-4b7c-916c-bfe28996ac56/AIR+ZOOM+SPIRIDON+SP.png",
    category : "Mens's Shoes",
    price: "$210"    
  },
]