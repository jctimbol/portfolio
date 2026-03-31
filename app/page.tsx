import LandingSection from "../components/LandingSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <div className="landing-scroll-space">
        <LandingSection />
      </div>
      <AboutSection />
    </main>
  );
}
