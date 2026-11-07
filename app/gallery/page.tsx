import type { Metadata } from "next";
import { GalleryExperience } from "@/components/GalleryExperience";

export const metadata: Metadata = {
  title: "Studio Gallery",
  description: "A glimpse inside Astra Stationery Studio through original store footage and studio moments.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryExperience />;
}
