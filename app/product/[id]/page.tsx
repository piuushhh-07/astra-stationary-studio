"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Suspense, useState } from "react";
import { products, formatPrice } from "@/data/products";
import { readCart, writeCart } from "@/components/CartStore";
import { ProductCard } from "@/components/ProductCard";

function ProductContent() {
  const params = useParams<{ id: string }>();
  const product = products.find((item) => item.id === params.id || item.slug === params.id);
  const [quantity, setQuantity] = useState(1);
  const initialVariants = product ? Object.fromEntries(product.variants.map((variant) => [variant.name, variant.options[0]])) : {};
  const [selected, setSelected] = useState<Record<string, string>>(initialVariants);

  if (!product) {
    return (
      <section className="product-page">
        <div className="empty-cart"><div><h1>Product not found</h1><p>This product may no longer be available.</p><Link href="/shop" className="button button-dark">Explore collection</Link></div></div>
      </section>
    );
  }

  const addToCart = () => {
    const cart = readCart();
    const existing = cart.find((item) => item.id === product.id && item.variant === JSON.stringify(selected));
    const currentQuantity = existing?.quantity || 0;
    const finalQuantity = Math.min(product.stock, currentQuantity + quantity);
    const next = existing
      ? cart.map((item) => item === existing ? { ...item, quantity: finalQuantity } : item)
      : [...cart, { id: product.id, quantity, variant: JSON.stringify(selected) }];
    writeCart(next);
  };

  const whatsapp = `https://wa.me/?text=${encodeURIComponent(`Hello Astra, I would like to enquire about ${product.name}.`)}`;
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  return (
    <section className="product-page">
      <div className="breadcrumb"><Link href="/">Home</Link> &nbsp;/&nbsp; <Link href="/shop">Shop</Link> &nbsp;/&nbsp; {product.name}</div>
      <div className="product-detail">
        <div className="product-gallery">
          {product.images.map((image, index) => <img key={image} src={image} alt={`${product.name}${index ? ` view ${index + 1}` : ""}`} onError={(e) => { e.currentTarget.src = "/images/placeholder-stationery.svg"; }} />)}
        </div>
        <div className="product-info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="price">{formatPrice(product.price)}</p>
          <p className="availability">{product.availability}</p>
          <p className="description">{product.description}</p>
          {product.variants.map((variant) => (
            <div className="variant-group" key={variant.name}>
              <label>{variant.name}</label>
              <div className="variant-options">{variant.options.map((option) => <button key={option} className={selected[variant.name] === option ? "active" : ""} onClick={() => setSelected({ ...selected, [variant.name]: option })}>{option}</button>)}</div>
            </div>
          ))}
          <div className="buy-row">
            <div className="quantity"><button aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button><span>{quantity}</span><button aria-label="Increase quantity" onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}>+</button></div>
            <button className="button button-dark" onClick={addToCart} disabled={product.stock === 0}>{product.stock === 0 ? "Out of stock" : "Add to bag"}</button>
          </div>
          <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
          <div className="specifications">{Object.entries(product.specifications).map(([key, value]) => <div key={key}><span>{key}</span><span>{value}</span></div>)}</div>
        </div>
      </div>
      {related.length > 0 && <section className="products-section"><div className="section-heading centered"><div><p className="eyebrow">You may also like</p><h2>Related pieces</h2></div></div><div className="product-grid">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section>}
    </section>
  );
}

export default function ProductPage() {
  return (
    <Suspense fallback={<section className="product-page"><div className="page-title"><h1>Loading product</h1></div></section>}>
      <ProductContent />
    </Suspense>
  );
}
