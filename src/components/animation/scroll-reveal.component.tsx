import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";

type ScrollRevealProps = PropsWithChildren<
  {
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "scale";
    once?: boolean;
  } & Pick<HTMLMotionProps<"div">, "style">
>;

const directionOffset = {
  up: { x: 0, y: 42, scale: 1 },
  down: { x: 0, y: -34, scale: 1 },
  left: { x: 46, y: 0, scale: 1 },
  right: { x: -46, y: 0, scale: 1 },
  scale: { x: 0, y: 22, scale: 0.96 },
};

const premiumEase = [0.16, 1, 0.3, 1] as const;

/**
 * Reveals content as it enters the viewport.
 *
 * @param props - Reveal configuration and children.
 * @returns An animated wrapper around the supplied children.
 *
 * @example
 * ```tsx
 * <ScrollReveal direction="left">
 *   <h2>Events Platform</h2>
 * </ScrollReveal>
 * ```
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  style,
}: ScrollRevealProps) {
  const offset = directionOffset[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(12px)", ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.24, margin: "0px 0px -12% 0px" }}
      transition={{
        delay,
        duration: 0.82,
        ease: premiumEase,
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.62, ease: premiumEase },
  },
};
