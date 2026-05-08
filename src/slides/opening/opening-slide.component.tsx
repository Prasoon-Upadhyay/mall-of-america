import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useDeck } from "../../contexts/deck/deck.hooks";
import { useIntro } from "../../contexts/intro/intro.hooks";
import { propertyData } from "../../data/property.data";
import { HeroVideo } from "../../components/hero/hero-video.component";
import { StatGrid } from "../../components/hero/hero-stats.component";

/**
 * Renders the opening slide and routes hero CTAs into the deck.
 *
 * @returns The cinematic opening chapter.
 *
 * @example
 * ```tsx
 * <OpeningSlide />
 * ```
 */
export default function OpeningSlide() {
  const { goToSlide } = useDeck();
  const { showIntro } = useIntro();

  return (
    <section className="hero-section relative grid min-h-svh items-end overflow-hidden max-[640px]:px-4" id="opening">
      {showIntro ? null : <HeroVideo asset={propertyData.heroAsset} />}
      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {propertyData.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
        >
          {propertyData.name}
        </motion.h1>
        <motion.p
          className="hero-copy text-lg! pb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34 }}
        >
          {propertyData.positioning}
        </motion.p>

        <motion.div
          className="hero-actions flex flex-wrap"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46 }}
        >
          {propertyData.primaryActions.map((action, index) => (
            <button
              className={
                index === 0
                  ? "inline-flex rounded-full min-h-11.5 cursor-pointer items-center gap-2 border border-[rgba(248,245,236,0.28)] bg-(--ink) px-4.25 font-bold text-[#11100d] backdrop-blur-[14px] transition-colors hover:text-(--gold)"
                  : "inline-flex rounded-full min-h-11.5 cursor-pointer items-center gap-2 border border-[rgba(248,245,236,0.28)] bg-[rgba(248,245,236,0.08)] px-4.25 font-bold text-(--ink) backdrop-blur-[14px] transition-colors hover:text-(--gold)"
              }
              key={action.label}
              onClick={() => goToSlide(action.targetId)}
              type="button"
            >
              {action.label}
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          ))}
        </motion.div>
      </div>
      <StatGrid stats={propertyData.stats} />
    </section>
  );
}
