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
      className="stat-dock relative grid max-[980px]:mt-5 max-[980px]:grid-cols-1"
      aria-label="Property statistics"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat) => (
        <motion.article
          className="stat-card min-h-[150px] border border-[var(--line)] bg-[var(--panel)] p-[22px] shadow-[var(--shadow)] backdrop-blur-[18px] max-[640px]:p-5"
          key={stat.label}
          variants={staggerItem}
        >
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
          <p>{stat.detail}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
