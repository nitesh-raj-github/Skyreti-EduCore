// src/pages/Login.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User,
  AlertCircle,
  CheckCircle,
  Smartphone,
  Shield,
  Github,
  Chrome,
  Smartphone as Mobile,
  Loader2
} from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [demoUsers] = useState([
    { email: 'demo@school.edu', password: 'demo123', name: 'School Admin', role: 'School Administrator' },
    { email: 'demo@university.edu', password: 'demo123', name: 'University Prof', role: 'Professor' },
    { email: 'demo@startup.com', password: 'demo123', name: 'Startup Founder', role: 'Business User' },
  ]);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      // Check if it's a demo user
      const demoUser = demoUsers.find(
        user => user.email === formData.email && user.password === formData.password
      );

      if (demoUser || (formData.email && formData.password)) {
        // Simulate successful login
        const userData = demoUser || {
          email: formData.email,
          name: formData.email.split('@')[0],
          role: 'Premium User'
        };

        // Store auth data
        localStorage.setItem('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo.token');
        localStorage.setItem('userName', userData.name);
        localStorage.setItem('userEmail', userData.email);
        localStorage.setItem('userRole', userData.role);
        
        // Store remember me preference
        if (formData.rememberMe) {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('savedEmail', formData.email);
        } else {
          localStorage.removeItem('rememberMe');
          localStorage.removeItem('savedEmail');
        }

        setSuccess(`Welcome back, ${userData.name}!`);
        
        // Show success message and redirect
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        throw new Error('Invalid email or password. Try "demo@school.edu" with password "demo123"');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (error) setError('');
  };

  const handleDemoLogin = (demoUser) => {
    setFormData({
      email: demoUser.email,
      password: demoUser.password,
      rememberMe: false
    });
    
    // Auto-submit after a delay to show the loading state
    setTimeout(() => {
      document.querySelector('form').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }, 100);
  };

  const socialProviders = [
    { name: 'Google', icon: <Chrome size={20} />, color: '#4285F4' },
    { name: 'GitHub', icon: <Github size={20} />, color: '#333' },
    { name: 'Microsoft', icon: <Shield size={20} />, color: '#00A4EF' },
  ];

  // Load saved email if remember me was checked
  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    const rememberMe = localStorage.getItem('rememberMe');
    if (rememberMe && savedEmail) {
      setFormData(prev => ({
        ...prev,
        email: savedEmail,
        rememberMe: true
      }));
    }
  }, []);

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
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background elements */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(118, 75, 162, 0.2) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: 'white',
              fontSize: '1.8rem',
              animation: loading ? 'pulse 2s infinite' : 'none'
            }}>
              <User size={32} />
            </div>
            <h1 style={{
              fontSize: '2.2rem',
              marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, #ffffff, #dbeafe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Welcome Back
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Sign in to access your SkyReti Educore account
            </p>
          </div>

          {/* Demo Users Quick Login */}
          <div style={{ marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              marginBottom: '0.75rem',
              textAlign: 'center'
            }}>
              Try demo accounts:
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              marginBottom: '1.5rem'
            }}>
              {demoUsers.map((user, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDemoLogin(user)}
                  disabled={loading}
                  style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(102, 126, 234, 0.1)',
                    border: '1px solid rgba(102, 126, 234, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  <span>{user.name}</span>
                  <span style={{
                    fontSize: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem'
                  }}>
                    {user.role}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#fca5a5',
              position: 'relative',
              zIndex: 1
            }}>
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#86efac',
              position: 'relative',
              zIndex: 1
            }}>
              <CheckCircle size={20} />
              <span>{success}</span>
            </div>
          )}

          {/* Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '1.5rem 0',
            color: 'var(--text-secondary)',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
            <span style={{ padding: '0 1rem', fontSize: '0.9rem' }}>Or sign in manually</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
            {/* Email Field */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Email Address
              </label>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '1rem',
                  color: 'var(--text-secondary)'
                }}>
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3rem',
                    background: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    fontSize: '1rem',
                    transition: 'all 0.3s',
                    opacity: loading ? 0.7 : 1
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}>
                <label style={{
                  color: 'var(--text-primary)',
                  fontWeight: '500'
                }}>
                  Password
                </label>
                <Link 
                  to="/forgot-password"
                  style={{
                    color: '#667eea',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  Forgot password?
                </Link>
              </div>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '1rem',
                  color: 'var(--text-secondary)'
                }}>
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '1rem 3rem 1rem 3rem',
                    background: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    fontSize: '1rem',
                    opacity: loading ? 0.7 : 1
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    padding: '0.25rem',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem'
            }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-secondary)',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1
              }}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={loading}
                  style={{
                    width: '1.2rem',
                    height: '1.2rem',
                    accentColor: '#667eea',
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                />
                <span>Remember me</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '1rem',
                background: loading 
                  ? 'rgba(102, 126, 234, 0.5)' 
                  : 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>

            {/* Divider */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              margin: '2rem 0',
              color: 'var(--text-secondary)',
              opacity: loading ? 0.7 : 1
            }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
              <span style={{ padding: '0 1rem', fontSize: '0.9rem' }}>Or continue with</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
            </div>

            {/* Social Login */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem',
              opacity: loading ? 0.7 : 1
            }}>
              {socialProviders.map((provider, index) => (
                <button
                  key={index}
                  type="button"
                  disabled={loading}
                  onClick={() => alert(`${provider.name} login would be implemented here`)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.07)',
                    border: `1px solid ${provider.color}30`,
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {provider.icon}
                  <span style={{ fontSize: '0.9rem' }}>{provider.name}</span>
                </button>
              ))}
            </div>

            {/* Sign Up Link */}
            <div style={{ 
              textAlign: 'center', 
              color: 'var(--text-secondary)',
              opacity: loading ? 0.7 : 1
            }}>
              Don't have an account?{' '}
              <Link 
                to="/signup"
                style={{
                  color: '#667eea',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'color 0.3s'
                }}
              >
                Sign up for free
              </Link>
            </div>
          </form>

          {/* Mobile App CTA */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            border: '1px solid var(--glass-border)',
            opacity: loading ? 0.7 : 1
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Mobile size={20} color="#667eea" />
              <span style={{ fontWeight: '500' }}>Also available on mobile</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                onClick={() => alert('App Store link would open here')}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'white',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                📱 App Store
              </button>
              <button 
                onClick={() => alert('Play Store link would open here')}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'white',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                🤖 Play Store
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </Layout>
  );
};

export default Login;