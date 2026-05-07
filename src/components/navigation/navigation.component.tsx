import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useDeck } from "../../contexts/deck/deck.hooks";

/**
 * Renders non-linear chapter navigation from deck slide metadata.
 *
 * @returns The responsive deck chapter navigation.
 *
 * @example
 * ```tsx
 * <Navigation />
 * ```
 */
export function Navigation() {
  const { activeSlide, goToSlide, slides } = useDeck();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navigation-shell pointer-events-none fixed z-50 flex justify-center max-[980px]:justify-start">
      <button
        className="pointer-events-auto hidden min-h-10.5 cursor-pointer items-center gap-2 rounded-full border border-(--line) bg-[rgba(8,8,6,0.1)] px-[13px] text-[var(--soft)] backdrop-blur-[18px] max-[980px]:inline-flex"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
        <span>Menu</span>
      </button>
      <nav
        className={
          isOpen
            ? "pointer-events-auto flex gap-3 rounded-full border border-(--line) bg-[rgba(8,8,6,0.127)] p-1.5 shadow-[var(--shadow)] backdrop-blur-[22px] max-[980px]:absolute max-[980px]:left-0 max-[980px]:top-[52px] max-[980px]:w-[min(320px,calc(100vw-40px))] max-[980px]:flex-col max-[980px]:rounded-none"
            : "pointer-events-auto flex gap-3 rounded-full border border-(--line) bg-[rgba(8,8,6,0.127)] p-1.5 shadow-(--shadow) backdrop-blur-[22px] max-[980px]:absolute max-[980px]:left-0 max-[980px]:top-[52px] max-[980px]:hidden max-[980px]:w-[min(320px,calc(100vw-40px))] max-[980px]:flex-col max-[980px]:rounded-none"
        }
        aria-label="Deck chapters"
      >
        {slides.map((item) => (
          <button
            className={
              activeSlide.id === item.id
                ? "inline-flex text-sm! min-h-9 cursor-pointer items-center rounded-full border border-transparent bg-(--ink) px-3.5 text-[#11100d] backdrop-blur-[18px] max-[980px]:justify-start max-[980px]:rounded-none"
                : "inline-flex text-sm! min-h-9 cursor-pointer items-center rounded-full border border-transparent bg-transparent px-3.5 text-(--soft) backdrop-blur-[18px] transition-colors hover:text-(--gold) max-[980px]:justify-start max-[980px]:rounded-none"
            }
            key={item.id}
            onClick={() => {
              goToSlide(item.id);
              setIsOpen(false);
            }}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
