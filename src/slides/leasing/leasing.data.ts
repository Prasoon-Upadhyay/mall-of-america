import { assets } from "../../data/assets";
import type { LeasingPath } from "./leasing.types";

export const leasingPaths: LeasingPath[] = [
  {
    id: "flagship",
    title: "Flagship Retail",
    audience: "National and global brands",
    pitch:
      "Create a high-visibility destination store with the traffic profile of a tourism landmark.",
    metrics: ["High-frequency foot traffic", "Tourism-driven discovery", "Experiential launch potential"],
  },
  {
    id: "luxury",
    title: "Luxury & Premium",
    audience: "Luxury houses and elevated concepts",
    pitch:
      "Position premium retail inside a destination that attracts shoppers, travelers, and event audiences.",
    metrics: ["Premium storytelling", "Concierge-ready journeys", "Cross-category lifestyle context"],
  },
  {
    id: "popup",
    title: "Pop-Up & Launch",
    audience: "Emerging brands and campaign teams",
    pitch:
      "Test, launch, and activate in a physical environment designed for reach and social momentum.",
    metrics: ["Fast market read", "Flexible formats", "Campaign-friendly placement"],
  },
];

export const leasingMedia = {
  flagship: assets.retail.flagship,
  luxury: assets.retail.luxury,
  popup: assets.retail.popup,
};
