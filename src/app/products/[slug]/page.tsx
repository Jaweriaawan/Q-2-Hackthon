import ProductPage from "@/app/ProductDetails/[slug]/page";
import { client } from "@/sanity/lib/client";

interface Props {
  params: { slug: string };
}

export default async function Page({ params }: Props) {
  const { slug } = params;

  const query = `*[_type == "product" && slug.current == $slug][0]{
    id,
    productName,
    price,
    inventory,
    category,
    colors,
    status,
    description,
    "productSlug": slug.current,
    "productImage": image.asset->url
  }`;

  const product = await client.fetch(query, { slug });

  if (!product) {
    return <div className="text-center text-red-500">Product not found.</div>;
  }

  // return <ProductPage product={product} />;

  return <div>
    
  </div>
}
