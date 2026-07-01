import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

const CountUp = ({ end, duration = 2000, suffix = "", start = 0 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;
    const endVal = parseInt(end, 10);
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOut * (endVal - start) + start));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endVal);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return <span>{count}{suffix}</span>;
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      
      <div className="container hero-content">
        <div>
          <span className="badge">
            <span className="pulse-dot"></span>
            Open to SWE / Full-Stack / AI Automation roles
          </span>
          
          <h1 className="hero-title">
            Muhammad Saim <span className="text-gradient">Ayyaz</span>
          </h1>
          
          <p className="hero-subtitle">
            Full Stack Website & App Developer · AI Automation Expert
          </p>
          
          <p className="hero-desc">
            Information Technology graduate from Air University specializing in <span>full-stack web and mobile development</span> and <span>intelligent AI automation</span>. I build robust systems designed for measurable real-world impact.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary group">
              View Projects
              <ArrowRight size={16} style={{ transition: 'transform 0.2s', transform: 'translateX(2px)' }} />
            </a>
            
            <a href="/Muhammad_Saim_Ayyaz_Resume.pdf" download className="btn btn-outline">
              <Download size={16} />
              Download CV
            </a>
            
            <a href="#contact" className="btn btn-ghost">
              <Mail size={16} />
              Contact
            </a>
          </div>
        </div>

        <div className="hero-stats glass">
          <div className="stat-item">
            <div className="stat-value text-gradient">
              <CountUp end={4} suffix="+" duration={2000} />
            </div>
            <div className="stat-label">Major full-stack & AI projects shipped</div>
          </div>
          <div className="stat-item">
            <div className="stat-value text-gradient">
              <CountUp end={2} duration={2000} />
            </div>
            <div className="stat-label">Internships in AI and Web Dev</div>
          </div>
          <div className="stat-item">
            <div className="stat-value text-gradient">
              <CountUp end={3} suffix="+" duration={2000} />
            </div>
            <div className="stat-label">Years of leadership at AUCIS</div>
          </div>
          <div className="stat-item">
            <div className="stat-value text-gradient">
              <CountUp end={2026} start={2020} duration={2000} />
            </div>
            <div className="stat-label">BS IT Graduation, Air University</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
