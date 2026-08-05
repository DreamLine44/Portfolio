import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { FiShare2, FiCheckSquare } from "react-icons/fi";
import Card from "./ui/Card";

const ICONS = { whatsapp: SiWhatsapp, api: FiShare2, tasks: FiCheckSquare };
const ICON_BG = {
  whatsapp: "from-emerald-500 to-teal-500",
  api: "from-[var(--color-accent-purple)] to-[var(--color-soft-violet)]",
  tasks: "from-orange-500 to-amber-500",
};

export default function ProjectCard({ project, index = 0 }) {
  const Icon = ICONS[project.icon];
  const liveHref = project.links?.live;
  const githubHref = project.links?.github;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
    >
      <Card className="flex h-full flex-col overflow-hidden">
        <div
          className={`flex h-32 items-center justify-center bg-gradient-to-br ${ICON_BG[project.icon]}`}
        >
          <Icon size={40} className="text-white/90" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-[var(--font-display)] text-base font-bold text-[var(--color-navy)] dark:text-white">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-[var(--color-bg-secondary)] px-2 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-4 border-t border-[var(--color-border)] pt-4 text-sm font-semibold">
            {liveHref ? (
              <a
                href={liveHref}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 text-[var(--color-primary)] hover:underline"
              >
                <FiExternalLink size={14} /> Live Demo
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[var(--color-text-secondary)] opacity-70">
                <FiExternalLink size={14} /> Live Demo unavailable
              </span>
            )}

            {githubHref && (
              <a
                href={githubHref}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} GitHub repository`}
                className="focus-ring ml-auto inline-flex items-center gap-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-navy)] dark:hover:text-white"
              >
                <FiGithub size={16} />
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
