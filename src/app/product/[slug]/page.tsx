
import Link from "next/link";
import { getProduct, PRODUCTS } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) return null;

  return (
    <div style={{ padding: 40 }}>
      <h1>{p.name}</h1>
      <img src={p.image} alt={p.name} width={300} height={300} />
      <p>£{p.price_gbp}</p>
      <Link href="/">Back</Link>
    </div>
  );
}
