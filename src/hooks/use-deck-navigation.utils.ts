import type { DeckNavItem } from "../components/navigation/navigation.types";

/**
 * Constrains a requested slide index to the valid deck range.
 *
 * @param index - Requested slide index.
 * @param lastSlideIndex - Final valid slide index.
 * @returns The nearest valid index within `0..lastSlideIndex`.
 *
 * @example
 * ```ts
 * clampSlideIndex(-1, 8); // 0
 * clampSlideIndex(12, 8); // 8
 * ```
 */
export function clampSlideIndex(index: number, lastSlideIndex: number) {
  return Math.min(Math.max(index, 0), lastSlideIndex);
}

/**
 * Finds a slide's numeric position from its stable ID.
 *
 * @param slides - Ordered slide metadata.
 * @param slideId - Stable slide ID to find.
 * @returns The matching slide index, or `-1` when no slide matches.
 *
 * @example
 * ```ts
 * getSlideIndexById(slides, "events");
 * ```
 */
export function getSlideIndexById(slides: DeckNavItem[], slideId: string) {
  return slides.findIndex((slide) => slide.id === slideId);
}

/**
 * Reads the current URL hash as a slide ID.
 *
 * @returns The hash without the leading `#`.
 *
 * @example
 * ```ts
 * // URL: /#sponsorship
 * getHashSectionId(); // "sponsorship"
 * ```
 */
export function getHashSectionId() {
  return window.location.hash.replace("#", "");
}

/**
 * Writes the active slide ID into the URL hash when enabled.
 *
 * @param slideId - Slide ID to write into the hash.
 * @param syncHash - Whether hash synchronization is enabled.
 * @returns Nothing.
 *
 * @example
 * ```ts
 * updateHash("leasing", true);
 * ```
 */
export function updateHash(slideId: string, syncHash: boolean) {
  if (syncHash) {
    window.history.replaceState(null, "", `#${slideId}`);
  }
}

/**
 * Checks whether keyboard events should stay with an interactive target.
 *
 * @param target - Event target from a keyboard event.
 * @returns `true` when deck shortcuts should ignore the event.
 *
 * @example
 * ```ts
 * if (isKeyboardNavigationTarget(event.target)) return;
 * ```
 */
export function isKeyboardNavigationTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;

  const tagName = target.tagName;
  return (
    tagName === "BUTTON" ||
    tagName === "A" ||
    tagName === "INPUT" ||
    tagName === "SELECT" ||
    tagName === "TEXTAREA" ||
    target.isContentEditable
  );
}
