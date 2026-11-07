"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BagIcon, MenuIcon, SearchIcon, CloseIcon } from "./icons";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const update = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("astra-cart") || "[]");
        setCartCount(cart.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0));
      } catch { setCartCount(0); }
    };
    update();
    window.addEventListener("storage", update);
    window.addEventListener("astra-cart-updated", update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("astra-cart-updated", update);
    };
  }, []);

  return (
    <>
      <div className="announcement">Complimentary delivery on orders above ₹2,000</div>
      <header className="header">
        <button className="icon-button menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}><MenuIcon /></button>
        <Link href="/" className="brand" aria-label="Astra Stationery Studio home">
          <span>ASTRA</span>
          <small>STATIONERY STUDIO</small>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/shop">Shop</Link>
          <Link href="/shop?category=Premium%20Pens">Writing Instruments</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <Link href="/shop" aria-label="Search products" className="icon-button"><SearchIcon /></Link>
          <Link href="/cart" aria-label={`Shopping bag with ${cartCount} items`} className="icon-button bag-button">
            <BagIcon /><span>{cartCount}</span>
          </Link>
        </div>
      </header>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-head">
          <span className="brand mini"><span>ASTRA</span><small>STATIONERY STUDIO</small></span>
          <button className="icon-button" aria-label="Close menu" onClick={() => setMenuOpen(false)}><CloseIcon /></button>
        </div>
        <nav>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop all</Link>
          <Link href="/shop?category=Premium%20Pens" onClick={() => setMenuOpen(false)}>Writing instruments</Link>
          <Link href="/shop?category=Notebooks%20%26%20Journals" onClick={() => setMenuOpen(false)}>Notebooks & journals</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>Our story</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
      {menuOpen && <button className="menu-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
