export function HeroVideo() {
  return (
    <section className="hero hero-video" aria-labelledby="hero-title">
      <video
        className="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/astra-studio-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/astra-studio-showcase.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">Astra Stationery Studio</p>
        <h1 id="hero-title">A little more<br /><em>beautifully written.</em></h1>
        <p>Discover thoughtfully curated stationery, considered details, and writing instruments chosen to make every day feel special.</p>
        <div className="hero-actions">
          <a href="/shop" className="button button-dark">Explore the collection</a>
          <a href="/gallery" className="text-link">View studio gallery <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
