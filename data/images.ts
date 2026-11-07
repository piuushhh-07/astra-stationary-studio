// Editorial image sources are temporary Unsplash photography, not photographs of Astra's own inventory.
// Replace these with client-approved Astra photographs before final commercial launch.
const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=85&w=1800`;

export const images = {
  hero: unsplash("photo-1764818958942-f104ba6f8358"),
  premiumPens: unsplash("photo-1767547109500-db6a9d411ae9"),
  stationery: unsplash("photo-1764818958942-f104ba6f8358"),
  notebook: unsplash("photo-1523635050353-f5b60dafa07c"),
  desk: unsplash("photo-1633304557382-979afee9f9a2"),
  studio: "/images/astra-studio-poster.jpg",
  lifestyle: unsplash("photo-1523635050353-f5b60dafa07c"),
};
