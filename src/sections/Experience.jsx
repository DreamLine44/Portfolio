import { motion } from "framer-motion";
import { FiTool } from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-[var(--color-bg)] py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading align="center" eyebrow="// experience" title="Currently Building" />

        <div className="mt-12 space-y-6">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="flex gap-5 p-6 sm:p-8">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-purple)] text-white">
                  <FiTool size={20} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--color-navy)] dark:text-white">
                      {item.title}
                    </h3>
                    <span className="rounded-full bg-[var(--color-bg-secondary)] px-3 py-0.5 text-xs font-medium text-[var(--color-text-secondary)]">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 leading-relaxed text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
