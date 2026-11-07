"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type GalleryItem = {
  id: string;
  kind: "image" | "video";
  title: string;
  category: string;
  description: string;
  src: string;
  poster?: string;
  alt: string;
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
    alt: "A view inside the Astra stationery studio",
  },
  {
    id: "display-detail",
    kind: "video",
    title: "A detail from the display",
    category: "Studio film",
    description: "A close-up look at one of the studio's illuminated displays.",
    src: "/videos/VID-20261107-WA0034.mp4",
    poster: "/images/gallery/VID-20261107-WA0034.jpg",
    alt: "An illuminated product display inside Astra",
  },
  {
    id: "stationery-shelves",
    kind: "video",
    title: "The stationery shelves",
    category: "Studio film",
    description: "A view across the stationery shelves and central counter.",
    src: "/videos/VID-20261107-WA0036.mp4",
    poster: "/images/gallery/VID-20261107-WA0036.jpg",
    alt: "Stationery shelves and the counter at Astra",
  },
  {
    id: "sheaffer-display",
    kind: "video",
    title: "The Sheaffer display",
    category: "Studio film",
    description: "A closer look at the Sheaffer display inside the store.",
    src: "/videos/VID-20261107-WA0037.mp4",
    poster: "/images/gallery/VID-20261107-WA0037.jpg",
    alt: "Sheaffer writing instruments display",
  },
  {
    id: "lamy-display",
    kind: "video",
    title: "The LAMY collection",
    category: "Studio film",
    description: "A look at the LAMY display and writing instruments.",
    src: "/videos/VID-20261107-WA0038.mp4",
    poster: "/images/gallery/VID-20261107-WA0038.jpg",
    alt: "LAMY sign and writing instruments display",
  },
  {
    id: "astra-sign",
    kind: "video",
    title: "The Astra sign",
    category: "Studio film",
    description: "The studio's wooden Astra Stationery Studio sign.",
    src: "/videos/VID-20261107-WA0039.mp4",
    poster: "/images/gallery/VID-20261107-WA0039.jpg",
    alt: "Astra Stationery Studio wooden sign",
  },
  {
    id: "studio-wide",
    kind: "video",
    title: "A wider view of the studio",
    category: "Studio film",
    description: "A wider view of the store interior and display shelves.",
    src: "/videos/VID-20261107-WA0040.mp4",
    poster: "/images/gallery/VID-20261107-WA0040.jpg",
    alt: "Wide view of the Astra studio interior",
  },
  {
    id: "studio-still",
    kind: "image",
    title: "A glimpse inside the studio",
    category: "Studio still",
    description: "A still frame taken from the original Astra studio walkthrough.",
    src: "/images/astra-studio-poster.jpg",
    alt: "A still frame from the Astra studio walkthrough",
  },
];

const filters = ["All", "Studio film", "Studio still"];

export function GalleryExperience() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const selectedVideoRef = useRef<HTMLVideoElement>(null);
  const visibleItems = useMemo(
    () => activeFilter === "All" ? items : items.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    if (!selected) return;
    const selectedVideo = selectedVideoRef.current;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
      selectedVideo?.pause();
    };
  }, [selected]);

  const closeGallery = () => {
    selectedVideoRef.current?.pause();
    setSelected(null);
  };

  return (
    <div className="gallery-page">
      <section className="gallery-intro">
        <p className="eyebrow">A look inside Astra</p>
        <h1>Studio moments,<br /><em>beautifully collected.</em></h1>
        <p>Explore seven original video moments captured inside the Astra studio, from its stationery displays to the wider store interior.</p>
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
              <Image src={item.poster || item.src} alt={item.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
              {item.kind === "video" && <span className="gallery-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.8c0-.8.9-1.3 1.6-.9l9.1 5.2a1 1 0 0 1 0 1.8l-9.1 5.2c-.7.4-1.6-.1-1.6-.9V5.8Z" /></svg></span>}
            </span>
            <span className="gallery-card-copy">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
            </span>
          </button>
        ))}
      </section>

      <section className="gallery-lower">
        <div>
          <p className="eyebrow">A studio introduction</p>
          <h2>See the space behind the stationery.</h2>
          <p>Seven original short videos show the Astra store, its displays, and the details that make the studio distinctive.</p>
        </div>
        <a className="poster-download" href="/images/astra-promotional-poster.svg" download="astra-stationery-studio-poster.svg">Download studio poster</a>
      </section>

      {selected && (
        <div className="gallery-modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={closeGallery}>
          <div className="gallery-modal-inner" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="gallery-modal-close" aria-label="Close gallery viewer" onClick={closeGallery}>×</button>
            <div className="gallery-modal-media">
              {selected.kind === "video" ? (
                <video ref={selectedVideoRef} key={selected.id} controls autoPlay muted playsInline preload="none" poster={selected.poster}>
                  <source src={selected.src} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              ) : (
                <Image src={selected.src} alt={selected.alt} width={1080} height={1350} sizes="(max-width: 900px) 100vw, 75vw" />
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
