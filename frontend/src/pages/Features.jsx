// src/pages/Features.jsx
import React from 'react';
import Layout from '../components/Layout';
import StandardPage from '../components/templates/StandardPage';
import MetricCard from '../components/common/MetricCard';
import GlassCard from "../components/common/GlassCard";

import { 
  Zap, 
  Shield, 
  BarChart, 
  Cloud, 
  Users, 
  Clock,
  Smartphone,
  Globe 
} from 'lucide-react';

const Features = () => {
  const metrics = [
    { value: '99.9%', label: 'Uptime', icon: <Cloud />, change: '+0.1%' },
    { value: '2.4s', label: 'Load Time', icon: <Zap />, change: '-40%' },
    { value: '256-bit', label: 'Encryption', icon: <Shield />, change: null },
    { value: '50+', label: 'Integrations', icon: <Globe />, change: '+5' },
  ];

  const features = [
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights with our powerful analytics dashboard.',
      icon: <BarChart />
    },
    {
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for teams of any size.',
      icon: <Users />
    },
    {
      title: 'Time Saving',
      description: 'Automate repetitive tasks and save valuable time.',
      icon: <Clock />
    },
    {
      title: 'Mobile First',
      description: 'Fully responsive design that works on all devices.',
      icon: <Smartphone />
    }
  ];

  return (
    <Layout>
      <StandardPage
        title="Features"
        subtitle="Powerful features designed to enhance your educational experience"
      >
        {/* Metrics Section */}
        <div className="grid grid-4" style={{ margin: 'var(--spacing-xl) 0' }}>
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              change={metric.change}
              icon={metric.icon}
              description="Performance metric"
            />
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-2" style={{ marginTop: 'var(--spacing-xl)' }}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 100}
            >
              <GlassCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                hover={true}
              />
            </div>
          ))}
        </div>
      </StandardPage>
    </Layout>
  );
};

export default Features;