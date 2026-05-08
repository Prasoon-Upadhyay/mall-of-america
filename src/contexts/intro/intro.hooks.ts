import { useContext } from "react";
import { IntroContext } from "./intro.context";

/**
 * Reads cinematic intro visibility controls.
 *
 * @returns Intro context value.
 *
 * @example
 * ```tsx
 * const { showIntro, completeIntro } = useIntro();
 * ```
 */
export function useIntro() {
  const context = useContext(IntroContext);

  if (!context) {
    throw new Error("useIntro must be used within IntroProvider");
  }

  return context;
}
