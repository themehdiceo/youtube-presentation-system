"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  getStaggerContainerVariants,
  getStaggerItemVariants,
} from "@/lib/presentation/animations";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function Stagger({
  children,
  className,
  staggerDelay = 0.08,
}: StaggerProps) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={getStaggerContainerVariants(reducedMotion, staggerDelay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      variants={getStaggerItemVariants(reducedMotion)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
