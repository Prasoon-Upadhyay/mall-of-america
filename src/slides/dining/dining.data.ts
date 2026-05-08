import { assets } from "../../data/assets";
import type { DiningVenue } from "./dining.types";

export const diningVenues: DiningVenue[] = [
  {
    id: "firelake",
    name: "FireLake Grill House + Cocktail Bar",
    category: "Hotel-connected dining",
    location: "Level 2, Radisson Blu",
    pitch:
      "A Minnesota-inspired farm-to-table restaurant with breakfast, lunch, dinner, lounge service, and weekend brunch gives sales teams a polished hospitality layer inside the property.",
    media: assets.dining.firelake,
  },
  {
    id: "cedar-stone",
    name: "Cedar + Stone, Urban Table",
    category: "Premium local dining",
    location: "Level 1, JW Marriott",
    pitch:
      "A JW Marriott dining anchor built around Minnesota roots and regional producers supports executive hosting, travel demand, and premium guest itineraries.",
    media: assets.dining.cedarStone,
  },
  {
    id: "twin-city-grill",
    name: "Twin City Grill",
    category: "Full-service anchor",
    location: "130 North Garden",
    pitch:
      "A casual-elegant dining room inspired by classic Twin Cities hospitality helps MOA convert traffic into longer visits and reliable meal occasions.",
    media: assets.dining.twinCity,
  },
  {
    id: "fair-on-four",
    name: "The Fair on 4",
    category: "Experiential dining",
    location: "402 East Broadway",
    pitch:
      "Fair food, craft drinks, go-karts, axe throwing, and games turn dining into an activity-led social destination on the fourth floor.",
    media: assets.dining.fairOnFour,
  },
  {
    id: "kura-sushi",
    name: "Kura Sushi",
    category: "Tech-forward dining",
    location: "378 North Garden",
    pitch:
      "The revolving sushi format adds constant motion, novelty, and 'eater-tainment' value for guests seeking a memorable meal experience.",
    media: assets.dining.kuraSushi,
  },
  {
    id: "sugar-factory",
    name: "Sugar Factory Express",
    category: "Social sweets",
    location: "339 South Avenue",
    pitch:
      "Visually striking drinks, burgers, and sweet treats create an Instagram-ready dining moment that extends MOA's lifestyle and celebration appeal.",
    media: assets.dining.sugarFactory,
  },
];
