import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';
import AIAssistant from './components/AIAssistant';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container">
      <Particles />
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;
