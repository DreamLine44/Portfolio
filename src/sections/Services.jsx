import { motion } from "framer-motion";
import { FiLayers, FiShare2, FiServer, FiShield, FiDatabase, FiSend } from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { services } from "../data/services";

const ICONS = {
  layers: FiLayers,
  api: FiShare2,
  server: FiServer,
  shield: FiShield,
  database: FiDatabase,
  rocket: FiSend,
};

export default function Services() {
  return (
    <section id="services" className="bg-[var(--color-bg)] py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="// services"
          title="What I Build"
          description="From database design to deployment — I deliver maintainable, tested, performant systems."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              >
                <Card className="group h-full p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-purple)] text-white shadow-md shadow-blue-500/20 transition-transform group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-[var(--font-display)] text-base font-bold text-[var(--color-navy)] dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
