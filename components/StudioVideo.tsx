export function StudioVideo() {
  return (
    <section className="studio-video-section" aria-labelledby="studio-video-title">
      <div className="studio-video-media">
        <video
          controls
          playsInline
          preload="metadata"
          poster="/images/astra-studio-poster.jpg"
          aria-label="A short walkthrough of Astra Stationery Studio"
        >
          <source src="/videos/astra-studio-showcase.mp4" type="video/mp4" />
          Your browser does not support embedded video. Please view the studio in person or contact the team.
        </video>
      </div>
      <div className="studio-video-copy">
        <p className="eyebrow">A closer look</p>
        <h2 id="studio-video-title">A little world of things worth keeping.</h2>
        <p>
          Step inside Astra and explore a considered selection of writing
          instruments, stationery, and thoughtful details. Visit the studio
          to discover your next everyday favourite.
        </p>
        <span className="studio-video-note">Inside Astra Stationery Studio</span>
      </div>
    </section>
  );
}
