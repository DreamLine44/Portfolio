import { motion } from "framer-motion";
import { FiGithub, FiUsers, FiGitCommit, FiUserPlus } from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { socials } from "../data/experience";

// Deterministic placeholder contribution intensities (0-4).
// Swap for real data from GET /api/github/contributions later.
const WEEKS = 24;
const DAYS = 7;
function seedIntensity(i) {
  const v = Math.sin(i * 12.9898) * 43758.5453;
  return Math.floor((v - Math.floor(v)) * 5);
}
const LEVEL_BG = [
  "bg-[var(--color-bg-secondary)]",
  "bg-emerald-200 dark:bg-emerald-900",
  "bg-emerald-300 dark:bg-emerald-700",
  "bg-emerald-500 dark:bg-emerald-500",
  "bg-emerald-600 dark:bg-emerald-400",
];

const GITHUB_STATS = [
  { label: "Repositories", value: "18+", icon: FiGithub },
  { label: "Commits", value: "850+", icon: FiGitCommit },
  { label: "Followers", value: "120+", icon: FiUsers },
  { label: "Following", value: "80+", icon: FiUserPlus },
];

const LANGUAGES = [
  { name: "JavaScript", pct: 65, color: "#F1C40F" },
  { name: "TypeScript", pct: 20, color: "#3B82F6" },
  { name: "CSS", pct: 10, color: "#7C3AED" },
  { name: "HTML", pct: 5, color: "#EF4444" },
];

export default function GithubShowcase() {
  return (
    <section id="github" className="bg-[var(--color-bg-secondary)] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="// github"
            title="GitHub Activity"
            description="A snapshot of recent open-source and personal project activity."
          />
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 self-start rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-sm font-semibold text-[var(--color-navy)] dark:text-white hover:border-[var(--color-primary)]"
          >
            <FiGithub size={16} /> View Profile
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--color-navy)] dark:text-white">
                  Contribution Graph
                </span>
                <span className="text-xs text-[var(--color-text-secondary)]">
                  Placeholder — connects to GitHub REST API
                </span>
              </div>
              <div className="mt-5 flex gap-1 overflow-x-auto pb-2">
                {Array.from({ length: WEEKS }).map((_, w) => (
                  <div key={w} className="flex flex-col gap-1">
                    {Array.from({ length: DAYS }).map((_, d) => {
                      const level = seedIntensity(w * DAYS + d);
                      return (
                        <div
                          key={d}
                          className={`h-3 w-3 rounded-sm ${LEVEL_BG[level]}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-[var(--color-text-secondary)]">
                Less
                {LEVEL_BG.map((bg, i) => (
                  <div key={i} className={`h-3 w-3 rounded-sm ${bg}`} />
                ))}
                More
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {GITHUB_STATS.map((s) => (
              <Card key={s.label} className="p-4">
                <s.icon size={16} className="text-[var(--color-primary)]" />
                <div className="mt-2 font-[var(--font-display)] text-lg font-bold text-[var(--color-navy)] dark:text-white">
                  {s.value}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">{s.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6"
        >
          <Card className="p-6 sm:p-8">
            <span className="text-sm font-semibold text-[var(--color-navy)] dark:text-white">
              Top Languages
            </span>
            <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full flex">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.pct}%`, backgroundColor: lang.color }}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  {lang.name} <span className="font-mono">{lang.pct}%</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
