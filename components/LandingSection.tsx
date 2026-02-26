"use client";

import Image from "next/image";
import name from "../public/name.png";
import flowers from "../public/flowers.jpeg";
import { useState, useEffect } from "react";

export default function LandingSection() {
  const [showFlower, setShowFlower] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const flowerTimer = setTimeout(() => setShowFlower(true), 100);
    const nameTimer = setTimeout(() => setShowName(true), 1000);
    return () => {
      clearTimeout(flowerTimer);
      clearTimeout(nameTimer);
    };
  }, []);

  return (
    <section className="landing-section">
      <Image
        src={flowers}
        alt="Flowers"
        className={`landing-flowers ${showFlower ? "fade-in" : "fade-in-hidden"}`}
        priority
      />
      <Image
        src={name}
        alt="Name graphic"
        className={`landing-name ${showName ? "slide-in" : "slide-in-hidden"}`}
        priority
      />
    </section>
  );
}
