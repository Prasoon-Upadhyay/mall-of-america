import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import {
  ScrollReveal,
  staggerContainer,
  staggerItem,
} from "../../components/animation/scroll-reveal.component";
import { leasingMedia, leasingPaths } from "./leasing.data";
import type { LeasingPathId } from "./leasing.types";
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
  const [activePathId, setActivePathId] = useState<LeasingPathId>(leasingPaths[0].id);
  const activePath = getLeasingPath(activePathId);
  const media = leasingMedia[activePath.id];

  return (
    <section className="py-[clamp(88px,12vw,148px)]" id="leasing">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[640px]:w-[min(100%-32px,1180px)]">
        <ScrollReveal className="mb-[42px] max-w-[850px] [&>p:not(.eyebrow)]:max-w-[680px] [&>p:not(.eyebrow)]:text-[1.05rem]">
          <p className="eyebrow">Retail leasing</p>
          <h2>Not just square footage. A destination channel.</h2>
          <p>
            Leasing paths are structured around how different brands create value: permanent flagships,
            premium concepts, flexible campaigns, and pop-up launches.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-[320px_minmax(0,1fr)] gap-[18px] max-[980px]:grid-cols-1">
          <motion.div
            className="grid gap-2.5"
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
                    ? "min-h-28 cursor-pointer border border-[rgba(217,181,111,0.82)] bg-[rgba(217,181,111,0.15)] p-5 text-left text-(--ink)"
                    : "min-h-28 cursor-pointer border border-(--line) bg-[rgba(248,245,236,0.05)] p-5 text-left text-(--ink) transition-colors hover:border-[rgba(217,181,111,0.55)]"
                }
                key={path.id}
                onClick={() => setActivePathId(path.id)}
                type="button"
                variants={staggerItem}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.24 }}
              >
                <span className="mb-2 block text-[1.05rem] font-extrabold">{path.title}</span>
                <small className="block leading-normal text-(--muted)">{path.audience}</small>
              </motion.button>
            ))}
          </motion.div>

          <ScrollReveal direction="scale" delay={0.08}>
            <article className="slide-feature grid overflow-hidden border border-(--line) bg-(--panel) shadow-(--shadow) backdrop-blur-[18px] max-[980px]:grid-cols-1">
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
                  className="w-full p-[clamp(26px,4vw,48px)]"
                  key={activePath.id}
                  initial={{ opacity: 0, x: 22 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3>{activePath.title}</h3>
                  <p>{activePath.pitch}</p>
                  <motion.ul
                    className="mt-7 grid list-none gap-3 p-0"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {activePath.metrics.map((metric) => (
                      <motion.li className="flex items-center gap-2.5 text-(--ink)" key={metric} variants={staggerItem}>
                        <Check className="shrink-0 text-(--gold)" size={16} aria-hidden="true" />
                        {metric}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <a className="inline-flex w-36 h-10 rounded-full justify-center bg-(--gold) items-center gap-2 my-4 font-bold text-(--ink) transition-colors hover:text-(--gold)" href="#contact">
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
