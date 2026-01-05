// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../Styles/home.css';
import Feedback from '../components/Feedback'; 
const Home = () => {
  const [stats, setStats] = useState([
    { value: 0, target: 500, label: 'Institutions', suffix: '+' },
    { value: 0, target: 98, label: 'Customer Satisfaction', suffix: '%' },
    { value: 0, target: 24, label: 'Support Available', suffix: '/7' },
    { value: 0, target: 50, label: 'Countries', suffix: '+' }
  ]);

  // Animate stats counting
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    // Create a stable reference to initial stats
    const initialStats = [
      { value: 0, target: 500, label: 'Institutions', suffix: '+' },
      { value: 0, target: 98, label: 'Customer Satisfaction', suffix: '%' },
      { value: 0, target: 24, label: 'Support Available', suffix: '/7' },
      { value: 0, target: 50, label: 'Countries', suffix: '+' }
    ];

    const timers = initialStats.map((stat, index) => {
      let current = 0;
      const increment = stat.target / steps;
      
      return setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timers[index]);
        }
        
        setStats(prev => prev.map((s, i) => 
          i === index ? { ...s, value: Math.floor(current) } : s
        ));
      }, interval);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  // Solutions data with icons and colors
  const solutions = [
    {
      id: 'schools',
      title: 'For Schools',
      icon: '🏫',
      description: 'Complete K-12 school management platform',
      color: '#3b82f6',
      features: ['Student Management', 'Parent Portal', 'Attendance', 'Grading'],
      link: '/solutions/schools'
    },
    {
      id: 'universities',
      title: 'For Universities',
      icon: '🎓',
      description: 'Higher education management system',
      color: '#8b5cf6',
      features: ['Course Management', 'Research Tracking', 'Alumni System', 'Accreditation'],
      link: '/solutions/universities'
    },
    {
      id: 'libraries',
      title: 'For Libraries',
      icon: '📚',
      description: 'Digital and physical library management',
      color: '#10b981',
      features: ['Digital Catalog', 'RFID Management', 'Member Portal', 'E-book Integration'],
      link: '/solutions/libraries'
    },
    {
      id: 'hr',
      title: 'For HR Teams',
      icon: '👥',
      description: 'Human resource management platform',
      color: '#f59e0b',
      features: ['Payroll', 'Attendance', 'Performance', 'Recruitment'],
      link: '/solutions/hr'
    },
    {
      id: 'startups',
      title: 'For Startups',
      icon: '🚀',
      description: 'Startup growth and management tools',
      color: '#ef4444',
      features: ['Team Management', 'Investor Reporting', 'Growth Analytics', 'Productivity'],
      link: '/solutions/startups'
    },
    {
      id: 'ai',
      title: 'For AI Labs',
      icon: '🤖',
      description: 'AI research and deployment platform',
      color: '#06b6d4',
      features: ['Model Training', 'Data Pipelines', 'API Management', 'MLOps'],
      link: '/solutions/ai'
    },
    {
      id: 'influencers',
      title: 'For Influencers',
      icon: '🌟',
      description: 'Personal brand and course platform',
      color: '#f97316',
      features: ['Course Creation', 'Community Building', 'Monetization', 'Analytics'],
      link: '/solutions/influencers'
    },
    {
      id: 'entrepreneurs',
      title: 'For Entrepreneurs',
      icon: '💼',
      description: 'Business management for entrepreneurs',
      color: '#6366f1',
      features: ['Business Planning', 'Client Management', 'Financial Tracking', 'Market Analysis'],
      link: '/solutions/entrepreneurs'
    }
  ];

  return (
    <Layout>
      <div className="home-container">
        {/* Animated Background */}
        <div className="animated-background">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

        {/* Hero Section with Floating Cards */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-title-wrapper">
              <h1 className="hero-title">
                <span className="gradient-text animated-gradient">SkyReti</span>
                <span className="hero-title-secondary"> Educore Platform</span>
              </h1>
              <div className="title-underline"></div>
            </div>
            
            <p className="hero-subtitle">
              The world's most advanced <span className="highlight-text">AI-powered</span> education & business management suite. 
              Trusted by Fortune 300 companies, Ivy League universities, and innovative startups.
            </p>
            
            {/* Interactive Buttons with Hover Effects */}
            <div className="hero-buttons">
              <Link to="/dashboard" className="btn-primary pulse-animation">
                <span className="btn-icon">🚀</span>
                <span className="btn-text">Get Started Free</span>
                <span className="btn-arrow">→</span>
              </Link>
              
              <Link to="#solutions" className="btn-secondary">
                <span className="btn-icon">🎯</span>
                <span className="btn-text">View Solutions</span>
                <span className="btn-arrow">↗</span>
              </Link>
              
              <Link to="/demo" className="btn-tertiary">
                <span className="btn-icon">▶</span>
                <span className="btn-text">Watch Demo</span>
              </Link>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">📊</div>
              <h4>Real-time Analytics</h4>
              <div className="card-pulse"></div>
            </div>
            
            <div className="floating-card card-2">
              <div className="card-icon">🤖</div>
              <h4>AI Powered</h4>
              <div className="card-pulse"></div>
            </div>
            
            <div className="floating-card card-3">
              <div className="card-icon">⚡</div>
              <h4>Fast Setup</h4>
              <div className="card-pulse"></div>
            </div>
            
            <div className="floating-card card-4">
              <div className="card-icon">🔒</div>
              <h4>Secure</h4>
              <div className="card-pulse"></div>
            </div>
          </div>
        </section>

        {/* Stats Section with Counting Animation */}
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="stat-value">
                  <span className="counter">{stat.value}</span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
                <div className="stat-bar">
                  <div 
                    className="stat-progress" 
                    style={{ width: `${(stat.value / stat.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ALL SOLUTIONS SHOWCASE */}
        <section id="solutions" className="solutions-section">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">
              Complete Solutions for <span className="gradient-text">Every Need</span>
            </h2>
            <p className="section-subtitle">
              Choose the perfect platform tailored for your specific requirements
            </p>
          </div>
          
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <Link 
                key={solution.id}
                to={solution.link}
                className="solution-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ '--solution-color': solution.color }}
              >
                <div className="solution-card-inner">
                  <div className="solution-header">
                    <div className="solution-icon-wrapper">
                      <div className="solution-icon" style={{ background: solution.color }}>
                        {solution.icon}
                      </div>
                      <div className="solution-icon-glow" style={{ background: solution.color }}></div>
                    </div>
                    <h3 className="solution-title">{solution.title}</h3>
                  </div>
                  
                  <p className="solution-description">{solution.description}</p>
                  
                  <div className="solution-features">
                    {solution.features.map((feature, idx) => (
                      <span key={idx} className="solution-feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="solution-footer">
                    <span className="solution-cta">
                      Explore Solution →
                    </span>
                    <div className="solution-hover-arrow">↗</div>
                  </div>
                  
                  <div className="solution-hover-effect" style={{ background: solution.color }}></div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Feature Cards with Numbers */}
        <section className="features-section">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">
              Why Choose <span className="gradient-text">SkyReti</span>?
            </h2>
            <p className="section-subtitle">
              Discover the features that make us the preferred choice for educational institutions worldwide
            </p>
          </div>
          
          <div className="features-grid">
            {[
              { number: 1, icon: '🧠', title: 'AI-Powered Intelligence', 
                description: 'Advanced machine learning algorithms for personalized education and business insights.', 
                color: '#3b82f6' },
              { number: 2, icon: '📈', title: 'Scalable Infrastructure', 
                description: 'Grow from 10 to 10,000+ users seamlessly with our cloud infrastructure.', 
                color: '#10b981' },
              { number: 3, icon: '🔒', title: 'Enterprise Security', 
                description: 'Military-grade security, GDPR compliance, and data protection.', 
                color: '#8b5cf6' },
              { number: 4, icon: '⚡', title: 'Lightning Fast', 
                description: 'Optimized performance with 99.9% uptime guarantee.', 
                color: '#f59e0b' },
              { number: 5, icon: '🌐', title: 'Global Reach', 
                description: 'Multi-language support and localization for global institutions.', 
                color: '#ef4444' },
              { number: 6, icon: '🛠️', title: 'Customizable', 
                description: 'Tailor the platform to your specific needs with our modular design.', 
                color: '#06b6d4' }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ '--feature-color': feature.color }}
              >
                <div className="feature-header">
                  <div className="feature-number" style={{ background: feature.color }}>
                    {feature.number}
                  </div>
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-footer">
                  <span className="feature-learn-more">Learn more →</span>
                  <div className="feature-hover-effect"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive CTA Cards */}
        <section className="cta-sections">
          <div className="cta-card cta-card-primary" data-aos="zoom-in">
            <div className="cta-icon-wrapper">
              <div className="cta-icon">🚀</div>
              <div className="cta-icon-glow"></div>
            </div>
            <div className="cta-content">
              <h3>Get Started Today</h3>
              <p>Launch your educational platform in minutes with our intuitive setup wizard.</p>
              <Link to="/signup" className="btn-cta">
                <span>Start Free Trial</span>
                <div className="btn-sparkle">✨</div>
              </Link>
            </div>
            <div className="cta-arrow">↗</div>
          </div>
          
          <div className="cta-card cta-card-secondary" data-aos="zoom-in" data-aos-delay="100">
            <div className="cta-icon-wrapper">
              <div className="cta-icon">📊</div>
              <div className="cta-icon-glow"></div>
            </div>
            <div className="cta-content">
              <h3>Dashboard Preview</h3>
              <p>Access real-time analytics, user statistics, and performance metrics.</p>
              <Link to="/dashboard" className="btn-cta btn-cta-outline">
                <span>View Dashboard</span>
                <div className="btn-sparkle">📈</div>
              </Link>
            </div>
            <div className="cta-arrow">↗</div>
          </div>
          
          <div className="cta-card cta-card-tertiary" data-aos="zoom-in" data-aos-delay="200">
            <div className="cta-icon-wrapper">
              <div className="cta-icon">🎯</div>
              <div className="cta-icon-glow"></div>
            </div>
            <div className="cta-content">
              <h3>Explore Solutions</h3>
              <p>Discover tailored platforms for schools, universities, and businesses.</p>
              <Link to="#solutions" className="btn-cta">
                <span>Browse Solutions</span>
                <div className="btn-sparkle">🔍</div>
              </Link>
            </div>
            <div className="cta-arrow">↗</div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <h2 className="section-title" data-aos="fade-up">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <div className="testimonials-grid">
            {[
              { name: "Gopal Ji Snacks Pvt.Ltd", role: "-", 
                quote: "Revolutionized our online learning experience.", logo: "🎓" },
              { name: "Version Pvt. ltd", role: "Fortune 500", 
                quote: "Best education platform we've implemented.", logo: "🔍" },
              { name: "RIS International School", role: "Top School", 
                quote: "Increased student engagement by 300%.", logo: "🌲" }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="testimonial-logo">{testimonial.logo}</div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

          <Feedback />
          
        {/* Final CTA Section */}
        <section className="final-cta-section">
          <div className="final-cta-content" data-aos="zoom-in">
            <h2>Ready to Transform Your Institution?</h2>
            <p>Join thousands of institutions already using SkyReti Educore</p>
            <div className="final-cta-buttons">
              <Link to="/signup" className="final-cta-btn primary">
                <span>Start Free Trial</span>
                <div className="cta-sparkles">✨✨</div>
              </Link>
              <Link to="/contact" className="final-cta-btn secondary">
                <span>Contact Sales</span>
                <div className="cta-arrow">↗</div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>  
  );
};

export default Home;