import { type PropsWithChildren, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import setSplitText from "./utils/splitText";
import { smoother } from "./Navbar";

/**
 * Runs after a lazy section commits so ScrollTrigger / split text see new DOM.
 */
export default function SectionWithRefresh({ children }: PropsWithChildren) {
  useLayoutEffect(() => {
    setSplitText();
    ScrollTrigger.refresh();
    smoother?.refresh?.();
  }, []);
  return <>{children}</>;
}
