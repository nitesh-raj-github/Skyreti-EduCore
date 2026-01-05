// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import '../Styles/Style.css';
import '../Styles/dashboard.css'
const Dashboard = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    // Load AOS dynamically
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        disable: window.innerWidth < 768
      });
    });
    
    // Scroll progress
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const stats = [
    { value: '1,234', label: 'Active Users', change: '+12%', positive: true },
    { value: '5,678', label: 'Courses', change: '+5%', positive: true },
    { value: '89%', label: 'Satisfaction', change: '+2%', positive: true },
    { value: '2.4K', label: 'Engagement', change: '-3%', positive: false },
  ];

  return (
    <Layout>
      {/* Scroll Progress */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Dashboard Header */}
      <header 
        className="page-header"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">
          Welcome back! Here's what's happening with your platform today.
        </p>
      </header>
      
      {/* Stats Grid */}
      <div className="grid grid-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="glass-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card-icon">
              {stat.positive ? '📈' : '📉'}
            </div>
            <div className="card-value">{stat.value}</div>
            <div className="card-label">{stat.label}</div>
            <div 
              className="performance-indicator"
              style={{
                background: stat.positive 
                  ? 'rgba(16, 185, 129, 0.2)' 
                  : 'rgba(239, 68, 68, 0.2)',
                color: stat.positive ? '#10b981' : '#ef4444'
              }}
            >
              {stat.change}
            </div>
          </div>
        ))}
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-2" style={{ marginTop: '2rem' }}>
        <div 
          className="glass-card"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Recent Activity
          </h3>
          <div className="activity-list">
            {[
              'New user registered',
              'Course published',
              'System updated',
              'Report generated'
            ].map((activity, index) => (
              <div 
                key={index}
                className="activity-item"
                style={{
                  padding: '0.75rem',
                  marginBottom: '0.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '0.5rem'
                }}
              >
                {activity}
              </div>
            ))}
          </div>
        </div>
        
        <div 
          className="glass-card"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Quick Actions
          </h3>
          <div className="quick-actions">
            {[
              { label: 'Add Course', icon: '➕' },
              { label: 'View Reports', icon: '📊' },
              { label: 'Manage Users', icon: '👥' },
            ].map((action, index) => (
              <button
                key={action.label}
                className="btn btn-secondary"
                style={{ marginBottom: '0.5rem', width: '100%' }}
              >
                <span style={{ marginRight: '0.5rem' }}>{action.icon}</span>
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;