import { ArrowLeft, ArrowRight, Volume2, VolumeX } from "lucide-react";
import { useAudio } from "../../contexts/audio/audio.hooks";
import { useDeck } from "../../contexts/deck/deck.hooks";

/**
 * Renders previous/next controls for the active deck.
 *
 * @returns Fixed deck navigation controls and slide count.
 *
 * @example
 * ```tsx
 * <DeckControls />
 * ```
 */
export function DeckControls() {
  const { activeIndex, canGoNext, canGoPrevious, goToNext, goToPrevious, totalSlides } = useDeck();
  const { hasAudioSource, isMuted, toggleMuted } = useAudio();

  return (
    <div
      className="fixed right-5.5 bottom-5 z-50 flex items-center gap-2 border border-(--line) bg-[rgba(8,8,6,0.72)] p-1.75 shadow-(--shadow) backdrop-blur-[18px]"
      aria-label="Deck controls"
    >
      <button
        aria-label="Previous chapter"
        disabled={!canGoPrevious}
        onClick={goToPrevious}
        className="grid size-9.5 cursor-pointer place-items-center border border-[rgba(248,245,236,0.18)] bg-[rgba(248,245,236,0.08)] text-(--ink) transition-colors hover:border-[rgba(217,181,111,0.7)] hover:text-(--gold) disabled:cursor-not-allowed disabled:opacity-40"
        type="button"
      >
        <ArrowLeft size={18} aria-hidden="true" />
      </button>
      <span className="min-w-17.5 text-center text-[0.78rem] font-extrabold text-(--muted)">
        {String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
      </span>
      <button
        aria-label={isMuted ? "Unmute deck audio" : "Mute deck audio"}
        className="grid size-9.5 cursor-pointer place-items-center border border-[rgba(248,245,236,0.18)] bg-[rgba(248,245,236,0.08)] text-(--ink) transition-colors hover:border-[rgba(217,181,111,0.7)] hover:text-(--gold) disabled:cursor-not-allowed disabled:opacity-40"
        disabled={!hasAudioSource}
        onClick={toggleMuted}
        type="button"
      >
        {isMuted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
      </button>
      <button
        aria-label="Next chapter"
        className="grid size-9.5 cursor-pointer place-items-center border border-[rgba(248,245,236,0.18)] bg-[rgba(248,245,236,0.08)] text-(--ink) transition-colors hover:border-[rgba(217,181,111,0.7)] hover:text-(--gold) disabled:cursor-not-allowed disabled:opacity-40"
        disabled={!canGoNext}
        onClick={goToNext}
        type="button"
      >
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
