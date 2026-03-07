import LandingSection from "../components/LandingSection";
import ProjectSection from "../components/ProjectSection";

export default function Home() {
  return (
    <main>
      <div className="landing-scroll-space">
        <LandingSection />
      </div>
      <ProjectSection />
    </main>
  );
}
