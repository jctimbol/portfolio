"use client";

import Image from "next/image";
import name from "../public/name.png";
import flowers from "../public/flowers.jpeg";
import { useState, useEffect } from "react";

export default function LandingSection() {
  const [showFlower, setShowFlower] = useState(false);
  const [showName, setShowName] = useState(false);
  // After the name slides in (~1.8s), override CSS transitions so scroll is crisp.
  const [animationsDone, setAnimationsDone] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const flowerTimer = setTimeout(() => setShowFlower(true), 100);
    const nameTimer = setTimeout(() => setShowName(true), 1000);
    const doneTimer = setTimeout(() => {
      setAnimationsDone(true);
      document.body.style.overflow = "";
    }, 2000);
    return () => {
      clearTimeout(flowerTimer);
      clearTimeout(nameTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 1.8), 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const blur = `blur(${Math.pow(scrollProgress, 0.4) * 32}px)`;

  const smokeFilter = `url(#flowers-smoke) ${blur}`.trim();

  const flowersStyle = animationsDone
    ? {
        opacity: showFlower ? 1 - scrollProgress : 0,
        filter: smokeFilter,
        transition: "bottom 180ms linear, width 180ms linear",
      }
    : {
        opacity: showFlower ? 1 - scrollProgress : 0,
        filter: smokeFilter,
      };

  const nameStyle = animationsDone
    ? {
        opacity: showName ? 0.85 - scrollProgress * 0.85 : 0,
        filter: blur,
        transition: "top 180ms linear, width 180ms linear",
      }
    : {
        opacity: showName ? 0.85 * (1 - scrollProgress) : 0,
        filter: blur,
      };

  return (
    <section className="landing-section">
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter
            id="flowers-smoke"
            x="-15%"
            y="-15%"
            width="130%"
            height="130%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.008"
              numOctaves="1"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.012 0.008;0.018 0.013;0.010 0.016;0.015 0.009;0.012 0.008"
                dur="90s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <Image
        src={flowers}
        alt="Flowers"
        className={`landing-flowers ${showFlower ? "fade-in" : "fade-in-hidden"}`}
        style={flowersStyle}
        priority
      />
      <Image
        src={name}
        alt="Name graphic"
        className={`landing-name ${showName ? "slide-in" : "slide-in-hidden"}`}
        style={nameStyle}
        priority
      />
    </section>
  );
}
