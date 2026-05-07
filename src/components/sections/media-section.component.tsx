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
  mediaVariant?: "immersive" | "widescreen";
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
  mediaVariant = "immersive",
  stats,
  reverse,
}: MediaSectionProps) {
  const mediaFrameClassName =
    mediaVariant === "widescreen"
      ? "media-frame widescreen reveal-media overflow-hidden"
      : "media-frame immersive reveal-media overflow-hidden max-[640px]:min-h-85";

  return (
    <section className="py-[clamp(88px,12vw,148px)]" id={id}>
      <div
        className={
          reverse
            ? "mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(28px,6vw,84px)] max-[980px]:grid-cols-1 max-[640px]:w-[min(100%-32px,1180px)] [&_.media-frame]:order-2 max-[980px]:[&_.media-frame]:order-none"
            : "mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(28px,6vw,84px)] max-[980px]:grid-cols-1 max-[640px]:w-[min(100%-32px,1180px)]"
        }
      >
        <ScrollReveal className={mediaFrameClassName} direction={reverse ? "left" : "right"}>
          <DeckMedia src={media} />
        </ScrollReveal>
        <ScrollReveal className="[&>p:not(.eyebrow)]:max-w-[640px] [&>p:not(.eyebrow)]:text-[1.05rem]" direction={reverse ? "right" : "left"} delay={0.1}>
          <p className="eyebrow">{kicker}</p>
          <h2>{title}</h2>
          <p>{body}</p>
          <motion.div
            className="my-4 flex flex-wrap gap-2.5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {stats.map((stat) => (
              <motion.span className="inline-flex min-h-[34px] items-center border border-(--line) bg-[rgba(248,245,236,0.04)] px-3 text-[0.88rem] text-(--soft)" key={stat} variants={staggerItem}>
                {stat}
              </motion.span>
            ))}
          </motion.div>
          <a className="inline-flex py-2 hover:underline! hover:underline-offset-4! transition-all duration-400 items-center gap-2 font-bold text-(--ink) hover:text-(--gold)!" href="#contact">
            Package this opportunity
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
