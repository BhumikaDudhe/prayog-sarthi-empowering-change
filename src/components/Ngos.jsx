import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Ngo.css';


const Ngos = () => {
  // Mock data for NGOs - in a real app, this would come from an API
  const [ngos, setNgos] = useState([
    {
      id: 1,
      name: "Anandwan:Smart Village",
      location: "Warora,Chandrapur, India",
      focus: "Visual Impairment Support",
      image: "/ngo-vision.jpg",
      description: " It is a self-sustained community founded by Baba Amte for people affected by leprosy and disabilities. It promotes healing, dignity, and inclusive living through work, education, and compassion.",
      partneredSince: "2020",
      projectsCompleted: 24
    },
    {
      id: 2,
      name: "Ability Connect",
      location: "Delhi, India",
      focus: "Mobility Accessibility",
      image: "/ngo-ability.jpg",
      description: "Creating innovative solutions for mobility challenges and promoting inclusive physical spaces.",
      partneredSince: "2019",
      projectsCompleted: 36
    },
    
  ]);

  const [activeCategory, setActiveCategory] = useState('All');

  const filterNgos = (category) => {
    setActiveCategory(category);
    // In a real application, you would filter the NGOs based on category
    // For this demo, we're just changing the active category
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/ngoregistrationform'); // Change this path to match your route
  };


  return (
    <div className="ngos-container">
      <header className="header" style={{ height: '70px' }}>
        <div className="logo">
        <img src="/logo.png" alt="Logo"  style={{ height: '60px' }}/>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="active"><Link to="/ngos">NGOs</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
      </header>

      <section className="ngos-hero" style={{ height: '450px' }}>
        <div className="container">
          <div className="ngos-hero-content">
            <h1>Our NGO Partners</h1>
            <p>Collaborating with organizations that share our vision for an accessible and inclusive digital world.</p>
          </div>
        </div>
      </section>

      <section className="ngos-filter" style={{ height: '300px' }}>
        <div className="container">
          <div className="filter-categories" style={{ height: '200px' }}>
            <button 
              className={activeCategory === 'All' ? 'active' : ''} 
              onClick={() => filterNgos('All')}
            >
              All Partners
            </button>
            <button 
              className={activeCategory === 'Visual' ? 'active' : ''}
              onClick={() => filterNgos('Visual')}
            >
              Visual Accessibility
            </button>
            <button 
              className={activeCategory === 'Mobility' ? 'active' : ''}
              onClick={() => filterNgos('Mobility')}
            >
              Mobility Support
            </button>
            <button 
              className={activeCategory === 'Digital' ? 'active' : ''}
              onClick={() => filterNgos('Digital')}
            >
              Digital Access
            </button>
            <button 
              className={activeCategory === 'Education' ? 'active' : ''}
              onClick={() => filterNgos('Education')}
            >
              Education
            </button>
          </div>
        </div>
      </section>

      <section className="ngos-grid">
        <div className="container">
          <div className="ngo-cards">
            {ngos.map((ngo) => (
              <div className="ngo-card" key={ngo.id}>
                <div className="ngo-image">
                  <div className="ngo-image-placeholder">
                  <img src="/anadwan.png" key={1}/>
                  </div>
                </div>
                <div className="ngo-content">
                  <h3>{ngo.name}</h3>
                  <div className="ngo-location">{ngo.location}</div>
                  <div className="ngo-focus">{ngo.focus}</div>
                  <p>{ngo.description}</p>
                  <div className="ngo-stats">
                    <div className="ngo-stat">
                      <span>Partner Since</span>
                      <strong>{ngo.partneredSince}</strong>
                    </div>
                    <div className="ngo-stat">
                      <span>Projects</span>
                      <strong>{ngo.projectsCompleted}</strong>
                    </div>
                  </div>
                  <Link to={`/ngo/${ngo.id}`} className="ngo-link">View Projects →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ngo-join" style={{ height: '550px' }}>
        <div className="container">
          <div className="join-content">
            <h2>Become a Partner NGO</h2>
            <p>Join our network of NGOs making a difference in accessibility and inclusion. Together, we can create a more accessible digital future.</p>
            <button className="btn btn-lg" onClick={handleSubmit}> Get Started </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-brand">
              <div className="footer-logo">
                <h2>Prayog Sarthi</h2>
              </div>
              <p className="copyright">© 2024 All rights reserved.</p>
              <div className="social-icons">
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
                  <button className="submit-btn" >→</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Ngos;