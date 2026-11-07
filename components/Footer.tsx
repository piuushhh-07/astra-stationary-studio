"use client";

import Link from "next/link";
import { ArrowIcon } from "./icons";
import type { FormEvent } from "react";

export function Footer() {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link href="/" className="brand footer-brand"><span>ASTRA</span><small>STATIONERY STUDIO</small></Link>
          <p className="footer-copy">Thoughtfully chosen tools for ideas, letters, and everyday rituals.</p>
        </div>
        <div className="footer-links">
          <div><h3>Explore</h3><Link href="/shop">Shop all</Link><Link href="/shop?category=Premium%20Pens">Writing instruments</Link><Link href="/about">Our story</Link></div>
          <div><h3>Customer care</h3><Link href="/contact">Contact us</Link><Link href="/contact">Shipping & returns</Link><Link href="/contact">Product enquiries</Link></div>
        </div>
        <div className="footer-newsletter">
          <h3>Notes from Astra</h3>
          <p>Seasonal collections, thoughtful writing, and studio news.</p>
          <form onSubmit={handleSubscribe}>
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input id="footer-email" type="email" required placeholder="Email address" />
            <button aria-label="Subscribe"><ArrowIcon /></button>
          </form>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Astra Stationery Studio</span><div><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a><a href="https://wa.me/?text=Hello%20Astra" target="_blank" rel="noreferrer" aria-label="WhatsApp">WhatsApp</a></div></div>
    </footer>
  );
}
