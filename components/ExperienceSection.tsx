import Image from "next/image";
import wings from "../public/wings.png";

type Experience = {
  company: string;
  role: string;
  description: string;
  dates: string;
};

const experiences: Experience[] = [
  {
    company: "CORNELL TECH",
    role: "Break Through Tech AI/ML Fellow",
    description:
      "Hands on machine learning curriculum & projects with industry partners",
    dates: "May 2026 - Present",
  },
  {
    company: "DEVELOP FOR GOOD",
    role: "Software Engineering Intern",
    description:
      "Web development for Youth Empowerment through Arts and Humanities (YEAH!)",
    dates: "May 2026 - Present",
  },
  {
    company: "SPORTS MEDIA INC.",
    role: "Software Engineering Intern",
    description: "AI voice agents & automated lead generation",
    dates: "October 2025 - April 2026",
  },
  {
    company: "SJSU CS SYSTEMS GROUP",
    role: "Undergraduate Research Assistant",
    description: "Bringing Internet services to disconnected areas",
    dates: "September 2025 - Present",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section">
      <Image
        src={wings}
        alt=""
        aria-hidden="true"
        className="experience-wings-bg"
      />
      <h1 className="experience-title">experience</h1>
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-entry" key={experience.company}>
            <div className="experience-heading">
              <h2 className="experience-company">{experience.company}</h2>
              <p className="experience-role">{experience.role}</p>
            </div>
            <p className="experience-description">{experience.description}</p>
            <p className="experience-dates">{experience.dates}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
