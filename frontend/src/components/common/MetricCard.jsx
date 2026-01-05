// src/components/common/MetricCard.jsx
import React from 'react';
import GlassCard from "./GlassCard";


const MetricCard = ({ value, label, change, icon, description }) => {
  const isPositive = change && !change.startsWith('-');
  
  return (
    <GlassCard
      icon={icon}
      title={
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <span style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #ffffff, #dbeafe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {value}
          </span>
          {change && (
            <span style={{
              fontSize: '1rem',
              padding: '4px 12px',
              borderRadius: '20px',
              background: isPositive 
                ? 'rgba(16, 185, 129, 0.2)' 
                : 'rgba(239, 68, 68, 0.2)',
              color: isPositive ? '#10b981' : '#ef4444',
              fontWeight: '600'
            }}>
              {change}
            </span>
          )}
        </div>
      }
      description={
        <>
          <div style={{
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontSize: '0.9rem',
            marginBottom: '8px'
          }}>
            {label}
          </div>
          {description && (
            <div style={{
              color: 'var(--text-tertiary)',
              fontSize: '0.9rem'
            }}>
              {description}
            </div>
          )}
        </>
      }
    />
  );
};

export default MetricCard;