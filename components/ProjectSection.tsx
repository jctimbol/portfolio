"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import butterfly from "../public/butterfly.png";
import flourish from "../public/flourish.png";
import leaves from "../public/leaves.png";
import fireproof1 from "../public/fireproof1.png";
import fireproof2 from "../public/fireproof2.png";
import envest from "../public/envest.png";
import perch from "../public/perch.png";
import seene from "../public/seene.png";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          width: "100%",
        }}
      >
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "6rem",
        }}
      >
        {[
          {
            src: fireproof1,
            href: "https://devpost.com/software/fire-proof",
            label: "React Native, FastAPI, vLLM",
          },
          {
            src: fireproof2,
            href: "https://github.com/Tian-Tan/fire-proof",
            label: "PostgreSQL, ElevenLabs, Docker",
          },
        ].map(({ src, href, label }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: "#000",
              width: "clamp(150px, 23vw, 340px)",
              aspectRatio: "9 / 19.5",
              borderRadius: "clamp(16px, 2.5vw, 36px)",
              overflow: "hidden",
              position: "relative",
              transition: "transform 0.2s ease",
              textDecoration: "none",
              flexShrink: 0,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.04)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                position: "absolute",
                inset: "3.3% 5% 10% 5%",
                overflow: "hidden",
                borderRadius: "clamp(10px, 1.8vw, 26px)",
              }}
            >
              <Image
                src={src}
                alt={`Fireproof screenshot ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {label && (
              <span
                style={{
                  position: "absolute",
                  bottom: "3.7%",
                  left: "5%",
                  right: "5%",
                  fontFamily: "'Abyssinica SIL', serif",
                  color: "#FAF8EB",
                  fontSize: "clamp(0.5rem, 1.4vw, 1.3rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.3,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            )}
          </a>
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <Image
          src={butterfly}
          alt="Butterfly"
          style={{ width: "clamp(160px, 28vw, 420px)", height: "auto" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "6rem",
        }}
      >
        <div
          style={{
            background: "#000",
            width: "clamp(360px, 80vw, 1100px)",
            aspectRatio: "3.5 / 1",
            padding: "3% 4%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              width: "100%",
            }}
          >
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
              ENVEST
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
              SFHACKS 2026
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
            ESG contract + investor portfolio analysis
          </span>
        </div>
      </div>
      <div
        style={{ marginTop: "6rem", display: "flex", justifyContent: "center" }}
      >
        <a
          href="https://github.com/vrajhm/envest"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#000",
            width: "clamp(360px, 80vw, 1100px)",
            padding: "2% 1.5% 2.5% 1.5%",
            boxSizing: "border-box",
            transition: "transform 0.2s ease",
            textDecoration: "none",
            position: "relative",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.02)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Image
            src={envest}
            alt="Envest screenshot"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontFamily: "'Abyssinica SIL', serif",
              color: "#FAF8EB",
              fontSize: "clamp(0.75rem, 1.4vw, 1.3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              marginTop: "3.5%",
            }}
          >
            Next.js, FastAPI, LlamaIndex, MongoDB, Gemini 3 Flash
          </span>
        </a>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <Image
          src={flourish}
          alt="Flourish"
          style={{ width: "clamp(200px, 40vw, 600px)", height: "auto" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "6rem",
        }}
      >
        <div
          style={{
            background: "#000",
            width: "clamp(360px, 80vw, 1100px)",
            aspectRatio: "3.5 / 1",
            padding: "3% 4%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              width: "100%",
            }}
          >
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
              PERCH
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
              CRUZHACKS 2026
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
            Adaptive math tutor
          </span>
        </div>
      </div>
      <div
        style={{ marginTop: "6rem", display: "flex", justifyContent: "center" }}
      >
        <a
          href="https://devpost.com/software/perch-eq5sim"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#000",
            width: "clamp(360px, 80vw, 1100px)",
            padding: "2% 1.5% 2.5% 1.5%",
            boxSizing: "border-box",
            transition: "transform 0.2s ease",
            textDecoration: "none",
            position: "relative",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.02)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Image
            src={perch}
            alt="Perch screenshot"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontFamily: "'Abyssinica SIL', serif",
              color: "#FAF8EB",
              fontSize: "clamp(0.75rem, 1.4vw, 1.3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              marginTop: "3.5%",
            }}
          >
            Next.js, FastAPI, MongoDB, Gemini 2.5 Flash, Pix2Text, SymPy
          </span>
        </a>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <Image
          src={leaves}
          alt="Leaves"
          style={{ width: "clamp(200px, 40vw, 600px)", height: "auto" }}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}
      >
        <div
          style={{
            background: "#000",
            width: "clamp(360px, 80vw, 1100px)",
            aspectRatio: "3.5 / 1",
            padding: "3% 4%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              width: "100%",
            }}
          >
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
              SEENE
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
            Discover Bay Area alternative music
          </span>
        </div>
      </div>
      <div
        style={{
          marginTop: "6rem",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "6rem",
        }}
      >
        <a
          href="https://seene.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#000",
            width: "clamp(360px, 80vw, 1100px)",
            padding: "2% 1.5% 2.5% 1.5%",
            boxSizing: "border-box",
            transition: "transform 0.2s ease",
            textDecoration: "none",
            position: "relative",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.02)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Image
            src={seene}
            alt="Seene screenshot"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontFamily: "'Abyssinica SIL', serif",
              color: "#FAF8EB",
              fontSize: "clamp(0.75rem, 1.4vw, 1.3rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              marginTop: "3.5%",
            }}
          >
            HTML, CSS, JavaScript, Supabase
          </span>
        </a>
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
