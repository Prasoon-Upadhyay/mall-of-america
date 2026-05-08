import { assets } from "../../data/assets";
import type { EntertainmentAttraction, EntertainmentOverview } from "./entertainment.types";

export const entertainmentOverview: EntertainmentOverview = {
  id: "overview",
  name: "Entertainment ecosystem",
  category: "Overview",
  location: "Property-wide destination layer",
  commercialRole: "A year-round leisure platform that keeps MOA relevant beyond shopping trips.",
  pitch:
    "The entertainment mix gives brands access to families, tourists, groups, and social visitors through multiple ticketed and experiential reasons to visit.",
  media: assets.entertainment.overview,
  proofPoints: [
    "Theme park, aquarium, creative play, rides, and group experiences",
    "Weather-proof demand generation",
    "Natural platform for sponsorships and activations",
  ],
};

export const entertainmentAttractions: EntertainmentAttraction[] = [
  {
    id: "nickelodeon-universe",
    name: "Nickelodeon Universe",
    category: "Theme park anchor",
    location: "5100 Center Court",
    commercialRole: "The always-on family traffic engine at the center of the property.",
    pitch:
      "Seven acres of indoor rides, characters, dining, and retail give MOA a weather-proof entertainment core that turns shopping trips into full-day visits.",
    media: assets.entertainment.nickelodeon,
    proofPoints: ["First indoor Nickelodeon theme park", "Seven-acre attraction footprint", "Group rates for 15+ guests"],
    sourceUrl: "https://mallofamerica.com/directory/nickelodeon-universe",
  },
  {
    id: "sea-life",
    name: "SEA LIFE Minnesota Aquarium",
    category: "Destination attraction",
    location: "120 East Broadway",
    commercialRole: "A premium family draw with tourism-grade dwell time.",
    pitch:
      "SEA LIFE adds a ticketed discovery experience with thousands of sea creatures, a 300-foot ocean tunnel, and 1.3 million gallons of immersive aquarium environments.",
    media: assets.entertainment.seaLife,
    proofPoints: ["1.3 million gallons", "300-foot ocean tunnel", "Sharks, sea turtles, rays, jellyfish"],
    sourceUrl: "https://www.mallofamerica.com/directory/sea-life-minnesota-aquarium",
  },
  {
    id: "crayola-experience",
    name: "Crayola Experience",
    category: "Creative family play",
    location: "300 South Avenue",
    commercialRole: "Hands-on programming for family, school, and youth audiences.",
    pitch:
      "More than 20 hands-on activities turn creative play into a repeatable family itinerary, ideal for brand moments built around participation.",
    media: assets.entertainment.crayola,
    proofPoints: ["20+ hands-on activities", "4-D art experiences", "Group rates for 15+ guests"],
    sourceUrl: "https://mallofamerica.com/directory/crayola-experience",
  },
  {
    id: "escape-game",
    name: "The Escape Game",
    category: "Group experience",
    location: "300 East Broadway",
    commercialRole: "A social, team-building format for corporate and group traffic.",
    pitch:
      "Seven 60-minute themed adventures make MOA relevant for corporate outings, team-building, date nights, and repeat social visits.",
    media: assets.entertainment.escapeGame,
    proofPoints: ["Seven themed rooms", "60-minute adventures", "Corporate team-building fit"],
    sourceUrl: "https://mallofamerica.com/directory/the-escape-game",
  },
];
