"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`Astra enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
    );

    setStatus("Opening your email app. Review and send the enquiry to complete it.");
    window.location.href = `mailto:hello@astrastationery.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Name<input name="name" type="text" required placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" required placeholder="your@email.com" /></label>
      <label>Phone<input name="phone" type="tel" placeholder="+91" /></label>
      <label>Message<textarea name="message" required placeholder="How can we help?" /></label>
      <button className="button button-dark" type="submit">Send enquiry</button>
      {status && <p role="status" className="form-success">{status}</p>}
    </form>
  );
}
