import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import {
  ScrollReveal,
  staggerContainer,
  staggerItem,
} from "../../components/animation/scroll-reveal.component";
import { leasingMedia, leasingPaths } from "./leasing.data";
import { getLeasingPath } from "./leasing.utils";

/**
 * Renders the interactive leasing pitch slide.
 *
 * @returns Leasing path selector and active path detail panel.
 *
 * @example
 * ```tsx
 * <LeasingSlide />
 * ```
 */
export default function LeasingSlide() {
  const [activePathId, setActivePathId] = useState(leasingPaths[0].id);
  const activePath = getLeasingPath(activePathId);
  const media = leasingMedia[activePath.id as keyof typeof leasingMedia];

  return (
    <section className="leasing-section" id="leasing">
      <div className="section-inner mx-auto">
        <ScrollReveal className="slide-header">
          <p className="eyebrow">Retail leasing</p>
          <h2>Not just square footage. A destination channel.</h2>
          <p>
            Leasing paths are structured around how different brands create value: permanent flagships,
            premium concepts, flexible campaigns, and pop-up launches.
          </p>
        </ScrollReveal>

        <div className="leasing-layout grid max-[980px]:grid-cols-1">
          <motion.div
            className="path-selector grid"
            aria-label="Leasing paths"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {leasingPaths.map((path) => (
              <motion.button
                className={
                  activePathId === path.id
                    ? "min-h-28 cursor-pointer border border-[rgba(217,181,111,0.82)] bg-[rgba(217,181,111,0.15)] p-5 text-left text-[var(--ink)]"
                    : "min-h-28 cursor-pointer border border-[var(--line)] bg-[rgba(248,245,236,0.05)] p-5 text-left text-[var(--ink)] transition-colors hover:border-[rgba(217,181,111,0.55)]"
                }
                key={path.id}
                onClick={() => setActivePathId(path.id)}
                type="button"
                variants={staggerItem}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.24 }}
              >
                <span>{path.title}</span>
                <small>{path.audience}</small>
              </motion.button>
            ))}
          </motion.div>

          <ScrollReveal direction="scale" delay={0.08}>
            <article className="slide-feature grid overflow-hidden border border-[var(--line)] bg-[var(--panel)] shadow-[var(--shadow)] backdrop-blur-[18px] max-[980px]:grid-cols-1">
              <AnimatePresence mode="wait">
                <motion.div
                  className="media-frame compact leasing-media-frame overflow-hidden"
                  key={media}
                  initial={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img src={media} alt="" loading="eager" decoding="async" />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  className="feature-copy w-full"
                  key={activePath.id}
                  initial={{ opacity: 0, x: 22 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3>{activePath.title}</h3>
                  <p>{activePath.pitch}</p>
                  <motion.ul
                    className="metric-list grid list-none p-0"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {activePath.metrics.map((metric) => (
                      <motion.li className="flex items-center" key={metric} variants={staggerItem}>
                        <Check size={16} aria-hidden="true" />
                        {metric}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <a className="inline-flex w-36 h-10 rounded-full justify-center bg-(--gold) items-center gap-2 my-4 font-bold text-(--ink) transition-colors hover:text-(--gold)" href="#action">
                    Build
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
