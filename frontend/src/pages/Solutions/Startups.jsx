// src/pages/solutions/Startups.jsx
import React from 'react';
import Layout from '../../components/Layout';
import { 
  Rocket,
  Zap,
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  Shield
} from 'lucide-react';

const StartupsSolution = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="solution-hero" style={{
        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        color: 'white',
        padding: '5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="solution-icon" style={{
          fontSize: '5rem',
          marginBottom: '1.5rem'
        }}>
          🚀
        </div>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '1rem',
          fontWeight: '800'
        }}>
          Startup Growth Platform
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          Scalable learning infrastructure for fast-growing companies with 
          minimal setup and maximum flexibility.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Content will be added here */}
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            Startup-Focused Features
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            Scalable infrastructure, cost-effective pricing, rapid deployment...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default StartupsSolution;