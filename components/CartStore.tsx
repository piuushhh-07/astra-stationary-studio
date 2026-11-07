"use client";

export type CartItem = {
  id: string;
  quantity: number;
  variant?: string;
};

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(localStorage.getItem("astra-cart") || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is CartItem =>
      typeof item === "object" &&
      item !== null &&
      typeof item.id === "string" &&
      typeof item.quantity === "number" &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0
    ).map((item) => ({ ...item, quantity: Math.max(1, item.quantity) }));
  }
  catch { return []; }
}

export function writeCart(cart: CartItem[]) {
  localStorage.setItem("astra-cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("astra-cart-updated"));
}
