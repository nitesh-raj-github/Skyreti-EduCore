import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloating = () => {
  return (
    <a
      href="https://wa.me/919999999999" // 🔁 replace with your WhatsApp number
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      style={button}
    >
      <MessageCircle size={26} />
    </a>
  );
};

const button = {
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  background: '#25D366',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
  zIndex: 9999,
  cursor: 'pointer',
  textDecoration: 'none'
};

export default WhatsAppFloating;
