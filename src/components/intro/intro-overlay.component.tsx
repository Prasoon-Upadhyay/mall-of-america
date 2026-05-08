import { AnimatePresence } from "framer-motion";
import { useIntro } from "../../contexts/intro/intro.hooks";
import { CinematicIntro } from "./cinematic-intro.component";

/**
 * Renders the cinematic intro while it is active.
 *
 * @returns Intro overlay managed by intro context.
 *
 * @example
 * ```tsx
 * <IntroOverlay />
 * ```
 */
export function IntroOverlay() {
  const { showIntro } = useIntro();

  return (
    <AnimatePresence>
      {showIntro ? <CinematicIntro /> : null}
    </AnimatePresence>
  );
}
