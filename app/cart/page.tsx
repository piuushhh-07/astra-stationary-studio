"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { products, formatPrice } from "@/data/products";
import { readCart, writeCart, type CartItem } from "@/components/CartStore";
import { CloseIcon } from "@/components/icons";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setCart(readCart()));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const update = (next: CartItem[]) => {
    setCart(next);
    writeCart(next);
  };

  const lines = cart.map((item) => ({ ...item, product: products.find((product) => product.id === item.id) })).filter((line) => line.product);
  const subtotal = lines.reduce((sum, line) => sum + (line.product?.price || 0) * line.quantity, 0);

  if (!cart.length || !lines.length) return <section className="cart-page"><div className="empty-cart"><div><h1>Your bag is empty</h1><p>Discover objects for writing, keeping, and gifting.</p><Link href="/shop" className="button button-dark">Explore collection</Link></div></div></section>;

  return (
    <section className="cart-page">
      <div className="page-title"><p className="eyebrow">Your selection</p><h1>Shopping bag</h1></div>
      <div className="cart-layout">
        <div className="cart-lines">
          {lines.map((line) => line.product && (
            <div className="cart-item" key={`${line.id}-${line.variant}`}>
              <img src={line.product.image} alt={line.product.name} onError={(e) => { e.currentTarget.src = "/images/placeholder-stationery.svg"; }} />
              <div><h3>{line.product.name}</h3><p>{line.product.category}</p></div>
              <span>{formatPrice(line.product.price * line.quantity)}</span>
              <button className="remove-button" aria-label={`Remove ${line.product.name}`} onClick={() => update(cart.filter((item) => !(item.id === line.id && item.variant === line.variant)))}><CloseIcon /></button>
              <div className="quantity"><button aria-label="Decrease quantity" onClick={() => update(cart.map((item) => item.id === line.id && item.variant === line.variant ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item))}>−</button><span>{line.quantity}</span><button aria-label="Increase quantity" onClick={() => update(cart.map((item) => item.id === line.id && item.variant === line.variant ? { ...item, quantity: Math.min(line.product?.stock || 99, item.quantity + 1) } : item))}>+</button></div>
            </div>
          ))}
        </div>
        <aside className="cart-summary">
          <h2>Order summary</h2>
          <div className="summary-row"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
          <div className="summary-row"><span>Delivery</span><span>Calculated at checkout</span></div>
          <a className="button button-dark" href={`https://wa.me/?text=${encodeURIComponent(`Hello Astra, I would like to enquire about my order subtotal of ${formatPrice(subtotal)}.`)}`} target="_blank" rel="noreferrer">Enquire to checkout</a>
        </aside>
      </div>
    </section>
  );
}
