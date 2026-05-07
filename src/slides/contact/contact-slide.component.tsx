import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Store, WandSparkles } from "lucide-react";
import {
  ScrollReveal,
  staggerContainer,
  staggerItem,
} from "../../components/animation/scroll-reveal.component";

const contactOptions = [
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
 * Renders the final commercial contact hub.
 *
 * @returns CTA cards for leasing, sponsorship, and event conversations.
 *
 * @example
 * ```tsx
 * <ContactSlide />
 * ```
 */
export default function ContactSlide() {
  return (
    <section className="grid min-h-[92vh] items-center bg-[linear-gradient(180deg,rgba(8,8,6,0),rgba(8,8,6,0.7)),linear-gradient(135deg,rgba(185,95,61,0.2),rgba(102,135,166,0.16))] py-[clamp(88px,12vw,148px)]" id="contact">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[640px]:w-[min(100%-32px,1180px)] [&_h2]:max-w-220">
        <ScrollReveal>
          <p className="eyebrow">Next commercial move</p>
          <h2>Turn the destination into a deal.</h2>
        </ScrollReveal>
        <motion.div
          className="grid grid-cols-3 gap-4 max-[980px]:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {contactOptions.map((contactOption) => {
            const Icon = contactOption.icon;
            return (
              <motion.article
                className="flex min-h-65 flex-col overflow-hidden border border-(--line) bg-(--panel) p-6 shadow-(--shadow) backdrop-blur-[18px] max-[640px]:p-5 [&_h3]:mt-0"
                key={contactOption.title}
                variants={staggerItem}
                whileHover={{ y: -10, transition: { duration: 0.22 } }}
              >
                <div className="flex flex-row gap-2">
                  <Icon className="text-(--gold)" size={24} aria-hidden="true" />
                  <h3>{contactOption.title}</h3>
                </div>
                <p>{contactOption.body}</p>
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
