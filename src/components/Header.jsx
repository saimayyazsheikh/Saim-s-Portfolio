import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#home" className="logo group">
          <img src="/profile.jpg" alt="Muhammad Saim Ayyaz" className="logo-icon" />
          <span>Muhammad Saim Ayyaz</span>
        </a>

        <nav className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="header-actions">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="icon-btn"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button 
            className="icon-btn mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="nav-link">Home</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="nav-link">Projects</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)} className="nav-link">Experience</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="nav-link">About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className="nav-link">Skills</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="nav-link">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
