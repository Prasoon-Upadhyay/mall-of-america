export type EntertainmentAttractionId =
  | "nickelodeon-universe"
  | "sea-life"
  | "crayola-experience"
  | "escape-game";

export type EntertainmentAttraction = {
  id: EntertainmentAttractionId;
  name: string;
  category: string;
  location: string;
  media: string;
};

export type EntertainmentOverview = {
  media: string;
};
