import { Building2, CalendarDays, Handshake } from "lucide-react";
import { assets } from "./assets";

export type Audience = "tenant" | "sponsor" | "producer";

export const audienceContent = {
  tenant: {
    label: "Tenants",
    icon: Building2,
    headline: "Build a store people plan trips around.",
    body: "Use destination traffic, entertainment adjacency, and flexible formats to turn retail into a flagship-level growth channel.",
    video: assets.videos.pitchTenants,
    targetId: "leasing",
  },
  sponsor: {
    label: "Sponsors",
    icon: Handshake,
    headline: "Own attention before, during, and after the visit.",
    body: "Connect media, space, events, and content capture into an always-on brand platform.",
    video: assets.videos.pitchSponsors,
    targetId: "sponsorship",
  },
  producer: {
    label: "Event Partners",
    icon: CalendarDays,
    headline: "Bring a launch, concert, or fan moment to built-in audience.",
    body: "Program a property that already has flow, dwell time, and multi-generational pull.",
    video: assets.videos.pitchEvents,
    targetId: "events",
  },
};
