import { leasingPaths } from "./leasing.data";
import type { LeasingPathId } from "./leasing.types";

/**
 * Finds a leasing path by ID.
 *
 * @param pathId - Stable leasing path ID.
 * @returns The matching leasing path, or the first path as a fallback.
 *
 * @example
 * ```ts
 * const path = getLeasingPath("luxury");
 * ```
 */
export function getLeasingPath(pathId: LeasingPathId) {
  return leasingPaths.find((path) => path.id === pathId) ?? leasingPaths[0];
}
