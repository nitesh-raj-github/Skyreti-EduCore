// src/pages/solutions/HRTeams.jsx
import React from 'react';
import Layout from '../../components/Layout';
import { 
  Users,
  Target,
  TrendingUp,
  FileText,
  Award,
  BarChart,
  Clock,
  Shield
} from 'lucide-react';

const HRTeamsSolution = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="solution-hero" style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
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
          👥
        </div>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '1rem',
          fontWeight: '800'
        }}>
          Corporate Learning Platform
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          Empower your workforce with continuous learning, skill development, 
          and performance tracking tools.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Content will be added here */}
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            Employee Development Tools
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            Training modules, skill tracking, performance analytics...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HRTeamsSolution;