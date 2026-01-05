// src/components/TestimonialSection.jsx
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Dean, Stanford Business School',
      quote: 'SkyReti reduced our administrative workload by 60%.',
      stars: 5,
      avatar: 'SC'
    },
    {
      name: 'Raj Patel',
      role: 'CTO, EdTech Startup',
      quote: 'Integrated our custom AI models in 2 days instead of 2 weeks.',
      stars: 5,
      avatar: 'RP'
    },
    {
      name: 'Maria Gonzalez',
      role: 'Library Director, NY Public Library',
      quote: 'Transformed our library operations completely.',
      stars: 5,
      avatar: 'MG'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Trusted by Industry Leaders</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-gray-800/20 p-8 rounded-2xl border border-gray-700">
              <div className="flex mb-4">
                {[...Array(test.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{test.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {test.avatar}
                </div>
                <div className="ml-4">
                  <div className="font-bold">{test.name}</div>
                  <div className="text-gray-400 text-sm">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

