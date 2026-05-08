import { useCallback, useMemo, useState, type PropsWithChildren } from "react";
import { IntroContext } from "./intro.context";

/**
 * Provides cinematic intro lifecycle state.
 *
 * @param props - Provider props.
 * @param props.children - Components that need intro state.
 * @returns Intro provider wrapping children.
 *
 * @example
 * ```tsx
 * <IntroProvider>
 *   <IntroOverlay />
 * </IntroProvider>
 * ```
 */
export function IntroProvider({ children }: PropsWithChildren) {
  const [showIntro, setShowIntro] = useState(true);
  const completeIntro = useCallback(() => setShowIntro(false), []);

  const value = useMemo(
    () => ({
      completeIntro,
      showIntro,
    }),
    [completeIntro, showIntro],
  );

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
}
