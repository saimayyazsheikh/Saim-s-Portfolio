import React from 'react';
import { Cpu, Code, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section-label">01 · About</div>
            <h2 className="section-title">Engineering secure, scalable solutions.</h2>
          </div>
          
          <div className="about-text">
            <p>
              I am an <span>Information Technology graduate</span> specializing in building comprehensive full-stack websites, mobile applications, and intelligent AI automation systems.
            </p>
            
            <p>
              I am highly skilled in <span>Python, JavaScript, React, React Native, Flask, and Firebase</span>, with a proven ability to deliver secure, scalable cross-platform software that streamlines business workflows through AI integration.
            </p>
            
            <p>
              Currently, I am seeking a full-time role as a Full Stack or AI Engineer to apply my development skills in web, app, and automation technologies to real-world products.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <Code size={16} className="feature-icon" />
                <span className="feature-text">Web & App Development</span>
              </div>
              
              <div className="feature-item">
                <Cpu size={16} className="feature-icon" />
                <span className="feature-text">AI Automation Expert</span>
              </div>
              
              <div className="feature-item">
                <Database size={16} className="feature-icon" />
                <span className="feature-text">Cloud & API Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
