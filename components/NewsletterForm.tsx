"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        event.currentTarget.reset();
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input id="newsletter-email" type="email" required placeholder="Your email address" />
      <button className="button button-dark">Subscribe</button>
      {submitted && <span className="newsletter-success" role="status">Thank you for joining the Astra studio list.</span>}
    </form>
  );
}
