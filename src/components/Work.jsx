import React from 'react';
import work1 from '../assets/img/work1.png';
import work2 from '../assets/img/work2.jpg';
import work3 from '../assets/img/work3.jpg';
import work4 from '../assets/img/work4.jpg';
import work5 from '../assets/img/work5.jpg';
import work6 from '../assets/img/work6.jpg';

const projects = [
  {
    img: work6,
    title: "Hospital Appointment System",
    status: "Ongoing",
    description: "Built an online appointment system with active participation as a team leader",
    technologies: ["ReactJS", "Java", "Firebase", "MySQL"],
    link: "https://github.com/jatinyadav5004",
    role: "Team Leader"
  },
  {
    img: work2,
    title: "Document System Based on Blockchain",
    status: "Ongoing",
    description: "Secure document management system using blockchain technology",
    technologies: ["Java", "ReactJS", "HTML", "CSS", "JavaScript", "MySQL", "Spring Boot", "Google Cloud"],
    link: "https://github.com/jatinyadav5004",
    role: "Developer"
  },
  {
    img: work4,
    title: "GDSC Website",
    status: "Completed",
    description: "Built the college GDSC website as a team member and designed the homepage",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://github.com/jatinyadav5004/GDSC-club-website",
    role: "Team Member"
  },
  {
    img: work3,
    title: "Chatbot PHP MySQL",
    status: "Completed",
    description: "Interactive chatbot application with PHP backend and MySQL database",
    technologies: ["PHP", "MySQL", "JavaScript"],
    link: "https://github.com/jatinyadav5004/Chatbot_PHP-MySQL",
    role: "Developer"
  },
  {
    img: work5,
    title: "AR Image Tracking Dragon Game",
    status: "Completed",
    description: "Augmented Reality game using image tracking technology",
    technologies: ["Unity", "AR", "C#"],
    link: "https://github.com/jatinyadav5004/AR_ImageTrackingDragonGame",
    role: "Developer"
  },
  {
    img: work1,
    title: "Gallery Website",
    status: "Completed",
    description: "Modern gallery website with responsive design",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/jatinyadav5004/Gallery-Website",
    role: "Developer"
  },
];

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Projects</h2>
      <p className="work__intro">
        Showcasing my technical expertise through real-world projects
      </p>
      <div className="work__container bd-grid">
        {projects.map((project, index) => (
          <div key={index} className="work__card animate-on-scroll">
            <div className="work__image-wrapper">
              <img src={project.img} alt={project.title} className="work__image" />
              <div className="work__overlay">
                <a
                  href={project.link}
                  className="work__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bx-link-external"></i> View Project
                </a>
              </div>
              <span className={`work__status work__status--${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>
            <div className="work__content">
              <h3 className="work__title">{project.title}</h3>
              <p className="work__description">{project.description}</p>
              <div className="work__role">
                <i className="bx bx-user"></i>
                <span>{project.role}</span>
              </div>
              <div className="work__technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="work__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
