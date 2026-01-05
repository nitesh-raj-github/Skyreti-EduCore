// src/pages/solutions/AILabs.jsx
import React from 'react';
import Layout from '../../components/Layout';
import { 
  Cpu,
  Brain,
  Database,
  Code,
  Network,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const AILabsSolution = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="solution-hero" style={{
        background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
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
          🤖
        </div>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '1rem',
          fontWeight: '800'
        }}>
          AI Research Platform
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          Advanced tools for AI research, model training, collaboration, 
          and breakthrough innovation.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Content will be added here */}
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            AI Research Tools
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            Model training, data management, collaboration tools...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AILabsSolution;