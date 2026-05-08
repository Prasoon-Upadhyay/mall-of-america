import { assets } from "../../data/assets";
import type { EntertainmentAttraction, EntertainmentOverview } from "./entertainment.types";

export const entertainmentOverview: EntertainmentOverview = {
  media: assets.entertainment.overview,
};

export const entertainmentAttractions: EntertainmentAttraction[] = [
  {
    id: "nickelodeon-universe",
    name: "Nickelodeon Universe",
    category: "Theme park anchor",
    location: "5100 Center Court",
    media: assets.entertainment.nickelodeon,
  },
  {
    id: "sea-life",
    name: "SEA LIFE Minnesota Aquarium",
    category: "Destination attraction",
    location: "120 East Broadway",
    media: assets.entertainment.seaLife,
  },
  {
    id: "crayola-experience",
    name: "Crayola Experience",
    category: "Creative family play",
    location: "300 South Avenue",
    media: assets.entertainment.crayola,
  },
  {
    id: "escape-game",
    name: "The Escape Game",
    category: "Group experience",
    location: "300 East Broadway",
    media: assets.entertainment.escapeGame,
  },
];
