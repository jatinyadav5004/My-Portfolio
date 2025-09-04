import React from 'react';
import '../assets/css/styles.css';
import aboutimg from '../assets//img/about.jpg'
function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={aboutimg} alt="About" />
        </div>
        <div>
          <h2 className="about__subtitle">I'am Jatin Yadav</h2>
          <p className="about__text">
I am a Full Stack Developer with a strong passion for building real-time applications that are both scalable and user-friendly. With experience across both frontend and backend development, I enjoy working on the complete lifecycle of software—designing, developing, and deploying solutions that solve real-world problems.


I love solving complex problems, whether it’s debugging tricky issues, optimizing code for performance, or designing scalable architectures. At the same time, I am a fast learner who enjoys picking up new technologies and adapting to evolving industry trends. I see challenges not as roadblocks but as opportunities to grow and innovate.          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
