// src/components/DashboardPreview.jsx
import React from 'react';
import { Activity, Users, BookOpen, TrendingUp } from 'lucide-react';

const DashboardPreview = () => {
  const stats = [
    { icon: <Users />, label: 'Active Users', value: '2,847', change: '+12%' },
    { icon: <BookOpen />, label: 'Courses', value: '156', change: '+8%' },
    { icon: <Activity />, label: 'System Load', value: '24%', change: '-3%' },
    { icon: <TrendingUp />, label: 'Revenue', value: '$48.2K', change: '+23%' },
  ];

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-2 shadow-2xl max-w-5xl mx-auto">
      <div className="bg-gray-900 rounded-xl p-1">
        {/* Browser-style header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-sm text-gray-400">app.skyretieducore.com/dashboard</span>
          </div>
          <div className="text-sm text-green-400 flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            All Systems Operational
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-800/50 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="text-gray-400">{stat.icon}</div>
                  <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold mt-2">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Graph Area */}
          <div className="bg-gray-800/30 rounded-xl p-4 mb-6">
            <h3 className="font-semibold mb-4">Performance Analytics</h3>
            <div className="h-48 flex items-end space-x-1">
              {[40, 65, 80, 60, 75, 90, 85, 70, 95, 80, 75, 85].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-cyan-500/30 to-cyan-700/20 rounded-t"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;

