import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTypescript, SiTailwindcss, SiGithub } from "react-icons/si";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";

const POINTS = [
  "I'm passionate about Full-Stack JavaScript development, from database schema to pixel-level UI.",
  "I enjoy backend development with Node.js and Express — building APIs that are predictable and easy to extend.",
  "I build modern, responsive user interfaces with React and Tailwind CSS.",
  "I use AI tools like ChatGPT, GitHub Copilot, and Claude AI to move faster — while making sure I understand, test, and maintain every line I ship.",
  "I enjoy building real-world applications that solve practical problems, not just tutorial clones.",
  "I'm actively seeking my first professional software engineering opportunity.",
];

const STACK_ICONS = [
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#3C873A" },
  { Icon: SiExpress, label: "Express", color: "#64748B" },
  { Icon: SiMongodb, label: "MongoDB", color: "#22C55E" },
  { Icon: SiJavascript, label: "JavaScript", color: "#F59E0B" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3B82F6" },
  { Icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { Icon: SiGithub, label: "GitHub", color: "#0F172A" },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--color-bg)] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="// about"
          title="About Me"
          description="The short version: I write backend logic and interfaces that people can actually rely on."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {POINTS.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-[var(--color-success)]" size={18} />
                <span className="text-[var(--color-text-secondary)] leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 sm:p-8">
              <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--color-navy)] dark:text-white">
                Core Stack
              </h3>
              <div className="mt-5 grid grid-cols-4 gap-4">
                {STACK_ICONS.map(({ Icon, label, color }) => (
                  <div
                    key={label}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-[var(--color-border)] py-4 transition-all hover:-translate-y-1 hover:border-[var(--color-secondary-blue)]/50"
                  >
                    <Icon size={26} color={color} />
                    <span className="text-[11px] text-[var(--color-text-secondary)]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-[var(--color-bg-secondary)] p-4 font-mono text-xs text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-accent-purple)]">const</span>{" "}
                <span className="text-[var(--color-primary)]">developer</span> = {"{"}
                <br />
                &nbsp;&nbsp;focus:{" "}
                <span className="text-[var(--color-success)]">
                  &apos;full-stack JS&apos;
                </span>
                ,<br />
                &nbsp;&nbsp;status:{" "}
                <span className="text-[var(--color-success)]">
                  &apos;open to work&apos;
                </span>
                <br />
                {"}"};
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
