import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/website.css';



const Website = () => {

  const navigate = useNavigate(); // ✅ INSIDE the function

  const handleGetStarted = () => {
    navigate('/landing');
  };


  return (
    <div className="website-container">
      {/* Header */}
      <header className="header">
             <div className="logo">
               <img src="/logo.png" alt="Logo" style={{ height: '60px' }} />
             </div>
             <nav className="nav-menu">
               <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/ngos">NGOs</a></li>
                 <li><a href="/blog">Blog</a></li>
                 <li><a href="/about-us">About Us</a></li>
               </ul>
             </nav>
           </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-title-box">
              <h1 className="hero-title">
                <b>Empowering</b> <br />
                Innovation Through <br />
                <span>Inclusive Testing</span>
              </h1>
            </div>
            <p className="hero-subtitle">
            Connecting specially-abled testers with companies to build a more accessible future.
            </p>
            <button className="btn btn-lg" onClick={handleGetStarted}>
  Get Started
</button>

          </div>
          <div className="hero-image">
            <img 
              src="/hero-image.png" 
              alt="Person testing software on laptop" 
            />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted" style={{ height: '350px' }}>
      <h2 className="trusted-title" style={{ paddingLeft:'100px' }}> Trusted by NGOs</h2>
        <div className="container" >
         
          <div className="logo-grid" style={{ height: '200px' }}>
            <img src="/client-logo-1.png" alt="Partner logo" />
            <img src="/client-logo-2.png" alt="Partner logo" />
            <img src="/client-logo-3.png" alt="Partner logo" />
            <img src="/client-logo-4.png" alt="Partner logo" />
            <img src="/client-logo-5.png" alt="Partner logo" />
            <img src="/client-logo-6.png" alt="Partner logo" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" style={{ height: '950px' }}>
      <h2 className="services-title">
            Bridging Companies with Specially-Abled <br />
            Testers for Smarter Products
          </h2>
        <div className="container">
          
          <div className="services-grid">
            <div className="service-card">
              <img src="/research-icon.png" alt="Research icon" />
              <h3 className="service-title">Research & Development</h3>
              <p className="service-desc">
                Innovative testing solutions for modern products
              </p>
            </div>
            <div className="service-card">
              <img src="/consulting-icon.png" alt="Consulting icon" />
              <h3 className="service-title">Consulting & Services</h3>
              <p className="service-desc">
                Expert guidance for accessibility compliance
              </p>
            </div>
            <div className="service-card">
              <img src="/accessibility-icon.png" alt="Accessibility icon" />
              <h3 className="service-title">Accessibility Advocates</h3>
              <p className="service-desc">
                Champions for inclusive digital experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="feature feature-right">
        <div className="container">
          <div className="feature-image">
            <img 
              src="/feature-image-1.png" 
              alt="User testing illustration" 
            />
          </div>
          <div className="feature-content">
            <h2 className="feature-title">
              How User Testing Drives Inclusive Innovation
            </h2>
            <p className="feature-desc">
              Inclusive testing is the key to designing products that work for everyone. At Prayog Sarthi, we connect specially-abled individuals with companies to ensure products are accessible, practical, and impactful.
            </p>
            <button className="btn">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-brand">
            <h2 className="stats-brand-name">
              <span>Driving Inclusive 
              Innovation for a Better Tomorrow</span>
            </h2>
            <p className="stats-brand-tagline">
              Building a Better Tomorrow
            </p>
          </div>
          <div className="stats-numbers">
            <div className="stat">
              <span className="stat-number">XXX</span>
              <p className="stat-label">Products Tested</p>
            </div>
            <div className="stat">
              <span className="stat-number">XXX</span>
              <p className="stat-label">Countries</p>
            </div>
            <div className="stat">
              <span className="stat-number">XX</span>
              <p className="stat-label">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="feature feature-left">
        <div className="container">
          <div className="feature-content">
            <h2 className="feature-title">
              How Inclusive Testing Enhances Product Development
            </h2>
            <p className="feature-desc">
              Building truly accessible technology requires insights from those who experience accessibility challenges firsthand. At Prayog Sarthi, we bridge the gap between specially-abled individuals and companies, enabling businesses to refine their products with real-world user feedback.
            </p>
            <button className="btn">
              Learn More
            </button>
          </div>
          <div className="feature-image">
            <img 
              src="/feature2.png" 
              alt="Product development illustration" 
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards">
        <div className="container">
          <h2 className="cards-title" style={{ paddingRight: '150px' }}>
            Accessibility is the
            <br/> Future of Innovation
          </h2>
          <div className="cards-grid">
            <div className="card">
              <img src="/card1.png" alt="Children using digital devices" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">Inclusive Education</h3>
                <p className="card-desc">Making learning accessible for all children</p>
              </div>
            </div>
            <div className="card">
              <img src="/card2.png" alt="Elderly using technology" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">Senior-Friendly Design</h3>
                <p className="card-desc">Bridging the digital divide for older adults</p>
              </div>
            </div>
            <div className="card">
              <img src="/card3.png" alt="Accessible testing" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">Comprehensive Testing</h3>
                <p className="card-desc">Ensuring products work for everyone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta" style={{ height: '400px' }}>
        <div className="container">
          <h2 className="cta-title">
            <span>Join Us</span> in Building a More <br />
            Accessible Future!
          </h2>
          <button className="btn btn-lg" style={{ height: '100px', paddingLeft:'150px', marginLeft:'200px' }}  onClick={handleGetStarted}>
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/Prayogsarthilogo1.png" alt="Prayog Sarthi Logo"  style={{ height: '100px' }}/>
                <span>Prayog Sarthi</span>
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
                  <button><i className="fa fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;