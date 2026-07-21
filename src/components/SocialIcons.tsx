import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <a
          href="mailto:jatinyadav5004@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          className="social-icon-link"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/jatin-yadav-57629a203/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="social-icon-link"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/jatinyadav5004"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="social-icon-link"
        >
          <FaGithub />
        </a>
      </div>
      <a
        className="resume-button"
        href="mailto:jatinyadav5004@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="EMAIL ME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
