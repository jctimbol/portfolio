"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import birds from "../public/birds.png";
import phone from "../public/phone.png";
import wings from "../public/wings.png";

type Phase = "hidden" | "fading" | "visible";

const HORZ_SCROLL_VH = 5;
const FADE_OUT_VH = 1;

export default function AboutSection() {
  const [phase, setPhase] = useState<Phase>("hidden");
  const [opacity, setOpacity] = useState(0);
  const [horzProgress, setHorzProgress] = useState(0);
  const [panel2Width, setPanel2Width] = useState(0);
  const [sectionOpacity, setSectionOpacity] = useState(1);
  const panel2Ref = useRef<HTMLDivElement>(null);

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
        const fadeOutStart = fadeEnd + vh * HORZ_SCROLL_VH;
        const fadeOutEnd = fadeOutStart + vh * FADE_OUT_VH;
        setSectionOpacity(
          scrollY >= fadeOutEnd ? 0 :
          scrollY >= fadeOutStart
            ? 1 - (scrollY - fadeOutStart) / (vh * FADE_OUT_VH)
            : 1
        );
      } else if (scrollY >= fadeStart) {
        setPhase("fading");
        setOpacity((scrollY - fadeStart) / (fadeEnd - fadeStart));
        setHorzProgress(0);
        setSectionOpacity(1);
      } else {
        setPhase("hidden");
        setOpacity(0);
        setHorzProgress(0);
        setSectionOpacity(1);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!panel2Ref.current) return;
    const ro = new ResizeObserver(() => {
      if (panel2Ref.current) setPanel2Width(panel2Ref.current.scrollWidth);
    });
    ro.observe(panel2Ref.current);
    setPanel2Width(panel2Ref.current.scrollWidth);
    return () => ro.disconnect();
  }, [phase]);

  const catOpacity =
    phase === "hidden"
      ? 0
      : phase === "fading"
        ? opacity * 0.9
        : sectionOpacity * 0.9;

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

  const catOverlay = (
    <img
      src="/cat.png"
      alt="Cat"
      loading="eager"
      decoding="sync"
      fetchPriority="high"
      style={{
        position: "fixed",
        right: "clamp(1.5rem, 4vw, 4rem)",
        bottom: "clamp(-1.75rem, -2.4vw, -0.75rem)",
        width: "clamp(150px, 20vw, 300px)",
        height: "auto",
        opacity: catOpacity,
        pointerEvents: "none",
        zIndex: 2,
        willChange: "opacity",
      }}
    />
  );

  if (phase === "visible") {
    const translateX = panel2Width > 0 ? -horzProgress * panel2Width : 0;
    const containerWidth =
      panel2Width > 0 ? `calc(100vw + ${panel2Width}px)` : "200vw";

    return (
      <div style={{ height: `${(1 + HORZ_SCROLL_VH + FADE_OUT_VH) * 100}vh` }}>
        {catOverlay}
        <section
          className="about-section"
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            minHeight: "unset",
            opacity: sectionOpacity,
          }}
        >
          <div
            style={{
              transform: `translateX(${translateX}px)`,
              width: containerWidth,
              height: "100%",
              display: "flex",
            }}
          >
            <div style={{ width: "100vw", height: "100%", flexShrink: 0 }}>
              {content}
            </div>
            <div
              ref={panel2Ref}
              style={{
                width: "max-content",
                height: "100%",
                flexShrink: 0,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: "clamp(110px, 12vw, 200px)",
                paddingRight: "clamp(2rem, 4vw, 6rem)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Charis SIL', serif",
                    fontWeight: "bold",
                    fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                    letterSpacing: "-0.05em",
                    lineHeight: 1.5,
                    margin: "0 0 1.5rem -18vw",
                    transform: "translateY(-6vh)",
                    maxWidth: "clamp(320px, 40vw, 920px)",
                  }}
                >
                  i build full-stack systems, incorporating tech like ai/ml,
                  networks, and mobile devices.
                </p>
                <Image
                  src={phone}
                  alt="Phone"
                  style={{
                    width: "clamp(200px, 42vw, 600px)",
                    height: "auto",
                    maxHeight: "50vh",
                    transform: "scaleX(-1)",
                    opacity: 0.95,
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Abyssinica SIL', serif",
                    fontSize: "clamp(1.2rem, 1.8vw, 2rem)",
                    letterSpacing: "-0.05em",
                    lineHeight: 1.5,
                    margin: "7rem 0 0 clamp(200px, 38vw, 480px)",
                    whiteSpace: "nowrap",
                  }}
                >
                  (i also like making things that look cool)
                </p>
              </div>
              <div
                style={{
                  position: "relative",
                  flexShrink: 0,
                  marginLeft: "clamp(2rem, 4vw, 6rem)",
                }}
              >
                <Image
                  src={wings}
                  alt="Wings"
                  style={{
                    width: "clamp(420px, 80vw, 1200px)",
                    height: "auto",
                    maxHeight: "90vh",
                    display: "block",
                    opacity: 0.2,
                  }}
                />
                <p
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    margin: 0,
                    fontFamily: "'Charis SIL', serif",
                    fontWeight: "bold",
                    fontSize: "clamp(1rem, 1.4vw, 1.6rem)",
                    letterSpacing: "-0.05em",
                    lineHeight: 1.6,
                    textAlign: "center",
                    width: "max-content",
                    maxWidth: "100%",
                  }}
                >
                  currently, i do systems research + tutoring @ sjsu and am an
                  incoming ai/ml fellow @ cornell tech!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      {catOverlay}
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
