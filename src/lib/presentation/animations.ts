import type { Variants } from "motion/react";

export const EASE_PREMIUM: [number, number, number, number] = [
  0.25, 0.1, 0.25, 1,
];

export const REVEAL_DURATION = 0.65;
export const REVEAL_OFFSET_Y = 32;

export function getRevealVariants(reducedMotion: boolean): Variants {
  return {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : REVEAL_OFFSET_Y,
    },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.01 : REVEAL_DURATION,
        delay,
        ease: EASE_PREMIUM,
      },
    }),
  };
}

export function getStaggerContainerVariants(
  reducedMotion: boolean,
  staggerDelay = 0.08,
): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : staggerDelay,
        delayChildren: reducedMotion ? 0 : 0.15,
      },
    },
  };
}

export function getStaggerItemVariants(reducedMotion: boolean): Variants {
  return {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 20,
      scale: reducedMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0.01 : 0.5,
        ease: EASE_PREMIUM,
      },
    },
  };
}

export function getEmphasisRevealVariants(reducedMotion: boolean): Variants {
  return {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 40,
      scale: reducedMotion ? 1 : 0.92,
      filter: reducedMotion ? "blur(0px)" : "blur(8px)",
    },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: reducedMotion ? 0.01 : 0.85,
        delay,
        ease: EASE_PREMIUM,
      },
    }),
  };
}
