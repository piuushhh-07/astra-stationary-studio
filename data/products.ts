export type ProductVariant = {
  name: string;
  options: string[];
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  variants: ProductVariant[];
  specifications: Record<string, string>;
  stock: number;
  featured: boolean;
  isNew?: boolean;
};

export const categories = [
  "All",
  "Premium Pens",
  "Fountain Pens",
  "Notebooks & Journals",
  "Writing Instruments",
  "Desk Accessories",
  "Gift Collections",
];

export const products: Product[] = [
  {
    id: "nocturne-fountain-pen",
    name: "Nocturne Fountain Pen",
    category: "Fountain Pens",
    price: 4850,
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=90",
    ],
    description: "A balanced, finely weighted writing instrument designed for a smooth, expressive line.",
    variants: [{ name: "Nib", options: ["Fine", "Medium", "Broad"] }, { name: "Finish", options: ["Midnight", "Champagne"] }],
    specifications: { Material: "Brushed metal", Nib: "Precision stainless steel", Length: "138 mm", Refill: "Standard ink cartridge/converter" },
    stock: 12,
    featured: true,
    isNew: true,
  },
  {
    id: "atelier-journal",
    name: "Atelier Linen Journal",
    category: "Notebooks & Journals",
    price: 1750,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=90"],
    description: "A tactile linen-bound journal with lay-flat pages for notes, sketches, and daily rituals.",
    variants: [{ name: "Cover", options: ["Ivory", "Sage", "Midnight"] }, { name: "Pages", options: ["Lined", "Plain", "Dot Grid"] }],
    specifications: { Pages: "192", Paper: "100 gsm ivory paper", Size: "A5", Binding: "Lay-flat stitched" },
    stock: 18,
    featured: true,
    isNew: true,
  },
  {
    id: "celeste-ballpoint",
    name: "Celeste Ballpoint",
    category: "Premium Pens",
    price: 3200,
    image: "https://images.unsplash.com/photo-1568205616530-28e1d3b7b3a1?auto=format&fit=crop&w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1568205616530-28e1d3b7b3a1?auto=format&fit=crop&w=1600&q=90"],
    description: "An understated everyday pen with a precisely weighted barrel and effortless twist action.",
    variants: [{ name: "Finish", options: ["Champagne", "Black", "Silver"] }],
    specifications: { Material: "Brass and lacquer", Mechanism: "Twist", Tip: "Fine", Refill: "Standard Parker-style" },
    stock: 7,
    featured: true,
  },
  {
    id: "editor-desk-set",
    name: "The Editor Desk Set",
    category: "Desk Accessories",
    price: 6400,
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=90"],
    description: "A considered desk companion pairing a weighted pen stand with a leather writing tray.",
    variants: [{ name: "Leather", options: ["Taupe", "Black"] }],
    specifications: { Includes: "Pen stand and desk tray", Material: "Solid brass and leather", Tray: "24 × 18 cm" },
    stock: 4,
    featured: true,
  },
  {
    id: "signature-ink-set",
    name: "Signature Ink Collection",
    category: "Gift Collections",
    price: 2400,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=90"],
    description: "Three archival writing inks presented in a gift-ready keepsake box.",
    variants: [{ name: "Palette", options: ["Archive", "Botanical", "Nocturne"] }],
    specifications: { Quantity: "3 × 30 ml", Paper: "Archival formulation", Packaging: "Presentation box" },
    stock: 10,
    featured: false,
  },
  {
    id: "brass-pencil",
    name: "Architect Mechanical Pencil",
    category: "Writing Instruments",
    price: 2100,
    image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=1600&q=90"],
    description: "A solid brass mechanical pencil that develops character through everyday use.",
    variants: [{ name: "Lead", options: ["0.5 mm", "0.7 mm"] }],
    specifications: { Material: "Solid brass", Lead: "Replaceable", Length: "140 mm", Point: "Fixed" },
    stock: 15,
    featured: false,
  },
  {
    id: "letter-writing-set",
    name: "Correspondence Writing Set",
    category: "Gift Collections",
    price: 3900,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=90"],
    description: "Cotton-rag writing paper, envelopes, and sealing wax for thoughtful correspondence.",
    variants: [{ name: "Wax", options: ["Champagne", "Charcoal"] }],
    specifications: { Paper: "20 sheets cotton rag", Envelopes: "10 envelopes", Wax: "One sealing stick" },
    stock: 8,
    featured: false,
  },
  {
    id: "daily-notebook",
    name: "Daily Notes Notebook",
    category: "Notebooks & Journals",
    price: 1250,
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?auto=format&fit=crop&w=1200&q=85",
    images: ["https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?auto=format&fit=crop&w=1600&q=90"],
    description: "A compact, beautifully simple notebook made for lists, ideas, and the rhythm of each day.",
    variants: [{ name: "Format", options: ["Dot Grid", "Lined", "Plain"] }],
    specifications: { Pages: "160", Paper: "90 gsm", Size: "A6", Cover: "Soft-touch recycled board" },
    stock: 22,
    featured: false,
  },
];

export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;
