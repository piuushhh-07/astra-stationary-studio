import Link from "next/link";
import { images } from "@/data/images";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowIcon } from "@/components/icons";
import { NewsletterForm } from "@/components/NewsletterForm";
import { HeroVideo } from "@/components/HeroVideo";
import { StudioVideo } from "@/components/StudioVideo";
import Image from "next/image";

export default function Home() {
  const featured = products.filter((product) => product.featured).slice(0, 8);
  const categories = [
    ["Premium Pens", images.premiumPens],
    ["Notebooks & Journals", images.notebook],
    ["Desk Accessories", images.desk],
    ["Gift Collections", images.stationery],
    ["Art Supplies", images.notebook],
    ["Planning & Organisation", images.desk],
  ];

  return (
    <>
      <HeroVideo />

      <section className="section categories-section">
        <div className="section-heading"><div><p className="eyebrow">Curated selections</p><h2>Discover your essentials</h2></div><Link href="/shop" className="text-link">View all <ArrowIcon /></Link></div>
        <div className="category-grid">
          {categories.map(([name, image]) => (
            <Link href={`/shop?category=${encodeURIComponent(name)}`} className="category-card" key={name}>
              <Image src={image} alt={name} fill sizes="(max-width: 520px) 50vw, (max-width: 900px) 50vw, 25vw" />
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
        <div className="story-image"><Image src={images.studio} alt="Refined creative studio interior" fill sizes="(max-width: 900px) 100vw, 56vw" /></div>
        <div className="story-copy"><p className="eyebrow">Our philosophy</p><h2>Objects that make the everyday feel considered.</h2><p>At Astra, we believe writing instruments and desk objects should be chosen with intention. Our collections bring together tactile materials, enduring design, and quiet beauty.</p><Link href="/about" className="text-link">Our story <ArrowIcon /></Link></div>
      </section>

      <StudioVideo />

      <section className="showcase">
        <Image src={images.premiumPens} alt="Luxury fountain pen detail" fill sizes="100vw" />
        <div><p className="eyebrow">Writing instruments</p><h2>Made for the movement of your hand.</h2><p>From smooth fountain pens to finely balanced everyday writers, each instrument is selected for comfort, precision, and lasting character.</p><Link href="/shop?category=Premium%20Pens" className="button button-light">Explore writing instruments</Link></div>
      </section>

      <section className="lifestyle-section">
        <div><p className="eyebrow">The Astra way</p><h2>Pause. Put pen to paper.</h2></div>
        <Image src={images.lifestyle} alt="Quiet desk scene with notebook and pen" fill sizes="(max-width: 900px) 65vw, 60vw" />
      </section>

      <section className="editorial-collage section" aria-label="Astra stationery moments">
        <div className="editorial-collage-copy">
          <p className="eyebrow">Paper, ink & intention</p>
          <h2>A workspace shaped by the tools you love.</h2>
          <p>Build a desk routine around tactile paper, balanced writing instruments, and objects that invite you to slow down.</p>
          <Link href="/shop" className="text-link">Explore stationery <ArrowIcon /></Link>
        </div>
        <div className="collage-grid">
          <div className="collage-primary"><Image src={images.lifestyle} alt="Illustrative writing desk scene" fill sizes="(max-width: 900px) 70vw, 48vw" /><span>Illustrative lifestyle image</span></div>
          <div className="collage-secondary"><Image src={images.notebook} alt="Illustrative notebook close-up" fill sizes="(max-width: 900px) 32vw, 24vw" /><span>Illustrative product styling</span></div>
          <div className="collage-tertiary"><Image src={images.premiumPens} alt="Illustrative pen collection styling" fill sizes="(max-width: 900px) 32vw, 24vw" /><span>Illustrative product styling</span></div>
        </div>
      </section>

      <section className="gallery-preview section" aria-labelledby="gallery-preview-title">
        <div className="section-heading">
          <div><p className="eyebrow">From the studio</p><h2 id="gallery-preview-title">Seven moments, one creative space</h2></div>
          <Link href="/gallery" className="text-link">View all videos <ArrowIcon /></Link>
        </div>
        <div className="gallery-preview-grid">
          {[
            ["/images/astra-studio-poster.jpg", "Inside the studio"],
            ["/images/gallery/VID-20261107-WA0034.jpg", "Display details"],
            ["/images/gallery/VID-20261107-WA0037.jpg", "Writing instruments"],
            ["/images/gallery/VID-20261107-WA0040.jpg", "A wider view"],
          ].map(([image, title]) => (
            <Link href="/gallery" className="gallery-preview-card" key={title}>
              <Image src={image} alt={`${title} from the Astra studio`} fill sizes="(max-width: 600px) 50vw, 25vw" />
              <span className="gallery-preview-play" aria-hidden="true">▶</span>
              <span>{title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="values section">
        {[["01", "Thoughtfully curated", "A concise collection chosen for function, form, and enduring appeal."], ["02", "Carefully packed", "Every order is wrapped with attention and prepared for its journey."], ["03", "Personal service", "Speak directly with our team for guidance, gifting, or product enquiries."], ["04", "Made to remain", "Timeless objects designed to be used, kept, and enjoyed for years."]].map(([num, title, copy]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </section>

      <section className="social-section">
        <div className="section-heading centered"><div><p className="eyebrow">Follow the studio</p><h2>@astrastationery</h2></div></div>
        <div className="social-grid">
          {[images.notebook, images.stationery, images.premiumPens, images.desk, images.lifestyle].map((image, index) => <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" key={index} aria-label="View Instagram post"><Image src={image} alt="" fill sizes="(max-width: 900px) 33vw, 20vw" /></a>)}
        </div>
      </section>

      <section className="newsletter">
        <p className="eyebrow">Studio letters</p>
        <h2>A quieter kind of newsletter.</h2>
        <p>Occasional notes on writing, craft, and new arrivals.</p>
        <NewsletterForm />
      </section>

      <section className="final-shopping-cta">
        <div>
          <p className="eyebrow">Find your next everyday favourite</p>
          <h2>Writing tools with purpose.</h2>
        </div>
        <Link href="/shop" className="button button-light">Shop the collection</Link>
      </section>

    </>
  );
}
