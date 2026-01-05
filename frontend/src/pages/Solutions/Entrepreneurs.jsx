// src/pages/solutions/Entrepreneurs.jsx
import React from 'react';
import Layout from '../../components/Layout';
import { 
  Briefcase,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

const EntrepreneursSolution = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="solution-hero" style={{
        background: 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)',
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
          💼
        </div>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '1rem',
          fontWeight: '800'
        }}>
          Business Education Platform
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          Launch and grow your business with comprehensive education, 
          mentorship, and resource tools.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Content will be added here */}
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            Entrepreneur Resources
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            Business courses, mentorship, funding resources...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default EntrepreneursSolution;