import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github
} from 'lucide-react';
import '../Styles/Style.css';

const Footer = () => {
  return (
    <footer style={footer}>
      <div className="content-container">

        {/* ================= MAIN GRID ================= */}
        <div style={grid}>

          {/* BRAND */}
          <div>
            <h3 style={title}>SkyReti Educore</h3>
            <p style={text}>
              AI-powered digital solutions for Schools, Universities &
              EdTech organizations worldwide.
            </p>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 style={title}>Solutions</h4>
            <ul style={ul}>
              <li>
                <Link to="/solutions/schools" style={link}>
                  For Schools
                </Link>
              </li>
              <li>
                <Link to="/solutions/universities" style={link}>
                  For Universities
                </Link>
              </li>
              <li>
                <Link to="/solutions/startups" style={link}>
                  For Startups
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 style={title}>Contact</h4>

            <div style={contactItem}>
              <Mail size={16} />
              <a
                href="mailto:contact.skyretieducore@gmail.com"
                style={link}
              >
                contact.skyretieducore@gmail.com
              </a>
            </div>

            <div style={contactItem}>
              <Phone size={16} />
              <a href="tel:+917492973201" style={link}>
                +91 74929 73201
              </a>
            </div>

            <div style={contactItem}>
              <MapPin size={16} />
              <span style={text}>India • Global Remote</span>
            </div>
          </div>

          {/* SOCIAL + CTA */}
          <div>
            <h4 style={title}>Connect</h4>

            <div style={socialRow}>
              <SocialButton href="https://linkedin.com">
                <Linkedin size={18} />
              </SocialButton>
              <SocialButton href="https://twitter.com">
                <Twitter size={18} />
              </SocialButton>
              <SocialButton href="https://instagram.com">
                <Instagram size={18} />
              </SocialButton>
              <SocialButton href="https://github.com">
                <Github size={18} />
              </SocialButton>
            </div>

            {/* ✅ Updated to Free Trial route */}
            <Link to="/free-trial" style={ctaButton}>
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* ================= COMPACT MAP ================= */}
        <div style={mapWrapper}>
          <iframe
            title="SkyReti Location"
            src="https://www.google.com/maps?q=India&output=embed"
            style={map}
            loading="lazy"
          />
        </div>

        {/* ================= LEGAL ================= */}
        <div style={bottom}>
          <div style={legalLinks}>
            <Link to="/privacy" style={link}>
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" style={link}>
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/contact" style={link}>
              Contact
            </Link>
          </div>

          <p style={copyright}>
            © {new Date().getFullYear()} SkyReti Educore. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

/* ================= SUB COMPONENT ================= */
const SocialButton = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={socialButton}
  >
    {children}
  </a>
);

/* ================= STYLES ================= */
const footer = {
  background: 'var(--glass-bg)',
  backdropFilter: 'var(--glass-blur)',
  borderTop: '1px solid var(--glass-border)',
  padding: '3rem 0',
  marginTop: '4rem'
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '2rem'
};

const title = {
  color: 'var(--text-primary)',
  marginBottom: '1rem'
};

const text = {
  color: 'var(--text-secondary)',
  lineHeight: 1.6
};

const ul = {
  listStyle: 'none',
  padding: 0
};

const link = {
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  cursor: 'pointer'
};

const contactItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.75rem',
  color: 'var(--text-secondary)'
};

const socialRow = {
  display: 'flex',
  gap: '0.75rem',
  flexWrap: 'wrap'
};

const socialButton = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '42px',
  height: '42px',
  borderRadius: '0.75rem',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid var(--glass-border)',
  color: 'var(--text-primary)',
  cursor: 'pointer'
};

const ctaButton = {
  display: 'block',
  marginTop: '1rem',
  width: '100%',
  textAlign: 'center',
  padding: '0.85rem',
  borderRadius: '0.75rem',
  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
  color: '#ffffff',
  fontWeight: 'bold',
  textDecoration: 'none',
  cursor: 'pointer'
};

const mapWrapper = {
  marginTop: '2rem',
  borderRadius: '1rem',
  overflow: 'hidden',
  border: '1px solid var(--glass-border)'
};

const map = {
  width: '100%',
  height: '120px',
  border: 0,
  filter: 'grayscale(40%)'
};

const bottom = {
  marginTop: '2rem',
  paddingTop: '1.5rem',
  borderTop: '1px solid var(--glass-border)',
  textAlign: 'center'
};

const legalLinks = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.75rem',
  marginBottom: '0.75rem',
  flexWrap: 'wrap'
};

const copyright = {
  color: 'var(--text-tertiary)',
  fontSize: '0.9rem'
};

export default Footer;
