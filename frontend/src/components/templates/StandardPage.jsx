import React from 'react';
import { useInView } from 'react-intersection-observer';

const StandardPage = ({ title, subtitle, children, background = true }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Page Header */}
      <header
        className="page-header"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </header>

      {/* Page Content */}
      <div
        ref={ref}
        className={`page-content ${inView ? 'visible' : ''}`}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default StandardPage;
