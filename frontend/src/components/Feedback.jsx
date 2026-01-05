// src/pages/Feedback.jsx
import React, { useState } from 'react';
import '../Styles/Feedback.css';

const Feedback = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    rating: '5',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later you can connect this to MongoDB / API
    alert('Thank you for your feedback! Founder & support team will contact you.');

    setForm({
      name: '',
      email: '',
      rating: '5',
      message: '',
    });
  };

  return (
    <div className="feedback-page">

      {/* ===============================
         HEADER
      ================================ */}
      <section className="feedback-hero" data-aos="fade-up">
        <h1>We Value Your Feedback</h1>
        <p>
          Your feedback helps SkyReti Educore improve and grow.
          You can directly reach our founder or customer support team.
        </p>
      </section>

      {/* ===============================
         MAIN GRID
      ================================ */}
      <section className="feedback-grid">

        {/* ===============================
           FEEDBACK FORM
        ================================ */}
        <div className="feedback-card" data-aos="fade-right">
          <h3>Submit Your Feedback</h3>

          <form onSubmit={handleSubmit} className="feedback-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
            >
              <option value="5">★★★★★ Excellent</option>
              <option value="4">★★★★☆ Very Good</option>
              <option value="3">★★★☆☆ Good</option>
              <option value="2">★★☆☆☆ Average</option>
              <option value="1">★☆☆☆☆ Poor</option>
            </select>

            <textarea
              name="message"
              placeholder="Write your feedback or issue..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="feedback-btn">
              Submit Feedback
            </button>
          </form>
        </div>

        {/* ===============================
           DIRECT CONTACT
        ================================ */}
        <div className="feedback-card" data-aos="fade-left">
          <h3>Direct Contact</h3>

          <div className="contact-box">
            <h4>Founder</h4>
            <p><strong>Nitesh Raj</strong></p>
            <p>Email: <a href="mailto:info.bhaiguru@gmail.com">info.bhaiguru@gmail.com</a></p>
          </div>

          <div className="contact-box">
            <h4>Customer Support</h4>
            <p>Email: <a href="mailto:support@skyretieducore.com">support@skyretieducore.com</a></p>
            <p>Phone: +91 7492973201</p>
            <p>Availability: 24×7</p>
          </div>

          <div className="contact-box">
            <h4>WhatsApp Support</h4>
            <a
              href="https://wa.me/917492973201"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Feedback;
