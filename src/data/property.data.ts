import { assets } from "./assets";

export const propertyData = {
  name: "Mall of America",
  location: "Bloomington, Minnesota",
  eyebrow: "A destination-scale commercial platform",
  positioning:
    "North America's most iconic retail, entertainment, dining, tourism, and event destination.",
  heroAsset: assets.hero,
  primaryActions: [
    { label: "Explore Leasing", targetId: "leasing" },
    { label: "View Sponsorships", targetId: "sponsorship" },
    { label: "Book Events", targetId: "events" },
  ],
  stats: [
    {
      value: "40M+",
      label: "Annual Visitors",
      detail: "Tourism-scale traffic with national and regional draw.",
    },
    {
      value: "500+",
      label: "Stores",
      detail: "A dense ecosystem for retail, dining, lifestyle, and entertainment.",
    },
    {
      value: "5.6M",
      label: "Total Sq. Ft.",
      detail: "A mixed-use destination operating at small-city scale.",
    },
    {
      value: "7 Acres",
      label: "Indoor Theme Park",
      detail: "Nickelodeon Universe creates year-round dwell time and family traffic.",
    },
  ],
};
