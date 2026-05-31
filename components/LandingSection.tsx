import Image from "next/image";
import name from "../public/name.png";
import flowers from "../public/flowers.jpeg";

export default function LandingSection() {
  return (
    <section className="landing-section">
      <div className="landing-flower-bg" aria-hidden="true">
        <Image
          src={flowers}
          alt=""
          className="landing-flower-img landing-flower-main"
          priority
        />
        <Image
          src={flowers}
          alt=""
          className="landing-flower-img landing-flower-halftone"
        />
      </div>
      <div className="landing-content">
        <Image
          src={name}
          alt="Jay Timbol"
          className="landing-name"
          priority
        />
        <p className="landing-intro">
          hi! my name is jay and i&apos;m a swe major @ sjsu!
          <br />
          read more <a href="#about">about me</a> and my...
        </p>
        <nav className="landing-links" aria-label="Landing links">
          <a href="#about">experience</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact info</a>
        </nav>
      </div>
    </section>
  );
}
