import { client } from "@/sanity/lib/client"



export default async function WomensItems(){
    
    const query = `
*[_type == "product" && category == "Women's Shoes"]{
    id,
    productName,
    price,
    inventory,
    category,
    colors,
    status,
    description,
    "productSlug":slug.current,
    "productImage":image.asset->url
}
`
 const Data = await client.fetch(query)
 return <div className="grid grid-cols-3">
   {
     Data.map((Data:any) => (
        <div>
            <img src={Data.productImage} alt="" className="lg:w-[600px] lg:h-[600px] ex:w-[300px] ex:h-[300px]" />
            <p>{Data.productName}</p>
            <p>{Data.category}</p>
            <p>{Data.price}</p> 
        </div>
     ))
   }
</div>
}