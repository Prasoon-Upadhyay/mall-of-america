import { createContext } from "react";

export type AudioContextValue = {
  error: string | null;
  hasAudioSource: boolean;
  isMuted: boolean;
  playbackState: "idle" | "playing" | "blocked" | "error";
  toggleMuted: () => void;
};

export const AudioContext = createContext<AudioContextValue | null>(null);
