import LandingSection from "../components/LandingSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main>
      <div className="landing-scroll-space">
        <LandingSection />
      </div>
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
