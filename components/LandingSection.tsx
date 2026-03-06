"use client";

import Image from "next/image";
import name from "../public/name.png";
import flowers from "../public/flowers.jpeg";
import { useState, useEffect } from "react";

export default function LandingSection() {
  const [showFlower, setShowFlower] = useState(false);
  const [showName, setShowName] = useState(false);
  const [animationsDone, setAnimationsDone] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const flowerTimer = setTimeout(() => setShowFlower(true), 100);
    const nameTimer = setTimeout(() => setShowName(true), 1000);
    // flower fade-in takes 4s starting at 100ms
    const doneTimer = setTimeout(() => setAnimationsDone(true), 4200);
    return () => {
      clearTimeout(flowerTimer);
      clearTimeout(nameTimer);
      clearTimeout(doneTimer);
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

  const flowersStyle = animationsDone ? {
    opacity: 1 - scrollProgress,
    filter: `blur(${Math.pow(scrollProgress, 0.4) * 32}px)`,
    transition: "bottom 180ms linear, width 180ms linear",
  } : undefined;

  const nameStyle = animationsDone ? {
    opacity: 0.85 - scrollProgress * 0.85,
    filter: `blur(${Math.pow(scrollProgress, 0.4) * 32}px)`,
    transition: "top 180ms linear, width 180ms linear",
  } : undefined;

  return (
    <section className="landing-section">
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
