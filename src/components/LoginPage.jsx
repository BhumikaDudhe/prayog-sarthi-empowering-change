import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      setMessage('✅ Login successful!');
      console.log('User:', res.data.user);
      // TODO: You can redirect or store user info in localStorage here
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setMessage('❌ Invalid email or password');
      } else {
        setMessage('❌ Login failed. Please try again.');
      }
    }
  };

  // Handle mailto functionality
  const handleMailto = () => {
    const recipient = "bondresg_1@rknec.edu";
    const subject = encodeURIComponent("Request for Volunteer Support in Collaborative Project for Empowering People with Disabilities");
    const body = encodeURIComponent(`
Dear [NGO Representative's Name],

I hope this message finds you well.

My name is [Your Name], and I am reaching out on behalf of [Your Company Name]. We are currently in the early stages of developing a revolutionary product aimed at improving the lives of individuals with disabilities. This initiative is deeply rooted in our commitment to inclusivity, accessibility, and creating meaningful social impact.

As we work to bring this vision to life, we recognize the invaluable insights and support that organizations like yours bring to the community. We would be honored to collaborate with [NGO Name] and are writing to formally request your support in engaging volunteers from your organization to assist us in this mission.

Your volunteers' real-world experience and understanding of the unique challenges faced by people with disabilities would greatly enhance the relevance, functionality, and accessibility of our product. Whether it’s through feedback sessions, user testing, or collaborative workshops, we believe this partnership could drive truly impactful results.

We would be happy to provide more details about the project and explore how we can align our efforts for maximum benefit to the community.

Looking forward to the opportunity to collaborate and make a meaningful difference together.

Warm regards,
[Your Full Name]
[Your Position]
[Company Name]
[Email Address]
[Phone Number]
[Company Website (if applicable)]`);

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    // Open Gmail in new tab with pre-filled email
    window.open(gmailLink, '_blank');
  };

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header" style={{ height: '70px'}}>
        <div className="logo">
          <img src="/logo.png" alt="Logo" style={{ height: '60px'}} />
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

      {/* Main content */}
      <div className="container" style={{paddingBottom:'20px'}}>
        {/* Left Section */}
        <div className="left" style={{ height: '720px'}}>
          <h1>Welcome Back</h1>
          <h2>Changemaker! 🌍</h2>
          <p className="description">
            Log in to access your dashboard, manage project testing appointments,
            and collaborate with innovators to create a bigger impact!
          </p>
          <p className="copyright">© 2025 Prayog Sarthi. All rights reserved</p>
        </div>

        {/* Right Section */}
        <div className="right" style={{ height: '720px'}}>
          <div className="login-box" style={{ height: '620px'}}>
            <h2>Login</h2>
            <p className="subtext">Login to access your Prayog Sarthi account</p>

            <form onSubmit={handleSubmit} id="loginForm">
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="john.doe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="actions">
                <label><input type="checkbox" style={{ height: '15px', width:'20px', marginTop:'15px'}}/> Remember me</label>
                <a href="#" onClick={handleMailto}>Forgot Password?</a>
              </div>

              <button type="submit" className="support-btn" onClick={handleMailto} style={{ marginTop: '15px' }} >
              Login
              </button>
              {message && <p className="login-message">{message}</p>}
            </form>

            <p className="signup-text">
              Don't have an account? <Link to="/SignupPage">Sign up</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}