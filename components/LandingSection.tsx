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

  // Always apply scroll-driven opacity/filter so the images respond immediately.
  // Before animationsDone, don't override the CSS transition so the name slide-in
  // still plays. After animationsDone, override transition to exclude opacity/filter
  // so scroll feels crisp (no CSS easing lag).
  const flowersStyle = animationsDone
    ? {
        opacity: showFlower ? 1 - scrollProgress : 0,
        filter: blur,
        transition: "bottom 180ms linear, width 180ms linear",
      }
    : {
        opacity: showFlower ? 1 - scrollProgress : 0,
        filter: blur,
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
