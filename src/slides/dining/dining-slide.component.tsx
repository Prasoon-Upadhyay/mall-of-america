import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import {
  ScrollReveal,
  staggerContainer,
  staggerItem,
} from "../../components/animation/scroll-reveal.component";
import { DeckMedia } from "../../components/media/deck-media.component";
import { diningMedia, diningVenues } from "./dining.data";
import type { DiningVenueId } from "./dining.types";
import { getDiningContactCopy, getDiningVenue } from "./dining.utils";

/**
 * Renders the interactive dining and lifestyle slide.
 *
 * @returns Dining overview with venue-specific commercial detail.
 *
 * @example
 * ```tsx
 * <DiningSlide />
 * ```
 */
export default function DiningSlide() {
  const [activeVenueId, setActiveVenueId] = useState<DiningVenueId>(diningVenues[0].id);
  const activeVenue = getDiningVenue(activeVenueId);

  return (
    <section className="py-[clamp(88px,12vw,148px)]" id="dining">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[640px]:w-[min(100%-32px,1180px)]">
        <ScrollReveal className="mb-[42px] max-w-[880px] [&>p:not(.eyebrow)]:max-w-[700px] [&>p:not(.eyebrow)]:text-[1.05rem]">
          <p className="eyebrow">Dining & lifestyle</p>
          <h2>Food, social time, and repeat visits move together.</h2>
          <p>
            Dining is positioned as part of the full-day itinerary: a reason to stay longer, meet
            friends, book group moments, and return.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-[minmax(340px,0.92fr)_minmax(0,1.08fr)] gap-5 max-[980px]:grid-cols-1">
          <ScrollReveal direction="right" delay={0.08}>
            <article className="flex min-h-full flex-col justify-between border border-(--line) bg-(--panel) p-[clamp(24px,4vw,42px)] shadow-(--shadow) backdrop-blur-[18px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVenue.id}
                  initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 16, filter: "blur(8px)" }}
                  transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="mb-4 inline-flex border border-(--line) bg-[rgba(248,245,236,0.04)] px-3 py-2 text-[0.78rem] font-extrabold uppercase text-(--gold)">
                    {activeVenue.category}
                  </span>
                  <h3>{activeVenue.name}</h3>
                  <p className="text-(--muted)">{activeVenue.location}</p>
                  <strong className="my-5 block text-[1.1rem] leading-snug text-(--ink)">
                    {activeVenue.commercialRole}
                  </strong>
                  <p>{activeVenue.pitch}</p>
                  <ul className="mt-6 grid list-none gap-3 p-0">
                    {activeVenue.proofPoints.map((point) => (
                      <li className="flex items-center gap-2.5 text-(--ink)" key={point}>
                        <Check className="shrink-0 text-(--gold)" size={16} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
              <a className="mt-7 inline-flex items-center gap-2 font-bold text-(--ink) transition-colors hover:text-(--gold)" href="#contact">
                {getDiningContactCopy(activeVenue)}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          </ScrollReveal>

          <ScrollReveal
            className="media-frame reveal-media h-full min-h-full overflow-hidden max-[980px]:min-h-[420px] max-[640px]:min-h-[340px]"
            direction="left"
          >
            <DeckMedia src={diningMedia} />
          </ScrollReveal>
        </div>

        <motion.div
          className="mt-4 grid grid-cols-3 gap-3 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          aria-label="Dining venue selector"
        >
          {diningVenues.map((venue) => (
            <motion.button
              className={
                activeVenueId === venue.id
                  ? "min-h-[118px] cursor-pointer border border-[rgba(217,181,111,0.82)] bg-[rgba(217,181,111,0.15)] p-4 text-left text-(--ink)"
                  : "min-h-[118px] cursor-pointer border border-(--line) bg-[rgba(248,245,236,0.05)] p-4 text-left text-(--ink) transition-colors hover:border-[rgba(217,181,111,0.55)]"
              }
              key={venue.id}
              onClick={() => setActiveVenueId(venue.id)}
              type="button"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22 }}
            >
              <span className="mb-2 block text-[0.72rem] font-extrabold uppercase text-(--gold)">
                {venue.category}
              </span>
              <strong className="block leading-tight">{venue.name}</strong>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
