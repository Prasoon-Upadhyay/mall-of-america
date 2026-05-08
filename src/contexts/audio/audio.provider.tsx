import { useEffect, useMemo, useRef, useState, type PropsWithChildren } from "react";
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
  const [error, setError] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackState, setPlaybackState] = useState<"idle" | "playing" | "blocked" | "error">(
    "idle",
  );
  const hasAudioSource = assets.audio.ambient.length > 0;

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !hasAudioSource) {
      setPlaybackState("idle");
      return;
    }

    audio.muted = isMuted;

    if (isMuted) {
      audio.pause();
      setPlaybackState("idle");
      return;
    }

    let isCancelled = false;

    audio
      .play()
      .then(() => {
        if (isCancelled) {
          return;
        }

        setError(null);
        setPlaybackState("playing");
      })
      .catch((playbackError: unknown) => {
        if (isCancelled) {
          return;
        }

        const message =
          playbackError instanceof Error ? playbackError.message : "Audio playback was blocked.";

        setError(message);
        setPlaybackState("blocked");
        setIsMuted(true);
      });

    return () => {
      isCancelled = true;
    };
  }, [hasAudioSource, isMuted]);

  const value = useMemo(
    () => ({
      error,
      hasAudioSource,
      isMuted,
      playbackState,
      toggleMuted: () => setIsMuted((muted) => !muted),
    }),
    [error, hasAudioSource, isMuted, playbackState],
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
            setError("Ambient audio could not be loaded.");
            setPlaybackState("error");
            setIsMuted(true);
          }}
        />
      ) : null}
      {children}
    </AudioContext.Provider>
  );
}
