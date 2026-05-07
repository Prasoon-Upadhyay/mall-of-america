# Mall of America Interactive Sales Deck

Browser-based sales deck for pitching Mall of America to prospective tenants, sponsors, and event partners.

## Tech Stack

- React
- TypeScript
- Vite
- Framer Motion
- Lucide React
- Tailwind CSS for layout/utilities
- CSS variables and custom CSS for cinematic effects, gradients, and media treatments

## Project Structure

```txt
src/
  app/
    app.tsx
  components/
    navigation/
      navigation.component.tsx
      navigation.types.ts
    hero/
      hero-video.component.tsx
      hero-stats.component.tsx
    sections/
      chapter-section.component.tsx
      media-section.component.tsx
      cta-panel.component.tsx
  data/
    assets.ts
    audience.data.ts
    deck-slides.data.tsx
    overview.data.ts
    property.data.ts
  contexts/
    audience/
      audience.context.ts
      audience.hooks.ts
      audience.provider.tsx
    deck/
      deck.context.ts
      deck.hooks.ts
      deck.provider.tsx
  hooks/
    use-deck-navigation.ts
    use-window-event.ts
  modules/
    leasing/
      leasing.module.tsx
      leasing.data.ts
      leasing.types.ts
      leasing.utils.ts
    events/
      events.module.tsx
      events.data.ts
      events.types.ts
      events.utils.ts
    sponsorship/
      sponsorship.module.tsx
      sponsorship.data.ts
      sponsorship.types.ts
      sponsorship.utils.ts
  styles/
    globals.css
```

## Asset Workflow

All media references live in `src/data/assets.ts`.

The current values are stubs such as `STUB_ASSET_URL_HERO_VIDEO`. Replace those strings with final image or video URLs when the generated or sourced assets are ready.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Design Direction

The deck is designed as a non-linear sales tool, not a traditional mall website. It opens cinematically, keeps chapter navigation available, and routes each prospect toward a commercial path:

- Leasing
- Sponsorship
- Events

The code is domain-first so deeper modules can be added without reshaping the application.
