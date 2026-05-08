import { DeckControls } from "../components/deck/deck-controls.component";
import { DeckTrack } from "../components/deck/deck-track.component";
import { IntroOverlay } from "../components/intro/intro-overlay.component";
import { Navigation } from "../components/navigation/navigation.component";
import { AudienceProvider } from "../contexts/audience/audience.provider";
import { AudioProvider } from "../contexts/audio/audio.provider";
import { DeckProvider } from "../contexts/deck/deck.provider";
import { IntroProvider } from "../contexts/intro/intro.provider";
import { deckSlides } from "../data/deck-slides.data";

export function App() {
  return (
    <AudioProvider>
      <IntroProvider>
        <AudienceProvider>
          <DeckProvider slides={deckSlides}>
            <div className="app-shell h-svh overflow-x-hidden">
              <Navigation />
              <DeckTrack />
              <DeckControls />
              <IntroOverlay />
            </div>
          </DeckProvider>
        </AudienceProvider>
      </IntroProvider>
    </AudioProvider>
  );
}
