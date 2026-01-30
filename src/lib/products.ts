
export const PRODUCTS = [
  {
    slug: "glow-serum",
    name: "Glow Serum",
    category: "Skincare",
    price_gbp: 48,
    image: "/brand/glow-serum.png",
    tag: "Radiance booster",
    description: "Luxury glow serum.",
    details: ["Vitamin C", "Hydrating", "Luminous finish"],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
