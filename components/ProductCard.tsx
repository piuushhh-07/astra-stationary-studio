"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { useEffect, useState } from "react";
import { CloseIcon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
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
      <article className="product-card">
        <div className="product-image-wrap">
          <Link href={`/product/${product.slug}`} aria-label={`View ${product.name}`} className="product-image-link">
          <img src={product.image} alt="" className="product-image" loading="lazy" onError={(e) => { e.currentTarget.src = "/images/placeholder-stationery.svg"; }} />
          </Link>
          {product.isNew && <span className="product-tag">New</span>}
          <button className="quick-view" type="button" onClick={(e) => { e.preventDefault(); setQuickView(true); }}>Quick view</button>
        </div>
        <div className="product-meta">
          <div><Link href={`/product/${product.slug}`}><h3>{product.name}</h3></Link><p>{product.category}</p></div>
          <span>{formatPrice(product.price)}</span>
        </div>
        {product.stock < 5 && <small className="low-stock">Only {product.stock} remaining</small>}
      </article>
      {quickView && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setQuickView(false)}>
          <div className="quick-modal" role="dialog" aria-modal="true" aria-label={`Quick view ${product.name}`} onMouseDown={(e) => e.stopPropagation()}>
            <button className="modal-close icon-button" aria-label="Close quick view" onClick={() => setQuickView(false)}><CloseIcon /></button>
            <img src={product.image} alt={product.name} onError={(e) => { e.currentTarget.src = "/images/placeholder-stationery.svg"; }} />
            <div><p className="eyebrow">{product.category}</p><h2>{product.name}</h2><p className="modal-price">{formatPrice(product.price)}</p><p>{product.description}</p><Link className="button button-dark" href={`/product/${product.slug}`}>View details</Link></div>
          </div>
        </div>
      )}
    </>
  );
}
