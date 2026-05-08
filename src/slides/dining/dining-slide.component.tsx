import { MapPin } from "lucide-react";
import { ScrollReveal } from "../../components/animation/scroll-reveal.component";
import { diningVenues } from "./dining.data";

/**
 * Renders the interactive dining and lifestyle slide.
 *
 * @returns Dining overview with venue-specific commercial detail.
 *
 * @example
 * ```tsx
 * <DiningSlide />
 * ```
 */
export default function DiningSlide() {
  return (
    <section
      className="relative overflow-hidden py-[clamp(88px,12vw,148px)] before:pointer-events-none before:absolute before:inset-[8%_auto_auto_54%] before:h-[min(420px,40vw)] before:w-[min(420px,40vw)] before:bg-[radial-gradient(circle,rgba(86,117,106,0.22),transparent_68%)] before:content-['']"
      id="dining"
    >
      <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[640px]:w-[min(100%-32px,1180px)]">
        <ScrollReveal className="mb-10.5 max-w-220 [&>p:not(.eyebrow)]:max-w-175 [&>p:not(.eyebrow)]:text-[1.05rem]">
          <p className="eyebrow">Dining & lifestyle</p>
          <h2>Food, social time, and repeat visits move together.</h2>
          <p>
            Dining is positioned as part of the full-day itinerary: a reason to stay longer, meet
            friends, book group moments, and return.
          </p>
        </ScrollReveal>

        <div className="grid gap-[clamp(22px,4vw,42px)]" aria-label="Dining venue story">
          {diningVenues.map((venue, index) => (
            <ScrollReveal
              className={
                index % 2 === 0
                  ? "mx-auto grid w-[min(980px,100%)] grid-cols-[minmax(0,0.76fr)_minmax(280px,0.68fr)] items-center gap-[clamp(18px,3.4vw,42px)] max-[820px]:grid-cols-1"
                  : "mx-auto grid w-[min(980px,100%)] grid-cols-[minmax(280px,0.68fr)_minmax(0,0.76fr)] items-center gap-[clamp(18px,3.4vw,42px)] max-[820px]:grid-cols-1"
              }
              direction={index % 2 === 0 ? "right" : "left"}
              key={venue.id}
            >
              <div
                className={
                  index % 2 === 0
                    ? "group min-w-0"
                    : "group min-w-0 max-[820px]:order-first min-[821px]:order-last"
                }
              >
                <div className="reveal-media aspect-video max-h-70 overflow-hidden border border-(--line) bg-(--panel-strong) shadow-(--shadow) transition-[border-color,box-shadow,transform] duration-300 ease-out group-hover:-translate-y-1.5 group-hover:border-[rgba(217,181,111,0.62)] group-hover:shadow-[0_22px_70px_rgba(0,0,0,0.38)]">
                  <img src={venue.media} alt="" loading="lazy" decoding="async" />
                </div>
              </div>

              <div className="min-w-0 border-t border-(--line) pt-4">
                <span className="mb-3 block text-[0.72rem] font-extrabold uppercase text-(--gold)">
                  {venue.category}
                </span>
                <h3 className="mb-3 text-[clamp(1.25rem,2vw,1.85rem)]">{venue.name}</h3>
                <p className="mb-0 flex items-center gap-2 text-(--muted)">
                  <MapPin size={15} aria-hidden="true" />
                  {venue.location}
                </p>
                <p className="mt-4 max-w-130 text-[0.96rem] leading-7 text-(--soft)">
                  {venue.pitch}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
