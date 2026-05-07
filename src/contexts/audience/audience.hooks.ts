import { useContext } from "react";
import { AudienceContext } from "./audience.context";

/**
 * Reads the current audience selection context.
 *
 * @returns Selected audience and setter.
 * @throws When called outside `AudienceProvider`.
 *
 * @example
 * ```ts
 * const { audience, setAudience } = useAudience();
 * setAudience("sponsor");
 * ```
 */
export function useAudience() {
  const context = useContext(AudienceContext);

  if (!context) {
    throw new Error("useAudience must be used within AudienceProvider.");
  }

  return context;
}
