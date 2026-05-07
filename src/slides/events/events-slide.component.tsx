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
        <ScrollReveal className="mb-[42px] max-w-[850px] [&>p:not(.eyebrow)]:max-w-[680px] [&>p:not(.eyebrow)]:text-[1.05rem]">
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
              className="capability-card overflow-hidden border border-(--line) bg-(--panel) p-6 shadow-(--shadow) backdrop-blur-[18px] max-[640px]:p-5 [&_h3]:mt-0"
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
              <a className="inline-flex items-center gap-2 font-bold text-(--ink) transition-colors hover:text-(--gold)" href="#contact">
                {getEventBookingCopy(capability.title)}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
