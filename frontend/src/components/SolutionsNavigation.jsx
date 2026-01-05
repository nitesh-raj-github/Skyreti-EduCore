import React from "react";
import { Link } from "react-router-dom";
import "../Styles/solutions.css";

const SolutionsNavigation = () => {
  const solutions = [
    { path: "/solutions/schools", icon: "??", name: "Schools", color: "#3498db" },
    { path: "/solutions/universities", icon: "??", name: "Universities", color: "#9b59b6" },
    { path: "/solutions/startups", icon: "??", name: "Startups", color: "#e74c3c" },
    { path: "/solutions/hrteams", icon: "??", name: "HR Teams", color: "#2ecc71" },
    { path: "/solutions/libraries", icon: "??", name: "Libraries", color: "#f39c12" },
    { path: "/solutions/influencers", icon: "??", name: "Influencers", color: "#1abc9c" },
    { path: "/solutions/ailabs", icon: "??", name: "AI Labs", color: "#34495e" },
  ];

  return (
    <div className="solutions-container">
      <div className="page-header">
        <h1>Our Solutions</h1>
        <p className="page-subtitle">
          Discover tailored platforms for every educational and organizational need. 
          Click on any solution to explore features and benefits.
        </p>
      </div>
      
      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <Link 
            to={solution.path} 
            key={index}
            className="feature-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              borderTop: `4px solid ${solution.color}`,
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = `0 15px 40px ${solution.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
            }}
          >
            <div className="feature-icon" style={{color: solution.color}}>
              {solution.icon}
            </div>
            <h3>{solution.name}</h3>
            <p>Click to explore features, pricing, and implementation details</p>
            <div style={{
              marginTop: "15px",
              color: solution.color,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <span>Explore ?</span>
              <span style={{fontSize: "0.8rem", opacity: "0.7"}}>Coming Soon</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SolutionsNavigation;


