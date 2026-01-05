// src/pages/Legal/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import Footer from '../../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get in <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to our team for support, sales, or partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-800/30 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Mail className="w-8 h-8 text-cyan-400 mr-4" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-400">contact@skyretieducore.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Phone className="w-8 h-8 text-cyan-400 mr-4" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/30 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-cyan-400 mr-4" />
                  <div>
                    <h3 className="font-bold">Office</h3>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="inline w-4 h-4 mr-2" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="inline w-4 h-4 mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 h-40"
                      placeholder="Your message here..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;


