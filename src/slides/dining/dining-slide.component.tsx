import { assets } from "../../data/assets";
import { MediaSection } from "../../components/sections/media-section.component";

export default function DiningSlide() {
  return (
    <MediaSection
      id="dining"
      kicker="Dining & lifestyle"
      title="Food, social time, and repeat visits move together."
      body="Dining is positioned as part of the full-day itinerary: a reason to stay longer, meet friends, book group moments, and return."
      media={assets.dining.lifestyle}
      stats={["Full-day itineraries", "Group traffic", "Lifestyle-oriented dwell time"]}
      reverse
    />
  );
}
