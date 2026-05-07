import { diningVenues } from "./dining.data";
import type { DiningVenue, DiningVenueId } from "./dining.types";

/**
 * Finds a dining venue by id.
 *
 * @param venueId - Identifier for the dining venue to display.
 * @returns The matching venue, or the lead dining venue when no match is found.
 *
 * @example
 * ```ts
 * getDiningVenue("fair-on-four");
 * ```
 */
export function getDiningVenue(venueId: DiningVenueId): DiningVenue {
  return diningVenues.find((venue) => venue.id === venueId) ?? diningVenues[0];
}

/**
 * Creates concise CTA copy for a dining venue.
 *
 * @param venue - Dining venue used to tailor the CTA label.
 * @returns Contact-oriented CTA text.
 *
 * @example
 * ```ts
 * getDiningContactCopy(venue);
 * ```
 */
export function getDiningContactCopy(venue: DiningVenue) {
  return `Plan around ${venue.name}`;
}
