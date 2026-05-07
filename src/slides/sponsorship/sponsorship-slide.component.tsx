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
    <section className="sponsorship-section" id="sponsorship">
      <div className="section-inner sponsorship-layout mx-auto grid items-center max-[980px]:grid-cols-1">
        <ScrollReveal className="chapter-copy" direction="right">
          <p className="eyebrow">Sponsorship platform</p>
          <h2>From media buy to physical brand world.</h2>
          <p>
            Sponsorship inventory can connect high-traffic placements, digital screens, seasonal
            programming, event moments, and measurable on-property engagement.
          </p>
        </ScrollReveal>
        <motion.div
          className="tier-stack grid"
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
              <div className="tier-topline flex items-center">
                <Sparkles size={18} aria-hidden="true" />
                <span>{tier.investment}</span>
              </div>
              <h3>{tier.name}</h3>
              <p>{tier.promise}</p>
              <div className="pill-row flex py-4 flex-wrap">
                {tier.inventory.map((item) => (
                  <span className="inline-flex items-center" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <a className="inline-flex items-center gap-2 font-bold text-(--ink) hover:text-(--gold)! hover:underline! hover:underline-offset-4! transition-all duration-400" href="#action">
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
