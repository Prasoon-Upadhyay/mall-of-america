import { assets } from "../../data/assets";
import type { EntertainmentAttraction } from "./entertainment.types";

export const entertainmentMedia = assets.videos.entertainment;

export const entertainmentAttractions: EntertainmentAttraction[] = [
  {
    id: "nickelodeon-universe",
    name: "Nickelodeon Universe",
    category: "Theme park anchor",
    location: "5100 Center Court",
    commercialRole: "The always-on family traffic engine at the center of the property.",
    pitch:
      "Seven acres of indoor rides, characters, dining, and retail give MOA a weather-proof entertainment core that turns shopping trips into full-day visits.",
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
    proofPoints: ["20+ hands-on activities", "4-D art experiences", "Group rates for 15+ guests"],
    sourceUrl: "https://mallofamerica.com/directory/crayola-experience",
  },
  {
    id: "flyover-america",
    name: "FlyOver America",
    category: "Immersive ride",
    location: "5120 Center Court",
    commercialRole: "A cinematic attraction that adds spectacle and group booking potential.",
    pitch:
      "Virtual flight technology, motion, wind, mist, and scents create a high-sensory attraction that broadens the property beyond retail and dining.",
    proofPoints: ["Immersive virtual flight", "Group rates for 15+ guests", "Wind, mist, and scent effects"],
    sourceUrl: "https://www.mallofamerica.com/directory/flyover-america",
  },
  {
    id: "escape-game",
    name: "The Escape Game",
    category: "Group experience",
    location: "300 East Broadway",
    commercialRole: "A social, team-building format for corporate and group traffic.",
    pitch:
      "Seven 60-minute themed adventures make MOA relevant for corporate outings, team-building, date nights, and repeat social visits.",
    proofPoints: ["Seven themed rooms", "60-minute adventures", "Corporate team-building fit"],
    sourceUrl: "https://mallofamerica.com/directory/the-escape-game",
  },
];
