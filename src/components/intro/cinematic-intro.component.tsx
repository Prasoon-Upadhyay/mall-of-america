import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { DeckMedia } from "../media/deck-media.component";
import { useAudio } from "../../contexts/audio/audio.hooks";
import { useIntro } from "../../contexts/intro/intro.hooks";
import { assets } from "../../data/assets";

const introLines = [
  "Retail. Dining. Entertainment. Events.",
  "A destination people plan trips around.",
  "Built for attention at impossible scale.",
];

/**
 * Renders the full-screen cinematic intro before the deck is revealed.
 *
 * @returns A dismissible video intro overlay.
 *
 * @example
 * ```tsx
 * <CinematicIntro />
 * ```
 */
export function CinematicIntro() {
  const { hasAudioSource, isMuted, toggleMuted } = useAudio();
  const { completeIntro, showIntro } = useIntro();

  return (
    <motion.section
      className={
        showIntro
          ? "fixed inset-0 z-50 overflow-hidden bg-[#14110d]"
          : "pointer-events-none fixed inset-0 z-50 overflow-hidden bg-[#14110d]"
      }
      aria-label="Cinematic introduction"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-104%" }}
      transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <DeckMedia
          src={assets.hero.video}
          loading="eager"
          videoLoop={false}
          videoMuted
          videoPreload="metadata"
          onVideoEnded={completeIntro}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,17,13,0.58),rgba(20,17,13,0.16)_56%,rgba(20,17,13,0.48)),linear-gradient(180deg,rgba(20,17,13,0.08),rgba(20,17,13,0.34)_72%,rgba(20,17,13,0.66)_100%)]" />

      <div className="relative z-2 flex h-full items-end px-[clamp(22px,5vw,76px)] pb-[clamp(86px,12vh,128px)]">
        <div className="max-w-225">
          <h1 className="text-[clamp(3.8rem,10vw,9.5rem)] uppercase">Mall of America</h1>
          <div className="relative h-9 overflow-hidden">
            {introLines.map((line, index) => (
              <motion.p
                className="absolute inset-0 text-[clamp(1rem,2vw,1.32rem)] font-bold text-(--soft)"
                initial={{ opacity: 0, y: 18 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [18, 0, 0, -14],
                }}
                transition={{
                  delay: index * 1.45,
                  duration: 1.35,
                  repeat: Infinity,
                  repeatDelay: introLines.length * 1.45 - 1.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                key={line}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-3 flex items-center gap-3 max-[640px]:bottom-4 max-[640px]:right-4">
        <button
          className="grid size-11 place-items-center rounded-full border border-(--line) bg-[rgba(8,8,6,0.58)] text-(--ink) backdrop-blur-xl transition-colors hover:border-[rgba(217,181,111,0.62)] hover:text-(--gold)"
          type="button"
          onClick={toggleMuted}
          disabled={!hasAudioSource}
          aria-label={isMuted ? "Unmute deck audio" : "Mute deck audio"}
        >
          {isMuted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
        </button>
        <button
          className="h-11 rounded-full border border-[rgba(217,181,111,0.72)] bg-[rgba(217,181,111,0.14)] px-5 text-sm font-extrabold uppercase text-(--ink) backdrop-blur-xl transition-colors hover:bg-[rgba(217,181,111,0.24)]"
          type="button"
          onClick={completeIntro}
        >
          Skip intro
        </button>
      </div>
    </motion.section>
  );
}
