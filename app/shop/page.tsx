"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const urlCategory = categories.includes(initialCategory) ? initialCategory : "All";
  const category = selectedCategory ?? urlCategory;

  const filtered = useMemo(() => {
    let result = products.filter((product) =>
      (category === "All" || product.category === category) &&
      (product.name + " " + product.category + " " + product.description).toLowerCase().includes(query.toLowerCase().trim())
    );
    if (sort === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "newest") result = [...result].sort((a, b) => Number(b.isNew) - Number(a.isNew));
    return result;
  }, [category, query, sort]);

  return (
    <section className="shop-page">
      <div className="page-title"><p className="eyebrow">The collection</p><h1>Stationery for considered living</h1></div>
      <p className="catalogue-note">A considered edit of writing instruments, paper goods, desk pieces and gifts. Product examples and prices shown are illustrative and must be confirmed with the studio.</p>
      <div className="shop-toolbar">
        <label className="sr-only" htmlFor="product-search">Search products</label>
        <input id="product-search" type="search" placeholder="Search the collection" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select aria-label="Sort products" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="featured">Featured</option><option value="newest">Newest</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option>
        </select>
      </div>
      <div className="category-filters" aria-label="Product categories">
        {categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setSelectedCategory(item)}>{item}</button>)}
      </div>
      <div className="collection-count">{filtered.length} pieces in this edit</div>
      <div className="product-grid">
        {filtered.length ? filtered.map((product) => <ProductCard key={product.id} product={product} />) : <div className="no-results"><h2>No pieces found</h2><p>Try another search or category.</p></div>}
      </div>
    </section>
  );
}

export default function ShopPage() {
  return <Suspense fallback={<div className="shop-page"><div className="page-title"><h1>Loading collection</h1></div></div>}><ShopContent /></Suspense>;
}
