import { useContext } from "react";
import { DeckContext } from "./deck.context";

/**
 * Reads the current deck context.
 *
 * @returns Deck navigation state, slide metadata, and movement methods.
 * @throws When called outside `DeckProvider`.
 *
 * @example
 * ```ts
 * const { activeSlide, goToSlide } = useDeck();
 * goToSlide("events");
 * ```
 */
export function useDeck() {
  const context = useContext(DeckContext);

  if (!context) {
    throw new Error("useDeck must be used within DeckProvider.");
  }

  return context;
}
