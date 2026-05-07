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
  mediaVariant?: "immersive" | "widescreen";
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
  mediaVariant = "immersive",
  points,
}: ChapterSectionProps) {
  const mediaFrameClassName =
    mediaVariant === "widescreen"
      ? "media-frame widescreen reveal-media overflow-hidden"
      : "media-frame immersive reveal-media overflow-hidden max-[640px]:min-h-[340px]";

  return (
    <section className="py-[clamp(88px,12vw,148px)]" id={id}>
      <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(28px,6vw,84px)] max-[980px]:grid-cols-1 max-[640px]:w-[min(100%-32px,1180px)]">
        <ScrollReveal className="[&>p:not(.eyebrow)]:max-w-160 [&>p:not(.eyebrow)]:text-[1.05rem]" direction="right">
          <p className="eyebrow">{kicker}</p>
          <h2>{title}</h2>
          <p>{body}</p>
          <motion.ul
            className="mt-7 grid list-none gap-3 p-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {points.map((point) => (
              <motion.li className="flex items-center gap-2.5 text-(--ink)" key={point} variants={staggerItem}>
                <CheckCircle2 className="shrink-0 text-(--gold)" size={18} aria-hidden="true" />
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
