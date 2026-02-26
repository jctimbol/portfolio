import Image from "next/image";
import name from "../public/name.png";
import flowers from "../public/flowers.jpeg";

export default function LandingSection() {
  return (
    <section className="landing-section">
      <Image src={flowers} alt="Flowers" className="landing-flowers" priority />
      <Image src={name} alt="Name graphic" className="landing-name" priority />
    </section>
  );
}
