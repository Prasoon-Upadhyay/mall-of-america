import { assets } from "../../data/assets";
import type { DiningVenue } from "./dining.types";

export const diningVenues: DiningVenue[] = [
  {
    id: "firelake",
    name: "FireLake Grill House + Cocktail Bar",
    category: "Hotel-connected dining",
    location: "Level 2, Radisson Blu",
    commercialRole: "Premium hospitality for travelers, executives, and hosted partner meals.",
    pitch:
      "A Minnesota-inspired farm-to-table restaurant with breakfast, lunch, dinner, lounge service, and weekend brunch gives sales teams a polished hospitality layer inside the property.",
    media: assets.dining.firelake,
    proofPoints: ["Radisson Blu connection", "Farm-to-table positioning", "All-day dining coverage"],
    sourceUrl: "https://www.mallofamerica.com/directory/firelake",
  },
  {
    id: "cedar-stone",
    name: "Cedar + Stone, Urban Table",
    category: "Premium local dining",
    location: "Level 1, JW Marriott",
    commercialRole: "Upscale hotel-adjacent dining for business travel and high-intent visits.",
    pitch:
      "A JW Marriott dining anchor built around Minnesota roots and regional producers supports executive hosting, travel demand, and premium guest itineraries.",
    media: assets.dining.cedarStone,
    proofPoints: ["JW Marriott connection", "Farmers within 200 miles", "Breakfast through dinner"],
    sourceUrl: "https://www.mallofamerica.com/directory/cedar-and-stone-urban-table",
  },
  {
    id: "twin-city-grill",
    name: "Twin City Grill",
    category: "Full-service anchor",
    location: "130 North Garden",
    commercialRole: "A familiar full-service restaurant for shoppers, groups, and repeat local guests.",
    pitch:
      "A casual-elegant dining room inspired by classic Twin Cities hospitality helps MOA convert traffic into longer visits and reliable meal occasions.",
    media: assets.dining.twinCity,
    proofPoints: ["Full-service restaurant", "North Garden placement", "Casual-elegant positioning"],
    sourceUrl: "https://www.mallofamerica.com/directory/twin-city-grill",
  },
  {
    id: "fair-on-four",
    name: "The Fair on 4",
    category: "Experiential dining",
    location: "402 East Broadway",
    commercialRole: "Food plus play for groups, parties, corporate outings, and social traffic.",
    pitch:
      "Fair food, craft drinks, go-karts, axe throwing, and games turn dining into an activity-led social destination on the fourth floor.",
    media: assets.dining.fairOnFour,
    proofPoints: ["Go-kart track", "Axe throwing", "Craft beer and cocktails"],
    sourceUrl: "https://www.mallofamerica.com/directory/26990",
  },
  {
    id: "kura-sushi",
    name: "Kura Sushi",
    category: "Tech-forward dining",
    location: "378 North Garden",
    commercialRole: "Motion-rich dining that behaves like entertainment.",
    pitch:
      "The revolving sushi format adds constant motion, novelty, and 'eater-tainment' value for guests seeking a memorable meal experience.",
    media: assets.dining.kuraSushi,
    proofPoints: ["Revolving sushi bar", "Technology-forward experience", "Premium ingredients"],
    sourceUrl: "https://www.mallofamerica.com/directory/kura-sushi",
  },
  {
    id: "sugar-factory",
    name: "Sugar Factory Express",
    category: "Social sweets",
    location: "339 South Avenue",
    commercialRole: "A shareable celebration stop for families, friends, creators, and events.",
    pitch:
      "Visually striking drinks, burgers, and sweet treats create an Instagram-ready dining moment that extends MOA's lifestyle and celebration appeal.",
    media: assets.dining.sugarFactory,
    proofPoints: ["Signature sweet treats", "Visually striking drinks", "Family and celebration traffic"],
    sourceUrl: "https://www.mallofamerica.com/directory/sugar-factory-express",
  },
];
