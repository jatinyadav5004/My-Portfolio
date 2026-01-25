import React from "react";
import "../assets/css/styles.css";
import perfilImg from "../assets/img/prefil.webp";

const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__container">
        {/* Intro Section */}
        <div className="home__data">
          <div className="home__greeting">Hello, I'm</div>
          <h1 className="home__title">
            <span className="home__title-name">Jatin Yadav</span>
          </h1>
          <div className="home__subtitle-wrapper">
            <span className="home__subtitle">Full Stack Developer</span>
          </div>
          <p className="home__description">
            B.Tech in Computer Science with <strong>CGPA: 9.7</strong>
            <br />
            Passionate about building scalable and innovative applications
          </p>
          
          <div className="home__buttons">
            <a href="#contact" className="button button--primary" aria-label="Contact Jatin">
              <span>Get In Touch</span>
              <i className="bx bx-right-arrow-alt"></i>
            </a>
            <a href="#work" className="button button--secondary" aria-label="View Projects">
              <span>View Projects</span>
              <i className="bx bx-code-alt"></i>
            </a>
          </div>

          {/* Social Links */}
          <div className="home__social">
            <span className="home__social-label">Follow me:</span>
            <div className="home__social-icons">
              <a
                href="https://www.linkedin.com/in/jatin-yadav-57629a203"
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-icon"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/jatinyadav5004"
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-icon"
                aria-label="Instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://wa.me/919079705004"
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-icon"
                aria-label="WhatsApp"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a
                href="https://github.com/jatinyadav5004"
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-icon"
                aria-label="GitHub"
              >
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="home__img-wrapper">
          <div className="home__img-container">
            <div className="home__img-bg"></div>
            <img src={perfilImg} alt="Jatin Yadav" className="home__img" />
            <div className="home__img-decoration"></div>
          </div>
          <div className="home__floating-elements">
            <div className="floating-element floating-element--1">
              <i className="bx bxl-react"></i>
            </div>
            <div className="floating-element floating-element--2">
              <i className="bx bxl-java"></i>
            </div>
            <div className="floating-element floating-element--3">
              <i className="bx bxl-javascript"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
