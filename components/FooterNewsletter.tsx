"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowIcon } from "./icons";

export function FooterNewsletter() {
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setNewsletterStatus("Online newsletter signup is not connected yet.");
  };

  return (
    <>
      <h3>Notes from Astra</h3>
      <p>Seasonal collections, thoughtful writing, and studio news.</p>
      <form onSubmit={handleSubscribe}>
        <label className="sr-only" htmlFor="footer-email">Email address</label>
        <input id="footer-email" type="email" required placeholder="Email address" />
        <button aria-label="Subscribe"><ArrowIcon /></button>
      </form>
      {newsletterStatus && <p role="status" className="footer-newsletter-status">{newsletterStatus}</p>}
    </>
  );
}
