import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/button'; // ✅ correct relative path from components folder


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0
  },
  header: {
    backgroundColor: 'white',
    padding: '15px 0',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  logo: {
    height: '40px'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  },
  navLink: {
    color: '#333',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px'
  },
  registerButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px'
  },
  main: {
    display: 'flex',
    flexGrow: 1
  },
  leftSection: {
    width: '50%',
    padding: '64px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
    backgroundImage: 'linear-gradient(to bottom right, #2D3748, #1A202C)'
  },
  heading: {
    fontSize: '60px',
    fontWeight: 'bold',
    marginBottom: '16px',
    lineHeight: '1.1'
  },
  greenExclamation: {
    color: '#4CAF50'
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginTop: '24px'
  },
  footer: {
    marginTop: 'auto',
    paddingTop: '32px',
    fontSize: '14px',
    color: '#A0AEC0'
  },
  rightSection: {
    width: '50%',
    backgroundColor: '#f8f9fa',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    maxWidth: '500px',
    marginBottom: '48px'
  },
  handsImage: {
    width: '100%',
    borderRadius: '100px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  },
  callToAction: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#E8F5E9',
    borderRadius: '16px',
    padding: '32px'
  },
  ctaHeading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  ctaText: {
    color: '#333',
    marginBottom: '24px'
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },
  optionButton: {
    backgroundColor: '#2D3748',
    color: 'white',
    border: 'none',
    padding: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  }
};



const LandingPage = () => {

  const navigate = useNavigate(); 
  const handleNGOButtonClick = () => {
    navigate('/NGORegistrationForm');
  };

  
  const handleCompanyButtonClick = () => {
    navigate('/SignupPage');
  };


  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <header style={styles.header}>
        <div style={styles.navContainer}>
          <div>
          <img src="/logo.png" alt="Logo" style={{ height: '60px' }} />
          </div>
          <nav style={styles.nav}>
            <a href="/" style={styles.navLink}>Home</a>
            <a href="/ngos" style={styles.navLink}>NGO's</a>
            <a href="/blog" style={styles.navLink}>Blog</a>
            <a href="/about-us" style={styles.navLink}>About Us</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Left Section - Dark Background with Text */}
        <section style={styles.leftSection}>
          <h1 style={styles.heading}>
            Hello<br />
            Prayog Sarthi<span style={styles.greenExclamation}>!</span> <span>👋</span>
          </h1>
          <p style={styles.description}>
            Turn your ideas into reality!<br />
            Seamlessly book testing appointments for your innovative projects with<br />
            NGOs. Save time, simplify processes, and make a bigger impact!
          </p>
          <div style={styles.footer}>
            <p>© 2025 Prayog Sarthi. All rights reserved</p>
          </div>
        </section>

        {/* Right Section - Light Background with Image and Buttons */}
        <section style={styles.rightSection}>
          <div style={styles.imageContainer}>
            <img 
              src="/hands.png" 
              alt="Hands coming together" 
              style={styles.handsImage} 
            />
          </div>
          
          <div style={styles.callToAction}>
            <h2 style={styles.ctaHeading}>
              Get Involved! <span>🤝</span>
            </h2>
            <p style={styles.ctaText}>
              Choose how you'd like to contribute to impactful innovations.
            </p>
            <div style={styles.buttonGrid}>
            <Button style={styles.optionButton} onClick={handleNGOButtonClick}>NGO</Button>
            <Button style={styles.optionButton} onClick={handleCompanyButtonClick}>Company</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
