import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:jatinyadav5004@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email - jatinyadav5004@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+919079705004" data-cursor="disable">
                Phone - +91 9079705004
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/jatin-yadav-57629a203/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn - jatin-yadav-57629a203
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Bharati Vidyapeeth Deemed to be University, Department of
              Engineering and Technology, Navi Mumbai - 2020 to 2024
            </p>
            <p>B.Tech, Computer Science and Engineering (CGPA 9.89)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/jatinyadav5004"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/jatin-yadav-57629a203/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:jatinyadav5004@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Jatin Yadav</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
