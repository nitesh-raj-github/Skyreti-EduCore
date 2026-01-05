import React, { useState } from 'react';
import Layout from '../../components/Layout';
import {
  Check,
  Globe,
  Smartphone,
  Users,
  BarChart,
  CreditCard,
  MessageCircle
} from 'lucide-react';

const UniversitySolution = () => {
  const [selectedPackage, setSelectedPackage] = useState('enterprise');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    universityName: '',
    message: ''
  });

  /* =============================
     UNIVERSITY OFFERINGS
  ============================== */
  const offerings = {
    website: {
      title: 'University Website & Portal',
      icon: <Globe size={24} />,
      price: '$3,999',
      features: [
        'University Website with CMS',
        'Admissions & Online Applications',
        'Departments, Programs & Faculties',
        'Research & Publications',
        'Events, Notices & Announcements',
        'Student & Faculty Login Portal',
        'SEO Optimized & Mobile Responsive'
      ]
    },
    studentApp: {
      title: 'Student Mobile App',
      icon: <Smartphone size={24} />,
      price: '$5,999',
      features: [
        'Attendance & Academic Tracking',
        'Exam Results & Transcripts',
        'LMS (Notes, Videos, Assignments)',
        'Fee Payment & Receipts',
        'Library & Digital Resources',
        'Timetable & Notifications'
      ]
    },
    facultyApp: {
      title: 'Faculty Management App',
      icon: <Users size={24} />,
      price: '$4,499',
      features: [
        'Course & Subject Management',
        'Attendance & Evaluation',
        'Research & Publications Tracking',
        'Faculty Payroll & Leave',
        'Internal Communication'
      ]
    },
    erp: {
      title: 'University ERP & Admin Panel',
      icon: <BarChart size={24} />,
      price: '$7,999',
      features: [
        'Complete University ERP',
        'Multi-Campus Management',
        'Finance, HR & Payroll',
        'Hostel & Transport System',
        'NAAC / NIRF Reports',
        'Analytics Dashboard'
      ]
    }
  };

  /* =============================
     PACKAGES
  ============================== */
  const packages = {
    basic: {
      name: 'Basic Digital Presence',
      price: '$3,999',
      includes: ['University Website'],
      bestFor: 'Small colleges & institutes'
    },
    academic: {
      name: 'Academic Suite',
      price: '$8,999',
      includes: ['Website', 'Student App', 'Faculty App'],
      bestFor: 'Teaching-focused universities',
      savings: 'Save $2,499'
    },
    enterprise: {
      name: 'Enterprise University Suite',
      price: '$14,999',
      includes: ['Website', 'Student App', 'Faculty App', 'ERP Panel'],
      bestFor: 'Large universities & multi-campus institutes',
      savings: 'Save $5,000'
    }
  };

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Layout>

      {/* ================= HERO ================= */}
      <div style={hero}>
        <div style={{ fontSize: '4rem' }}>🎓</div>
        <h1 style={heroTitle}>University Digital Transformation</h1>
        <p style={heroText}>
          ERP, LMS, Websites & Mobile Apps built for universities,
          colleges and higher education institutions.
        </p>

        <div style={heroActions}>
          <button style={ctaPrimary} onClick={() => setShowBookingForm(true)}>
            <CreditCard size={18} /> Book & Pay
          </button>
          <button style={ctaSecondary} onClick={() => setShowContactForm(true)}>
            <MessageCircle size={18} /> Contact for Demo
          </button>
        </div>
      </div>

      <div style={container}>

        {/* ================= OFFERINGS ================= */}
        <section>
          <h2 style={sectionTitle}>University-Level Solutions</h2>
          <div style={grid}>
            {Object.values(offerings).map((item, i) => (
              <div key={i} style={card}>
                <div style={iconBox}>{item.icon}</div>
                <h3 style={cardTitle}>{item.title}</h3>
                <p style={price}>{item.price}</p>
                <ul style={list}>
                  {item.features.map((f, idx) => (
                    <li key={idx} style={listItem}>
                      <Check size={16} color="#10b981" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PACKAGES ================= */}
        <section style={{ marginTop: '5rem' }}>
          <h2 style={sectionTitle}>Pricing Packages</h2>
          <div style={grid}>
            {Object.entries(packages).map(([key, pkg]) => (
              <div
                key={key}
                style={{
                  ...card,
                  border:
                    selectedPackage === key
                      ? '3px solid #2563eb'
                      : '1px solid #e5e7eb'
                }}
                onClick={() => setSelectedPackage(key)}
              >
                {pkg.savings && <div style={badge}>{pkg.savings}</div>}
                <h3 style={cardTitle}>{pkg.name}</h3>
                <div style={price}>{pkg.price}</div>
                <ul style={list}>
                  {pkg.includes.map((i, x) => (
                    <li key={x} style={listItem}>
                      <Check size={16} color="#10b981" /> {i}
                    </li>
                  ))}
                </ul>
                <p style={bestFor}>Best for: {pkg.bestFor}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button style={ctaPrimary} onClick={() => setShowBookingForm(true)}>
              <CreditCard size={18} /> Book & Pay Now
            </button>
          </div>
        </section>
      </div>

      {/* ================= BOOKING MODAL ================= */}
      {showBookingForm && (
        <Modal onClose={() => setShowBookingForm(false)}>
          <h2 style={modalTitle}>Book {packages[selectedPackage].name}</h2>
          <form>
            <Input name="name" placeholder="Your Name" onChange={handleChange} />
            <Input name="email" placeholder="Email" onChange={handleChange} />
            <Input name="phone" placeholder="Phone" onChange={handleChange} />
            <Input name="universityName" placeholder="University Name" onChange={handleChange} />
            <div style={summary}>
              <strong>Total: {packages[selectedPackage].price}</strong>
            </div>
            <button style={modalBtn}>Submit Booking</button>
          </form>
        </Modal>
      )}

      {/* ================= CONTACT MODAL ================= */}
      {showContactForm && (
        <Modal onClose={() => setShowContactForm(false)}>
          <h2 style={modalTitle}>Contact for Demo</h2>
          <form>
            <Input name="name" placeholder="Your Name" onChange={handleChange} />
            <Input name="email" placeholder="Email" onChange={handleChange} />
            <Input name="phone" placeholder="Phone" onChange={handleChange} />
            <textarea
              name="message"
              placeholder="Tell us your requirements..."
              onChange={handleChange}
              style={textarea}
            />
            <button style={modalBtn}>Send Message</button>
          </form>
        </Modal>
      )}

    </Layout>
  );
};

/* ================= COMPONENTS ================= */
const Modal = ({ children, onClose }) => (
  <div style={overlay}>
    <div style={modal}>
      <button onClick={onClose} style={closeBtn}>×</button>
      {children}
    </div>
  </div>
);

const Input = props => (
  <input {...props} style={input} required />
);

const iconBox = {
  background: '#1d4ed8',
  color: '#ffffff',
  width: '60px',
  height: '60px',
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem'
};

/* ================= STYLES ================= */
const hero = {
  background: 'linear-gradient(135deg,#1e40af,#1d4ed8)',
  color: 'white',
  padding: '5rem 2rem',
  textAlign: 'center'
};
const heroTitle = { fontSize: '3.5rem', fontWeight: 800 };
const heroText = { maxWidth: 800, margin: '1.5rem auto', opacity: 0.9 };
const heroActions = { display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' };

const container = { maxWidth: 1200, margin: '0 auto', padding: '3rem 2rem' };
const sectionTitle = { textAlign: 'center', fontSize: '2.6rem', marginBottom: '3rem', color: '#1e3a8a' };
const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' };

const card = { background: '#fff', padding: '2.5rem', borderRadius: '1.5rem', color: '#111827' };
const cardTitle = { fontSize: '1.3rem', marginBottom: '0.5rem' };
const price = { fontSize: '1.6rem', fontWeight: 700, color: '#1d4ed8' };
const list = { listStyle: 'none', padding: 0, marginTop: '1rem', color: '#374151' };
const listItem = { display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' };
const badge = { background: '#10b981', color: 'white', padding: '0.4rem 1rem', borderRadius: '1rem', fontSize: '0.8rem' };
const bestFor = { fontSize: '0.9rem', marginTop: '1rem', color: '#374151' };

const ctaPrimary = {
  padding: '1rem 2.5rem',
  background: '#fff',
  color: '#1d4ed8',
  border: 'none',
  borderRadius: '0.75rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'inline-flex',
  gap: '0.5rem'
};
const ctaSecondary = {
  ...ctaPrimary,
  background: 'transparent',
  color: 'white',
  border: '2px solid white'
};

const overlay = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };
const modal = { background: '#fff', padding: '3rem', borderRadius: '1.5rem', width: '100%', maxWidth: 500, position: 'relative' };
const closeBtn = { position: 'absolute', top: 10, right: 15, fontSize: '1.5rem', border: 'none', background: 'none', cursor: 'pointer' };
const modalTitle = { fontSize: '2rem', marginBottom: '1.5rem', color: '#111827' };
const input = { width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' };
const textarea = { ...input, height: 100 };
const modalBtn = { width: '100%', padding: '1rem', background: '#1d4ed8', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold' };
const summary = { margin: '1rem 0', fontSize: '1.1rem' };



export default UniversitySolution;
