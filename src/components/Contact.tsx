import { MdArrowOutward, MdCopyright, MdSchool, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-subtitle">LET'S CONNECT</span>
          <h2>
            Contact <span>Me</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Direct Reach Out Cards */}
          <div className="contact-cards">
            <a
              href="mailto:jatinyadav5004@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <MdEmail />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Email</span>
                <span className="contact-card-link">
                  jatinyadav5004@gmail.com
                </span>
              </div>
              <MdArrowOutward className="card-arrow" />
            </a>

            <a
              href="https://www.linkedin.com/in/jatin-yadav-57629a203/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <FaLinkedinIn />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-link">
                  jatin-yadav-57629a203
                </span>
              </div>
              <MdArrowOutward className="card-arrow" />
            </a>

            <a
              href="https://github.com/jatinyadav5004"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <FaGithub />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-link">
                  jatinyadav5004
                </span>
              </div>
              <MdArrowOutward className="card-arrow" />
            </a>
          </div>

          {/* Education & Credits Side */}
          <div className="contact-sidebar">
            <div className="education-card">
              <div className="education-header">
                <MdSchool className="edu-icon" />
                <span>Education</span>
              </div>
              <h4>B.Tech in Computer Science & Engineering</h4>
              <p>
                Bharati Vidyapeeth Deemed to be University, Department of Engineering and Technology, Navi Mumbai (2020 – 2024)
              </p>
              <div className="cgpa-badge">CGPA 9.89</div>
            </div>

            <div className="credits-card">
              <h3>
                Designed & Developed by <br />
                <span>Jatin Yadav</span>
              </h3>
              <p className="copyright">
                <MdCopyright /> {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
