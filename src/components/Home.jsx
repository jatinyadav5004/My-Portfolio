import React from "react";
import "../assets/css/styles.css";
import perfilImg from "../assets/img/perfil.png";

const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      {/* Intro Section */}
      <div className="home__data">
        <h1 className="home__title">
          Hi,
          <br />
          I&apos;m <span className="home__title-color">Jatin Yadav</span>
          <br />
          <span className="home__subtitle">Software Developer</span>
        </h1>
        <a href="#contact" className="button" aria-label="Contact Jatin">
          Contact
        </a>
      </div>

      {/* Social Links */}
      <div className="home__social">
        <a
          href="https://www.linkedin.com/in/jatin-yadav-57629a203
" 
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
      </div>

      {/* Profile Image with SVG Mask */}
      <div className="home__img">
        <svg
          className="home__blob"
          viewBox="0 0 479 467"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Profile illustration"
        >
         
          <g mask="url(#mask0)">
            <path d="M9.19 145.96C34.03 76.58 114.87 54.73 184.11 29.48C245.80 6.99 311.86 -14.95 370.73 14.14C431.21 44.03 467.95 107.51 477.19 174.31C485.90 237.23 454.93 294.38 416.51 344.95C373.74 401.25 326.07 462.80 255.44 466.19C179.42 469.83 111.55 422.14 65.16 361.81C17.48 299.81 -17.16 219.58 9.19 145.96Z" />
            <image
              className="home__blob-img"
              x="50"
              y="60"
              href={perfilImg}
              alt="Jatin Yadav"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Home;
