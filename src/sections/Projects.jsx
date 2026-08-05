import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import FeaturedProject from "./FeaturedProject";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--color-bg-secondary)] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <FeaturedProject />

        <SectionHeading
          eyebrow="// more work"
          title="Other Projects"
          description="Smaller builds focused on solving one problem cleanly."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
