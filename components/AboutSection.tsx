"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import birds from "../public/birds.png";

type Phase = "hidden" | "fading" | "visible";

const HORZ_SCROLL_VH = 3;

export default function AboutSection() {
  const [phase, setPhase] = useState<Phase>("hidden");
  const [opacity, setOpacity] = useState(0);
  const [horzProgress, setHorzProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const fadeStart = vh * 2.0;
      const fadeEnd = vh * 2.8;
      const { scrollY } = window;

      if (scrollY >= fadeEnd) {
        setPhase("visible");
        setOpacity(1);
        setHorzProgress(
          Math.max(0, Math.min(1, (scrollY - fadeEnd) / (vh * HORZ_SCROLL_VH)))
        );
      } else if (scrollY >= fadeStart) {
        setPhase("fading");
        setOpacity((scrollY - fadeStart) / (fadeEnd - fadeStart));
        setHorzProgress(0);
      } else {
        setPhase("hidden");
        setOpacity(0);
        setHorzProgress(0);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        about me
      </h1>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
        <Image
          src={birds}
          alt="Birds"
          style={{
            width: "clamp(430px, 73vw, 1030px)",
            height: "auto",
            marginLeft: "-8vw",
            marginTop: "clamp(-4rem, calc(-8vw + 6rem), 3rem)",
          }}
        />
      </div>
    </>
  );

  if (phase === "visible") {
    return (
      <div style={{ height: `${(1 + HORZ_SCROLL_VH) * 100}vh` }}>
        <section
          className="about-section"
          style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", minHeight: "unset" }}
        >
          <div
            style={{
              transform: `translateX(${-horzProgress * 100}vw)`,
              width: "100vw",
              height: "100%",
            }}
          >
            {content}
          </div>
        </section>
      </div>
    );
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
