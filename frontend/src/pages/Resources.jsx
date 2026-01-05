// src/pages/Resources.jsx
import React from 'react';
import Layout from '../components/Layout';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  Users, 
  Calendar,
  Award,
  TrendingUp
} from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      category: 'Documentation',
      icon: <BookOpen size={24} />,
      color: '#3b82f6',
      items: [
        { title: 'Getting Started Guide', type: 'PDF', size: '2.4 MB', download: true },
        { title: 'API Documentation', type: 'Web', size: null, link: '/api-docs' },
        { title: 'Integration Guide', type: 'PDF', size: '3.1 MB', download: true },
        { title: 'Security Whitepaper', type: 'PDF', size: '1.8 MB', download: true },
      ]
    },
    {
      category: 'Tutorials',
      icon: <Video size={24} />,
      color: '#ef4444',
      items: [
        { title: 'Platform Overview', type: 'Video', duration: '15:30', watch: true },
        { title: 'Advanced Analytics', type: 'Video', duration: '22:10', watch: true },
        { title: 'Mobile App Setup', type: 'Video', duration: '8:45', watch: true },
        { title: 'Admin Dashboard', type: 'Video', duration: '18:20', watch: true },
      ]
    },
    {
      category: 'Templates',
      icon: <FileText size={24} />,
      color: '#10b981',
      items: [
        { title: 'Course Syllabus', type: 'Template', format: 'DOCX', download: true },
        { title: 'Student Report', type: 'Template', format: 'PDF', download: true },
        { title: 'Lesson Plan', type: 'Template', format: 'PPTX', download: true },
        { title: 'Assessment Form', type: 'Template', format: 'DOCX', download: true },
      ]
    },
    {
      category: 'Community',
      icon: <Users size={24} />,
      color: '#8b5cf6',
      items: [
        { title: 'Educator Forums', type: 'Community', members: '5,200+', join: true },
        { title: 'Expert Webinars', type: 'Events', upcoming: '3', register: true },
        { title: 'Success Stories', type: 'Case Studies', count: '48', read: true },
        { title: 'Partner Network', type: 'Directory', partners: '120+', explore: true },
      ]
    }
  ];

  const upcomingEvents = [
    { date: 'Jan 15', title: 'AI in Education Webinar', speaker: 'Dr. Sarah Chen', seats: '45/100' },
    { date: 'Jan 22', title: 'Digital Transformation Workshop', speaker: 'Mark Johnson', seats: '30/50' },
    { date: 'Feb 05', title: 'EdTech Innovation Summit', speaker: 'Various Experts', seats: '120/200' },
  ];

  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">Resources & References</h1>
        <p className="page-subtitle">
          Everything you need to succeed with SkyReti Educore Platform
        </p>
      </div>

      <div className="content-container">
        {/* Quick Stats */}
        <div className="grid grid-4" style={{ marginBottom: '3rem' }}>
          {[
            { icon: '📚', value: '200+', label: 'Guides & Docs' },
            { icon: '🎥', value: '150+', label: 'Video Tutorials' },
            { icon: '👥', value: '5K+', label: 'Community Members' },
            { icon: '📊', value: '98%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <div key={index} className="glass-card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="grid grid-2" style={{ gap: '2rem', marginBottom: '4rem' }}>
          {resources.map((category, index) => (
            <div key={index} className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  background: `${category.color}20`,
                  width: '50px',
                  height: '50px',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: category.color
                }}>
                  {category.icon}
                </div>
                <h2 style={{ fontSize: '1.5rem' }}>{category.category}</h2>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {category.items.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s'
                  }}>
                    <div>
                      <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        {item.type} • {item.size || item.duration || item.format || item.members || item.count}
                      </div>
                    </div>
                    <button style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}>
                      {item.download ? 'Download' : 
                       item.watch ? 'Watch' : 
                       item.join ? 'Join' : 
                       item.read ? 'Read' : 
                       item.explore ? 'Explore' : 'View'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="glass-card" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Calendar size={28} color="#f59e0b" />
            <h2 style={{ fontSize: '1.8rem' }}>Upcoming Events</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {upcomingEvents.map((event, index) => (
              <div key={index} style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #f59e0b'
              }}>
                <div style={{
                  background: '#f59e0b',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}>
                  {event.date}
                </div>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{event.title}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Speaker: {event.speaker}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {event.seats} seats
                  </div>
                  <button style={{
                    padding: '0.5rem 1.5rem',
                    background: '#f59e0b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}>
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            Stay Updated
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Subscribe to our newsletter for the latest updates, tips, and resources.
          </p>
          <div style={{
            display: 'flex',
            maxWidth: '500px',
            margin: '0 auto',
            gap: '1rem'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '1rem',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-md)',
                color: 'white',
                fontSize: '1rem'
              }}
            />
            <button style={{
              padding: '1rem 2rem',
              background: 'var(--primary-gradient)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;