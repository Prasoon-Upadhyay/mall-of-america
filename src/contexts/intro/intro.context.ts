import { createContext } from "react";

export type IntroContextValue = {
  completeIntro: () => void;
  showIntro: boolean;
};

export const IntroContext = createContext<IntroContextValue | null>(null);
