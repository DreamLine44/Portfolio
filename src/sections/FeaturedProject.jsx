import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiHome } from "react-icons/fi";
import { featuredProject } from "../data/projects";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";

export default function FeaturedProject() {
  const p = featuredProject;
  const hasLiveLink = Boolean(p.links.live);
  const hasFrontendLink = Boolean(p.links.githubFrontend);
  const hasBackendLink = Boolean(p.links.githubBackend);

  return (
    <div className="mb-16">
      <SectionHeading eyebrow="// featured" title="Featured Project" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mt-8 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-navy)] shadow-xl"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 15% 20%, rgba(37,99,235,0.5), transparent 60%), radial-gradient(ellipse 50% 50% at 85% 80%, rgba(124,58,237,0.4), transparent 60%)",
          }}
        />
        <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-2">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-purple)] text-white">
                <FiHome size={19} />
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Featured
              </span>
            </div>

            <h3 className="mt-5 font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
              {p.name}
            </h3>
            <p className="mt-1 font-mono text-sm text-[var(--color-secondary-blue)]">
              {p.tagline}
            </p>
            <p className="mt-4 leading-relaxed text-slate-300">
              {p.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {hasLiveLink ? (
                <Button
                  as="a"
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  icon={<FiExternalLink size={15} />}
                >
                  Live Demo
                </Button>
              ) : null}
              {hasFrontendLink ? (
                <Button
                  as="a"
                  href={p.links.githubFrontend}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="!bg-white/5 !text-white !border-white/15 hover:!border-white/40"
                  icon={<FiGithub size={15} />}
                >
                  GitHub (Frontend)
                </Button>
              ) : null}
              {hasBackendLink ? (
                <Button
                  as="a"
                  href={p.links.githubBackend}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  className="!text-white hover:!bg-white/10"
                  icon={<FiGithub size={15} />}
                >
                  GitHub (Backend)
                </Button>
              ) : null}
            </div>
          </div>

          <div className="relative flex items-center justify-center p-6 lg:p-10">
            <img
              src={p.image}
              alt={`${p.name} application screenshot`}
              loading="lazy"
              className="w-full rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
