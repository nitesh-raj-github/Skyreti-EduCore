// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Navbar
import Navbar from './components/Navbar';

// Import Main Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import FreeTrial from './pages/FreeTrial';

// Import Solution Pages
import Schools from './pages/Solutions/Schools';
import Universities from './pages/Solutions/Universities';
import Libraries from './pages/Solutions/Libraries';
import HRTeams from './pages/Solutions/HRTeams';
import Startups from './pages/Solutions/Startups';
import AILabs from './pages/Solutions/AILabs';
import Influencers from './pages/Solutions/Influencers';
import Entrepreneurs from './pages/Solutions/Entrepreneurs';

// Import Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';

// Import Legal Pages
import Terms from './pages/Legal/Terms';
import Privacy from './pages/Legal/Privacy';
import Contact from './pages/Legal/Contact';

// ✅ IMPORT REAL ABOUT PAGE
import About from './pages/About';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        {/* Navbar Offset */}
        <div className="pt-20">
          <Routes>

            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />

            {/* Solution Pages */}
            <Route path="/solutions/schools" element={<Schools />} />
            <Route path="/solutions/universities" element={<Universities />} />
            <Route path="/solutions/libraries" element={<Libraries />} />
            <Route path="/solutions/hr" element={<HRTeams />} />
            <Route path="/solutions/startups" element={<Startups />} />
            <Route path="/solutions/ai" element={<AILabs />} />
            <Route path="/solutions/influencers" element={<Influencers />} />
            <Route path="/solutions/entrepreneurs" element={<Entrepreneurs />} />

            {/* Free Trial */}
            <Route path="/free-trial" element={<FreeTrial />} />

            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Legal Pages */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />

            {/* ✅ REAL ABOUT PAGE */}
            <Route path="/about" element={<About />} />

            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
