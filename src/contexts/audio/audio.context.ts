import { createContext } from "react";

type AudioContextValue = {
  hasAudioSource: boolean;
  isMuted: boolean;
  toggleMuted: () => void;
};

export const AudioContext = createContext<AudioContextValue | null>(null);
