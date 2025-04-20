import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <header className="header" style={{ height: '70px' }}>
        <div className="logo">
          <img src="/logo.png" alt="Logo" style={{ height: '60px' }} />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ngos">NGOs</a></li>
            <li><a href="/blog">Blog</a></li>
            <li className="active"><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
        
      </header>

      <section className="history-section" style={{ paddingTop: '100px' }}>
        <h1 className="section-title">Know <br />Our History</h1>
        <div className="history-content">
          <div className="history-image">
            <img src="/clogo.png" />
          </div>
          <div className="history-text">
            <p>
              {"We are B.Tech Computer Science students from "}
              <b>Ramdeobaba University, Nagpur</b>
              {" (Batch 2023-27), driven by a vision to blend technology with social impact. Under the mentorship of Prof. Dhanshree Junghare, Prayog Sarthi was born as part of our community engagement project. Our journey began in Anandwan, where we saw firsthand the challenges innovators face in accessing proper testing facilities. Inspired to make a difference, we created this platform to bridge that gap—helping NGOs and creators turn their ideas into reality. What started as a project has now become a mission to fuel innovation and drive meaningful change! 🚀"}
            </p>
          </div>
        </div>
      </section>

      <section className="success-section">
        <h2 className="section-title">Our Success <br />Numbers</h2>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">🍽️</div>
            <div className="stat-number">6</div>
            <div className="stat-label">Total meals served</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">+1,000</div>
            <div className="stat-label">Average start review <br />4.5 stars</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">+20,000</div>
            <div className="stat-label">Number of clients served</div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="single-image-container">
          <img src="/photogrid.png" alt="Main gallery image" />
        </div>
      </section>

      <section className="team-section" style={{ marginTop: '50px' }}>
        <h2 className="section-title">Meet our <br />Team</h2>
        <div className="team-content">
          <div className="team-logo">
            <img src="/team.png" alt="INES Logo" />
          </div>
          <div className="team-info">
            <div className="team-description">
              <p>
                <b>Prayog Sarthi</b>
                {" is a community engagement initiative started by our visit to Anandvan, where we identified key challenges and opportunities for local innovators. This project aims to bridge the gap between promising ideas and access to proper testing facilities, enabling NGOs and individuals to refine and validate their ideas. By connecting them with resources and expertise, we're creating sustainable, impactful solutions that drive positive change within the community."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo" style={{ paddingLeft: '20px' }}>
              <img src="/Prayogsarthilogo1.png" alt="Prayogsarthi Logo" style={{ height: '100px' }} />
              <span>Prayog Sarthi</span>
            </div>
            <p className="copyright" style={{ paddingLeft: '20px' }}>© 2024 All rights reserved.</p>
            <div className="social-icons" style={{ paddingLeft: '20px' }}>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="/about">About us</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact us</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li><a href="/help">Help center</a></li>
                <li><a href="/terms">Terms of service</a></li>
                <li><a href="/legal">Legal</a></li>
                <li><a href="/privacy">Privacy policy</a></li>
                <li><a href="/status">Status</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Stay up to date</h3>
              <div className="newsletter">
                <input type="email" placeholder="Your email address" />
                <button><i className="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
