import React from 'react';
import work1 from '../assets/img/work1.png';
import work2 from '../assets/img/work2.jpg';
import work3 from '../assets/img/work3.jpg';
import work4 from '../assets/img/work4.jpg';
import work5 from '../assets/img/work5.jpg';
import work6 from '../assets/img/work6.jpg';

const projects = [
  {
    img: work1,
    link: "https://github.com/jatinyadav5004/Gallery-Website",
    title: "Gallery Website",
  },
  {
    img: work2,
    link: "https://github.com/jatinyadav5004/Carrom-game-in-Unity",
    title: "Carrom Game in Unity",
  },
  {
    img: work3,
    link: "https://github.com/jatinyadav5004/Chatbot_PHP-MySQL",
    title: "Chatbot PHP MySQL",
  },
  {
    img: work4,
    link: "https://github.com/jatinyadav5004/GDSC-club-website",
    title: "GDSC Club Website",
  },
  {
    img: work5,
   link: "https://github.com/jatinyadav5004/AR_ImageTrackingDragonGame",
    title: "AR Image Tracking Dragon Game",
  },
  {
    img: work6,
    link: "https://github.com/jatinyadav5004/My-Portfolio",
    title: "My Portfolio Website",
  },
];

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>
      <div className="work__container bd-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="work__img"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <span>View on GitHub</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
