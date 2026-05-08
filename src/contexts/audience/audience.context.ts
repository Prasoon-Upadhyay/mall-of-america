import { createContext } from "react";
import type { Audience } from "../../data/audience.data";

type AudienceContextValue = {
    audience: Audience;
    setAudience: (audience: Audience) => void;
};

export const AudienceContext = createContext<AudienceContextValue | null>(null);
