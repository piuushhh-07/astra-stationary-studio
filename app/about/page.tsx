import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/data/images";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about Astra Stationery Studio and our approach to considered writing objects.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-hero"><Image src={images.studio} alt="Astra studio interior" fill sizes="100vw" priority /><div><p className="eyebrow">About Astra</p><h1>The beauty of the written word</h1></div></div>
      <div className="about-editorial">
        <Image src={images.lifestyle} alt="Writing desk lifestyle scene" width={1200} height={900} sizes="(max-width: 900px) 100vw, 50vw" />
        <div><p className="eyebrow">Our story</p><h2>A studio for ideas, letters, and everyday rituals.</h2><p>Astra Stationery Studio brings together writing instruments and desk objects with a belief in the lasting value of thoughtful things. This page is reserved for the founder’s story, philosophy, and the details that make Astra distinctly its own.</p><p>Our approach is simple: select fewer things, chosen carefully; favour honest materials and useful beauty; and make every interaction feel personal.</p></div>
      </div>
      <div className="about-values">
        <article><span>01</span><h2>Considered selection</h2><p>An edit shaped around useful beauty, tactile materials, and enduring design.</p></article>
        <article><span>02</span><h2>Personal guidance</h2><p>Product enquiries and writing recommendations are handled directly by the studio.</p></article>
        <article><span>03</span><h2>Everyday ritual</h2><p>Objects intended to bring intention to notes, letters, planning, and creative work.</p></article>
      </div>
      <div className="about-cta"><p className="eyebrow">Visit the collection</p><h2>Choose something worth keeping.</h2><Link href="/shop" className="button button-light">Explore Astra</Link></div>
    </section>
  );
}
