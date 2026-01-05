import React, { useState } from "react";
import "../pages/FreeTrial.css";
import "../Styles/Style.css"
const FreeTrial = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/trial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("🚀 Free Trial Request Submitted!");
      setForm({ name: "", email: "", organization: "", message: "" });
    } else {
      alert("❌ Something went wrong");
    }
  };

  return (
    <section className="trial-container">
      <div className="trial-card">
        <h1>Start Your Free Trial</h1>
        <p>Experience SkyReti Educore for your institution.</p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="organization"
            placeholder="School / University / Startup"
            value={form.organization}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Tell us your requirements"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Start Free Trial</button>
        </form>
      </div>
    </section>
  );
};

export default FreeTrial;
