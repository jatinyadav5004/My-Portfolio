import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother?.kill();
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const ac = new AbortController();
    const { signal } = ac;

    const onNavClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const el = e.currentTarget as HTMLAnchorElement;
        const section = el.getAttribute("data-href");
        smoother.scrollTo(section, true, "top top");
      }
    };

    document.querySelectorAll(".header ul a").forEach((elem) => {
      elem.addEventListener("click", onNavClick, { signal });
    });

    const onResize = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", onResize, { passive: true, signal });

    return () => {
      ac.abort();
      smoother?.kill();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          JY
        </a>
        <a
          href="https://www.linkedin.com/in/jatin-yadav-57629a203/"
          className="navbar-connect"
          data-cursor="disable"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/jatin-yadav-57629a203
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
