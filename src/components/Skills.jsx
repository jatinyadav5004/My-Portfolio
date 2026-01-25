import React, { useState } from "react";
import "../assets/css/styles.css";
import resumePDF from "../assets/doc/resume.pdf";

function Skills() {
  const [showResume, setShowResume] = useState(false);

  // Core Technical Skills
  const technicalSkills = [
    { name: "Java", icon: "bx bx-code-alt", level: 90, color: "#f89820", emoji: "☕" },
    { name: "Spring Boot", icon: "bx bx-code-curly", level: 85, color: "#6db33f" },
    { name: "React.js", icon: "bx bxl-react", level: 88, color: "#61dafb" },
    { name: "MySQL", icon: "bx bx-data", level: 87, color: "#00758f" },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <p className="skills__intro">
        Core technologies I specialize in for building modern, scalable applications
      </p>
      
      <div className="skills__container bd-grid">
        <div className="skills__single-card animate-on-scroll">
          <h3 className="skills__card-title">Core Technical Skills</h3>
          <div className="skills__horizontal-grid">
            {technicalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill__item"
                style={{ '--skill-color': skill.color }}
              >
                <div className="skill__item-icon">
                  {skill.emoji ? (
                    <span className="skill__item-emoji">{skill.emoji}</span>
                  ) : (
                    <i className={skill.icon}></i>
                  )}
                </div>
                <div className="skill__item-content">
                  <h4 className="skill__item-name">{skill.name}</h4>
                  <div className="skill__item-progress">
                    <div className="skill__item-bar">
                      <div 
                        className="skill__item-fill" 
                        style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                      ></div>
                    </div>
                    <span className="skill__item-percentage">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Button */}
        <div className="skills__resume-btn">
          <button 
            onClick={() => setShowResume(true)} 
            className="button button--resume"
          >
            <i className="bx bx-file-blank"></i>
            View Full Resume
          </button>
        </div>
      </div>

      {/* Resume Popup (Modal) */}
      {showResume && (
        <div className="resume-modal" onClick={() => setShowResume(false)}>
          <div className="resume-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowResume(false)}>
              ✖
            </button>
            <iframe 
              src={resumePDF} 
              title="Resume" 
              width="100%" 
              height="600px" 
              style={{ border: 'none', borderRadius: '8px' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
