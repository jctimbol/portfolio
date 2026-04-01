import LandingSection from "../components/LandingSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main>
      <div className="landing-scroll-space">
        <LandingSection />
      </div>
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
