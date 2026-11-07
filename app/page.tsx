import Link from "next/link";
import { images } from "@/data/images";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowIcon } from "@/components/icons";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Home() {
  const featured = products.filter((product) => product.featured).slice(0, 4);
  const categories = [
    ["Premium Pens", images.premiumPens],
    ["Notebooks & Journals", images.notebook],
    ["Desk Accessories", images.desk],
    ["Gift Collections", images.stationery],
  ];

  return (
    <>
      <section className="hero">
        <img src={images.hero} alt="Elegant writing desk with premium stationery" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Astra Stationery Studio</p>
          <h1>The Art of Writing,<br /><em>Reimagined.</em></h1>
          <p>Discover thoughtfully curated stationery and premium writing instruments for every word worth keeping.</p>
          <div className="hero-actions">
            <Link href="/shop" className="button button-light">Explore Collection</Link>
            <Link href="/about" className="text-link-light">Discover Astra <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section categories-section">
        <div className="section-heading"><div><p className="eyebrow">Curated selections</p><h2>Discover your essentials</h2></div><Link href="/shop" className="text-link">View all <ArrowIcon /></Link></div>
        <div className="category-grid">
          {categories.map(([name, image]) => (
            <Link href={`/shop?category=${encodeURIComponent(name)}`} className="category-card" key={name}>
              <img src={image} alt="" loading="lazy" />
              <div><span>{name}</span><ArrowIcon /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section products-section">
        <div className="section-heading centered"><div><p className="eyebrow">Studio favourites</p><h2>Best sellers</h2></div></div>
        <div className="product-grid">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        <div className="section-action"><Link href="/shop" className="button button-outline">View all products</Link></div>
      </section>

      <section className="story-section">
        <div className="story-image"><img src={images.studio} alt="Refined creative studio interior" loading="lazy" /></div>
        <div className="story-copy"><p className="eyebrow">Our philosophy</p><h2>Objects that make the everyday feel considered.</h2><p>At Astra, we believe writing instruments and desk objects should be chosen with intention. Our collections bring together tactile materials, enduring design, and quiet beauty.</p><Link href="/about" className="text-link">Our story <ArrowIcon /></Link></div>
      </section>

      <section className="showcase">
        <img src={images.premiumPens} alt="Luxury fountain pen detail" loading="lazy" />
        <div><p className="eyebrow">Writing instruments</p><h2>Made for the movement of your hand.</h2><p>From smooth fountain pens to finely balanced everyday writers, each instrument is selected for comfort, precision, and lasting character.</p><Link href="/shop?category=Premium%20Pens" className="button button-light">Explore writing instruments</Link></div>
      </section>

      <section className="lifestyle-section">
        <div><p className="eyebrow">The Astra way</p><h2>Pause. Put pen to paper.</h2></div>
        <img src={images.lifestyle} alt="Quiet desk scene with notebook and pen" loading="lazy" />
      </section>

      <section className="values section">
        {[["01", "Thoughtfully curated", "A concise collection chosen for function, form, and enduring appeal."], ["02", "Carefully packed", "Every order is wrapped with attention and prepared for its journey."], ["03", "Personal service", "Speak directly with our team for guidance, gifting, or product enquiries."], ["04", "Made to remain", "Timeless objects designed to be used, kept, and enjoyed for years."]].map(([num, title, copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </section>

      <section className="social-section">
        <div className="section-heading centered"><div><p className="eyebrow">Follow the studio</p><h2>@astrastationery</h2></div></div>
        <div className="social-grid">
          {[images.notebook, images.stationery, images.premiumPens, images.desk, images.lifestyle].map((image, index) => <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" key={index} aria-label="View Instagram post"><img src={image} alt="" loading="lazy" /></a>)}
        </div>
      </section>

      <section className="newsletter">
        <p className="eyebrow">Studio letters</p>
        <h2>A quieter kind of newsletter.</h2>
        <p>Occasional notes on writing, craft, and new arrivals.</p>
        <NewsletterForm />
      </section>

    </>
  );
}
