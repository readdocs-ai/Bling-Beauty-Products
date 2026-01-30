import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bling Beauty Products",
  description: "Luxury beauty cosmetics & aesthetics store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
