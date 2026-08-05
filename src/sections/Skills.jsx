import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { skillCategories } from "../data/skills";

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId);

  return (
    <section id="skills" className="bg-[var(--color-bg-secondary)] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="// skills"
            title="Skills & Expertise"
            description="Technologies and tools I work with day to day."
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`focus-ring rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                activeId === cat.id
                  ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-purple)] text-white shadow-md"
                  : "bg-[var(--color-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:text-[var(--color-navy)] dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {active.skills.map((skill, i) => (
              <Card key={skill.name} className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[var(--color-navy)] dark:text-white">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-[var(--color-text-secondary)]">
                    {skill.level}%
                  </span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-secondary)] dark:bg-black/30">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-purple)]"
                  />
                </div>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
