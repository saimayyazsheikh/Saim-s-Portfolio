import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');
    
    const formData = new FormData(event.target);
    formData.append("access_key", "5b80beed-2411-4ae2-a916-00c4143325a3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        event.target.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        console.log("Error", data);
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-label">CONTACT</div>
        <h2 className="section-title">Let's <span className="text-gradient">collaborate.</span></h2>
        
        <p className="contact-text" style={{ maxWidth: '600px', marginBottom: '3rem' }}>
          Open to Software Engineering and AI/ML opportunities, freelance projects, and applied research collaborations.
        </p>

        <div className="nf-contact-grid">
          <div className="nf-contact-info-col">
            <div className="nf-contact-cards">
              <a href="mailto:saimisatwork@gmail.com" className="nf-contact-card" style={{ textDecoration: 'none' }}>
                <div className="nf-icon-box">
                  <Mail size={18} />
                </div>
                <div className="nf-contact-details">
                  <span className="nf-contact-label">Email</span>
                  <span className="nf-contact-value">saimisatwork@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:03107867246" className="nf-contact-card" style={{ textDecoration: 'none' }}>
                <div className="nf-icon-box">
                  <Phone size={18} />
                </div>
                <div className="nf-contact-details">
                  <span className="nf-contact-label">Phone</span>
                  <span className="nf-contact-value">0310 7867246</span>
                </div>
              </a>
              
              <div className="nf-contact-card">
                <div className="nf-icon-box">
                  <MapPin size={18} />
                </div>
                <div className="nf-contact-details">
                  <span className="nf-contact-label">Based in</span>
                  <span className="nf-contact-value">Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
            
            <div className="nf-social-links">
              <a href="https://www.linkedin.com/in/muhammad-saim-ayyaz-61a087319" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nf-social-box" style={{ textDecoration: 'none' }}>
                <FaLinkedin size={18} />
              </a>
              <a href="https://github.com/saimayyazsheikh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="nf-social-box" style={{ textDecoration: 'none' }}>
                <FaGithub size={18} />
              </a>
              <a href="https://www.instagram.com/cymonbike?igsh=MjJsend4bzZ2MjRn&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nf-social-box" style={{ textDecoration: 'none' }}>
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
          
          <div className="nf-contact-form-container">
            <form className="nf-form" onSubmit={handleSubmit}>
              <div className="nf-form-row">
                <div className="nf-form-group">
                  <label className="nf-label">Name</label>
                  <input type="text" name="name" className="nf-input" required />
                </div>
                <div className="nf-form-group">
                  <label className="nf-label">Email</label>
                  <input type="email" name="email" className="nf-input" required />
                </div>
              </div>
              
              <div className="nf-form-group">
                <label className="nf-label">Purpose of Contact <span className="text-primary" style={{ color: 'var(--primary)' }}>*</span></label>
                <select name="purpose" className="nf-input nf-select" required>
                  <option value="">Select a purpose...</option>
                  <option value="job">Job Opportunity</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="nf-form-group">
                <label className="nf-label">Subject</label>
                <input type="text" name="subject" className="nf-input" required />
              </div>
              
              <div className="nf-form-group">
                <label className="nf-label">Message</label>
                <textarea name="message" className="nf-input nf-textarea" placeholder="Tell me a bit about why you're reaching out..." required></textarea>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                <button type="submit" className="nf-submit-btn" disabled={status === 'Sending...'}>
                  <Send size={16} style={{ marginRight: '0.5rem' }} /> {status === 'Sending...' ? 'Sending...' : 'Send message'}
                </button>
                {status && status !== 'Sending...' && (
                  <span style={{ fontSize: '0.9rem', color: status.includes('successfully') ? '#4ade80' : '#f87171' }}>
                    {status}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
