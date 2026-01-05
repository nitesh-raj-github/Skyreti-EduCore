// src/components/SolutionsGrid.jsx
import React from 'react';
import { GraduationCap, University, Book, Users, Cpu, Star, Briefcase, Building } from 'lucide-react';

const SolutionsGrid = () => {
  const solutions = [
    { icon: <GraduationCap />, title: 'Schools', desc: 'Student management, attendance, parent portal' },
    { icon: <University />, title: 'Universities', desc: 'Research management, alumni tracking, scheduling' },
    { icon: <Book />, title: 'Libraries', desc: 'Digital catalog, RFID management, e-books' },
    { icon: <Users />, title: 'HR Teams', desc: 'Payroll automation, performance reviews' },
    { icon: <Cpu />, title: 'AI Labs', desc: 'Model training, data pipelines, API management' },
    { icon: <Star />, title: 'Influencers', desc: 'Course hosting, community building' },
    { icon: <Briefcase />, title: 'Entrepreneurs', desc: 'Business analytics, client CRM' },
    { icon: <Building />, title: 'Enterprises', desc: 'Multi-department management, workflows' }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Built for Every Visionary</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Customizable modules for education, innovation, and leadership.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, idx) => (
            <div key={idx} className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/30 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <div className="text-white">{sol.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
              <p className="text-gray-400 text-sm">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;

