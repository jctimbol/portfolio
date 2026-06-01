import Image, { type StaticImageData } from "next/image";
import fireproof1 from "../public/fireproof1.png";
import fireproof2 from "../public/fireproof2.png";
import homerule from "../public/homerule.png";
import envest from "../public/envest.png";
import perch from "../public/perch.png";
import seene from "../public/seene.png";

type ProjectImage = {
  src: StaticImageData;
  alt: string;
  href?: string;
  kind?: "phone";
};

type Project = {
  name: string;
  event: string;
  description: string;
  href: string;
  images: ProjectImage[];
};

const projects: Project[] = [
  {
    name: "FIREPROOF",
    event: "SCU Hack for Humanity 2026",
    description:
      "Voice-powered real-time wildfire evacuation assistance using React Native, FastAPI, vLLM, pgvector, ElevenLabs, and Docker",
    href: "https://devpost.com/software/fire-proof",
    images: [
      {
        src: fireproof1,
        alt: "Fireproof evacuation assistant screenshot",
        href: "https://devpost.com/software/fire-proof",
        kind: "phone",
      },
      {
        src: fireproof2,
        alt: "Fireproof wildfire map screenshot",
        href: "https://github.com/Tian-Tan/fire-proof",
        kind: "phone",
      },
    ],
  },
  {
    name: "ENVEST",
    event: "SFHacks 2026",
    description:
      "ESG contract + investor portfolio analysis using Next.js, FastAPI, LlamaIndex, MongoDB, and Gemini 3 Flash",
    href: "https://github.com/vrajhm/envest",
    images: [
      {
        src: envest,
        alt: "Envest dashboard screenshot",
      },
    ],
  },
  {
    name: "PERCH",
    event: "UCSC CruzHacks 2026",
    description:
      "Adaptive math tutor using Next.js, FastAPI, MongoDB, Gemini 2.5 Flash, Pix2Text, and SymPy",
    href: "https://devpost.com/software/perch-eq5sim",
    images: [
      {
        src: perch,
        alt: "Perch adaptive math tutor screenshot",
      },
    ],
  },
  {
    name: "HOMERULE",
    event: "Hack Hayward 2026",
    description:
      "Voice-first East Bay tenant rights assistant using Next.js, FastAPI, Perplexity, ElevenLabs, and MapLibre",
    href: "https://devpost.com/software/homerule",
    images: [
      {
        src: homerule,
        alt: "Homerule tenant rights assistant preview",
      },
    ],
  },
  {
    name: "SEENE",
    event: "Personal project",
    description:
      "Discover Bay Area alternative music using HTML, CSS, JavaScript, and Supabase",
    href: "https://seene.vercel.app/",
    images: [
      {
        src: seene,
        alt: "Seene music discovery screenshot",
      },
    ],
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="project-section featured-work">
      <h1 className="featured-title">featured work</h1>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-entry" key={project.name}>
            <a
              className="project-heading-link"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="project-name">{project.name}</span>
              <span className="project-event">{project.event}</span>
            </a>
            <p className="project-description">{project.description}</p>
            <div
              className={`project-media ${
                project.images.some((image) => image.kind === "phone")
                  ? "project-media-phone"
                  : ""
              }`}
            >
              {project.images.map((image) => (
                <a
                  className="project-frame"
                  href={image.href ?? project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={image.alt}
                >
                  <span className="project-frame-image-wrap">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="project-image"
                    />
                  </span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
