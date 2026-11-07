import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Explore Astra Stationery Studio writing instruments, notebooks, desk accessories, and gifts.",
  alternates: { canonical: "/shop" },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
