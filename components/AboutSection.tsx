"use client";

import { useState, useEffect } from "react";

type Phase = "hidden" | "fading" | "visible";

export default function AboutSection() {
  const [phase, setPhase] = useState<Phase>("hidden");
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
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

  const content = (
    <h1
      style={{
        fontFamily: "Miama",
        fontWeight: "normal",
        fontSize: "clamp(4rem, 12vw, 10rem)",
        textAlign: "center",
        margin: 0,
        paddingTop: "4rem",
        WebkitTextStroke: "2px currentColor",
      }}
    >
      about me
    </h1>
  );

  if (phase === "visible") {
    return <section className="about-section">{content}</section>;
  }

  return (
    <>
      <div style={{ height: "200vh" }} />
      {phase === "fading" && (
        <section
          className="about-section"
          style={{ position: "fixed", top: 0, opacity, pointerEvents: "none" }}
        >
          {content}
        </section>
      )}
    </>
  );
}
