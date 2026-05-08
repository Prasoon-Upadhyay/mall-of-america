import { useMemo, type PropsWithChildren } from "react";
import type { DeckSlideDefinition } from "../../components/deck/deck.types";
import { useDeckNavigation } from "../../hooks/use-deck-navigation";
import { DeckContext } from "./deck.context";

type DeckProviderProps = PropsWithChildren<{
  slides: DeckSlideDefinition[];
}>;

/**
 * Provides deck slide metadata and navigation state to deck descendants.
 *
 * @param props - Provider props.
 * @param props.children - Components that need access to deck state.
 * @param props.slides - Ordered slide definitions for the active deck.
 * @returns A context provider wrapping the supplied children.
 *
 * @example
 * ```tsx
 * <DeckProvider slides={deckSlides}>
 *   <DeckTrack />
 * </DeckProvider>
 * ```
 */
export function DeckProvider({ children, slides }: DeckProviderProps) {
  const navigation = useDeckNavigation({ slides });
  const value = useMemo(
    () => ({
      ...navigation,
      slides,
      totalSlides: slides.length,
    }),
    [navigation, slides],
  );

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
}
