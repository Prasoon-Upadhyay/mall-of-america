import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Store, WandSparkles } from "lucide-react";
import {
  ScrollReveal,
  staggerContainer,
  staggerItem,
} from "../../components/animation/scroll-reveal.component";

const actions = [
  {
    title: "Lease Space",
    body: "Flagship, category, luxury, F&B, and pop-up conversations.",
    icon: Store,
  },
  {
    title: "Sponsor The Platform",
    body: "Annual, seasonal, campaign, and experiential partnership packages.",
    icon: WandSparkles,
  },
  {
    title: "Book An Event",
    body: "Launches, concerts, conventions, fan moments, and private programs.",
    icon: CalendarCheck,
  },
];

/**
 * Renders the final commercial action hub.
 *
 * @returns CTA cards for leasing, sponsorship, and event conversations.
 *
 * @example
 * ```tsx
 * <ActionSlide />
 * ```
 */
export default function ActionSlide() {
  return (
    <section className="cta-section grid items-center" id="action">
      <div className="section-inner cta-inner mx-auto">
        <ScrollReveal>
          <p className="eyebrow">Next commercial move</p>
          <h2>Turn the destination into a deal.</h2>
        </ScrollReveal>
        <motion.div
          className="cta-grid grid max-[980px]:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <motion.article
                className="cta-card flex min-h-65 flex-col overflow-hidden border border-(--line) bg-(--panel) p-6 shadow-(--shadow) backdrop-blur-[18px] max-[640px]:p-5"
                key={action.title}
                variants={staggerItem}
                whileHover={{ y: -10, transition: { duration: 0.22 } }}
              >
                <div className="flex flex-row gap-2">
                  <Icon className="text-(--gold)" size={24} aria-hidden="true" />
                  <h3>{action.title}</h3>
                </div>
                <p>{action.body}</p>
                <a className="mt-auto inline-flex items-center gap-2 font-bold text-(--ink) hover:text-(--gold)! hover:underline! hover:underline-offset-4! transition-all duration-400" href="mailto:leasing@example.com">
                  Start conversation
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
