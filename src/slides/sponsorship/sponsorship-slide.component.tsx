import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  ScrollReveal,
  staggerContainer,
  staggerItem,
} from "../../components/animation/scroll-reveal.component";
import { sponsorshipTiers } from "./sponsorship.data";
import { formatTierCta } from "./sponsorship.utils";

/**
 * Renders sponsorship tiers and activation inventory.
 *
 * @returns Sponsorship module with tier cards and CTAs.
 *
 * @example
 * ```tsx
 * <SponsorshipSlide />
 * ```
 */
export default function SponsorshipSlide() {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(86,117,106,0.13),rgba(8,8,6,0))] py-[clamp(88px,12vw,148px)]" id="sponsorship">
      <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(28px,6vw,84px)] max-[980px]:grid-cols-1 max-[640px]:w-[min(100%-32px,1180px)]">
        <ScrollReveal className="[&>p:not(.eyebrow)]:max-w-[640px] [&>p:not(.eyebrow)]:text-[1.05rem]" direction="right">
          <p className="eyebrow">Sponsorship platform</p>
          <h2>From media buy to physical brand world.</h2>
          <p>
            Sponsorship inventory can connect high-traffic placements, digital screens, seasonal
            programming, event moments, and measurable on-property engagement.
          </p>
        </ScrollReveal>
        <motion.div
          className="grid gap-[14px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          {sponsorshipTiers.map((tier) => (
            <motion.article
              className="tier-card overflow-hidden border border-(--line) bg-[rgba(248,245,236,0.08)] p-6 shadow-(--shadow) backdrop-blur-[18px] max-[640px]:p-5"
              key={tier.name}
              variants={staggerItem}
              whileHover={{ x: -8, transition: { duration: 0.22 } }}
            >
              <div className="mb-4 flex items-center gap-[9px] text-[0.85rem] font-extrabold uppercase text-(--gold)">
                <Sparkles size={18} aria-hidden="true" />
                <span>{tier.investment}</span>
              </div>
              <h3>{tier.name}</h3>
              <p>{tier.promise}</p>
              <div className="flex flex-wrap gap-2.5 py-4">
                {tier.inventory.map((item) => (
                  <span className="inline-flex min-h-[34px] items-center border border-(--line) bg-[rgba(248,245,236,0.04)] px-3 text-[0.88rem] text-(--soft)" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <a className="inline-flex items-center gap-2 font-bold text-(--ink) hover:text-(--gold)! hover:underline! hover:underline-offset-4! transition-all duration-400" href="#contact">
                {formatTierCta(tier.name)}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
