export function HeroVideo() {
  return (
    <section className="hero hero-video" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Astra Stationery Studio</p>
        <h1 id="hero-title">A little more<br /><em>beautifully written.</em></h1>
        <p>Discover thoughtfully curated stationery, considered details, and writing instruments chosen to make every day feel special.</p>
        <div className="hero-actions">
          <a href="/shop" className="button button-dark">Explore the collection</a>
          <a href="/gallery" className="text-link">View studio gallery <span aria-hidden="true">↗</span></a>
        </div>
        <span className="hero-caption">A glimpse inside the Astra studio</span>
      </div>
      <div className="hero-video-frame">
        <video
          muted
          loop
          playsInline
          controls
          preload="none"
          poster="/images/astra-studio-poster.jpg"
          aria-label="Video tour inside Astra Stationery Studio"
        >
          <source src="/videos/astra-studio-showcase.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        <span className="hero-video-label">Inside Astra · Studio moments</span>
      </div>
      <span className="hero-side-note" aria-hidden="true">Curated with care · Written with feeling</span>
    </section>
  );
}
