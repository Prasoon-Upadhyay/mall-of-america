import { lazy } from "react";
import type { DeckSlideDefinition } from "../components/deck/deck.types";
import OpeningSlide from "../slides/opening/opening-slide.component";

const WhyMoaSlide = lazy(() => import("../slides/why-moa/why-moa-slide.component"));
const PitchPathsSlide = lazy(() => import("../slides/pitch-paths/pitch-paths-slide.component"));
const LeasingSlide = lazy(() => import("../slides/leasing/leasing-slide.component"));
const EntertainmentSlide = lazy(() => import("../slides/entertainment/entertainment-slide.component"));
const DiningSlide = lazy(() => import("../slides/dining/dining-slide.component"));
const EventsSlide = lazy(() => import("../slides/events/events-slide.component"));
const SponsorshipSlide = lazy(() => import("../slides/sponsorship/sponsorship-slide.component"));
const ContactSlide = lazy(() => import("../slides/contact/contact-slide.component"));

export const deckSlides: DeckSlideDefinition[] = [
  {
    id: "opening",
    label: "Opening",
    component: OpeningSlide,
  },
  {
    id: "why",
    label: "Why MOA",
    component: WhyMoaSlide,
  },
  {
    id: "pitch-paths",
    label: "Pitch Paths",
    component: PitchPathsSlide,
  },
  {
    id: "leasing",
    label: "Leasing",
    component: LeasingSlide,
  },
  {
    id: "entertainment",
    label: "Entertainment",
    component: EntertainmentSlide,
  },
  {
    id: "dining",
    label: "Dining",
    component: DiningSlide,
  },
  {
    id: "events",
    label: "Events",
    component: EventsSlide,
  },
  {
    id: "sponsorship",
    label: "Sponsorship",
    component: SponsorshipSlide,
  },
  {
    id: "contact",
    label: "Contact",
    component: ContactSlide,
  },
];
