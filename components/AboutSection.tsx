import Image from "next/image";
import bird from "../public/bird.png";

export default function AboutSection() {
  return (
    <section id="about" className="about-section about-hero">
      <Image
        src={bird}
        alt=""
        aria-hidden="true"
        className="about-bird-bg"
      />
      <h1 className="about-title">about me</h1>
      <div className="about-copy">
        <p>
          hey! as i&apos;m sure you&apos;ve read, my name is jay and i&apos;m a
          junior swe major + math minor @ sjsu.
        </p>
        <p>
          i build full-stack systems, incorporating tech like ai/ml, networks,
          and mobile devices.
        </p>
        <p>
          i also like making things that look cool!
          <br />
          scroll to see my experience and projects :)
        </p>
      </div>
    </section>
  );
}
