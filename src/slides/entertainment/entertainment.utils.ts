import { entertainmentAttractions } from "./entertainment.data";
import type { EntertainmentAttraction, EntertainmentAttractionId } from "./entertainment.types";

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
