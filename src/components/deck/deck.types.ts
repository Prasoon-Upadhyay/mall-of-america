import type { ComponentType, LazyExoticComponent } from "react";
import type { DeckNavItem } from "../navigation/navigation.types";

type DeckSlideComponent = ComponentType | LazyExoticComponent<ComponentType>;

export type DeckSlideDefinition = DeckNavItem & {
  component: DeckSlideComponent;
};
