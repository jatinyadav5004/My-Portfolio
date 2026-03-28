import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (!ScrollTrigger.isTouch) return;
    const cleanups: (() => void)[] = [];
    containerRef.current.forEach((container) => {
      if (!container) return;
      container.classList.remove("what-noTouch");
      const onTap = () => handleCardTap(container);
      container.addEventListener("click", onTap);
      cleanups.push(() => container.removeEventListener("click", onTap));
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);
  return (
    <div className="whatIDO" data-cursor="disable">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FRONTEND ENGINEERING</h3>
              <h4>Responsive Interfaces and Product UX</h4>
              <p>
                I build responsive and performant user interfaces using React,
                Next.js, Angular, Tailwind, and modern JavaScript tooling.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Angular</div>
                <div className="what-tags">Tailwind CSS</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">TypeScript</div>
              </div>
            </div>
            <div className="what-arrow" aria-hidden="true" />
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BACKEND SYSTEMS</h3>
              <h4>APIs, Data, and Scalable Architecture</h4>
              <p>
                I design maintainable backend services with Spring Boot and Node.js,
                integrate payment systems, and work with SQL and NoSQL databases.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Spring Boot</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Firebase</div>
              </div>
            </div>
            <div className="what-arrow" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

/** Only targets `.what-content` nodes — ignores `what-border2` and other siblings. */
function handleCardTap(container: HTMLDivElement) {
  const parent = container.parentElement;
  if (!parent) return;

  container.classList.toggle("what-content-active");
  const isOpen = container.classList.contains("what-content-active");

  parent.querySelectorAll(".what-content").forEach((el) => {
    const card = el as HTMLDivElement;
    if (card === container) {
      card.classList.remove("what-sibling");
      return;
    }
    card.classList.remove("what-content-active");
    if (isOpen) {
      card.classList.add("what-sibling");
    } else {
      card.classList.remove("what-sibling");
    }
  });
}
