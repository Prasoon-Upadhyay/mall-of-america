/**
 * Builds CTA copy for an event capability.
 *
 * @param eventTitle - Capability title shown in the event card.
 * @returns Booking CTA copy tailored to the capability.
 *
 * @example
 * ```ts
 * getEventBookingCopy("Atrium Takeovers");
 * ```
 */
export function getEventBookingCopy(eventTitle: string) {
  return `Build a custom ${eventTitle.toLowerCase()} package for reach, production needs, and audience profile.`;
}
