import Link from "next/link";
import { FooterNewsletter } from "./FooterNewsletter";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link href="/" className="brand footer-brand"><span>ASTRA</span><small>STATIONERY STUDIO</small></Link>
          <p className="footer-copy">Thoughtfully chosen tools for ideas, letters, and everyday rituals.</p>
        </div>
        <div className="footer-links">
          <div><h3>Explore</h3><Link href="/shop">Shop all</Link><Link href="/shop?category=Premium%20Pens">Writing instruments</Link><Link href="/about">Our story</Link><Link href="/gallery">Studio gallery</Link></div>
          <div><h3>Customer care</h3><Link href="/gallery">Gallery</Link><Link href="/contact">Contact us</Link><Link href="/contact">Shipping & returns</Link><Link href="/contact">Product enquiries</Link></div>
        </div>
        <div className="footer-newsletter">
          <FooterNewsletter />
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Astra Stationery Studio</span><div><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a><a href="https://wa.me/?text=Hello%20Astra" target="_blank" rel="noreferrer" aria-label="WhatsApp">WhatsApp</a></div></div>
      <p className="photo-credits">Editorial photography: <a href="https://unsplash.com/photos/mint-and-blue-stationery-and-office-supplies-flat-lay-jnzbRcYUdd0" target="_blank" rel="noreferrer">Jess Bailey</a>, <a href="https://unsplash.com/photos/a-fountain-pen-and-inkwell-on-a-notebook-bBV9kt-rC4c" target="_blank" rel="noreferrer">Atelier by Vineeth</a>, <a href="https://unsplash.com/photos/a-desk-with-a-notebook-pen-eyeglasses-and-a-laptop-tnrTsVU8YFc" target="_blank" rel="noreferrer">Justin Morgan</a> and <a href="https://unsplash.com/photos/spiral-notebook-and-black-pen-1OUzxbySjlQ" target="_blank" rel="noreferrer">Lauren Sauder</a> via Unsplash.</p>
    </footer>
  );
}
