import { groq } from "next-sanity";


export const allProducts = groq `*[_type == "product"]`
export const threeProducts = groq `*[_type == "product"][10..13]`
export const Data = groq `*[_type == "product"][2..5]`