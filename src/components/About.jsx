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
            I am a person who is positive about every aspect of life. I like to read, write, think, dream, and much more.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
