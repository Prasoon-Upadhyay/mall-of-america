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
      className="fixed right-[22px] bottom-5 z-50 flex items-center gap-2 border border-[var(--line)] bg-[rgba(8,8,6,0.72)] p-[7px] shadow-[var(--shadow)] backdrop-blur-[18px]"
      aria-label="Deck controls"
    >
      <button
        aria-label="Previous chapter"
        disabled={!canGoPrevious}
        onClick={goToPrevious}
        className="grid size-[38px] cursor-pointer place-items-center border border-[rgba(248,245,236,0.18)] bg-[rgba(248,245,236,0.08)] text-[var(--ink)] transition-colors hover:border-[rgba(217,181,111,0.7)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-40"
        type="button"
      >
        <ArrowLeft size={18} aria-hidden="true" />
      </button>
      <span className="min-w-[70px] text-center text-[0.78rem] font-extrabold text-[var(--muted)]">
        {String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
      </span>
      <button
        aria-label={isMuted ? "Unmute deck audio" : "Mute deck audio"}
        className="grid size-[38px] cursor-pointer place-items-center border border-[rgba(248,245,236,0.18)] bg-[rgba(248,245,236,0.08)] text-[var(--ink)] transition-colors hover:border-[rgba(217,181,111,0.7)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-40"
        disabled={!hasAudioSource}
        onClick={toggleMuted}
        type="button"
      >
        {isMuted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
      </button>
      <button
        aria-label="Next chapter"
        className="grid size-[38px] cursor-pointer place-items-center border border-[rgba(248,245,236,0.18)] bg-[rgba(248,245,236,0.08)] text-[var(--ink)] transition-colors hover:border-[rgba(217,181,111,0.7)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-40"
        disabled={!canGoNext}
        onClick={goToNext}
        type="button"
      >
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
