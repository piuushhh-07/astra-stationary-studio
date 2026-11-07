"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        setStatus("Online newsletter signup is not connected yet. Please use the studio's contact details for updates.");
        event.currentTarget.reset();
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input id="newsletter-email" type="email" required placeholder="Your email address" />
      <button className="button button-dark">Subscribe</button>
      {submitted && <span className="newsletter-success" role="status">{status}</span>}
    </form>
  );
}
