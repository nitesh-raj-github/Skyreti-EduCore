import { useState } from "react";
import "../Styles/Style.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error();

      alert("✅ Thanks! We’ll contact you soon.");
      setForm({ name: "", email: "", organization: "", message: "" });
    } catch {
      alert("❌ Something went wrong. Try again.");
    }
  };

  const whatsappLink =
    "https://wa.me/919876543210?text=Hi%20SkyReti%20Educore,%20I%20want%20to%20start%20a%20free%20trial.";

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">Start Free Trial</h2>
        <p className="contact-subtitle">
          Tell us about your institution and we’ll get back to you.
        </p>

        <form onSubmit={submit} className="contact-form">
          <input
            className="contact-input"
            placeholder="Your Name"
            value={form.name}
            required
            onChange={e => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="contact-input"
            type="email"
            placeholder="Email Address"
            value={form.email}
            required
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <input
            className="contact-input"
            placeholder="School / University / Company"
            value={form.organization}
            required
            onChange={e => setForm({ ...form, organization: e.target.value })}
          />

          <textarea
            className="contact-textarea"
            placeholder="Tell us your requirements"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          />

          <button className="contact-button">
            Start Free Trial
          </button>
        </form>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-button"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
