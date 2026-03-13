"use client";

import { useState, useEffect } from "react";

type Phase = "hidden" | "fading" | "visible";

export default function ProjectSection() {
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


  const card = (
    <div
style={{
        background: "#000",
        width: "clamp(360px, 80vw, 1100px)",
        aspectRatio: "3.5 / 1",
        marginTop: "2.5rem",
        padding: "3% 4%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", width: "100%" }}>
        <span
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontWeight: 900,
            letterSpacing: "-0.07em",
            color: "#FAF8EB",
            fontSize: "clamp(2rem, 7vw, 6.2rem)",
            lineHeight: 1,
          }}
        >
          FIREPROOF
        </span>
        <span
          style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontWeight: 900,
            letterSpacing: "-0.07em",
            color: "#FAF8EB",
            fontSize: "clamp(1rem, 3.5vw, 3.1rem)",
            lineHeight: 1,
          }}
        >
          H4H 2026
        </span>
      </div>
      <span
        style={{
          fontFamily: "'Abyssinica SIL', serif",
          color: "#FAF8EB",
          fontSize: "clamp(0.9rem, 3.2vw, 2.8rem)",
          lineHeight: 1.3,
          letterSpacing: "-0.03em",
          marginTop: "4%",
        }}
      >
        Real-time wildfire evacuation assistance
      </span>
    </div>
  );

  const content = (
    <>
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
        featured work
      </h1>
      {card}
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "6rem" }}>
        {[0, 1].map((i) => (
          <div
            key={i}
            style={{
              background: "#000",
              width: "clamp(150px, 23vw, 340px)",
              aspectRatio: "9 / 19.5",
              borderRadius: "clamp(16px, 2.5vw, 36px)",
            }}
          />
        ))}
      </div>
    </>
  );

  if (phase === "visible") {
    return <section className="project-section">{content}</section>;
  }

  return (
    <>
      <div style={{ height: "200vh" }} />
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
