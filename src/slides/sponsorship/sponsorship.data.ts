import type { SponsorshipTier } from "./sponsorship.types";

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: "Signature Partner",
    investment: "Annual platform",
    promise: "Own a recurring destination-scale presence across media, events, and physical space.",
    inventory: ["Hero-zone naming", "Digital media rotations", "Seasonal activation rights"],
  },
  {
    name: "Campaign Takeover",
    investment: "Launch window",
    promise: "Turn a product or brand moment into an immersive consumer experience.",
    inventory: ["Atrium activation", "Influencer event support", "Content capture moments"],
  },
  {
    name: "Experiential Pop-Up",
    investment: "Flexible term",
    promise: "Meet consumers in-market with measurable engagement and sales lift potential.",
    inventory: ["Pop-up footprint", "Sampling", "Retail conversion path"],
  },
];
