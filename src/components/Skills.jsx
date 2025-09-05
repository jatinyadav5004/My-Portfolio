import React, { useState } from "react";
import "../assets/css/styles.css";
import skillimg from "../assets/img/workimage.jpg";
import resumePDF from "../assets/doc/resume.pdf";

function Skills() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">
            Professionals require a combination of hard and soft skills...
          </p>

          {/* Skills */}
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-html5 skills__icon"></i>
              <span className="skills__name">HTML5</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <div><span className="skills__percentage">95%</span></div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-css3 skills__icon"></i>
              <span className="skills__name">CSS3</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div><span className="skills__percentage">85%</span></div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-javascript skills__icon"></i>
              <span className="skills__name">JavaScript</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div><span className="skills__percentage">65%</span></div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxs-paint skills__icon"></i>
              <span className="skills__name">Java</span>
            </div>
            <div className="skills__bar skills__ux"></div>
            <div><span className="skills__percentage">85%</span></div>
          </div>
        </div>

        <div>
          <img src={skillimg} alt="Skills" className="skills__img" />
        </div>

        {/* Resume Button */}
        <div className="about__buttons">
          <button 
            onClick={() => setShowResume(true)} 
            className="button button--flex"
          >
            View Resume<i className="uil uil-eye button__icon"></i>
          </button>
        </div>
      </div>

      {/* Resume Popup (Modal) */}
      {showResume && (
        <div className="resume-modal">
          <div className="resume-content">
            <button className="close-btn" onClick={() => setShowResume(false)}>
              ✖
            </button>
            <iframe 
              src={resumePDF} 
              title="Resume" 
              width="100%" 
              height="500px" 
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
