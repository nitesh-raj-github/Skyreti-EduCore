import React from "react";
import "../Styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="brand-section">
          <h1 className="brand-title">SkyReti</h1>
          <h2 className="brand-subtitle">Educore Platform</h2>
          <p className="brand-tagline">
            The world's most advanced AI-powered education & business management suite. 
            Trusted by Fortune 300 companies, Ivy League universities, and innovative startups.
          </p>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Sidebar */}
        <div className="dashboard-sidebar">
          <div className="sidebar-section">
            <h3>SkyReti</h3>
            <ul className="sidebar-menu">
              <li className="menu-item active">
                <span className="menu-icon">??</span>
                <span className="menu-text">Dashboard</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">?????</span>
                <span className="menu-text">Students</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">?????</span>
                <span className="menu-text">Instructors</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">??</span>
                <span className="menu-text">Courses</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">??</span>
                <span className="menu-text">Finance</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">??</span>
                <span className="menu-text">Settings</span>
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Support</h3>
            <ul className="sidebar-menu">
              <li className="menu-item">
                <span className="menu-icon">??</span>
                <span className="menu-text">Help Center</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">??</span>
                <span className="menu-text">Contact Support</span>
              </li>
              <li className="menu-item">
                <span className="menu-icon">??</span>
                <span className="menu-text">Documentation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="dashboard-main">
          {/* System Status Row */}
          <div className="status-row">
            <div className="status-card">
              <div className="status-header">
                <h3>System Operational</h3>
                <span className="status-badge active">All Systems Normal</span>
              </div>
              <div className="status-metrics">
                <div className="metric">
                  <div className="metric-label">AV</div>
                  <div className="metric-value">12%</div>
                  <div className="metric-voltage">2.8V</div>
                </div>
                <div className="metric">
                  <div className="metric-label">Active Users</div>
                  <div className="metric-value">ADP 12%</div>
                  <div className="metric-voltage">1.4V</div>
                </div>
                <div className="metric">
                  <div className="metric-label">Current</div>
                  <div className="metric-value">3%</div>
                  <div className="metric-voltage">2.6V</div>
                </div>
                <div className="metric">
                  <div className="metric-label">System Load</div>
                  <div className="metric-value">42%</div>
                  <div className="metric-voltage">Optimal</div>
                </div>
              </div>
            </div>

            <div className="watch-card">
              <h3>Controller</h3>
              <div className="watch-content">
                <div className="watch-preview">
                  <div className="watch-icon">?</div>
                  <div className="watch-info">
                    <h4>Watch Premium Dump</h4>
                    <p className="watch-duration">5 min</p>
                  </div>
                </div>
                <button className="watch-button">View Dashboard</button>
              </div>
            </div>
          </div>

          {/* Dashboard Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <h3>Active Users</h3>
                <span className="stat-trend up">? 12%</span>
              </div>
              <div className="stat-value">2,847</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{width: "78%"}}></div>
              </div>
              <p className="stat-subtext">+342 this week</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Courses Running</h3>
                <span className="stat-trend up">? 8%</span>
              </div>
              <div className="stat-value">156</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{width: "65%"}}></div>
              </div>
              <p className="stat-subtext">+12 this month</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Completion Rate</h3>
                <span className="stat-trend up">? 5%</span>
              </div>
              <div className="stat-value">89%</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{width: "89%"}}></div>
              </div>
              <p className="stat-subtext">+4% from last month</p>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <h3>Revenue</h3>
                <span className="stat-trend up">? 23%</span>
              </div>
              <div className="stat-value">$124,580</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{width: "92%"}}></div>
              </div>
              <p className="stat-subtext">+$23,450 this quarter</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="activity-section">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">??</div>
                <div className="activity-content">
                  <h4>New Course Published</h4>
                  <p>"Advanced AI for Education" by Dr. Sarah Chen</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">??</div>
                <div className="activity-content">
                  <h4>User Group Added</h4>
                  <p>Stanford University joined the platform</p>
                  <span className="activity-time">4 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">??</div>
                <div className="activity-content">
                  <h4>Payment Processed</h4>
                  <p>TechStart Inc. upgraded to Enterprise Plan</p>
                  <span className="activity-time">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


