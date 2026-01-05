// src/components/common/GlassCard.jsx
import React from 'react';

const GlassCard = ({ 
  children, 
  icon, 
  title, 
  description, 
  footer,
  onClick,
  hover = true,
  className = '' 
}) => {
  return (
    <div 
      className={`glass-card ${hover ? 'hoverable' : ''} ${className}`}
      onClick={onClick}
      data-aos="fade-up"
      style={{
        cursor: onClick ? 'pointer' : 'default',
        animationDelay: `${Math.random() * 300}ms`
      }}
    >
      {icon && (
        <div className="card-icon" style={{
          width: '70px',
          height: '70px',
          marginBottom: 'var(--spacing-md)',
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem'
        }}>
          {icon}
        </div>
      )}
      
      {title && (
        <h3 style={{
          color: 'var(--text-primary)',
          fontSize: '1.4rem',
          marginBottom: 'var(--spacing-sm)'
        }}>
          {title}
        </h3>
      )}
      
      {description && (
        <p style={{
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
          marginBottom: 'var(--spacing-md)'
        }}>
          {description}
        </p>
      )}
      
      {children}
      
      {footer && (
        <div style={{ marginTop: 'var(--spacing-md)' }}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default GlassCard;