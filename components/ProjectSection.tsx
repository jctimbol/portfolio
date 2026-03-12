"use client";

import { useState, useEffect } from "react";

type Phase = "hidden" | "fading" | "visible";

const content = (
  <h1
    style={{
      fontFamily: "Miama",
      fontWeight: "normal",
      fontSize: "clamp(3rem, 10vw, 8rem)",
      textAlign: "center",
      margin: 0,
      paddingTop: "4rem",
      WebkitTextStroke: "2px currentColor",
    }}
  >
    featured work
  </h1>
);

export default function ProjectSection() {
  const [phase, setPhase] = useState<Phase>("hidden");
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      // fadeEnd must equal landing-scroll-space height (280vh) so that
      // when the section enters normal flow, scrollY === its document top,
      // preventing a layout jump.
      const fadeStart = vh * 2.0;
      const fadeEnd = vh * 2.8;
      const { scrollY } = window;

      if (scrollY >= fadeEnd) {
        setPhase("visible");
        setOpacity(1);
      } else if (scrollY >= fadeStart) {
        setPhase("fading");
        setOpacity((scrollY - fadeStart) / (fadeEnd - fadeStart));
      } else {
        setPhase("hidden");
        setOpacity(0);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (phase === "visible") {
    return <section className="project-section">{content}</section>;
  }

  // Invisible spacer keeps document height correct while section is fixed.
  // Without it, the page is only 280vh tall and fadeStart (2.0×vh) is unreachable.
  return (
    <>
      <div style={{ height: "100vh" }} />
      {phase === "fading" && (
        <section
          className="project-section"
          style={{ position: "fixed", top: 0, opacity, pointerEvents: "none" }}
        >
          {content}
        </section>
      )}
    </>
  );
}
