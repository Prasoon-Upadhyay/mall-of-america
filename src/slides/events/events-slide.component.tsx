import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  ScrollReveal,
  staggerContainer,
  staggerItem,
} from "../../components/animation/scroll-reveal.component";
import { eventCapabilities } from "./events.data";
import { getEventBookingCopy } from "./events.utils";

/**
 * Renders the expandable event-hosting slide.
 *
 * @returns Event capability cards with booking CTAs.
 *
 * @example
 * ```tsx
 * <EventsSlide />
 * ```
 */
export default function EventsSlide() {
  return (
    <section className="py-[clamp(88px,12vw,148px)]" id="events">
      <div className="mx-auto w-[min(1180px,calc(100%-48px))] max-[640px]:w-[min(100%-32px,1180px)]">
        <ScrollReveal className="mb-10.5 max-w-212.5 [&>p:not(.eyebrow)]:max-w-170 [&>p:not(.eyebrow)]:text-[1.05rem]">
          <p className="eyebrow">Events & platform</p>
          <h2>A mall-scale audience with venue-scale programming potential.</h2>
          <p>
            Treat the property as a bookable stage for launches, concerts, conventions, community
            moments, and sponsored cultural programming.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-3 gap-4 max-[980px]:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {eventCapabilities.map((capability) => (
            <motion.article
              className="capability-card flex flex-col overflow-hidden border border-(--line) bg-(--panel) p-6 shadow-(--shadow) backdrop-blur-[18px] max-[640px]:p-5 [&_h3]:mt-0"
              key={capability.title}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.22 } }}
            >
              <div className="media-frame mini overflow-hidden">
                <img src={capability.media} alt="" loading="lazy" decoding="async" />
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <strong className="my-5 block min-h-12 text-(--gold) leading-[1.45]">
                {capability.idealFor}
              </strong>
              <motion.a
                className="group/cta rounded-md mt-auto inline-flex min-h-12 items-center justify-between gap-4 overflow-hidden border border-[rgba(217,181,111,0.34)] bg-[rgba(217,181,111,0.08)] px-4 py-3 text-sm font-bold text-(--ink) shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-[border-color,background-color,color,box-shadow] duration-300 hover:border-[rgba(217,181,111,0.72)] hover:bg-[rgba(217,181,111,0.16)] hover:text-(--gold) hover:shadow-[0_16px_48px_rgba(0,0,0,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--gold)"
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {getEventBookingCopy(capability.title)}
                <span className="grid size-8 shrink-0 place-items-center border border-[rgba(217,181,111,0.36)] bg-[rgba(8,8,6,0.42)] transition-transform duration-300 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5">
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
