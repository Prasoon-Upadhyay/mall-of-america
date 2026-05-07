/**
 * Builds CTA copy for a sponsorship package.
 *
 * @param tierName - Sponsorship tier name.
 * @returns CTA copy for discussing the selected tier.
 *
 * @example
 * ```ts
 * formatTierCta("Signature Partner");
 * ```
 */
export function formatTierCta(tierName: string) {
  return `Discuss ${tierName}`;
}
