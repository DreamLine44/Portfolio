import { motion } from "framer-motion";
import { FiSend, FiDownload } from "react-icons/fi";
import Button from "../components/ui/Button";

export default function HiringCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy)] py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(37,99,235,0.35), transparent 65%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-2xl px-5 text-center sm:px-8"
      >
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-white">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="mt-4 text-slate-300 leading-relaxed">
          I&apos;m actively seeking a Junior Full-Stack JavaScript Developer
          opportunity where I can contribute, keep learning, and grow while
          building high-quality software.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            as="a"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="primary"
            icon={<FiSend size={14} />}
          >
            Hire Me
          </Button>
          <Button
            as="a"
            href="/resume/Alhassan_Tarawally_CV.pdf"
            download
            variant="secondary"
            className="!bg-white/5 !text-white !border-white/15 hover:!border-white/40"
            icon={<FiDownload size={14} />}
          >
            Download CV
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
