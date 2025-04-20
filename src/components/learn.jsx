import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/learn.css';

export default function Learn() {
  const navigate = useNavigate(); // ✅ INSIDE the function
  
    const handleHome = () => {
      navigate('/Website');
    };

  return (
    <div className="learn-page">
      <button className="back-button" onClick={handleHome}>
        ← Back to Home
      </button>

      <h1>Driving Inclusive Innovation Through User Testing</h1>
      <p className="subtitle">
        Empowering specially-abled individuals to shape the future of accessible technology.
      </p>

      <div className="section">
        <h2>🌟 Why Inclusive Testing Matters</h2>
        <p>
          Inclusive testing ensures that all users, regardless of ability, can interact with digital products effectively. 
          It’s not just about compliance — it’s about real impact.
        </p>
      </div>

      <div className="section">
        <h2>🤝 Our Mission</h2>
        <p>
          At Prayog Sarthi, we connect specially-abled individuals with companies to test apps, websites, and tools. 
          Their feedback directly influences design decisions to make products better for all.
        </p>
      </div>

      <div className="section">
        <h2>🚀 How It Works</h2>
        <ul>
          <li>Companies share their product prototypes</li>
          <li>We connect them with real users from diverse abilities</li>
          <li>Feedback is collected, analyzed, and delivered</li>
          <li>Making tech more inclusive, one test at a time.</li>
        </ul>
      </div>
    </div>
  );
}