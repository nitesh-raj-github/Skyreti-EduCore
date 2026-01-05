// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  Grid,
  Zap,
  DollarSign,
  BookOpen,
  MessageSquare,
  Info,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },

    {
      name: 'Solutions',
      path: '#',
      icon: <Grid size={18} />,
      dropdown: [
        { name: 'For Schools', path: '/solutions/schools' },
        { name: 'For Universities', path: '/solutions/universities' },
        { name: 'For Libraries', path: '/solutions/libraries' },
        { name: 'For HR Teams', path: '/solutions/hr' },
        { name: 'For Startups', path: '/solutions/startups' },
        { name: 'For AI Labs', path: '/solutions/ai' },
        { name: 'For Influencers', path: '/solutions/influencers' },
        { name: 'For Entrepreneurs', path: '/solutions/entrepreneurs' },
      ],
    },

    { name: 'Features', path: '/features', icon: <Zap size={18} /> },
    { name: 'Pricing', path: '/pricing', icon: <DollarSign size={18} /> },
    { name: 'Resources', path: '/resources', icon: <BookOpen size={18} /> },

    { name: 'About Us', path: '/about', icon: <Info size={18} /> },
    { name: 'Feedback', path: '#feedback', icon: <MessageSquare size={18} /> },
  ];

  // ✅ FIXED NAVIGATION HANDLER
  const handleNavigation = (path) => {
    if (path === '#feedback') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById('feedback');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      } else {
        const el = document.getElementById('feedback');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(path);
    }

    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">

          {/* Logo */}
          <Link to="/" className="logo-link">
            <div className="logo-icon">
              <span style={{ color: 'white', fontWeight: 'bold' }}>SE</span>
            </div>
            <div>
              <div className="logo-text">SkyReti Educore</div>
              <div className="logo-subtext">Premium Platform</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <div key={item.name} className="nav-item">

                {item.dropdown ? (
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className={`nav-button nav-button-default ${
                      isActive('/solutions') ? 'nav-button-active' : ''
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transition: 'transform 0.2s',
                        transform: isSolutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`nav-button 
                      ${item.name === 'Feedback' ? 'nav-button-feedback' : 'nav-button-default'}
                      ${item.name === 'About Us' ? 'nav-button-about' : ''}
                      ${isActive(item.path) ? 'nav-button-active' : ''}
                    `}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && isSolutionsOpen && (
                  <div className="dropdown-menu">
                    {item.dropdown.map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => handleNavigation(sub.path)}
                        className="dropdown-item"
                      >
                        <div className="dropdown-indicator"></div>
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA */}
            <button
              onClick={() => navigate('/free-trial')}
              className="get-started-button"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <div key={item.name} className="mobile-menu-item">
                <button
                  onClick={() => handleNavigation(item.path)}
                  className="dropdown-item"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              </div>
            ))}

            <button
              onClick={() => navigate('/free-trial')}
              className="mobile-get-started-button"
            >
              Start Free Trial
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
