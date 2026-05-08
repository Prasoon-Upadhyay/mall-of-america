import { useContext } from "react";
import { AudioContext } from "./audio.context";

/**
 * Reads global audio state and controls.
 *
 * @returns Global audio context value.
 *
 * @example
 * ```tsx
 * const { isMuted, toggleMuted } = useAudio();
 * ```
 */
export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }

  return context;
}
