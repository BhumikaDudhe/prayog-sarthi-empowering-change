// HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

export default function HomePage() {
  const navigate = useNavigate(); // 👈 Create navigation function

  // 🔁 Function to handle click on Company button
  const handleCompanyClick = () => {
    navigate('/LoginPage'); // 👈 Navigate to LoginPage
  };
  return (
    <div className="home-wrapper">
      {/* Header */}
      <header className="home-header" style={{ height: '70px' }}>
        <div className="logo-section">
          <img src="./Prayogsarthilogo1.png" alt="Logo" className="logo-img"  style={{ height: '60px' }}/>
          <span className="brand-name">Prayog Sarthi</span>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">NGO’s</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
        </nav>
      </header>

      {/* Body */}
      <div className="main-section">
        {/* Left content */}
        <div className="left-box">
          <h1>Hello<br /><span className="highlight">Prayog Sarthi! 👋</span></h1>
          <p className="tagline">
            Turn your ideas into reality!<br />
            Seamlessly book testing appointments for your innovative projects with NGOs.
            Save time, simplify processes, and make a bigger impact!
          </p>
          <p className="copyright">© 2025 Prayog Sarthi. All rights reserved</p>
        </div>

        {/* Right content */}
        <div className="right-box">
          <h2>Get Involved! 🤝</h2>
          <p>Choose how you’d like to contribute to impactful innovations.</p>
          <div className="role-buttons">
            <button className="role-btn">NGO</button>
            <button className="role-btn" onClick={handleCompanyClick}>Company</button>
          </div>
        </div>
      </div>
    </div>
  );
}
