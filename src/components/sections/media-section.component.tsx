import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal, staggerContainer, staggerItem } from "../animation/scroll-reveal.component";
import { DeckMedia } from "../media/deck-media.component";

type MediaSectionProps = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  media: string;
  mediaVariant?: "default" | "immersive" | "widescreen";
  stats: string[];
  reverse?: boolean;
};

/**
 * Renders a reusable media-led chapter.
 *
 * @param props - Copy, media, pill stats, and layout direction.
 * @returns A full media section.
 *
 * @example
 * ```tsx
 * <MediaSection id="dining" title="Dining & Lifestyle" stats={stats} media={image} />
 * ```
 */
export function MediaSection({
  id,
  kicker,
  title,
  body,
  media,
  mediaVariant = "default",
  stats,
  reverse,
}: MediaSectionProps) {
  const mediaFrameClassName =
    mediaVariant === "widescreen"
      ? "media-frame widescreen reveal-media overflow-hidden"
      : "media-frame immersive reveal-media overflow-hidden max-[640px]:min-h-85";

  return (
    <section className="media-section" id={id}>
      <div
        className={
          reverse
            ? "section-inner media-layout reverse mx-auto grid items-center max-[980px]:grid-cols-1"
            : "section-inner media-layout mx-auto grid items-center max-[980px]:grid-cols-1"
        }
      >
        <ScrollReveal className={mediaFrameClassName} direction={reverse ? "left" : "right"}>
          <DeckMedia src={media} />
        </ScrollReveal>
        <ScrollReveal className="chapter-copy" direction={reverse ? "right" : "left"} delay={0.1}>
          <p className="eyebrow">{kicker}</p>
          <h2>{title}</h2>
          <p>{body}</p>
          <motion.div
            className="pill-row flex flex-wrap my-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {stats.map((stat) => (
              <motion.span className="inline-flex items-center" key={stat} variants={staggerItem}>
                {stat}
              </motion.span>
            ))}
          </motion.div>
          <a className="inline-flex py-2 hover:underline! hover:underline-offset-4! transition-all duration-400 items-center gap-2 font-bold text-(--ink) hover:text-(--gold)!" href="#action">
            Package this opportunity
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
