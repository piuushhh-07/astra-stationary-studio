"use client";

export type CartItem = {
  id: string;
  quantity: number;
  variant?: string;
};

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem("astra-cart") || "[]"); }
  catch { return []; }
}

export function writeCart(cart: CartItem[]) {
  localStorage.setItem("astra-cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("astra-cart-updated"));
}
