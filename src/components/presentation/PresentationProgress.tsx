"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

interface PresentationProgressProps {
  progress: number;
  currentSlide: number;
  totalSlides: number;
  className?: string;
}

export function PresentationProgress({
  progress,
  currentSlide,
  totalSlides,
  className,
}: PresentationProgressProps) {
  const reducedMotion = useReducedMotion();
  const percentage = Math.round(progress * 100);

  return (
    <div
      className={cn("pointer-events-none absolute inset-x-0 top-0 z-overlay", className)}
      aria-hidden={totalSlides <= 1}
    >
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        aria-label={`Progression de la présentation, slide ${currentSlide + 1} sur ${totalSlides}`}
        className="h-0.5 w-full bg-border-subtle"
      >
        <motion.div
          className="h-full origin-left bg-accent-blue"
          initial={false}
          animate={{ scaleX: progress }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.35,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ transformOrigin: "left center" }}
        />
      </div>
    </div>
  );
}
