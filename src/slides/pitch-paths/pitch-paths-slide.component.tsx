import { AnimatePresence, motion } from "framer-motion";
import { audienceContent, type Audience } from "../../data/audience.data";
import { useAudience } from "../../contexts/audience/audience.hooks";
import { useDeck } from "../../contexts/deck/deck.hooks";
import { ScrollReveal } from "../../components/animation/scroll-reveal.component";
import { DeckMedia } from "../../components/media/deck-media.component";

/**
 * Renders audience path selection and routes each audience to its best-fit chapter.
 *
 * @returns The audience pitch-path slide.
 *
 * @example
 * ```tsx
 * <PitchPathsSlide />
 * ```
 */
export default function PitchPathsSlide() {
  const { audience, setAudience } = useAudience();
  const { goToSlide } = useDeck();
  const selectedAudience = audienceContent[audience];
  const SelectedIcon = selectedAudience.icon;

  return (
    <section className="bg-[#e8e1d2] py-[clamp(88px,12vw,148px)] text-[#14120f] [&_.eyebrow]:text-[#805332] [&_p]:text-[rgba(20,18,15,0.72)]" id="pitch-paths" aria-label="Choose business objective">
      <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-[minmax(300px,0.72fr)_minmax(0,1.28fr)] items-center gap-[clamp(28px,6vw,84px)] max-[980px]:grid-cols-1 max-[640px]:w-[min(100%-32px,1180px)]">
        <ScrollReveal direction="right">
          <p className="eyebrow">Choose the pitch path</p>
          <h2>One destination. Three commercial plays.</h2>
        </ScrollReveal>
        <ScrollReveal className="audience-panel grid gap-4" direction="left" delay={0.12}>
          <div
            className="flex flex-wrap gap-2.5 border border-[rgba(20,18,15,0.12)] bg-[rgba(20,18,15,0.08)] p-1.5"
            role="tablist"
            aria-label="Audience type"
          >
            {(Object.keys(audienceContent) as Audience[]).map((key) => {
              const Icon = audienceContent[key].icon;
              return (
                <button
                  className={
                    audience === key
                      ? "inline-flex min-h-10.5 cursor-pointer items-center gap-2 border-0 bg-[#14120f] px-3.5 text-[#f8f5ec]"
                      : "inline-flex min-h-10.5 cursor-pointer items-center gap-2 border-0 bg-transparent px-3.5 text-[rgba(20,18,15,0.7)] transition-colors hover:text-[#14120f]"
                  }
                  key={key}
                  onClick={() => setAudience(key)}
                  role="tab"
                  aria-selected={audience === key}
                  type="button"
                >
                  <Icon size={17} aria-hidden="true" />
                  {audienceContent[key].label}
                </button>
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              className="audience-card grid grid-cols-[minmax(220px,0.72fr)_minmax(360px,1.28fr)] items-stretch gap-6 border border-(--line) bg-[#14120f] text-[#f8f5ec] shadow-(--shadow) backdrop-blur-[18px] max-[820px]:grid-cols-1 max-[640px]:p-5"
              key={audience}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.24 }}
            >
              <div className="flex flex-col m-6 gap-4 items-start justify-center">
                <h3>{selectedAudience.headline}</h3>
                <p className="text-sm">{selectedAudience.body}</p>
                <button
                  className="inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 font-bold text-(--ink) transition-colors hover:text-(--gold)"
                  onClick={() => goToSlide(selectedAudience.targetId)}
                  type="button"
                >
                  <SelectedIcon className="text-(--gold)" size={24} aria-hidden="true" />
                  Continue
                </button>
              </div>
              <div className="pitch-path-video overflow-hidden border border-[rgba(248,245,236,0.14)] bg-black">
                <DeckMedia src={selectedAudience.video} />
              </div>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
}
