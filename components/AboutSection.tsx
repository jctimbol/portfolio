"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import birds from "../public/birds.png";
import phone from "../public/phone.png";

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
          Math.max(0, Math.min(1, (scrollY - fadeEnd) / (vh * HORZ_SCROLL_VH))),
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
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
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
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <Image
          src={birds}
          alt="Birds"
          style={{
            width: "clamp(430px, 55vw, 1030px)",
            height: "auto",
            marginLeft: "-8vw",
            marginTop: "clamp(-4rem, calc(-8vw + 6rem), 3rem)",
            opacity: 0.95,
          }}
        />
      </div>
      <p className="about-intro-text">
        hi! i&apos;m jay and i&apos;m a 2nd year
        <br />
        software engineering major @ sjsu.
      </p>
    </div>
  );

  if (phase === "visible") {
    return (
      <div style={{ height: `${(1 + HORZ_SCROLL_VH) * 100}vh` }}>
        <section
          className="about-section"
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            minHeight: "unset",
          }}
        >
          <div
            style={{
              transform: `translateX(${-horzProgress * 100}vw)`,
              width: "200vw",
              height: "100%",
              display: "flex",
            }}
          >
            <div style={{ width: "100vw", height: "100%", flexShrink: 0 }}>
              {content}
            </div>
            <div
              style={{
                width: "100vw",
                height: "100%",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingLeft: "clamp(110px, 12vw, 200px)",
              }}
            >
              <p style={{
                fontFamily: "'Charis SIL', serif",
                fontWeight: "bold",
                fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                letterSpacing: "-0.05em",
                lineHeight: 1.5,
                margin: "0 0 1.5rem -18vw",
                transform: "translateY(-6vh)",
                maxWidth: "clamp(320px, 40vw, 720px)",
              }}>
                i build full-stack systems, incorporating tech like ai/ml, networks, and mobile devices.
              </p>
              <Image
                src={phone}
                alt="Phone"
                style={{
                  width: "clamp(280px, 42vw, 600px)",
                  height: "auto",
                  maxHeight: "50vh",
                  transform: "scaleX(-1)",
                  opacity: 0.95,
                }}
              />
            </div>
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
