import { groq } from "next-sanity";


export const allProducts = groq `*[_type == "product"]`
export const threeProducts = groq `*[_type == "product"][10..13]`
export const Data = groq `*[_type == "product"][2..5]`
export const Female = groq `*[_type == "product" && category == "Women's Shoes"]`
export const male = groq `*[_type == "product" && category == "Men's Shoes"]`