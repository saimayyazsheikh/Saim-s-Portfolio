import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Front-end AI Engineering Intern",
      type: "INTERNSHIP",
      company: "FlyRank AI",
      date: "June 2026 — Present",
      location: "Remote",
      points: [
        "Focusing on Front-end AI Engineering, integrating advanced AI capabilities into user interfaces.",
        "Optimizing the user experience for AI-driven applications."
      ],
      tags: ["React", "AI Integration", "Frontend"]
    },
    {
      role: "Full-Stack Developer",
      type: "PROJECT",
      company: "SafeTradeHub (Final Year Project)",
      date: "Spring 2025 — Spring 2026",
      location: "Air University",
      points: [
        "Architected a secure C2C marketplace with mandatory identity verification.",
        "Integrated CNIC and live facial-image matching for enhanced security.",
        "Built an escrow system and designed a custom Manager-Engine backend in Flask for automated dispute resolution.",
        "Integrated Firebase and Google Cloud Vision AI, working in an Agile team."
      ],
      tags: ["Python", "Flask", "React", "Firebase", "Vision API"]
    },
    {
      role: "Secretary General & Leadership Roles",
      type: "LEADERSHIP",
      company: "AUCIS (Air University Computing and Innovation Society)",
      date: "October 2022 — April 2025",
      location: "Islamabad, Pakistan (On-site)",
      points: [
        "Served multiple progressive roles (Member -> Ops Lead -> Joint Secretary -> Secretary General).",
        "Directed technical events and fostered cross-functional team coordination.",
        "Managed large-scale events like Welcome Party'24."
      ],
      tags: ["Leadership", "Event Management", "Team Coordination"]
    },
    {
      role: "Microsoft Learn Student Ambassador",
      type: "PART-TIME",
      company: "Air University",
      date: "October 2023 — January 2025",
      location: "Remote",
      points: [
        "Participated in Microsoft technical learning programs.",
        "Attended and organized community events.",
        "Contributed to student engagement and learning initiatives."
      ],
      tags: ["Community", "Microsoft Tech", "Public Speaking"]
    },
    {
      role: "Web Development And DevOps Intern",
      type: "INTERNSHIP",
      company: "CyberSoft Vantage",
      date: "July 2024 — September 2024",
      location: "On-site",
      points: [
        "Gained hands-on experience with React, Node.js, Docker, Jenkins, Kubernetes, and AWS.",
        "Sharpened technical skills and DevOps integration practices."
      ],
      tags: ["React", "Node.js", "Docker", "AWS", "Jenkins"]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-label">03 · Experience</div>
        <h2 className="section-title">Professional Journey.</h2>
        
        <div className="modern-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="modern-timeline-item">
              <div className="modern-timeline-icon">
                <Briefcase size={12} />
              </div>
              
              <div className="modern-timeline-card glass">
                <div className="modern-card-header">
                  <div className="modern-role-row">
                    <h3 className="modern-role">{exp.role}</h3>
                    {exp.type && <span className="modern-type-badge">{exp.type}</span>}
                  </div>
                  <div className="modern-company">{exp.company}</div>
                </div>
                
                <div className="modern-meta-row">
                  <div className="modern-meta-item">
                    <Calendar size={14} />
                    <span>{exp.date}</span>
                  </div>
                  <div className="modern-meta-item">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="modern-points">
                  {exp.points.map((point, i) => (
                    <li key={i} className="modern-point">
                      <span className="modern-bullet"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                {exp.tags && (
                  <div className="modern-tags">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="modern-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
