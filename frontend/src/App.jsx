// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Schools from '/src/solutions/Schools';
import Universities from '/src/solutions/Universities';
import Startups from '/src/solutions/Startups';
import HRTeams from '/src/solutions/HRTeams';
import Libraries from '/src/solutions/Libraries';
import Influencers from '/src/solutions/Influencers';
import AILabs from '/src/solutions/AILabs';
import Entrepreneurs from '/src/solutions/Entrepreneurs';
import Solutions from './pages/Solutions';
import './index.css';
import './Styles/solutions.css';
import './Styles/dashboard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '80px' }}> {/* Add padding for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/solutions/schools" element={<Schools />} />
          <Route path="/solutions/universities" element={<Universities />} />
          <Route path="/solutions/startups" element={<Startups />} />
          <Route path="/solutions/hrteams" element={<HRTeams />} />
          <Route path="/solutions/libraries" element={<Libraries />} />
          <Route path="/solutions/influencers" element={<Influencers />} />
          <Route path="/solutions/ailabs" element={<AILabs />} />
          <Route path="/solutions/entrepreneurs" element={<Entrepreneurs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="*" element={<div style={{ padding: '2rem', textAlign: 'center' }}>Page Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;