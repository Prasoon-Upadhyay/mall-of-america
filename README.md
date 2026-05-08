# Mall of America | North America’s Largest Mall

Browser-based sales deck for pitching Mall of America to prospective tenants, sponsors, and event partners. The experience is built as a non-linear presentation tool: a cinematic intro leads into a chaptered deck with video-led storytelling, audience-specific pitch paths, interactive leasing, dining, entertainment, events, sponsorship, and contact sections.

## Tech Stack

- React 19
- TypeScript
- Vite
- TailwindCSS 
- Framer Motion
- Lucide React
- Vercel CDN & Deployment

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## System Design

- Deep System Design of this Application: https://excalidraw.com/#json=PIlItTONpAadY3VgzDjwo,TTlQVXTyullQTIRh_hp7Lg

## Project Structure

```txt
src/
  app/
    app.tsx
  components/
    animation/
      scroll-reveal.component.tsx
    deck/
      deck-controls.component.tsx
      deck-track.component.tsx
      deck.types.ts
    hero/
      hero-stats.component.tsx
      hero-video.component.tsx
    intro/
      cinematic-intro.component.tsx
      intro-overlay.component.tsx
    media/
      deck-media.component.tsx
    navigation/
      navigation.component.tsx
      navigation.types.ts
    sections/
      chapter-section.component.tsx
  contexts/
    audience/
    audio/
    deck/
    intro/
  data/
    assets.ts
    audience.data.ts
    deck-slides.data.tsx
    overview.data.ts
    property.data.ts
  hooks/
    use-deck-navigation.ts
    use-video-playback-in-view.ts
    use-window-event.ts
  slides/
    contact/
    dining/
    entertainment/
    events/
    leasing/
    opening/
    pitch-paths/
    sponsorship/
    why-moa/
  styles/
    globals.css
```

## Experience Overview

- `Opening`: Hero video, Property Positioning, and primary Commercial CTAs.
- `Why MOA`: Destination-scale Positioning with proof points.
- `Pitch Paths`: Segmented pitch flow for tenants, sponsors, and event partners.
- `Leasing`: Interactive leasing path selector with category-specific imagery.
- `Entertainment`: Cinematic video background with staggered attraction reveals.
- `Dining`: Scroll-revealed Dining modules with alternating image and copy layout.
- `Events`: Event capability cards with Booking-oriented CTAs.
- `Sponsorship`: Partnership Tier cards and Activation Inventory.
- `Contact`: final commercial action hub.

## Architecture Notes

- Slide metadata lives in `src/data/deck-slides.data.tsx`.
- Most slides are lazy-loaded with `React.lazy` and rendered only when active in `DeckTrack`.
- Deck state is centralized in `DeckProvider` through `useDeckNavigation`.
- Audience selection is managed by `AudienceProvider` and used by the pitch-path slide.
- Intro lifecycle is managed by `IntroProvider`; `CinematicIntro` can be skipped or completed when its video ends.
- Ambient audio state is managed by `AudioProvider` and controlled from the intro and deck controls.
- `DeckMedia` is the shared media primitive for image/video rendering, readiness state, and scroll-aware video playback.

## Asset Workflow

All hosted assets referenced are live in `src/data/assets.ts`.

Current assets are served from:

```txt
https://moa-assets.vercel.app/
```

The app references compressed `.webp` imagery, `.mp4` video, and one ambient `.mp3` audio track from that CDN. `index.html` includes DNS prefetch and preconnect hints for the asset host.

## Performance Notes

- Slide Chunks are code-split at the slide level.
- Inactive slides are not rendered inside `DeckTrack`, reducing active DOM and media work.
- Videos use `DeckMedia` and `useVideoPlaybackInView` so deck videos pause when not meaningfully visible.
- Images use lazy loading where they are not immediately needed.

## Design Direction

The deck is designed as a premium, cinematic sales presentation rather than a conventional mall website. The interface keeps navigation available, lets the viewer choose their path, and pushes every chapter toward one of the core business actions:

- Leasing Conversations
- Sponsorship Conversations
- Event Bookings

