import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="page-title"><p className="eyebrow">Customer care</p><h1>Contact the studio</h1></div>
      <div className="contact-layout">
        <div className="contact-info">
          <h2>We would love to hear from you.</h2>
          <address>Phone: +91 00000 00000<br />Email: hello@astrastationery.com<br />Studio address<br />City, State, India</address>
          <div className="contact-map">Google Maps placeholder</div>
          <a className="whatsapp" href="https://wa.me/" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>Name<input name="name" type="text" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="your@email.com" /></label>
          <label>Phone<input name="phone" type="tel" placeholder="+91" /></label>
          <label>Message<textarea name="message" required placeholder="How can we help?" /></label>
          <button className="button button-dark">Send enquiry</button>
        </form>
      </div>
    </section>
  );
}
