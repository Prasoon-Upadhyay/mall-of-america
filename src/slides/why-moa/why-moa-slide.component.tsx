import { overviewData } from "../../data/overview.data";
import { ChapterSection } from "../../components/sections/chapter-section.component";

export default function WhyMoaSlide() {
  return (
    <ChapterSection
      id={overviewData.sectionId}
      kicker={overviewData.kicker}
      title={overviewData.title}
      body={overviewData.body}
      media={overviewData.media}
      mediaVariant="immersive"
      points={overviewData.points}
    />
  );
}
