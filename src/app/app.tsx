import { DeckControls } from "../components/deck/deck-controls.component";
import { DeckTrack } from "../components/deck/deck-track.component";
import { Navigation } from "../components/navigation/navigation.component";
import { AudienceProvider } from "../contexts/audience/audience.provider";
import { DeckProvider } from "../contexts/deck/deck.provider";
import { deckSlides } from "../data/deck-slides.data";

export function App() {
  return (
    <AudienceProvider>
      <DeckProvider slides={deckSlides}>
        <div className="app-shell h-svh overflow-x-hidden">
          <Navigation />
          <DeckTrack />
          <DeckControls />
        </div>
      </DeckProvider>
    </AudienceProvider>
  );
}
