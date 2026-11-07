"use client";

import { useEffect, useMemo, useState } from "react";

type GalleryItem = {
  id: string;
  kind: "image" | "video";
  title: string;
  category: string;
  description: string;
  src: string;
  poster?: string;
};

const items: GalleryItem[] = [
  {
    id: "studio-film",
    kind: "video",
    title: "Inside the Astra studio",
    category: "Studio film",
    description: "A short walkthrough captured inside the Astra store.",
    src: "/videos/astra-studio-showcase.mp4",
    poster: "/images/astra-studio-poster.jpg",
  },
  {
    id: "studio-still",
    kind: "image",
    title: "A glimpse inside the studio",
    category: "Studio still",
    description: "A still frame taken from the original Astra studio walkthrough.",
    src: "/images/astra-studio-poster.jpg",
  },
];

const filters = ["All", "Studio film", "Studio still"];

export function GalleryExperience() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const visibleItems = useMemo(
    () => activeFilter === "All" ? items : items.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    if (!selected) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="gallery-page">
      <section className="gallery-intro">
        <p className="eyebrow">A look inside Astra</p>
        <h1>Studio moments,<br /><em>beautifully collected.</em></h1>
        <p>Explore a glimpse of the Astra space through original studio footage. More store photographs can be added as the approved image collection is shared.</p>
      </section>

      <div className="gallery-filters" role="group" aria-label="Filter gallery">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <section className="gallery-grid" aria-label="Astra studio gallery">
        {visibleItems.map((item) => (
          <button className="gallery-card" key={item.id} type="button" onClick={() => setSelected(item)} aria-label={`Open ${item.kind}: ${item.title}`}>
            <span className="gallery-card-media">
              <img src={item.poster || item.src} alt={item.kind === "video" ? "Preview frame from the Astra studio video" : "A still frame from the Astra studio video"} loading="lazy" />
              {item.kind === "video" && <span className="gallery-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.8c0-.8.9-1.3 1.6-.9l9.1 5.2a1 1 0 0 1 0 1.8l-9.1 5.2c-.7.4-1.6-.1-1.6-.9V5.8Z" /></svg></span>}
            </span>
            <span className="gallery-card-copy">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
            </span>
          </button>
        ))}
        {activeFilter !== "Studio film" && (
          <div className="gallery-placeholder" aria-label="Placeholder for additional original Astra store photographs">
            <span className="gallery-placeholder-mark" aria-hidden="true">＋</span>
            <strong>More of Astra, soon</strong>
            <span>Original store and product photographs can be placed here when the approved images are added.</span>
          </div>
        )}
      </section>

      <section className="gallery-lower">
        <div>
          <p className="eyebrow">A studio introduction</p>
          <h2>See the space behind the stationery.</h2>
          <p>This gallery currently uses the original studio walkthrough and its extracted poster frame. Additional original photos and videos can be added without changing the gallery layout.</p>
        </div>
        <a className="poster-download" href="/images/astra-promotional-poster.svg" download="astra-stationery-studio-poster.svg">Download studio poster</a>
      </section>

      {selected && (
        <div className="gallery-modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <div className="gallery-modal-inner" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="gallery-modal-close" aria-label="Close gallery viewer" onClick={() => setSelected(null)}>×</button>
            <div className="gallery-modal-media">
              {selected.kind === "video" ? (
                <video controls autoPlay muted playsInline preload="metadata" poster={selected.poster}>
                  <source src={selected.src} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              ) : (
                <img src={selected.src} alt={selected.title} />
              )}
            </div>
            <div className="gallery-modal-copy">
              <small>{selected.category}</small>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
