// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate password reset request
    console.log('Password reset requested for:', email);
    setSubmitted(true);
    setTimeout(() => {
      alert('Password reset link sent to your email!');
    }, 1000);
  };

  return (
    <Layout>
      <div style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '450px',
          background: 'var(--glass-bg)',
          backdropFilter: 'var(--glass-blur)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          textAlign: 'center'
        }}>
          <Link 
            to="/login"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              marginBottom: '2rem',
              fontSize: '0.9rem'
            }}
          >
            <ArrowLeft size={16} />
            Back to login
          </Link>

          {!submitted ? (
            <>
              <div style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'white',
                fontSize: '1.8rem'
              }}>
                <Mail size={32} />
              </div>
              <h1 style={{
                fontSize: '2rem',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #ffffff, #fef3c7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Forgot Password?
              </h1>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Enter your email address and we'll send you a link to reset your password.
              </p>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.07)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'white',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <>
              <div style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'white',
                fontSize: '1.8rem'
              }}>
                <CheckCircle size={32} />
              </div>
              <h1 style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #ffffff, #d1fae5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Check Your Email
              </h1>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                We've sent a password reset link to <strong>{email}</strong>. 
                Please check your inbox and follow the instructions.
              </p>
              <div style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Didn't receive the email? Check your spam folder or{' '}
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#10b981',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  try again
                </button>
              </div>
              <Link 
                to="/login"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                Return to Login
              </Link>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;