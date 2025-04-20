import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/learnmore.css';

const Learnmore = () => {
    const navigate = useNavigate(); // ✅ INSIDE the function
  
    const handleHome = () => {
      navigate('/Website');
    };

  return (
    <div className="learn-more-page">
      <button className="back-button" onClick={handleHome}>
        ← Back to Home
      </button>

      <header className="page-header">
        <h1>Inclusive Testing in Product Development</h1>
        <p className="subtitle">
          Building technology that embraces everyone—through empathy, awareness, and collaboration.
        </p>
      </header>

      <div className="content">
        <section className="section">
          <h2>🌿 What is Inclusive Testing?</h2>
          <p>
            Inclusive testing means involving users of varied abilities, backgrounds, and experiences during product design. It helps ensure that digital tools are accessible, intuitive, and welcoming for all.
          </p>
        </section>

        <section className="section">
          <h2>💚 Why It Matters</h2>
          <ul>
            <li>Boosts usability for all users, not just those with specific needs</li>
            <li>Reduces design flaws and future rework</li>
            <li>Aligns with ethical, social, and legal accessibility standards</li>
            <li>Strengthens brand reputation and inclusivity goals</li>
          </ul>
        </section>

        <section className="section">
          <h2>🔗 Real-World Impact</h2>
          <p>
            Companies working with diverse testers often uncover hidden issues and unlock smarter, more thoughtful design solutions. Inclusive testing isn’t just good practice—it’s smart development.
          </p>
        </section>

        <section className="section">
          <h2>🌍 Our Role</h2>
          <p>
            At Prayog Sarthi, we bridge the gap between companies and people with diverse abilities to co-create inclusive technologies. Through feedback loops and user collaboration, we help shape products that truly serve everyone.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Learnmore;