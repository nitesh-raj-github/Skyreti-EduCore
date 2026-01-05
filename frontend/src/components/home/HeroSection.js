import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import TypingEffect from '../ui/TypingEffect';
import GradientButton from '../ui/GradientButton';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const solutions = [
    'School Management',
    'College Management',
    'Library Management',
    'HR Payroll',
    'Business Analytics',
    'Cloud Solutions',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
          style={{
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-300/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by 500+ Institutions Worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              Transform Your Institution with
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                <TypingEffect texts={solutions} />
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Comprehensive, cloud-based solutions designed to streamline operations, 
              enhance learning experiences, and drive institutional growth globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <GradientButton
                to="/contact"
                size="lg"
                className="group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </GradientButton>
              
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-all">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Zap, text: 'Real-time Analytics', color: 'text-yellow-500' },
                { icon: Shield, text: 'Bank-level Security', color: 'text-green-500' },
                { icon: Globe, text: 'Global Support', color: 'text-blue-500' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - 3D Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px]">
              {/* Dashboard Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                {/* Mock Dashboard UI */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-3 w-24 bg-gray-700 rounded" />
                    <div className="flex space-x-2">
                      {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${color}`} />
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-gray-800/50 rounded-lg p-4">
                        <div className="h-2 w-1/2 bg-gray-700 rounded mb-2" />
                        <div className="h-6 w-3/4 bg-primary-500/20 rounded" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart */}
                  <div className="bg-gray-800/50 rounded-lg p-4 h-48">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-2 w-32 bg-gray-700 rounded" />
                      <div className="h-2 w-20 bg-gray-700 rounded" />
                    </div>
                    <div className="h-32 relative">
                      {/* Chart bars */}
                      {[30, 60, 45, 80, 65, 90, 50].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="absolute bottom-0 w-6 bg-gradient-to-t from-primary-500 to-secondary-500 rounded-t"
                          style={{ left: `${i * 12}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-64 h-40 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4"
              >
                <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mb-3" />
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 bg-gray-200 dark:bg-gray-600 rounded" />
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 w-56 h-32 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full" />
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded mb-2" />
                <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-600 rounded" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;