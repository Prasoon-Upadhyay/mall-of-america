import { createContext } from "react";
import type { DeckSlideDefinition } from "../../components/deck/deck.types";
import type { UseDeckNavigationResult } from "../../hooks/use-deck-navigation.types";

export type DeckContextValue = UseDeckNavigationResult & {
    slides: DeckSlideDefinition[];
    totalSlides: number;
};

export const DeckContext = createContext<DeckContextValue | null>(null);
