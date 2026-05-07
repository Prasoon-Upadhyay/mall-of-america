import { assets } from "../../data/assets";
import type { EventCapability } from "./events.types";

export const eventCapabilities: EventCapability[] = [
  {
    title: "Atrium Takeovers",
    description: "High-impact launch moments in naturally trafficked gathering spaces.",
    idealFor: "Product launches, celebrity appearances, media moments",
    media: assets.events.atrium,
  },
  {
    title: "Concert & Performance Programming",
    description: "Entertainment-led programming that turns visits into shared cultural moments.",
    idealFor: "Concerts, fan events, ticketed experiences",
    media: assets.events.concert,
  },
  {
    title: "Expo & Convention Concepts",
    description: "Flexible exhibition formats for brands that need audience, visibility, and dwell time.",
    idealFor: "Consumer expos, corporate showcases, immersive demos",
    media: assets.events.expo,
  },
];
