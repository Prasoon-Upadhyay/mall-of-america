import { useCallback, useEffect, useMemo, useState } from "react";
import type { UseDeckNavigationOptions, UseDeckNavigationResult } from "./use-deck-navigation.types";
import { useWindowEvent } from "./use-window-event";
import {
  clampSlideIndex,
  getHashSectionId,
  getSlideIndexById,
  isKeyboardNavigationTarget,
  updateHash,
} from "./use-deck-navigation.utils";

/**
 * Coordinates deck carousel navigation state and cross-cutting navigation inputs.
 *
 * @param options - Deck navigation configuration.
 * @param options.slides - Ordered slide list that defines deck bounds and slide IDs.
 * @param options.initialId - Optional slide ID to select before hash synchronization.
 * @param options.syncHash - Whether navigation should read and write URL hashes.
 * @param options.enableKeyboard - Whether keyboard shortcuts should control the deck.
 * @returns Current slide state plus methods for direct, relative, and boundary navigation.
 *
 * @example
 * ```ts
 * const { activeSlide, goToSlide, goToNext } = useDeckNavigation({ slides });
 *
 * goToSlide("leasing");
 * goToNext();
 * ```
 */
export function useDeckNavigation({
  slides,
  initialId,
  syncHash = true,
  enableKeyboard = true,
}: UseDeckNavigationOptions): UseDeckNavigationResult {
  const lastSlideIndex = slides.length - 1;
  const initialSlideIndex = useMemo(() => {
    if (!initialId) return 0;
    const index = getSlideIndexById(slides, initialId);
    return index >= 0 ? index : 0;
  }, [initialId, slides]);

  const [activeIndex, setActiveIndex] = useState(initialSlideIndex);
  const activeSlide = slides[activeIndex] ?? slides[0];

  /**
   * Jumps directly to a numeric slide index after constraining it to deck bounds.
   *
   * @param targetIndex - Zero-based slide index to activate.
   * @returns Nothing.
   *
   * @example
   * ```ts
   * jumpToIndex(0);
   * jumpToIndex(lastSlideIndex);
   * ```
   */
  const jumpToIndex = useCallback(
    (targetIndex: number) => {
      const clampedIndex = clampSlideIndex(targetIndex, lastSlideIndex);
      const targetSlide = slides[clampedIndex];

      if (!targetSlide) return;
      setActiveIndex(clampedIndex);
      updateHash(targetSlide.id, syncHash);
    },
    [slides, lastSlideIndex, syncHash],
  );

  /**
   * Jumps directly to a slide using its stable slide ID.
   *
   * @param slideId - Stable ID from the deck slide registry.
   * @returns Nothing.
   *
   * @example
   * ```ts
   * goToSlide("leasing");
   * ```
   */
  const goToSlide = useCallback(
    (slideId: string) => {
      const targetIndex = getSlideIndexById(slides, slideId);
      if (targetIndex >= 0) jumpToIndex(targetIndex);
    },
    [jumpToIndex, slides],
  );

  /**
   * Moves relative to the active slide.
   *
   * @param slideDelta - Number of slides to move; positive moves forward, negative moves backward.
   * @returns Nothing.
   *
   * @example
   * ```ts
   * moveBy(1);
   * moveBy(-1);
   * ```
   */
  const moveBy = useCallback(
    (slideDelta: number) => {
      setActiveIndex((currentIndex) => {
        const targetIndex = clampSlideIndex(currentIndex + slideDelta, lastSlideIndex);
        const targetSlide = slides[targetIndex];

        if (targetSlide) updateHash(targetSlide.id, syncHash);
        return targetIndex;
      });
    },
    [slides, lastSlideIndex, syncHash],
  );

  /** @returns Nothing; activates the first deck slide. */
  const goToFirst = useCallback(() => jumpToIndex(0), [jumpToIndex]);

  /** @returns Nothing; activates the final deck slide. */
  const goToLast = useCallback(() => jumpToIndex(lastSlideIndex), [jumpToIndex, lastSlideIndex]);

  /** @returns Nothing; advances by one slide. */
  const goToNext = useCallback(() => moveBy(1), [moveBy]);

  /** @returns Nothing; moves back by one slide. */
  const goToPrevious = useCallback(() => moveBy(-1), [moveBy]);

  /**
   * Aligns the active slide to the current URL hash when it matches a slide ID.
   *
   * @returns Nothing.
   *
   * @example
   * ```ts
   * // URL hash is #events
   * syncFromHash();
   * ```
   */
  const syncFromHash = useCallback(() => {
    const hashId = getHashSectionId();
    if (!hashId) return;

    const targetIndex = getSlideIndexById(slides, hashId);
    if (targetIndex >= 0) setActiveIndex(targetIndex);
  }, [slides]);

  /**
   * Converts deck keyboard shortcuts into slide movement.
   *
   * @param event - Keyboard event from the window listener.
   * @returns Nothing.
   *
   * @example
   * ```ts
   * handleKeyboardNavigation(event);
   * ```
   */
  const handleKeyboardNavigation = useCallback(
    (event: KeyboardEvent) => {
      if (isKeyboardNavigationTarget(event.target)) return;

      if (event.key === "ArrowRight" || event.key === "PageDown") goToNext();
      if (event.key === "ArrowLeft" || event.key === "PageUp") goToPrevious();
      if (event.key === "Home") goToFirst();
      if (event.key === "End") goToLast();
    },
    [goToFirst, goToLast, goToNext, goToPrevious],
  );

  useEffect(() => {
    if (syncHash) syncFromHash();
  }, [syncFromHash, syncHash]);

  useWindowEvent("hashchange", syncFromHash, syncHash);
  useWindowEvent("keydown", handleKeyboardNavigation, enableKeyboard);

  return {
    activeIndex,
    activeSlide,
    canGoNext: activeIndex < lastSlideIndex,
    canGoPrevious: activeIndex > 0,
    goToFirst,
    goToLast,
    goToNext,
    goToPrevious,
    goToSlide,
    moveBy,
  };
}
