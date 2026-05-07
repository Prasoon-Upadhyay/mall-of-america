export type EntertainmentAttractionId =
  | "nickelodeon-universe"
  | "sea-life"
  | "crayola-experience"
  | "flyover-america"
  | "escape-game";

export type EntertainmentAttraction = {
  id: EntertainmentAttractionId;
  name: string;
  category: string;
  location: string;
  commercialRole: string;
  pitch: string;
  proofPoints: string[];
  sourceUrl: string;
};
