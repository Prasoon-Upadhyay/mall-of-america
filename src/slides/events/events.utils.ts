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
  return `Build a ${eventTitle.toLowerCase()} package.`;
}
