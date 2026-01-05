// src/pages/About.jsx
import React, { useEffect, useState } from 'react';
import '../Styles/about.css';
import '../components/Footer';
const About = () => {
  /* ===============================
     ANIMATED COUNTERS
  ================================ */
  const [stats, setStats] = useState([
    { label: 'Institutions Served', value: 0, target: 100, suffix: '+' },
    { label: 'Active Users', value: 0, target: 1200, suffix: '+' },
    { label: 'Customer Satisfaction', value: 0, target: 98, suffix: '%' },
    { label: 'Years of Innovation', value: 0, target: 5, suffix: '+' }
  ]);

  useEffect(() => {
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      let current = 0;
      const increment = stat.target / steps;

      return setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timers[index]);
        }
        setStats(prev =>
          prev.map((s, i) =>
            i === index ? { ...s, value: Math.floor(current) } : s
          )
        );
      }, interval);
    });

    return () => timers.forEach(clearInterval);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="about-page">

      {/* ===============================
         HERO (SEO OPTIMIZED)
      ================================ */}
      <section className="about-hero" data-aos="fade-up">
        <h1 className="about-title">
          About SkyReti Educore
        </h1>
        <p className="about-subtitle">
          SkyReti Educore is an AI-powered education & institution management platform
          trusted by leading schools, universities, and enterprises across India.
          We empower institutions with secure, scalable, and intelligent digital solutions.
        </p>
      </section>

      {/* ===============================
         COMPANY & MOTIVE
      ================================ */}
      <section className="about-company">
        <div className="about-card" data-aos="fade-right">
          <h3>Who We Are</h3>
          <p>
            SkyReti Educore was founded with a single vision — to modernize education
            through technology. We build platforms that simplify administration,
            enhance learning outcomes, and help institutions scale effortlessly.
          </p>
          <p>
            Our solutions are used by K-12 schools, universities, coaching institutes,
            and enterprises to manage academics, operations, analytics, and engagement
            from one secure ecosystem.
          </p>
        </div>

        <div className="about-card" data-aos="fade-left">
          <h3>Our Mission & Values</h3>
          <p>
            We believe education should be intelligent, accessible, and future-ready.
            Our mission is to bridge the gap between institutions and technology with
            AI-driven automation, data security, and user-centric design.
          </p>
        </div>
      </section>

      {/* ===============================
         STATS (ANIMATED COUNTERS)
      ================================ */}
      <section className="about-mission">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="about-card mission-item"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="mission-icon">📊</div>
            <div className="mission-title">
              {stat.value}{stat.suffix}
            </div>
            <div className="mission-desc">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* ===============================
         FOUNDER SECTION
      ================================ */}
      <section className="about-founder about-card" data-aos="fade-up">
        <img
          src="/founder.jpg"   /* place image in public/founder.jpg */
          alt="Founder of SkyReti Educore"
          className="founder-photo"
        />
        <div>
          <h3 className="founder-name">Nitesh Raj</h3>
          <p className="founder-role">Founder & CEO — SkyReti Educore</p>
          <p className="founder-desc">
            Nitesh Raj founded SkyReti Educore with a strong technical background
            in software engineering, AI systems, and scalable web platforms.
            His vision is to create world-class digital infrastructure for education
            institutions that rivals global EdTech leaders.
          </p>
          <p className="founder-desc">
            Under his leadership, SkyReti Educore has partnered with leading schools
            and universities to drive digital transformation across India.
          </p>
        </div>
      </section>

      {/* ===============================
         REAL TESTIMONIALS (TRUST SIGNAL)
      ================================ */}
      <section className="about-reviews">
        <h2 className="about-reviews-title" data-aos="fade-up">
          Trusted by Leading Institutions
        </h2>

        <div className="reviews-grid">
          <div className="review-card" data-aos="fade-up">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              SkyReti Educore has significantly improved our academic operations
              and digital engagement with parents and students.
            </p>
            <div className="review-author">DAV Public School, Delhi</div>
            <div className="review-role">Principal</div>
          </div>

          <div className="review-card" data-aos="fade-up" data-aos-delay="100">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              A robust and scalable platform. SkyReti Educore helped streamline
              our university-level administration and reporting.
            </p>
            <div className="review-author">Marwadi University, Rajkot</div>
            <div className="review-role">Registrar</div>
          </div>

          <div className="review-card" data-aos="fade-up" data-aos-delay="200">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              Reliable, secure, and easy to use. Their team understands
              institutional needs very well.
            </p>
            <div className="review-author">RK University, Rajkot</div>
            <div className="review-role">Administration</div>
          </div>

          <div className="review-card" data-aos="fade-up" data-aos-delay="300">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              SkyReti Educore has transformed how we manage academics
              and student engagement digitally.
            </p>
            <div className="review-author">St. Xavier’s School</div>
            <div className="review-role">Management</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
