export type DiningVenueId =
  | "firelake"
  | "cedar-stone"
  | "twin-city-grill"
  | "fair-on-four"
  | "kura-sushi"
  | "sugar-factory";

export type DiningVenue = {
  id: DiningVenueId;
  name: string;
  category: string;
  location: string;
  pitch: string;
  media: string;
};
