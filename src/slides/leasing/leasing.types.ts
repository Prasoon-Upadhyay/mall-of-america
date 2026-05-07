export type LeasingPathId = "flagship" | "luxury" | "popup";

export type LeasingPath = {
  id: LeasingPathId;
  title: string;
  audience: string;
  pitch: string;
  metrics: string[];
};
