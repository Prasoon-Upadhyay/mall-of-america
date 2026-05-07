import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import {
  ScrollReveal,
  staggerContainer,
  staggerItem,
} from "../../components/animation/scroll-reveal.component";
import { DeckMedia } from "../../components/media/deck-media.component";
import { entertainmentAttractions, entertainmentMedia } from "./entertainment.data";
import type { EntertainmentAttractionId } from "./entertainment.types";
import {
  getEntertainmentAttraction,
  getEntertainmentContactCopy,
} from "./entertainment.utils";

/**
 * Renders the interactive entertainment platform slide.
 *
 * @returns Entertainment overview with attraction-specific detail cards.
 *
 * @example
 * ```tsx
 * <EntertainmentSlide />
 * ```
 */
export default function EntertainmentSlide() {
  const [activeAttractionId, setActiveAttractionId] = useState<EntertainmentAttractionId>(
    entertainmentAttractions[0].id,
  );
  const activeAttraction = getEntertainmentAttraction(activeAttractionId);

  return (
    <section className="py-[clamp(88px,12vw,148px)]" id="entertainment">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[640px]:w-[min(100%-32px,1180px)]">
        <ScrollReveal className="mb-[42px] max-w-[880px] [&>p:not(.eyebrow)]:max-w-[700px] [&>p:not(.eyebrow)]:text-[1.05rem]">
          <p className="eyebrow">Entertainment engine</p>
          <h2>The traffic driver traditional centers cannot manufacture.</h2>
          <p>
            Nickelodeon Universe, SEA LIFE, and immersive family attractions make MOA a leisure
            anchor, expanding visit reasons beyond transactions.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] gap-5 max-[980px]:grid-cols-1">
          <ScrollReveal
            className="media-frame reveal-media h-full min-h-full overflow-hidden max-[980px]:min-h-[420px] max-[640px]:min-h-[340px]"
            direction="right"
          >
            <DeckMedia src={entertainmentMedia} />
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.08}>
            <article className="flex min-h-full flex-col justify-between border border-(--line) bg-(--panel) p-[clamp(24px,4vw,42px)] shadow-(--shadow) backdrop-blur-[18px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAttraction.id}
                  initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -16, filter: "blur(8px)" }}
                  transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="mb-4 inline-flex border border-(--line) bg-[rgba(248,245,236,0.04)] px-3 py-2 text-[0.78rem] font-extrabold uppercase text-(--gold)">
                    {activeAttraction.category}
                  </span>
                  <h3>{activeAttraction.name}</h3>
                  <p className="text-(--muted)">{activeAttraction.location}</p>
                  <strong className="my-5 block text-[1.1rem] leading-snug text-(--ink)">
                    {activeAttraction.commercialRole}
                  </strong>
                  <p>{activeAttraction.pitch}</p>
                  <ul className="mt-6 grid list-none gap-3 p-0">
                    {activeAttraction.proofPoints.map((point) => (
                      <li className="flex items-center gap-2.5 text-(--ink)" key={point}>
                        <Check className="shrink-0 text-(--gold)" size={16} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
              <a className="mt-7 inline-flex items-center gap-2 font-bold text-(--ink) transition-colors hover:text-(--gold)" href="#contact">
                {getEntertainmentContactCopy(activeAttraction)}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          </ScrollReveal>
        </div>

        <motion.div
          className="mt-4 grid grid-cols-5 gap-3 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          aria-label="Entertainment attraction selector"
        >
          {entertainmentAttractions.map((attraction) => (
            <motion.button
              className={
                activeAttractionId === attraction.id
                  ? "min-h-[128px] cursor-pointer border border-[rgba(217,181,111,0.82)] bg-[rgba(217,181,111,0.15)] p-4 text-left text-(--ink)"
                  : "min-h-[128px] cursor-pointer border border-(--line) bg-[rgba(248,245,236,0.05)] p-4 text-left text-(--ink) transition-colors hover:border-[rgba(217,181,111,0.55)]"
              }
              key={attraction.id}
              onClick={() => setActiveAttractionId(attraction.id)}
              type="button"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22 }}
            >
              <span className="mb-2 block text-[0.72rem] font-extrabold uppercase text-(--gold)">
                {attraction.category}
              </span>
              <strong className="block leading-tight">{attraction.name}</strong>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
