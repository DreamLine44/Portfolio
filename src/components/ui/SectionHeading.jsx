import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] font-mono tracking-wide uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--color-navy)] dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
