import React from "react";
import "../assets/css/styles.css";
import resumePDF from "../assets/doc/resume.pdf";

function Skills() {
  // Core Technical Skills
  const technicalSkills = [
    { name: "Java", icon: "bx bx-code-alt", level: 90, color: "#f89820", emoji: "☕" },
    { name: "Spring Boot", icon: "bx bx-code-curly", level: 85, color: "#6db33f" },
    { name: "React.js", icon: "bx bxl-react", level: 88, color: "#61dafb" },
    { name: "MySQL", icon: "bx bx-data", level: 87, color: "#00758f" },
  ];

  const handleDownloadResume = async () => {
    try {
      // Fetch the PDF file
      const response = await fetch(resumePDF);
      const blob = await response.blob();
      
      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Jatin_Yadav_Resume.pdf';
      link.style.display = 'none';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: try direct download
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'Jatin_Yadav_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download Button */}
        <div className="skills__resume-btn">
          <button 
            onClick={handleDownloadResume}
            className="button button--resume"
          >
            <i className="bx bx-download"></i>
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;
