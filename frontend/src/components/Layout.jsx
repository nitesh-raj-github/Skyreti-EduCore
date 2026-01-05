import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloating from './WhatsAppFloating';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="app-content">
        {children}
      </main>

      <Footer />

      {/* Global WhatsApp Floating Button */}
      <WhatsAppFloating />
    </>
  );
};

export default Layout;
