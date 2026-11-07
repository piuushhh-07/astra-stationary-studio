"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BagIcon, MenuIcon, SearchIcon, CloseIcon } from "./icons";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const update = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("astra-cart") || "[]");
        setCartCount(Array.isArray(cart)
          ? cart.reduce((sum: number, item) => sum + (Number.isInteger(item?.quantity) && item.quantity > 0 ? item.quantity : 0), 0)
          : 0);
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

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="announcement">A considered collection for the art of everyday writing</div>
      <header className="header">
        <Link href="/" className="brand" aria-label="Astra Stationery Studio home">
          <span>ASTRA</span>
          <small>STATIONERY STUDIO</small>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>

        <div className="header-actions">
          <Link href="/shop" aria-label="Search products" className="icon-button"><SearchIcon /></Link>
          <Link href="/cart" aria-label={`Shopping bag with ${cartCount} items`} className="icon-button bag-button">
            <BagIcon /><span>{cartCount}</span>
          </Link>
          <button
            className="icon-button menu-button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="astra-mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="astra-mobile-navigation" aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="mobile-menu-head">
          <span className="brand mini"><span>ASTRA</span><small>STATIONERY STUDIO</small></span>
          <button className="icon-button" aria-label="Close menu" onClick={() => setMenuOpen(false)}><CloseIcon /></button>
        </div>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
          ))}
          <Link href="/shop?category=Premium%20Pens" onClick={() => setMenuOpen(false)}>Writing Instruments</Link>
          <Link href="/shop?category=Notebooks%20%26%20Journals" onClick={() => setMenuOpen(false)}>Notebooks &amp; Journals</Link>
        </nav>
      </div>
      {menuOpen && <button className="menu-backdrop" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
