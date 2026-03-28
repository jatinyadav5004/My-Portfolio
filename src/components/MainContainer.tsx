import {
  lazy,
  PropsWithChildren,
  Suspense,
  useEffect,
  useState,
} from "react";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SectionWithRefresh from "./SectionWithRefresh";
import setSplitText from "./utils/splitText";

const About = lazy(() => import("./About"));
const WhatIDo = lazy(() => import("./WhatIDo"));
const Career = lazy(() => import("./Career"));
const Work = lazy(() => import("./Work"));
const Contact = lazy(() => import("./Contact"));
const Cursor = lazy(() => import("./Cursor"));
const SocialIcons = lazy(() => import("./SocialIcons"));
const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Suspense fallback={null}>
        <Cursor />
      </Suspense>
      <Navbar />
      <Suspense fallback={null}>
        <SectionWithRefresh>
          <SocialIcons />
        </SectionWithRefresh>
      </Suspense>
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <Suspense fallback={null}>
              <SectionWithRefresh>
                <About />
              </SectionWithRefresh>
            </Suspense>
            <Suspense fallback={null}>
              <SectionWithRefresh>
                <WhatIDo />
              </SectionWithRefresh>
            </Suspense>
            <Suspense fallback={null}>
              <SectionWithRefresh>
                <Career />
              </SectionWithRefresh>
            </Suspense>
            <Suspense fallback={null}>
              <SectionWithRefresh>
                <Work />
              </SectionWithRefresh>
            </Suspense>
            {isDesktopView && (
              <Suspense fallback={null}>
                <SectionWithRefresh>
                  <TechStack />
                </SectionWithRefresh>
              </Suspense>
            )}
            <Suspense fallback={null}>
              <SectionWithRefresh>
                <Contact />
              </SectionWithRefresh>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
