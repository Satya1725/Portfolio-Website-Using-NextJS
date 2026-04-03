import { projectsConfig } from "@/config/config";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work and personal projects"
        />

        <div className="projects-grid">
          {projectsConfig.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
