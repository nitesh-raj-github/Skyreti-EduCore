// src/pages/SignUp.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User,
  Building,
  Check,
  X,
  Loader2,
  AlertCircle,
  CheckCircle,
  Globe,
  Smartphone,
  Shield
} from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [accountType, setAccountType] = useState('personal');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    newsletter: true
  });

  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  const [validation, setValidation] = useState({
    email: { valid: true, message: '' },
    password: { valid: true, message: '' },
    confirmPassword: { valid: true, message: '' }
  });

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const accountTypes = [
    { id: 'personal', icon: '👤', label: 'Personal', desc: 'Individual educator or student', color: '#3b82f6' },
    { id: 'school', icon: '🏫', label: 'School', desc: 'K-12 educational institution', color: '#10b981' },
    { id: 'university', icon: '🎓', label: 'University', desc: 'Higher education institution', color: '#8b5cf6' },
    { id: 'business', icon: '💼', label: 'Business', desc: 'Corporate training', color: '#f59e0b' },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return { valid: false, message: 'Email is required' };
    if (!emailRegex.test(email)) return { valid: false, message: 'Invalid email format' };
    
    // Check for common email domains
    const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'edu'];
    const domain = email.split('@')[1];
    if (domain && !commonDomains.some(d => domain.includes(d))) {
      return { valid: true, message: 'Using custom domain' };
    }
    return { valid: true, message: '' };
  };

  const validatePassword = (password) => {
    if (!password) return { valid: false, message: 'Password is required' };
    
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    const passed = Object.values(checks).filter(Boolean).length;
    const strength = (passed / Object.keys(checks).length) * 100;

    if (strength < 40) {
      return { valid: false, message: 'Password is too weak' };
    } else if (strength < 80) {
      return { valid: true, message: 'Password strength: Medium' };
    }
    return { valid: true, message: 'Password strength: Strong' };
  };

  const calculateStrength = () => {
    const checks = Object.values(passwordStrength);
    const passed = checks.filter(Boolean).length;
    return (passed / checks.length) * 100;
  };

  const getStrengthColor = () => {
    const strength = calculateStrength();
    if (strength < 40) return '#ef4444';
    if (strength < 80) return '#f59e0b';
    return '#10b981';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear errors when typing
    if (error) setError('');

    // Validate in real-time
    if (name === 'email') {
      setValidation(prev => ({
        ...prev,
        email: validateEmail(value)
      }));
    }

    if (name === 'password') {
      const checks = {
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /\d/.test(value),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
      };
      setPasswordStrength(checks);
      setValidation(prev => ({
        ...prev,
        password: validatePassword(value)
      }));
    }

    if (name === 'confirmPassword') {
      setValidation(prev => ({
        ...prev,
        confirmPassword: {
          valid: value === formData.password,
          message: value === formData.password ? 'Passwords match' : 'Passwords do not match'
        }
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Validate all fields
    const emailValidation = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);
    const passwordMatch = formData.password === formData.confirmPassword;

    if (!emailValidation.valid) {
      setError(emailValidation.message);
      setLoading(false);
      return;
    }

    if (!passwordValidation.valid) {
      setError(passwordValidation.message);
      setLoading(false);
      return;
    }

    if (!passwordMatch) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!formData.agreeToTerms) {
      setError('You must agree to the Terms of Service');
      setLoading(false);
      return;
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      // Check if email already exists (simulated)
      const existingUsers = JSON.parse(localStorage.getItem('skyretiUsers') || '[]');
      const userExists = existingUsers.some(user => user.email === formData.email);
      
      if (userExists) {
        throw new Error('An account with this email already exists');
      }

      // Create user object
      const userData = {
        id: Date.now().toString(),
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        accountType: accountType,
        role: getRoleFromAccountType(accountType),
        createdAt: new Date().toISOString(),
        newsletter: formData.newsletter
      };

      // Store user in localStorage (simulated database)
      existingUsers.push(userData);
      localStorage.setItem('skyretiUsers', JSON.stringify(existingUsers));

      // Store auth data
      localStorage.setItem('authToken', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${Date.now()}`);
      localStorage.setItem('userName', formData.fullName);
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userRole', getRoleFromAccountType(accountType));
      localStorage.setItem('accountType', accountType);

      // Store newsletter preference
      if (formData.newsletter) {
        localStorage.setItem('subscribedToNewsletter', 'true');
      }

      setSuccess(`Welcome to SkyReti, ${formData.fullName}! Your ${accountType} account has been created.`);
      
      // Show success message and redirect
      setTimeout(() => {
        navigate('/onboarding');
      }, 1500);

    } catch (err) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getRoleFromAccountType = (type) => {
    const roles = {
      personal: 'Individual User',
      school: 'School Administrator',
      university: 'University Staff',
      business: 'Business User'
    };
    return roles[type] || 'User';
  };

  const handleQuickSignup = (type) => {
    setAccountType(type);
    const demoData = {
      personal: { fullName: 'John Doe', email: 'john@example.com', organization: 'Self-employed' },
      school: { fullName: 'Sarah Johnson', email: 'sarah@greenschool.edu', organization: 'Greenwood School' },
      university: { fullName: 'Dr. Michael Chen', email: 'mchen@university.edu', organization: 'Stanford University' },
      business: { fullName: 'Alex Thompson', email: 'alex@techstartup.com', organization: 'Tech Startup Inc.' }
    };

    const data = demoData[type];
    setFormData(prev => ({
      ...prev,
      fullName: data.fullName,
      email: data.email,
      organization: data.organization,
      password: 'Demo@1234',
      confirmPassword: 'Demo@1234',
      agreeToTerms: true,
      newsletter: true
    }));

    // Trigger validation
    setValidation({
      email: validateEmail(data.email),
      password: validatePassword('Demo@1234'),
      confirmPassword: { valid: true, message: 'Passwords match' }
    });

    const checks = {
      length: true,
      uppercase: true,
      lowercase: true,
      number: true,
      special: true
    };
    setPasswordStrength(checks);
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
          maxWidth: '500px',
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
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
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
              fontSize: '1.8rem',
              animation: loading ? 'pulse 2s infinite' : 'none'
            }}>
              <User size={32} />
            </div>
            <h1 style={{
              fontSize: '2.2rem',
              marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, #ffffff, #d1fae5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Join SkyReti
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Start your educational transformation journey
            </p>
          </div>

          {/* Quick Signup Options */}
          <div style={{ marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
            <div style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              marginBottom: '0.75rem',
              textAlign: 'center'
            }}>
              Try quick signup:
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem'
            }}>
              {accountTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleQuickSignup(type.id)}
                  disabled={loading}
                  style={{
                    padding: '1rem',
                    background: accountType === type.id 
                      ? `${type.color}20` 
                      : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${accountType === type.id ? type.color : 'var(--glass-border)'}`,
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    textAlign: 'center',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{type.icon}</div>
                  <div style={{ fontWeight: '500', fontSize: '0.9rem' }}>{type.label}</div>
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

          {/* Selected Account Type Indicator */}
          <div style={{
            background: `${accountTypes.find(t => t.id === accountType)?.color}20`,
            border: `1px solid ${accountTypes.find(t => t.id === accountType)?.color}30`,
            borderRadius: 'var(--radius-md)',
            padding: '0.75rem 1rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: accountTypes.find(t => t.id === accountType)?.color,
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem'
            }}>
              {accountTypes.find(t => t.id === accountType)?.icon}
            </div>
            <div>
              <div style={{ fontWeight: '600' }}>
                {accountTypes.find(t => t.id === accountType)?.label} Account
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {accountTypes.find(t => t.id === accountType)?.desc}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
            {/* Full Name */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Full Name
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'absolute', left: '1rem', color: 'var(--text-secondary)' }}>
                  <User size={20} />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3rem',
                    background: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    fontSize: '1rem',
                    opacity: loading ? 0.7 : 1
                  }}
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Email Address
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'absolute', left: '1rem', color: 'var(--text-secondary)' }}>
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
                    border: `1px solid ${validation.email.valid ? 'var(--glass-border)' : '#ef4444'}`,
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    fontSize: '1rem',
                    opacity: loading ? 0.7 : 1
                  }}
                />
              </div>
              {formData.email && validation.email.message && (
                <div style={{
                  marginTop: '0.5rem',
                  fontSize: '0.85rem',
                  color: validation.email.valid ? '#10b981' : '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {validation.email.valid ? <Check size={14} /> : <X size={14} />}
                  {validation.email.message}
                </div>
              )}
            </div>

            {/* Organization */}
            {accountType !== 'personal' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)',
                  fontWeight: '500'
                }}>
                  Organization
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <div style={{ position: 'absolute', left: '1rem', color: 'var(--text-secondary)' }}>
                    <Building size={20} />
                  </div>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required={accountType !== 'personal'}
                    placeholder={accountType === 'school' ? 'School name' : 
                               accountType === 'university' ? 'University name' : 
                               'Company name'}
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '1rem 1rem 1rem 3rem',
                      background: 'rgba(255, 255, 255, 0.07)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-md)',
                      color: 'white',
                      fontSize: '1rem',
                      opacity: loading ? 0.7 : 1
                    }}
                  />
                </div>
              </div>
            )}

            {/* Password */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Password
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'absolute', left: '1rem', color: 'var(--text-secondary)' }}>
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a strong password"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '1rem 3rem 1rem 3rem',
                    background: 'rgba(255, 255, 255, 0.07)',
                    border: `1px solid ${validation.password.valid ? 'var(--glass-border)' : '#ef4444'}`,
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
              
              {/* Password Strength */}
              {formData.password && (
                <div style={{ marginTop: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Password strength
                    </span>
                    <span style={{
                      fontSize: '0.9rem',
                      color: getStrengthColor(),
                      fontWeight: '500'
                    }}>
                      {calculateStrength() >= 80 ? 'Strong' : 
                       calculateStrength() >= 40 ? 'Medium' : 'Weak'}
                    </span>
                  </div>
                  <div style={{
                    height: '4px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{
                      width: `${calculateStrength()}%`,
                      height: '100%',
                      background: getStrengthColor(),
                      transition: 'width 0.3s'
                    }}></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                    {Object.entries(passwordStrength).map(([key, value]) => (
                      <div key={key} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.85rem',
                        color: value ? '#10b981' : 'var(--text-secondary)'
                      }}>
                        {value ? <Check size={14} /> : <X size={14} />}
                        <span>
                          {key === 'length' && '8+ characters'}
                          {key === 'uppercase' && 'Uppercase letter'}
                          {key === 'lowercase' && 'Lowercase letter'}
                          {key === 'number' && 'Number'}
                          {key === 'special' && 'Special character'}
                        </span>
                      </div>
                    ))}
                  </div>
                  {validation.password.message && (
                    <div style={{
                      marginTop: '0.5rem',
                      fontSize: '0.85rem',
                      color: validation.password.valid ? '#10b981' : '#ef4444'
                    }}>
                      {validation.password.message}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)',
                fontWeight: '500'
              }}>
                Confirm Password
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'absolute', left: '1rem', color: 'var(--text-secondary)' }}>
                  <Lock size={20} />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '1rem 3rem 1rem 3rem',
                    background: 'rgba(255, 255, 255, 0.07)',
                    border: `1px solid ${validation.confirmPassword.valid ? 'var(--glass-border)' : '#ef4444'}`,
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    fontSize: '1rem',
                    opacity: loading ? 0.7 : 1
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.confirmPassword && validation.confirmPassword.message && (
                <div style={{
                  marginTop: '0.5rem',
                  fontSize: '0.85rem',
                  color: validation.confirmPassword.valid ? '#10b981' : '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {validation.confirmPassword.valid ? <Check size={14} /> : <X size={14} />}
                  {validation.confirmPassword.message}
                </div>
              )}
            </div>

            {/* Terms & Newsletter */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                marginBottom: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1
              }}>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  disabled={loading}
                  style={{
                    marginTop: '0.25rem',
                    width: '1.2rem',
                    height: '1.2rem',
                    accentColor: '#10b981',
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                />
                <div>
                  <span style={{ color: 'var(--text-primary)' }}>
                    I agree to the{' '}
                    <Link to="/terms" style={{ color: '#10b981', textDecoration: 'none' }}>
                      Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link to="/privacy" style={{ color: '#10b981', textDecoration: 'none' }}>
                      Privacy Policy
                    </Link>
                  </span>
                </div>
              </label>
              
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1
              }}>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  disabled={loading}
                  style={{
                    width: '1.2rem',
                    height: '1.2rem',
                    accentColor: '#10b981',
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                />
                <span style={{ color: 'var(--text-primary)' }}>
                  Send me product updates, tips, and resources (optional)
                </span>
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
                  ? 'rgba(16, 185, 129, 0.5)' 
                  : 'linear-gradient(135deg, #10b981, #059669)',
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
                  <span>Creating Account...</span>
                </>
              ) : (
                'Create Account'
              )}
            </button>

            {/* Login Link */}
            <div style={{ 
              textAlign: 'center', 
              color: 'var(--text-secondary)',
              opacity: loading ? 0.7 : 1
            }}>
              Already have an account?{' '}
              <Link 
                to="/login"
                style={{
                  color: '#10b981',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'color 0.3s'
                }}
              >
                Sign in instead
              </Link>
            </div>
          </form>

          {/* Security Info */}
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
              <Shield size={20} color="#10b981" />
              <span style={{ fontWeight: '500' }}>Your data is secure with us</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              We use enterprise-grade encryption and never share your personal information
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

export default SignUp;