export type EntertainmentAttractionId =
  | "nickelodeon-universe"
  | "sea-life"
  | "crayola-experience"
  | "flyover-america"
  | "escape-game";

export type EntertainmentSelectionId = "overview" | EntertainmentAttractionId;

export type EntertainmentAttraction = {
  id: EntertainmentAttractionId;
  name: string;
  category: string;
  location: string;
  commercialRole: string;
  pitch: string;
  media: string;
  proofPoints: string[];
  sourceUrl: string;
};

export type EntertainmentOverview = Omit<EntertainmentAttraction, "id" | "sourceUrl"> & {
  id: "overview";
};
