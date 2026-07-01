import React from 'react';
import { Award, BookOpen, CheckCircle } from 'lucide-react';
import { 
  FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, 
  FaDocker, FaGithub, FaJenkins, FaAws 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiDart, SiExpress, SiFlask, SiDotnet, 
  SiFlutter, SiMongodb, SiFirebase, SiCloudflare, SiGithubactions 
} from 'react-icons/si';

const Skills = () => {
  const technicalSkills = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Cloudflare", icon: <SiCloudflare /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git/GitHub", icon: <FaGithub /> },
    { name: "Jenkins", icon: <FaJenkins /> },
    { name: "CI/CD", icon: <SiGithubactions /> }
  ];
  
  const coreConcepts = [
    "OOP", "DSA", "DBMS", "Computer Networks", "REST APIs", 
    "Security & Auth", "IoT", "Agile", "SysAdmin"
  ];
  
  const certifications = [
    {
      title: "Migrating to the AWS Cloud",
      issuer: "Amazon Web Services / Coursera",
      image: "/certifications/aws.png",
      link: "https://www.coursera.org/account/accomplishments/verify/6LJUVHVXMJ7O"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      image: "/certifications/deloitte.png",
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a3450d80cbc638026b2ab31_1781906225991_completion_certificate.pdf",
      zoom: 1.8
    },
    {
      title: "Software Development Job Simulation",
      issuer: "Datacom",
      image: "/certifications/datacom.png",
      link: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_6a3450d80cbc638026b2ab31_1781908676718_completion_certificate.pdf"
    },
    {
      title: "IELTS",
      issuer: "Overall Band Score: 6.5",
      image: "/certifications/ielts.png",
      link: "https://ielts.org/organisations/ielts-for-organisations/verifying-ielts-results",
      credentialId: "501278"
    }
  ];
  
  const honors = [
    "Millennium Fellowship - Leadership program by UNAI & MCN",
    "AUCIS General Secretary",
    "TechConnect 2025 Participation Certificate",
    "TechFest'25 Participation Certificate",
    "Certificate of Appreciation"
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-label">04 · Skills & Achievements</div>
        <h2 className="section-title">Expertise & Recognition.</h2>
        
        <div className="skills-grid">
          <div>
            <div className="skills-group-title">
              <CheckCircle size={20} />
              <h3 className="font-display font-semibold">Technical Stack</h3>
            </div>
            <div className="skills-tags">
              {technicalSkills.map((skill, idx) => (
                <span key={idx} className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ display: 'flex', fontSize: '1.1em', opacity: 0.9 }}>{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
            
            <div className="skills-group-title" style={{ marginTop: '2.5rem' }}>
              <CheckCircle size={20} />
              <h3 className="font-display font-semibold">Core Concepts</h3>
            </div>
            <div className="skills-tags">
              {coreConcepts.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <div className="skills-group-title">
                <Award size={20} />
                <h3 className="font-display font-semibold">Certifications</h3>
              </div>
              <div className="cert-grid">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="cert-card">
                    <div className="cert-image-wrapper">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="cert-image" 
                        style={cert.zoom ? { transform: `scale(${cert.zoom})` } : {}}
                      />
                    </div>
                    <div className="cert-content">
                      <h4 className="cert-title">{cert.title}</h4>
                      <div className="cert-issuer">{cert.issuer}</div>
                      {cert.credentialId && (
                        <div className="cert-id" style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', marginTop: '0.15rem' }}>
                          Credential ID {cert.credentialId}
                        </div>
                      )}
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                        View Credential →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="skills-group-title">
                <BookOpen size={20} />
                <h3 className="font-display font-semibold">Honors & Awards</h3>
              </div>
              <ul className="skills-list">
                {honors.map((honor, idx) => (
                  <li key={idx} className="skills-list-item">
                    <span className="point-bullet"></span>
                    <span style={{ color: 'var(--foreground)' }}>{honor}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="edu-card glass">
              <div className="edu-logo-wrapper">
                <img src="/air_university.png" alt="Air University" className="edu-logo" />
              </div>
              <div className="edu-content">
                <div className="edu-label">EDUCATION</div>
                <h4 className="edu-title">BS Information Technology</h4>
                <div className="edu-school">Air University, Islamabad (CGPA: 2.82)</div>
                <div className="edu-date">Graduated 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
