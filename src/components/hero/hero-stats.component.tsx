import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animation/scroll-reveal.component";

type Stat = {
  value: string;
  label: string;
  detail: string;
};

type StatGridProps = {
  stats: Stat[];
};

/**
 * Renders hero metrics as staggered stat cards.
 *
 * @param props - Stat grid props.
 * @param props.stats - Metrics to display in the stat dock.
 * @returns A grid of property stat cards.
 *
 * @example
 * ```tsx
 * <StatGrid stats={propertyData.stats} />
 * ```
 */
export function StatGrid({ stats }: StatGridProps) {
  return (
    <motion.div
      className="relative z-1 grid grid-cols-4 gap-2.5 max-[980px]:mt-5 max-[980px]:grid-cols-1"
      aria-label="Property statistics"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat) => (
        <motion.article
          className="min-h-37.5 border border-(--line) bg-(--panel) p-5.5 shadow-(--shadow) backdrop-blur-[18px] max-[640px]:p-5"
          key={stat.label}
          variants={staggerItem}
        >
          <strong className="mb-2 block text-[clamp(1.8rem,3vw,3.2rem)] leading-none text-(--ink)">{stat.value}</strong>
          <span className="mb-2.5 block font-extrabold text-(--gold)">{stat.label}</span>
          <p className="mb-0 text-[0.92rem]">{stat.detail}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
