// src/pages/solutions/Libraries.jsx
import React from 'react';
import Layout from '../../components/Layout';
import { 
  Library,
  Search,
  BookOpen,
  Users,
  Clock,
  Shield,
  Database,
  Globe
} from 'lucide-react';

const LibrariesSolution = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="solution-hero" style={{
        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
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
          📚
        </div>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '1rem',
          fontWeight: '800'
        }}>
          Digital Library Ecosystem
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          Transform physical and digital collections into interactive knowledge hubs with 
          AI-powered discovery and management tools.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Content will be added here */}
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            Library Management Features
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            Digital catalog, member management, circulation, and more...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LibrariesSolution;