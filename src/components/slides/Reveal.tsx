"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  getEmphasisRevealVariants,
  getRevealVariants,
} from "@/lib/presentation/animations";
import { useSlideStep } from "@/context/SlideStepContext";
import { cn } from "@/lib/cn";

interface StepRevealProps {
  /** Étape minimale pour afficher le contenu (0 = visible dès le début). */
  at: number;
  children: React.ReactNode;
  className?: string;
  emphasis?: boolean;
}

export function StepReveal({
  at,
  children,
  className,
  emphasis = false,
}: StepRevealProps) {
  const { step } = useSlideStep();
  const reducedMotion = useReducedMotion() ?? false;
  const visible = step >= at;
  const variants = emphasis
    ? getEmphasisRevealVariants(reducedMotion)
    : getRevealVariants(reducedMotion);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={`reveal-${at}`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          custom={0}
          variants={variants}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  emphasis?: boolean;
}

/** Révélation automatique au montage — pour les éléments décoratifs non critiques. */
export function Reveal({
  children,
  delay = 0,
  className,
  emphasis = false,
}: RevealProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const variants = emphasis
    ? getEmphasisRevealVariants(reducedMotion)
    : getRevealVariants(reducedMotion);

  return (
    <motion.div
      custom={delay}
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealGroup({ children, className }: RevealGroupProps) {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
}
