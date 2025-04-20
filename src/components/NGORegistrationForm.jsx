import axios from 'axios';
import React, { useState } from 'react';
import '../styles/NGORegistrationForm.css';

const NGORegistrationForm = () => {
  const [formData, setFormData] = useState({
    ngoName: '',
    email: '',
    phone: '',
    address: '',
    contactPersonName: '',
    contactPersonEmail: '',
    volunteersNeeded: '0-5',
    experienceLevel: '0-1 years',
    volunteerDescription: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await axios.post('http://localhost:5000/api/register-ngo', formData);
      setSuccessMessage('Registration successful!');
      setFormData({
        ngoName: '',
        email: '',
        phone: '',
        address: '',
        contactPersonName: '',
        contactPersonEmail: '',
        volunteersNeeded: 'under 18',
        experienceLevel: '0-1 years',
        volunteerDescription: ''
      });
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

  const handleMailto = () => {
    const recipient = "dudheby@rknec.edu";
    const subject = encodeURIComponent("Request to Join Prayog Sarthi – Together for a Better Tomorrow for Persons with Disabilities");
    const body = encodeURIComponent(`
Dear [Recipient's Name],

Greetings from [NGO Name]!

We hope this message finds you well.

At [NGO Name], our core mission has always been to create a more inclusive, accessible, and empowering environment for persons with disabilities. We have been working consistently on-ground through various initiatives focused on accessibility, rehabilitation, education, and skill development.

We recently came across Prayog Sarthi and were truly inspired by the vision and impactful work it represents. The initiative's dedication to transforming lives and creating sustainable change for the disabled community deeply resonates with our own values and ongoing efforts.

It is with great enthusiasm that we express our interest in becoming a part of Prayog Sarthi. We believe that collaboration is key to driving long-term, meaningful change — and by joining forces, we can amplify our collective impact.

We would be honored to contribute to the initiative in any way possible — through program implementation, community outreach, volunteer support, or technical expertise.

We would be grateful for an opportunity to connect and explore how we can become an active partner in this remarkable journey.

Looking forward to your positive response.

Warm regards,
[Your Full Name]
[Designation]
[NGO Name]
[Email / Phone]
[Website / Social Media, if any]`);

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    // Open Gmail in new tab with pre-filled email
    window.open(gmailLink, '_blank');
  };


  
  return (
    <div className='root'>
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" style={{ height: '70px', width:'100px'}}/>
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

      <div className="registration-container">
        <h1 className="registration-title" style={{ paddingTop:'50px'}}>NGO Registration</h1>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="ngoName">NGO Name</label>
              <input type="text" id="ngoName" name="ngoName" value={formData.ngoName} onChange={handleChange} placeholder="Enter organization name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="organization@gmail.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Valid Number" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Enter Valid Address" required />
            </div>
          </div>
  
          <div className="form-section">
            <h2 className="section-title">Information about volunteers</h2>
            <div className="form-group">
              <label htmlFor="contactPersonName">Number Of Volunteers Interested</label>
              <input type="text" id="contactPersonName" name="contactPersonName" value={formData.contactPersonName} onChange={handleChange} placeholder="Number Of Volunteers" required />
            </div>
            <div className="form-group">
              <label htmlFor="contactPersonEmail">Category of volunteers</label>
              <input type="text" id="contactPersonEmail" name="contactPersonEmail" value={formData.contactPersonEmail} onChange={handleChange} placeholder="blind,deaf,..." required />
            </div>
            <div className="form-group">
              <label htmlFor="volunteersNeeded">Age of Volunteers </label>
              <select id="volunteersNeeded" name="volunteersNeeded" value={formData.volunteersNeeded} onChange={handleChange} required>
                <option value="0-5">under 18</option>
                <option value="6-10">18-20</option>
                <option value="11-20">20-25</option>
                <option value="21+">25+</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="experienceLevel">Volunteer Experience Level</label>
              <select id="experienceLevel" name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} required>
                <option value="0-1 years">0-1 years</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="volunteerDescription">Description of volunteer position or skills</label>
              <textarea id="volunteerDescription" name="volunteerDescription" value={formData.volunteerDescription} onChange={handleChange} placeholder="Describe volunteer positions and required skills..." rows="4" required />
            </div>
          </div>
  
          <div className="form-actions">
            <button type="submit" className="submit-btn" onClick={handleMailto}>Submit</button>
          </div>
        </form>
        
      </div>
</div>
  );
};

export default NGORegistrationForm;