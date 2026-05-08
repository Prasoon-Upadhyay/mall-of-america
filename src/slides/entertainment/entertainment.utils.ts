import { entertainmentAttractions, entertainmentOverview } from "./entertainment.data";
import type {
  EntertainmentAttraction,
  EntertainmentAttractionId,
  EntertainmentOverview,
  EntertainmentSelectionId,
} from "./entertainment.types";

/**
 * Finds an entertainment attraction by id.
 *
 * @param attractionId - Identifier for the attraction to display.
 * @returns The matching attraction, or the lead attraction when no match is found.
 *
 * @example
 * ```ts
 * getEntertainmentAttraction("sea-life");
 * ```
 */
export function getEntertainmentAttraction(
  attractionId: EntertainmentAttractionId,
): EntertainmentAttraction {
  return (
    entertainmentAttractions.find((attraction) => attraction.id === attractionId) ??
    entertainmentAttractions[0]
  );
}

/**
 * Finds the active entertainment story by selector id.
 *
 * @param selectionId - Overview or attraction id to display.
 * @returns The overview story or matching attraction.
 *
 * @example
 * ```ts
 * getEntertainmentStory("overview");
 * ```
 */
export function getEntertainmentStory(
  selectionId: EntertainmentSelectionId,
): EntertainmentAttraction | EntertainmentOverview {
  if (selectionId === entertainmentOverview.id) {
    return entertainmentOverview;
  }

  return getEntertainmentAttraction(selectionId);
}

/**
 * Creates concise CTA copy for an attraction card.
 *
 * @param attraction - Attraction used to tailor the CTA label.
 * @returns Contact-oriented CTA text.
 *
 * @example
 * ```ts
 * getEntertainmentContactCopy(attraction);
 * ```
 */
export function getEntertainmentContactCopy(attraction: EntertainmentAttraction) {
  return `Package ${attraction.name}`;
}
