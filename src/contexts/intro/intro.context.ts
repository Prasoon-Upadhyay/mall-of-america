import { createContext } from "react";

type IntroContextValue = {
  completeIntro: () => void;
  showIntro: boolean;
};

export const IntroContext = createContext<IntroContextValue | null>(null);
