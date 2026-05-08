import { useCallback, useEffect, useMemo, useRef, useState, type PropsWithChildren } from "react";
import { assets } from "../../data/assets";
import { AudioContext } from "./audio.context";

/**
 * Provides app-wide ambient audio state and playback controls.
 *
 * @param props - Provider props.
 * @param props.children - Components that need audio state.
 * @returns Audio provider with a single looping ambient audio element.
 *
 * @example
 * ```tsx
 * <AudioProvider>
 *   <App />
 * </AudioProvider>
 * ```
 */
export function AudioProvider({ children }: PropsWithChildren) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const hasAudioSource = assets.audio.ambient.length > 0;
  const toggleMuted = useCallback(() => setIsMuted((muted) => !muted), []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !hasAudioSource) {
      return;
    }

    audio.muted = isMuted;

    if (isMuted) {
      audio.pause();
      return;
    }

    let isCancelled = false;

    void audio.play().catch(() => {
      if (isCancelled) {
        return;
      }

      setIsMuted(true);
    });

    return () => {
      isCancelled = true;
    };
  }, [hasAudioSource, isMuted]);

  const value = useMemo(
    () => ({
      hasAudioSource,
      isMuted,
      toggleMuted,
    }),
    [hasAudioSource, isMuted, toggleMuted],
  );

  return (
    <AudioContext.Provider value={value}>
      {hasAudioSource ? (
        <audio
          ref={audioRef}
          src={assets.audio.ambient}
          loop
          preload="auto"
          aria-hidden="true"
          onError={() => {
            setIsMuted(true);
          }}
        />
      ) : null}
      {children}
    </AudioContext.Provider>
  );
}
