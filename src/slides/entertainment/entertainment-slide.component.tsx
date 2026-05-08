import { motion, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import { ScrollReveal } from "../../components/animation/scroll-reveal.component";
import { DeckMedia } from "../../components/media/deck-media.component";
import { entertainmentAttractions, entertainmentOverview } from "./entertainment.data";

const cinematicRevealDelays = [0.46, 0.12, 0.68, 0.3];
const cinematicRevealOffsets = [
  { x: -18, y: 26 },
  { x: 16, y: 14 },
  { x: -8, y: 34 },
  { x: 20, y: 24 },
];

const cinematicRevealItem: Variants = {
  hidden: ({ index }: { index: number }) => ({
    opacity: 0,
    scale: 0.96,
    filter: "blur(14px)",
    ...cinematicRevealOffsets[index % cinematicRevealOffsets.length],
  }),
  visible: ({ index }: { index: number }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: cinematicRevealDelays[index % cinematicRevealDelays.length],
      duration: 0.92,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

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
  return (
    <section
      className="relative overflow-hidden bg-[#080806] py-[clamp(88px,12vw,148px)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(8,8,6,0.88),rgba(8,8,6,0.44)_58%,rgba(8,8,6,0.82)),linear-gradient(180deg,rgba(8,8,6,0.28),rgba(8,8,6,0.54)_66%,#080806_100%)] after:content-['']"
      id="entertainment"
    >
      <div className="absolute inset-0 z-0 opacity-[0.86] [&_.deck-media-element]:h-full [&_.deck-media-element]:min-h-full [&_.deck-media-shell]:h-full [&_.deck-media-shell]:min-h-full" aria-hidden="true">
        <DeckMedia src={entertainmentOverview.media} loading="eager" />
      </div>

      <div className="relative z-1 mx-auto w-[min(1180px,calc(100%-48px))] max-[640px]:w-[min(100%-32px,1180px)]">
        <ScrollReveal className="mb-10.5 max-w-220 [&>p:not(.eyebrow)]:max-w-175 [&>p:not(.eyebrow)]:text-[1.05rem]">
          <p className="eyebrow">Entertainment engine</p>
          <h2>The traffic driver traditional centers cannot manufacture.</h2>
          <p>
            Nickelodeon Universe, SEA LIFE, and immersive family attractions make MOA a leisure
            anchor, expanding visit reasons beyond transactions.
          </p>
        </ScrollReveal>

        <motion.div
          className="mt-[clamp(28px,5vw,54px)] grid grid-cols-4 gap-[clamp(14px,2vw,22px)] max-[980px]:grid-cols-2 max-[640px]:grid-cols-1"
          initial="hidden"
          animate="visible"
          aria-label="Entertainment attractions"
        >
          {entertainmentAttractions.map((attraction, index) => (
            <motion.article
              className="group min-w-0 transition-transform duration-260 ease-out hover:-translate-y-2"
              custom={{ index }}
              key={attraction.id}
              variants={cinematicRevealItem}
            >
              <div className="reveal-media aspect-4/5 overflow-hidden border border-(--line) bg-(--panel-strong) shadow-(--shadow) backdrop-blur-xl transition-[border-color,box-shadow] duration-300 ease-out group-hover:border-[rgba(217,181,111,0.62)] group-hover:shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
                <img src={attraction.media} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="grid gap-2.25 pt-4">
                <span className="block text-[0.72rem] font-extrabold uppercase text-(--gold)">
                  {attraction.category}
                </span>
                <h3 className="mb-0 text-[clamp(1.08rem,1.5vw,1.38rem)]">{attraction.name}</h3>
                <p className="mb-0 flex items-center gap-2 text-[0.92rem] leading-[1.45] text-(--muted)">
                  <MapPin size={14} aria-hidden="true" />
                  {attraction.location}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
