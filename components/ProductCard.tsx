import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import Image from "next/image";
import { ProductQuickView } from "./ProductQuickView";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link href={`/product/${product.slug}`} aria-label={`View ${product.name}`} className="product-image-link">
          <Image src={product.image} alt={`${product.name} product view`} fill sizes="(max-width: 600px) 50vw, (max-width: 900px) 50vw, 25vw" className="product-image" />
        </Link>
        {product.isNew && <span className="product-tag">New</span>}
        <span className="illustrative-image-note">Illustrative image</span>
        <ProductQuickView product={product} />
      </div>
      <div className="product-meta">
        <div><Link href={`/product/${product.slug}`}><h3>{product.name}</h3></Link><p>{product.category}</p></div>
        <span>{formatPrice(product.price)}</span>
      </div>
    </article>
  );
}
