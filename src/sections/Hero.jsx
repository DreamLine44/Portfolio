import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import Button from "../components/ui/Button";
import { socials } from "../data/experience";

const FLOATING_ICONS = [
  { Icon: SiReact, className: "top-[8%] left-[6%]", delay: 0, color: "#61DAFB" },
  { Icon: SiNodedotjs, className: "top-[62%] left-[2%]", delay: 1.2, color: "#22C55E" },
  { Icon: SiMongodb, className: "top-[80%] left-[22%]", delay: 0.6, color: "#22C55E" },
  { Icon: SiExpress, className: "top-[4%] right-[8%]", delay: 0.9, color: "#94A3B8" },
  { Icon: SiJavascript, className: "top-[70%] right-[4%]", delay: 0.3, color: "#F59E0B" },
];

export default function Hero() {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setOffset({ x, y });
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--color-navy)] pt-28 pb-20"
    >
      {/* gradient mesh background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(124,58,237,0.3), transparent 60%), radial-gradient(ellipse 60% 60% at 50% 90%, rgba(6,182,212,0.25), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,black,transparent)]" />

      {/* floating tech icons */}
      {FLOATING_ICONS.map(({ Icon, className, delay, color }, i) => (
        <motion.div
          key={i}
          className={`pointer-events-none absolute hidden md:grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md ${className}`}
          animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay, ease: "easeInOut" }}
          style={{
            transform: `translate(${offset.x * 20}px, ${offset.y * 20}px)`,
          }}
        >
          <Icon size={26} color={color} />
        </motion.div>
      ))}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-emerald-300 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>

          <h1 className="mt-6 font-[var(--font-display)] text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] text-white">
            Hi, I&apos;m{" "}
            <span className="block mt-1 bg-gradient-to-r from-[var(--color-secondary-blue)] via-[var(--color-soft-violet)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
              Alhassan Trawally
            </span>
          </h1>

          <p className="mt-4 font-mono text-lg text-[var(--color-secondary-blue)]">
            Full-Stack JavaScript Developer — React, Node & APIs
          </p>

          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
            I build modern, scalable web applications using React, Node.js,
            Express, and MongoDB/PostgreSQL. I focus on clean APIs, responsive
            interfaces, and production-ready solutions that solve real problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              as="a"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="primary"
              icon={<FiArrowRight />}
            >
              See My Work
            </Button>
            <Button
              as="a"
              href="/resume/Alhassan_Tarawally_CV.pdf"
              download
              variant="secondary"
              className="!bg-white/5 !text-white !border-white/15 hover:!border-white/40"
            >
              Download CV
            </Button>
            <Button
              as="a"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="ghost"
              className="!text-white hover:!bg-white/10"
            >
              Hire Me
            </Button>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-slate-500">
              Connect
            </span>
            <div className="h-px w-10 bg-white/10" />
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors"
            >
              <FiLinkedin size={17} />
            </a>
            <a
              href={`mailto:${socials.email}`}
              aria-label="Email"
              className="focus-ring grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors"
            >
              <FiMail size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
          style={{ transform: `translate(${offset.x * -14}px, ${offset.y * -14}px)` }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-accent-purple)] to-[var(--color-accent-cyan)] opacity-30 blur-2xl animate-glow" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
            <img
              src="/pic1.jpeg"
              alt="Alhassan Trawally profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 text-xs font-mono text-emerald-300 shadow-lg">
            {"const dev = 'ready';"}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
