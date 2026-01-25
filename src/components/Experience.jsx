import React from 'react';
import '../assets/css/styles.css';

const Experience = () => {
  const experiences = [
    {
      company: "Intellect Design Arena",
      position: "Associate Consultant",
      type: "Full-time",
      duration: "Aug 2024 - Present",
      description: "Working as a Developer, specializing in Angular and Spring Boot for backend, following best coding practices with a focus on externalization, clean architecture, and writing minimal, maintainable code.",
      technologies: ["Angular", "Spring Boot"],
      icon: "bx bx-briefcase"
    },
    {
      company: "Max Life Insurance",
      position: "Developer Intern",
      type: "Internship",
      duration: "July 2023 – Aug 2023",
      description: "As a Developer at Max Life Insurance, I constructed diverse responsive webpages on the company's website, employing Next.js for front-end development and harnessing Strapi for streamlined content management.",
      technologies: ["Next.js", "Strapi"],
      icon: "bx bx-code-alt"
    }
  ];

  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience__container bd-grid">
        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item animate-on-scroll">
              <div className="experience__icon">
                <i className={exp.icon}></i>
              </div>
              <div className="experience__content">
                <div className="experience__header">
                  <h3 className="experience__position">{exp.position}</h3>
                  <span className="experience__type">{exp.type}</span>
                </div>
                <h4 className="experience__company">{exp.company}</h4>
                <p className="experience__description">{exp.description}</p>
                {exp.technologies && (
                  <div className="experience__technologies">
                    <span className="experience__tech-label">Technologies:</span>
                    <div className="experience__tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="experience__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <span className="experience__duration">
                  <i className="bx bx-calendar"></i> {exp.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

