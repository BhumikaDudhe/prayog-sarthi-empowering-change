import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/signup.css';


export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❗ Passwords do not match!");
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/signup', formData);
      alert('✅ Signup successful! You can now log in to proceed further.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error(err);
      alert('❌ Signup failed.');
    }
  };

  return (
    <div className="page-wrapper">
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

      <div className="container" style={{paddingBottom:'20px'}}>
        <div className="left" style={{ height: '720px'}}>
          <h1>🌍 Be a Changemaker</h1>
          <p>
            Partner with groundbreaking innovators, test impactful projects, and
            expand your NGO’s reach like never before!
          </p>
          <p className="copyright">
            © 2025 Prayog Sarthi. All rights reserved
          </p>
        </div>

        <div className="right" style={{ height: '720px'}}>
          <div className="signup-box" style={{ height: '620px'}}>
            <h2>Sign up</h2>
            <p className="subtext">
              Let’s get you all set up so you can access your personal account.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                />
              </div>

              <div className="row">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                />
              </div>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
              />

              <div className="terms">
                <input type="checkbox" required style={{ height: '15px', width:'20px', marginTop:'15px'}}/>
                <label>
                  I agree to all the <span className="highlight">Terms</span> and <span className="highlight">Privacy Policies</span>
                </label>
              </div>

              <button type="submit">Create account</button>
              <p className="login-text">
                Already have an account? <Link to="/LoginPage">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
