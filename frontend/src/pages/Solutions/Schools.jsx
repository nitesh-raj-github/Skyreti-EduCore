// src/pages/solutions/Schools.jsx
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { 
  Check, 
  X, 
  Smartphone, 
  Globe, 
  Package,
  MessageCircle,
  Mail,
  CreditCard,
  Shield,
  Users,
  BookOpen,
  Calendar,
  Bell,
  DollarSign,
  Award,
  BarChart,
  FileText,
  Clock,
  Zap
} from 'lucide-react';

const SchoolsSolution = () => {
  const [selectedPackage, setSelectedPackage] = useState('complete');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    package: 'complete',
    message: ''
  });

  // What We Provide - Features Breakdown
  const offerings = {
    website: {
      title: "School Website",
      icon: <Globe size={24} />,
      features: [
        "Admission System & Online Forms",
        "School Information & Gallery",
        "Event Calendar & Announcements",
        "Faculty Directory & Profiles",
        "Parent Communication Portal",
        "News & Blog Section",
        "SEO Optimized & Mobile Responsive",
        "Admin Dashboard for Content Management"
      ],
      price: "$1,499"
    },
    studentApp: {
      title: "Student Mobile App",
      icon: <Smartphone size={24} />,
      features: [
        "Attendance Tracking & Reports",
        "Exam Results & Grade Cards",
        "Fee Payment & Receipts",
        "Homework & Assignments",
        "Event & Holiday Calendar",
        "Class Routine & Timetable",
        "Push Notifications & Alerts",
        "Study Materials Access",
        "Library Book Management",
        "Parent-Teacher Meeting Schedule"
      ],
      price: "$2,999"
    },
    teacherApp: {
      title: "Teacher Management App",
      icon: <Users size={24} />,
      features: [
        "Student Attendance Management",
        "Assignment Creation & Grading",
        "Performance Analytics & Reports",
        "Class & Subject Management",
        "Communication with Parents",
        "Lesson Planning Tools",
        "Salary & Payment Tracking",
        "Leave Application System",
        "Professional Development Resources",
        "Meeting & Schedule Management"
      ],
      price: "$1,999"
    },
    adminApp: {
      title: "Admin Control Panel",
      icon: <BarChart size={24} />,
      features: [
        "Complete School Management",
        "Student Database Management",
        "Staff & Teacher Management",
        "Financial Management & Reports",
        "Inventory & Resource Tracking",
        "Transport Management",
        "Certificate & Document Generation",
        "BI Analytics & Insights Dashboard",
        "Multi-branch Management",
        "Custom Reporting Tools"
      ],
      price: "$3,499"
    }
  };

  // Packages with Pricing
  const packages = {
    websiteOnly: {
      name: "Website Only",
      price: "$1,499",
      description: "Professional school website with basic features",
      includes: ["Website Features Only"],
      bestFor: "Schools needing online presence only",
      savings: ""
    },
    appsOnly: {
      name: "Apps Only",
      price: "$4,499",
      description: "Student + Teacher apps without website",
      includes: ["Student App", "Teacher App"],
      bestFor: "Schools with existing website",
      savings: "Save $998"
    },
    complete: {
      name: "Complete Package",
      price: "$5,499",
      description: "Website + Student App + Teacher App",
      includes: ["Website", "Student App", "Teacher App"],
      bestFor: "New schools or complete digital transformation",
      savings: "Save $1,998"
    },
    premium: {
      name: "Premium Suite",
      price: "$8,499",
      description: "Everything + Admin Panel + Priority Support",
      includes: ["Website", "Student App", "Teacher App", "Admin Panel", "1 Year Support"],
      bestFor: "Large schools with complex needs",
      savings: "Save $3,498"
    }
  };

  // Add-on Services
  const addons = [
    { name: "Library Management Module", price: "$799" },
    { name: "Transport Management System", price: "$1,199" },
    { name: "Hostel Management System", price: "$1,499" },
    { name: "Biometric Integration", price: "$999" },
    { name: "SMS Gateway Integration", price: "$499" },
    { name: "Custom Report Development", price: "$299" },
    { name: "Training & Onboarding", price: "$1,999" },
    { name: "Priority Support (1 Year)", price: "$1,499" }
  ];

  // Success Stories
  const successStories = [
    {
      school: "Greenwood International School",
      result: "40% reduction in administrative work",
      testimonial: "SkyReti transformed our school management completely.",
      location: "Delhi, India"
    },
    {
      school: "Cambridge Preparatory Academy",
      result: "95% parent satisfaction rate",
      testimonial: "The student app made communication seamless.",
      location: "London, UK"
    },
    {
      school: "Sunshine Elementary",
      result: "300% increase in digital engagement",
      testimonial: "Best investment we made for our school.",
      location: "California, USA"
    }
  ];

  // Handle Booking
  const handleBooking = () => {
    setShowBookingForm(true);
    setShowContactForm(false);
  };

  // Handle Contact
  const handleContact = () => {
    setShowContactForm(true);
    setShowBookingForm(false);
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Simulate Booking Submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted! We'll contact you shortly to complete payment of ${packages[selectedPackage].price}`);
    // In real implementation: Connect to payment gateway
    setShowBookingForm(false);
  };

  // Simulate Contact Submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We\'ll contact you within 24 hours.');
    setShowContactForm(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        color: 'white',
        padding: '5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '150px',
          height: '150px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🏫</div>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '1rem',
          fontWeight: '800'
        }}>
          School Management Solutions
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem',
          opacity: 0.9,
          lineHeight: '1.6'
        }}>
          Complete digital transformation for schools with websites, mobile apps, 
          and management systems tailored to your needs.
        </p>
        
        {/* Quick Action Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          <button
            onClick={handleBooking}
            style={{
              padding: '1rem 2.5rem',
              background: 'white',
              color: '#3b82f6',
              border: 'none',
              borderRadius: '0.75rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s'
            }}
          >
            <CreditCard size={20} />
            Book & Pay Now
          </button>
          <button
            onClick={handleContact}
            style={{
              padding: '1rem 2.5rem',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '0.75rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s'
            }}
          >
            <MessageCircle size={20} />
            Contact for Quote
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* What We Provide Section */}
        <section style={{ margin: '5rem 0' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.8rem',
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Everything Your School Needs
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {Object.entries(offerings).map(([key, offering]) => (
              <div key={key} style={{
                background: 'linear-gradient(145deg, #ffffff, #f5f7ff)',
                padding: '2.5rem',
                borderRadius: '1.5rem',
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)',
                border: '1px solid #e5e7eb',
                position: 'relative'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    background: 'linear-gradient(136deg, #3b82f6, #1d4ed8)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    {offering.icon}
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.5rem',
                      marginBottom: '0.25rem',
                      color: '#1f2937'
                    }}>
                      {offering.title}
                    </h3>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#3b82f6'
                    }}>
                      {offering.price}
                    </div>
                  </div>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {offering.features.map((feature, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: '#4b5563'
                    }}>
                      <Check size={18} color="#10b981" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Packages Section */}
        <section style={{ margin: '5rem 0' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.8rem',
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Choose Your Package
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {Object.entries(packages).map(([key, pkg]) => (
              <div
                key={key}
                onClick={() => setSelectedPackage(key)}
                style={{
                  background: selectedPackage === key 
                    ? 'linear-gradient(145deg, #3b82f6, #1d4ed8)' 
                    : 'linear-gradient(145deg, #ffffff, #f5f7ff)',
                  padding: '2.5rem',
                  borderRadius: '1.5rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  border: `2px solid ${selectedPackage === key ? '#3b82f6' : '#e5e7eb'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  color: selectedPackage === key ? 'white' : 'inherit'
                }}
              >
                {pkg.savings && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#10b981',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {pkg.savings}
                  </div>
                )}
                
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ 
                    fontSize: '1.8rem',
                    marginBottom: '0.5rem'
                  }}>
                    {pkg.name}
                  </h3>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    {pkg.price}
                  </div>
                  <p style={{ 
                    opacity: selectedPackage === key ? 0.9 : 0.7,
                    fontSize: '0.95rem'
                  }}>
                    {pkg.description}
                  </p>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                  {pkg.includes.map((item, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      fontSize: '1.95rem'
                    }}>
                      <Check size={16} color={selectedPackage === key ? '#86efac' : '#10b981'} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div style={{
                  fontSize: '0.9rem',
                  padding: '0.75rem',
                  background: selectedPackage === key ? 'rgba(255,255,255,0.1)' : 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '0.75rem',
                  textAlign: 'center'
                }}>
                  <strong>Best for:</strong> {pkg.bestFor}
                </div>
              </div>
            ))}
          </div>
          
          {/* Selected Package Summary */}
          <div style={{
            background: 'light-red',
            padding: '2rem',
            borderRadius: '1.5rem',
            border: '2px solid #3b82f6',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  Selected: {packages[selectedPackage].name}
                </h3>
                <p style={{ color: '#6b7282' }}>
                  {packages[selectedPackage].description}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6' }}>
                  {packages[selectedPackage].price}
                </div>
                {packages[selectedPackage].savings && (
                  <div style={{ color: '#10b981', fontWeight: '600' }}>
                    {packages[selectedPackage].savings}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '3rem'
          }}>
            <button
              onClick={handleBooking}
              style={{
                padding: '1rem 3rem',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s'
              }}
            >
              <CreditCard size={20} />
              Book & Pay Now
            </button>
            
            <button
              onClick={handleContact}
              style={{
                padding: '1rem 3rem',
                background: 'transparent',
                color: '#3b82f6',
                border: '2px solid #3b82f6',
                borderRadius: '0.75rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s'
              }}
            >
              <MessageCircle size={20} />
              Contact for Custom Quote
            </button>
          </div>
        </section>

        {/* Add-ons Section */}
        <section style={{ margin: '5rem 0' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.5rem',
            color: '#2f2937'
          }}>
            Additional Services & Add-ons
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {addons.map((addon, index) => (
              <div key={index} style={{
                background: 'Light-Red',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.3s'
              }}>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                    {addon.name}
                  </div>
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#3b82f6'
                }}>
                  {addon.price}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section style={{ margin: '5rem 0' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.5rem',
            color: 'Light-Red'
          }}>
            Success Stories
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {successStories.map((story, index) => (
              <div key={index} style={{
                background: 'light-red',
                padding: '2rem',
                borderRadius: '1.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏆</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  {story.school}
                </h3>
                <p style={{ 
                  color: '#6b7280',
                  fontStyle: 'italic',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  "{story.testimonial}"
                </p>
                <div style={{
                  padding: '0.75rem',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '0.75rem',
                  color: '#3b82f6',
                  fontWeight: '600'
                }}>
                  {story.result}
                </div>
                <div style={{
                  marginTop: '1rem',
                  fontSize: '0.9rem',
                  color: '#9ca3af'
                }}>
                  {story.location}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '1.5rem',
              maxWidth: '500px',
              width: '100%',
              position: 'relative'
            }}>
              <button
                onClick={() => setShowBookingForm(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#6b7280'
                }}
              >
                ×
              </button>
              
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Book {packages[selectedPackage].name}
              </h2>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
                Complete the form below to book your package. We'll contact you to finalize payment.
              </p>
              
              <form onSubmit={handleBookingSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      marginBottom: '1rem'
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      marginBottom: '1rem'
                    }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      marginBottom: '1rem'
                    }}
                  />
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="School Name"
                    value={bookingData.schoolName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div style={{
                  background: '#f8fafc',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Package:</span>
                    <strong>{packages[selectedPackage].name}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Total:</span>
                    <strong style={{ fontSize: '1.5rem', color: '#3b82f6' }}>
                      {packages[selectedPackage].price}
                    </strong>
                  </div>
                </div>
                
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Submit Booking Request
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Contact Form Modal */}
        {showContactForm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '1.5rem',
              maxWidth: '500px',
              width: '100%',
              position: 'relative'
            }}>
              <button
                onClick={() => setShowContactForm(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#6b7280'
                }}
              >
                ×
              </button>
              
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Contact Us
              </h2>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
                Get a custom quote or ask questions. We'll respond within 24 hours.
              </p>
              
              <form onSubmit={handleContactSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      marginBottom: '1rem'
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      marginBottom: '1rem'
                    }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      marginBottom: '1rem'
                    }}
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your needs..."
                    value={bookingData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      padding: '1rem',
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    Send Message
                  </button>
                  
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      padding: '1rem',
                      background: '#25D366',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.5rem',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>
                </div>
                
                <div style={{
                  marginTop: '1.5rem',
                  textAlign: 'center',
                  color: '#6b7280',
                  fontSize: '0.9rem'
                }}>
                  Or email us directly: <strong>contact@skyreti.com</strong>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Final CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          color: 'white',
          padding: '4rem',
          borderRadius: '2rem',
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Ready to Transform Your School?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2.5rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            Join hundreds of schools already using SkyReti to streamline their operations
            and enhance communication.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={handleBooking}
              style={{
                padding: '1rem 3rem',
                background: 'white',
                color: '#3b82f6',
                border: 'none',
                borderRadius: '0.75rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <CreditCard size={20} />
              Book Now
            </button>
            <button
              onClick={handleContact}
              style={{
                padding: '1rem 3rem',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '0.75rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <MessageCircle size={20} />
              Get Custom Quote
            </button>
          </div>
          <p style={{
            marginTop: '2rem',
            opacity: 0.8,
            fontSize: '0.9rem'
          }}>
            Free consultation • 30-day money-back guarantee • Priority support
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SchoolsSolution;