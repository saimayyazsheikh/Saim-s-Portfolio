import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "SafeTradeHub",
      date: "Spring 2025 - Spring 2026",
      description: "Secure C2C escrow marketplace protecting payments across a 7-stage automated logistics tracking pipeline. Features mandatory buyer/seller verification.",
      points: [
        "CNIC and live facial-image matching",
        "Flask backend with automated dispute-resolution"
      ],
      tags: ["Python", "Flask", "React", "Firebase", "Cloud Vision API"],
      link: "https://github.com/saimayyazsheikh/SafeTradeHub",
      image: "/projects/safetradehub.png"
    },
    {
      title: "EduSense",
      date: "2025",
      description: "AI-powered desktop application utilizing computer vision and deep learning to detect and analyze student engagement in real time.",
      points: [
        "Real-time video analysis",
        "Deep learning engagement metrics"
      ],
      tags: ["Python", "Computer Vision", "Deep Learning"],
      link: "https://github.com/saimayyazsheikh/EduSense",
      image: "/projects/edusense.png"
    },
    {
      title: "DairyPro App",
      date: "2026",
      description: "Comprehensive management application designed to streamline daily dairy operations, herd tracking, and analytics.",
      points: [
        "Herd management and health tracking",
        "Production analytics dashboard"
      ],
      tags: ["React Native", "Node.js", "Firebase"],
      link: "https://github.com/saimayyazsheikh/DairyPro",
      image: "/projects/dairypro.png"
    },
    {
      title: "SAIM Dairy Farm Management System",
      date: "2026",
      description: "Engineered a livestock and operations tracking application for a family dairy farm, digitizing previously manual record-keeping.",
      points: [
        "Streamlined data-entry workflows for production and inventory",
        "Reduced administrative overhead through digitized records"
      ],
      tags: ["React", "JavaScript", "Tailwind CSS", "MongoDB"],
      link: "https://github.com/saimayyazsheikh/Ayyaz-Dairy-Farm",
      image: "/projects/ayyazdairy.png"
    },
    {
      title: "Pill Tracer",
      date: "2025",
      description: "Comprehensive pharmacy inventory platform with location-based search and a robust sales analytics dashboard.",
      points: [
        "Location-based inventory search",
        "Real-time sales analytics"
      ],
      tags: ["JavaScript", "React", "Node.js", "MongoDB"],
      link: "https://github.com/saimayyazsheikh/Pill-Tracer",
      image: "/projects/pilltracer.png"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-label">02 · Projects</div>
        <h2 className="section-title">Building at the <span className="text-gradient">edge of technology</span>.</h2>
        <p className="hero-desc" style={{ marginBottom: '3rem' }}>
          Full-stack applications, AI systems, and IoT platforms shipped with a focus on security, scalability, and user experience.
        </p>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="card project-card">
              {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
              <div className="project-header">
                <h3 className="project-title font-display font-semibold">
                  {project.title}
                </h3>
                <span className="project-date">{project.date}</span>
              </div>
              
              <p className="project-desc">
                {project.description}
              </p>
              
              <ul className="project-points">
                {project.points.map((point, i) => (
                  <li key={i} className="project-point">
                    <span className="point-bullet"></span>
                    <span style={{ color: 'var(--foreground)' }}>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="project-footer">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub size={14} /> Code
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-view-btn" style={{ textDecoration: 'none' }}>
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
