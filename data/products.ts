export type ProductVariant = {
  name: string;
  options: string[];
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  variants: ProductVariant[];
  specifications: Record<string, string>;
  stock: number;
  availability: "In stock" | "Low stock" | "Out of stock";
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
    slug: "nocturne-fountain-pen",
    category: "Fountain Pens",
    price: 4850,
    image: "/images/premium-pens.svg",
    images: [
      "/images/premium-pens.svg",
      "/images/hero-studio.svg",
    ],
    description: "A balanced, finely weighted writing instrument designed for a smooth, expressive line.",
    variants: [{ name: "Nib", options: ["Fine", "Medium", "Broad"] }, { name: "Finish", options: ["Midnight", "Champagne"] }],
    specifications: { Material: "Brushed metal", Nib: "Precision stainless steel", Length: "138 mm", Refill: "Standard ink cartridge/converter" },
    stock: 12,
    availability: "In stock",
    featured: true,
    isNew: true,
  },
  {
    id: "atelier-journal",
    name: "Atelier Linen Journal",
    slug: "atelier-linen-journal",
    category: "Notebooks & Journals",
    price: 1750,
    image: "/images/notebook.svg",
    images: ["/images/notebook.svg"],
    description: "A tactile linen-bound journal with lay-flat pages for notes, sketches, and daily rituals.",
    variants: [{ name: "Cover", options: ["Ivory", "Sage", "Midnight"] }, { name: "Pages", options: ["Lined", "Plain", "Dot Grid"] }],
    specifications: { Pages: "192", Paper: "100 gsm ivory paper", Size: "A5", Binding: "Lay-flat stitched" },
    stock: 18,
    availability: "In stock",
    featured: true,
    isNew: true,
  },
  {
    id: "celeste-ballpoint",
    name: "Celeste Ballpoint",
    slug: "celeste-ballpoint",
    category: "Premium Pens",
    price: 3200,
    image: "/images/premium-pens.svg",
    images: ["/images/premium-pens.svg"],
    description: "An understated everyday pen with a precisely weighted barrel and effortless twist action.",
    variants: [{ name: "Finish", options: ["Champagne", "Black", "Silver"] }],
    specifications: { Material: "Brass and lacquer", Mechanism: "Twist", Tip: "Fine", Refill: "Standard Parker-style" },
    stock: 7,
    availability: "In stock",
    featured: true,
  },
  {
    id: "editor-desk-set",
    name: "The Editor Desk Set",
    slug: "editor-desk-set",
    category: "Desk Accessories",
    price: 6400,
    image: "/images/desk.svg",
    images: ["/images/desk.svg"],
    description: "A considered desk companion pairing a weighted pen stand with a leather writing tray.",
    variants: [{ name: "Leather", options: ["Taupe", "Black"] }],
    specifications: { Includes: "Pen stand and desk tray", Material: "Solid brass and leather", Tray: "24 × 18 cm" },
    stock: 4,
    availability: "Low stock",
    featured: true,
  },
  {
    id: "signature-ink-set",
    name: "Signature Ink Collection",
    slug: "signature-ink-set",
    category: "Gift Collections",
    price: 2400,
    image: "/images/stationery.svg",
    images: ["/images/stationery.svg"],
    description: "Three archival writing inks presented in a gift-ready keepsake box.",
    variants: [{ name: "Palette", options: ["Archive", "Botanical", "Nocturne"] }],
    specifications: { Quantity: "3 × 30 ml", Paper: "Archival formulation", Packaging: "Presentation box" },
    stock: 10,
    availability: "In stock",
    featured: false,
  },
  {
    id: "brass-pencil",
    name: "Architect Mechanical Pencil",
    slug: "architect-mechanical-pencil",
    category: "Writing Instruments",
    price: 2100,
    image: "/images/premium-pens.svg",
    images: ["/images/premium-pens.svg"],
    description: "A solid brass mechanical pencil that develops character through everyday use.",
    variants: [{ name: "Lead", options: ["0.5 mm", "0.7 mm"] }],
    specifications: { Material: "Solid brass", Lead: "Replaceable", Length: "140 mm", Point: "Fixed" },
    stock: 15,
    availability: "In stock",
    featured: false,
  },
  {
    id: "letter-writing-set",
    name: "Correspondence Writing Set",
    slug: "correspondence-writing-set",
    category: "Gift Collections",
    price: 3900,
    image: "/images/stationery.svg",
    images: ["/images/stationery.svg"],
    description: "Cotton-rag writing paper, envelopes, and sealing wax for thoughtful correspondence.",
    variants: [{ name: "Wax", options: ["Champagne", "Charcoal"] }],
    specifications: { Paper: "20 sheets cotton rag", Envelopes: "10 envelopes", Wax: "One sealing stick" },
    stock: 8,
    availability: "In stock",
    featured: false,
  },
  {
    id: "daily-notebook",
    name: "Daily Notes Notebook",
    slug: "daily-notes-notebook",
    category: "Notebooks & Journals",
    price: 1250,
    image: "/images/notebook.svg",
    images: ["/images/notebook.svg"],
    description: "A compact, beautifully simple notebook made for lists, ideas, and the rhythm of each day.",
    variants: [{ name: "Format", options: ["Dot Grid", "Lined", "Plain"] }],
    specifications: { Pages: "160", Paper: "90 gsm", Size: "A6", Cover: "Soft-touch recycled board" },
    stock: 22,
    availability: "In stock",
    featured: false,
  },
];

export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;
