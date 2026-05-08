import { Suspense } from "react";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import { useDeck } from "../../contexts/deck/deck.hooks";

/**
 * Renders the configured slides inside the horizontal carousel track.
 *
 * @returns The deck viewport and animated slide track.
 *
 * @example
 * ```tsx
 * <DeckProvider slides={deckSlides}>
 *   <DeckTrack />
 * </DeckProvider>
 * ```
 */
export function DeckTrack() {
  const { activeIndex, slides } = useDeck();

  return (
    <main className="deck-viewport h-svh overflow-hidden" aria-live="polite">
      <motion.div
        className="deck-track flex h-full will-change-transform"
        animate={{ x: `-${activeIndex * 100}vw` }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      >
        {slides.map((slide, index) => {
          const Slide = slide.component;
          const isActive = activeIndex === index;

          return (
            <div
              className="deck-slide h-svh flex-[0_0_100vw] overflow-x-hidden overflow-y-auto overscroll-contain"
              aria-hidden={activeIndex !== index}
              key={slide.id}
            >
              {isActive ? (
                <Suspense
                  fallback={
                    <div
                      className="deck-slide-loader grid min-h-svh place-items-center text-(--gold)"
                      role="status"
                      aria-label="Loading chapter"
                    >
                      <LoaderCircle className="animate-spin" size={34} aria-hidden="true" />
                    </div>
                  }
                >
                  <Slide />
                </Suspense>
              ) : null}
            </div>
          );
        })}
      </motion.div>
    </main>
  );
}
