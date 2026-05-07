import type { DeckNavItem } from "../components/navigation/navigation.types";

export type UseDeckNavigationOptions = {
    slides: DeckNavItem[];
    initialId?: string;
    syncHash?: boolean;
    enableKeyboard?: boolean;
};

export type UseDeckNavigationResult = {
    activeIndex: number;
    activeSlide: DeckNavItem;
    canGoNext: boolean;
    canGoPrevious: boolean;
    goToFirst: () => void;
    goToLast: () => void;
    goToNext: () => void;
    goToPrevious: () => void;
    goToSlide: (slideId: string) => void;
    moveBy: (slideDelta: number) => void;
};
