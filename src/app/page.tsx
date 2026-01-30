
import Link from "next/link";

const tiles = [
  { title: "Cosmetics", href: "/shop", img: "/brand/cosmetics.png" },
  { title: "Skincare", href: "/shop", img: "/brand/skincare.png" },
];

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Bling Beauty Products</h1>
      <div style={{ display: "flex", gap: 20 }}>
        {tiles.map((t) => (
          <Link key={t.title} href={t.href}>
            <img src={t.img} alt={t.title} width={200} height={120} />
            <p>{t.title}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
