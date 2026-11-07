"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { Product } from "@/data/products";

const ProductQuickModal = dynamic(
  () => import("./ProductQuickModal").then((module) => module.ProductQuickModal),
  { ssr: false },
);

export function ProductQuickView({ product }: { product: Product }) {
  const [quickView, setQuickView] = useState(false);

  useEffect(() => {
    if (!quickView) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setQuickView(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [quickView]);

  return (
    <>
      <button
        className="quick-view"
        type="button"
        onClick={(event) => {
          event.preventDefault();
          setQuickView(true);
        }}
      >
        Quick view
      </button>
      {quickView && <ProductQuickModal product={product} onClose={() => setQuickView(false)} />}
    </>
  );
}
