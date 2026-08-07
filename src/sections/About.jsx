import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTypescript, SiTailwindcss, SiGithub } from "react-icons/si";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";

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
          description="I build modern, scalable web applications and AI-powered automations that solve real business problems."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-[var(--color-text-secondary)]"
          >
            <p>
              Hi — I&apos;m Alhassan Trawally, a Full-Stack JavaScript Developer and AI
              Automation Engineer. I create production-ready applications and
              intelligent automation solutions that help businesses work smarter.
            </p>

            <p>
              My expertise covers the full JavaScript ecosystem: frontend
              interfaces with React and Tailwind CSS, backend services with Node.js
              and Express, and databases such as MongoDB and PostgreSQL. I design
              secure APIs, implement authentication, and deploy reliable systems
              to the cloud.
            </p>

            <p>
              I specialize in AI-driven business automations — for example,
              intelligent WhatsApp platforms that automate customer support,
              ordering, bookings, lead management, and sales using natural
              language understanding and workflow automation.
            </p>

            <p>
              I focus on writing clean, maintainable, and scalable code, and I
              continually refine my skills to deliver solutions that provide
              measurable value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 sm:p-8">
              <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--color-navy)] dark:text-white">
                Core Skills & Technologies
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
                <strong>Specialties:</strong> AI automations, API design,
                authentication, cloud deployment, and production performance.
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
