import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement | null;
    if (!social) return;

    type ItemState = {
      elem: HTMLElement;
      link: HTMLElement;
      mouseX: number;
      mouseY: number;
      currentX: number;
      currentY: number;
    };

    const items: ItemState[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement | null;
      if (!link) return;
      const w = elem.clientWidth || 50;
      const h = elem.clientHeight || 50;
      const cx = w / 2;
      const cy = h / 2;
      items.push({
        elem,
        link,
        mouseX: cx,
        mouseY: cy,
        currentX: cx,
        currentY: cy,
      });
    });

    if (items.length === 0) return;

    const onMouseMove = (e: MouseEvent) => {
      items.forEach((state) => {
        const rect = state.elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x < 40 && x > 10 && y < 40 && y > 5) {
          state.mouseX = x;
          state.mouseY = y;
        } else {
          state.mouseX = rect.width / 2;
          state.mouseY = rect.height / 2;
        }
      });
    };

    let rafId = 0;
    let running = true;

    const tick = () => {
      if (!running) return;
      items.forEach((state) => {
        state.currentX += (state.mouseX - state.currentX) * 0.1;
        state.currentY += (state.mouseY - state.currentY) * 0.1;
        state.link.style.setProperty("--siLeft", `${state.currentX}px`);
        state.link.style.setProperty("--siTop", `${state.currentY}px`);
      });
      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="mailto:jatinyadav5004@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/jatin-yadav-57629a203/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href="https://github.com/jatinyadav5004"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </span>
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
