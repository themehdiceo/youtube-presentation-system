import type { Variants } from "motion/react";
import type { SlideTransition } from "@/types/presentation";

export const TRANSITION_DURATION = 0.45;
export const REDUCED_MOTION_DURATION = 0.01;

const SLIDE_OFFSET = 80;
const SCALE_MIN = 0.96;

function getDuration(reducedMotion: boolean): number {
  return reducedMotion ? REDUCED_MOTION_DURATION : TRANSITION_DURATION;
}

function getEase(reducedMotion: boolean): [number, number, number, number] {
  return reducedMotion ? [0, 0, 1, 1] : [0.25, 0.1, 0.25, 1];
}

function fadeVariants(reducedMotion: boolean): Variants {
  const duration = getDuration(reducedMotion);

  return {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration, ease: getEase(reducedMotion) },
    },
    exit: {
      opacity: 0,
      transition: { duration, ease: getEase(reducedMotion) },
    },
  };
}

function slideVariants(reducedMotion: boolean): Variants {
  if (reducedMotion) return fadeVariants(reducedMotion);

  const duration = getDuration(reducedMotion);

  return {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? SLIDE_OFFSET : -SLIDE_OFFSET,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration, ease: getEase(reducedMotion) },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -SLIDE_OFFSET : SLIDE_OFFSET,
      transition: { duration, ease: getEase(reducedMotion) },
    }),
  };
}

function scaleVariants(reducedMotion: boolean): Variants {
  if (reducedMotion) return fadeVariants(reducedMotion);

  const duration = getDuration(reducedMotion);

  return {
    initial: { opacity: 0, scale: SCALE_MIN },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration, ease: getEase(reducedMotion) },
    },
    exit: {
      opacity: 0,
      scale: SCALE_MIN,
      transition: { duration, ease: getEase(reducedMotion) },
    },
  };
}

function noneVariants(): Variants {
  return {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
  };
}

export function getTransitionVariants(
  transition: SlideTransition,
  reducedMotion: boolean,
): Variants {
  switch (transition) {
    case "fade":
      return fadeVariants(reducedMotion);
    case "slide":
      return slideVariants(reducedMotion);
    case "scale":
      return scaleVariants(reducedMotion);
    case "none":
      return noneVariants();
  }
}
