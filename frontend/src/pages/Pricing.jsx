// src/pages/Pricing.jsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Check, X, HelpCircle, Zap, Users, Globe, Shield } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'
  const [activePlan, setActivePlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small schools & individual educators',
      monthlyPrice: '$29',
      annualPrice: '$290',
      discount: '2 months free',
      icon: <Zap size={24} />,
      color: '#3b82f6',
      features: [
        { included: true, text: 'Up to 100 students' },
        { included: true, text: 'Basic course management' },
        { included: true, text: 'Email support' },
        { included: true, text: '1 GB storage' },
        { included: false, text: 'Advanced analytics' },
        { included: false, text: 'Custom branding' },
        { included: false, text: 'API access' },
        { included: false, text: 'Priority support' },
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      id: 'pro',
      name: 'Professional',
      description: 'For growing institutions & medium organizations',
      monthlyPrice: '$99',
      annualPrice: '$950',
      discount: '3 months free',
      icon: <Users size={24} />,
      color: '#8b5cf6',
      features: [
        { included: true, text: 'Up to 1,000 students' },
        { included: true, text: 'Advanced course management' },
        { included: true, text: 'Chat & email support' },
        { included: true, text: '10 GB storage' },
        { included: true, text: 'Advanced analytics' },
        { included: true, text: 'Custom branding' },
        { included: false, text: 'API access' },
        { included: false, text: 'Priority support' },
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large institutions & corporations',
      monthlyPrice: '$299',
      annualPrice: '$2,990',
      discount: '4 months free',
      icon: <Globe size={24} />,
      color: '#10b981',
      features: [
        { included: true, text: 'Unlimited students' },
        { included: true, text: 'Complete platform access' },
        { included: true, text: '24/7 phone support' },
        { included: true, text: '100 GB storage' },
        { included: true, text: 'Advanced analytics' },
        { included: true, text: 'Custom branding' },
        { included: true, text: 'API access' },
        { included: true, text: 'Priority support' },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'All plans come with a 14-day free trial. No credit card required.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
    },
    {
      question: 'Can I get a custom plan?',
      answer: 'Yes, contact our sales team for custom pricing based on your specific needs.',
    },
    {
      question: 'Is there a discount for educational institutions?',
      answer: 'Yes, we offer special pricing for registered educational institutions and non-profits.',
    },
    {
      question: 'How is customer support?',
      answer: 'We provide email support for all plans, with priority support for Professional and Enterprise plans.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="page-header">
        <h1 className="page-title">Simple, Transparent Pricing</h1>
        <p className="page-subtitle">
          Choose the perfect plan for your educational needs. All plans include our core features.
        </p>
        
        {/* Billing Toggle */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem',
          marginBottom: '1rem'
        }}>
          <span style={{
            color: billingCycle === 'monthly' ? 'white' : 'var(--text-secondary)',
            fontWeight: billingCycle === 'monthly' ? '600' : '400'
          }}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            style={{
              width: '60px',
              height: '30px',
              background: billingCycle === 'annual' ? '#10b981' : '#6b7280',
              border: 'none',
              borderRadius: '15px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '3px',
              left: billingCycle === 'monthly' ? '3px' : '33px',
              width: '24px',
              height: '24px',
              background: 'white',
              borderRadius: '50%',
              transition: 'all 0.3s'
            }} />
          </button>
          <span style={{
            color: billingCycle === 'annual' ? 'white' : 'var(--text-secondary)',
            fontWeight: billingCycle === 'annual' ? '600' : '400'
          }}>
            Annual <span style={{
              background: 'rgba(16, 185, 129, 0.2)',
              color: '#10b981',
              padding: '0.2rem 0.5rem',
              borderRadius: '1rem',
              fontSize: '0.8rem',
              marginLeft: '0.5rem'
            }}>Save 20%</span>
          </span>
        </div>
      </div>

      <div className="content-container">
        {/* Pricing Cards */}
        <div className="grid grid-3" style={{ gap: '2rem', marginBottom: '4rem' }}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setActivePlan(plan.id)}
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'var(--glass-blur)',
                border: `2px solid ${activePlan === plan.id ? plan.color : 'var(--glass-border)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s',
                transform: plan.popular ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: plan.color,
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '1rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}>
                  ⭐ Most Popular
                </div>
              )}
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  background: `${plan.color}20`,
                  width: '50px',
                  height: '50px',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: plan.color
                }}>
                  {plan.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '0.25rem' }}>{plan.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {plan.description}
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '3.5rem',
                    fontWeight: '800',
                    background: `linear-gradient(135deg, ${plan.color}, ${plan.color}dd)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                {billingCycle === 'annual' && (
                  <div style={{
                    color: '#10b981',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {plan.discount}
                  </div>
                )}
              </div>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                {plan.features.map((feature, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                    color: feature.included ? 'white' : 'var(--text-tertiary)'
                  }}>
                    {feature.included ? (
                      <Check size={18} color="#10b981" />
                    ) : (
                      <X size={18} color="#ef4444" />
                    )}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: activePlan === plan.id ? plan.color : 'var(--glass-bg)',
                  color: activePlan === plan.id ? 'white' : 'var(--text-primary)',
                  border: `1px solid ${plan.color}`,
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise Solution */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem',
          marginBottom: '4rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏛️</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Need a Custom Solution?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            For large universities, government organizations, or custom requirements, 
            we offer tailored enterprise solutions with dedicated support.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '1rem 2.5rem',
              background: 'var(--primary-gradient)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Contact Enterprise Sales
            </button>
            <button style={{
              padding: '1rem 2.5rem',
              background: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-md)',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              📞 Schedule Call
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Frequently Asked Questions
          </h2>
          <div className="grid grid-2" style={{ gap: '1.5rem' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-blur)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <HelpCircle size={24} color="#667eea" />
                  <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                      {faq.question}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--glass-border)'
        }}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
            Start Your Educational Journey Today
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Join 5,000+ educational institutions already transforming their operations with SkyReti.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '1rem 3rem',
              background: 'var(--primary-gradient)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              🚀 Start 14-Day Free Trial
            </button>
            <button style={{
              padding: '1rem 3rem',
              background: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-md)',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              📞 Book a Demo
            </button>
          </div>
          <p style={{
            marginTop: '2rem',
            color: 'var(--text-tertiary)',
            fontSize: '0.9rem'
          }}>
            No credit card required • Cancel anytime • Full support included
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;