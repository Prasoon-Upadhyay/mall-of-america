import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal, staggerContainer, staggerItem } from "../animation/scroll-reveal.component";
import { DeckMedia } from "../media/deck-media.component";

type ChapterSectionProps = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  media: string;
  mediaVariant?: "default" | "immersive" | "widescreen";
  points: string[];
};

/**
 * Renders a two-column chapter with narrative copy, media, and proof points.
 *
 * @param props - Chapter content and media configuration.
 * @returns A full chapter section.
 *
 * @example
 * ```tsx
 * <ChapterSection title="Built For Attention" points={points} {...content} />
 * ```
 */
export function ChapterSection({
  id,
  kicker,
  title,
  body,
  media,
  mediaVariant = "default",
  points,
}: ChapterSectionProps) {
  const mediaFrameClassName =
    mediaVariant === "widescreen"
      ? "media-frame widescreen reveal-media overflow-hidden"
      : "media-frame immersive reveal-media overflow-hidden max-[640px]:min-h-[340px]";

  return (
    <section className="chapter-section" id={id}>
      <div className="section-inner split-layout mx-auto grid items-center max-[980px]:grid-cols-1">
        <ScrollReveal className="chapter-copy" direction="right">
          <p className="eyebrow">{kicker}</p>
          <h2>{title}</h2>
          <p>{body}</p>
          <motion.ul
            className="check-list grid list-none p-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {points.map((point) => (
              <motion.li className="flex items-center" key={point} variants={staggerItem}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </ScrollReveal>
        <ScrollReveal className={mediaFrameClassName} direction="scale" delay={0.12}>
          <DeckMedia src={media} />
        </ScrollReveal>
      </div>
    </section>
  );
}
