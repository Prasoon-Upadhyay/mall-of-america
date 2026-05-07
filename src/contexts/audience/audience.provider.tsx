import { useState, type PropsWithChildren } from "react";
import type { Audience } from "../../data/audience.data";
import { AudienceContext } from "./audience.context";

/**
 * Provides selected-audience state to pitch-path and business slides.
 *
 * @param props - Provider props.
 * @param props.children - Components that need access to selected audience state.
 * @returns A context provider wrapping the supplied children.
 *
 * @example
 * ```tsx
 * <AudienceProvider>
 *   <PitchPathsSlide />
 * </AudienceProvider>
 * ```
 */
export function AudienceProvider({ children }: PropsWithChildren) {
  const [audience, setAudience] = useState<Audience>("tenant");

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>{children}</AudienceContext.Provider>
  );
}
