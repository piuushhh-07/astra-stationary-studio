"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { CloseIcon } from "./icons";

export function ProductQuickModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="quick-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Quick view ${product.name}`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close icon-button" aria-label="Close quick view" onClick={onClose}>
          <CloseIcon />
        </button>
        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={900}
          sizes="(max-width: 520px) calc(100vw - 48px), 420px"
          onError={(event) => { event.currentTarget.src = "/images/placeholder-stationery.svg"; }}
        />
        <div>
          <p className="eyebrow">{product.category}</p>
          <h2>{product.name}</h2>
          <p className="modal-price">{formatPrice(product.price)}</p>
          <p>{product.description}</p>
          <Link className="button button-dark" href={`/product/${product.slug}`}>View details</Link>
        </div>
      </div>
    </div>
  );
}
