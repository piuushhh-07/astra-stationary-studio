import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <div><p className="eyebrow">Customer care</p><h1>Let&apos;s talk about your next piece.</h1></div>
        <p>Questions about a product, a variant, or a thoughtful gift? Send a note to the studio.</p>
      </div>
      <div className="contact-layout">
        <div className="contact-info">
          <h2>We would love to hear from you.</h2>
          <address><strong>Email</strong><br />hello@astrastationery.com</address>
          <div className="contact-details-grid">
            <div><span>01</span><p><strong>Product guidance</strong><br />Ask about variants, materials, or availability.</p></div>
            <div><span>02</span><p><strong>Studio enquiries</strong><br />Share a note and open it in your email app.</p></div>
          </div>
          <a className="whatsapp" href="https://wa.me/" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
