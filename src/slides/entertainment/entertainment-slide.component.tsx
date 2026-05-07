import { assets } from "../../data/assets";
import { MediaSection } from "../../components/sections/media-section.component";

export default function EntertainmentSlide() {
  return (
    <MediaSection
      id="entertainment"
      kicker="Entertainment engine"
      title="The traffic driver traditional centers cannot manufacture."
      body="Nickelodeon Universe, SEA LIFE, and family attractions make the property a leisure anchor, expanding visit reasons beyond transactions."
      media={assets.videos.entertainment}
      mediaVariant="immersive"
      stats={[
        "Indoor theme park energy",
        "Family and tourism demand",
        "Year-round weather-proof programming",
      ]}
    />
  );
}
