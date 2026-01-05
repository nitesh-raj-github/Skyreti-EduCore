// src/pages/Solutions.jsx
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { 
  School, 
  GraduationCap, 
  Library, 
  Users,
  Rocket,
  Cpu,
  TrendingUp,
  Briefcase
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <School size={32} />,
      title: 'For Schools',
      description: 'Complete school management system for K-12 institutions',
      path: '/solutions/schools',
      color: '#3b82f6'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'For Universities',
      description: 'Advanced platform for higher education and research',
      path: '/solutions/universities',
      color: '#10b981'
    },
    {
      icon: <Library size={32} />,
      title: 'For Libraries',
      description: 'Digital library and knowledge management system',
      path: '/solutions/libraries',
      color: '#8b5cf6'
    },
    {
      icon: <Users size={32} />,
      title: 'For HR Teams',
      description: 'Employee training and development platform',
      path: '/solutions/hrteams',
      color: '#f59e0b'
    },
    {
      icon: <Rocket size={32} />,
      title: 'For Startups',
      description: 'Scalable learning platform for growing companies',
      path: '/solutions/startups',
      color: '#ef4444'
    },
    {
      icon: <Cpu size={32} />,
      title: 'For AI Labs',
      description: 'AI research and development collaboration tools',
      path: '/solutions/ailabs',
      color: '#06b6d4'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'For Influencers',
      description: 'Content creation and audience engagement platform',
      path: '/solutions/influencers',
      color: '#ec4899'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'For Entrepreneurs',
      description: 'Business education and mentorship platform',
      path: '/solutions/entrepreneurs',
      color: '#84cc16'
    }
  ];

  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">Our Solutions</h1>
        <p className="page-subtitle">
          Tailored platforms for every educational and organizational need
        </p>
      </div>

      <div className="content-container" style={{ padding: '2rem' }}>
        <div className="grid grid-3">
          {solutions.map((solution, index) => (
            <Link 
              key={index} 
              to={solution.path}
              style={{ textDecoration: 'none' }}
            >
              <div 
                className="glass-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  height: '100%',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  borderLeft: `4px solid ${solution.color}`
                }}
              >
                <div 
                  className="card-icon"
                  style={{ 
                    background: `${solution.color}20`,
                    color: solution.color,
                    marginBottom: '1rem'
                  }}
                >
                  {solution.icon}
                </div>
                <h3 style={{ 
                  color: 'var(--text-primary)', 
                  marginBottom: '0.5rem' 
                }}>
                  {solution.title}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem' 
                }}>
                  {solution.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: solution.color,
                  fontWeight: '600'
                }}>
                  <span>Explore Solution</span>
                  <span style={{ marginLeft: '0.5rem' }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="glass-card"
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            border: '1px solid rgba(102, 126, 234, 0.2)'
          }}
        >
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Can't Find Your Specific Solution?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            We customize our platform for unique organizational needs
          </p>
          <button className="btn btn-primary">
            Request Custom Solution
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;