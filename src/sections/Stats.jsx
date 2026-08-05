import { motion } from "framer-motion";
import { FiCode, FiLayers, FiActivity, FiSmartphone } from "react-icons/fi";
import { stats } from "../data/experience";
import { useCountUp } from "../hooks/useCountUp";
import Card from "../components/ui/Card";

const ICONS = { code: FiCode, layers: FiLayers, api: FiActivity, device: FiSmartphone };

function StatItem({ stat, index }) {
  const [ref, value] = useCountUp(stat.value);
  const Icon = ICONS[stat.icon];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex items-center gap-3 px-2"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent-purple)]/10 text-[var(--color-primary)]">
        <Icon size={19} />
      </div>
      <div>
        <div className="font-[var(--font-display)] text-xl font-bold text-[var(--color-navy)] dark:text-white">
          {value}
        </div>
        <div className="text-xs text-[var(--color-text-secondary)]">{stat.label}</div>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <div className="relative z-10 mx-auto -mt-12 max-w-6xl px-5 sm:px-8">
      <Card
        hover={false}
        className="grid grid-cols-2 gap-6 rounded-2xl px-6 py-6 sm:grid-cols-4 sm:px-10 shadow-xl shadow-blue-500/5"
      >
        {stats.map((stat, i) => (
          <StatItem key={stat.id} stat={stat} index={i} />
        ))}
      </Card>
    </div>
  );
}
