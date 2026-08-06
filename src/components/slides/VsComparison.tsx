"use client";

import { Reveal } from "@/components/slides/Reveal";
import { Typography } from "@/components/ui/Typography";
import type { AccentColor } from "@/design-system/colors";
import { cn } from "@/lib/cn";

interface VsComparisonProps {
  left: { label: string; accent?: AccentColor };
  right: { label: string; accent?: AccentColor };
  className?: string;
  delay?: number;
}

const accentTextClasses: Record<AccentColor, string> = {
  blue: "text-accent-blue",
  purple: "text-accent-purple",
  green: "text-accent-green",
  yellow: "text-accent-yellow",
  red: "text-accent-red",
  orange: "text-accent-orange",
};

const accentPanelClasses: Record<AccentColor, string> = {
  blue: "border-accent-blue/30 bg-accent-blue/5 text-accent-blue",
  purple: "border-accent-purple/30 bg-accent-purple/5 text-accent-purple",
  green: "border-accent-green/30 bg-accent-green/5 text-accent-green",
  yellow: "border-accent-yellow/30 bg-accent-yellow/5 text-accent-yellow",
  red: "border-accent-red/30 bg-accent-red/5 text-accent-red",
  orange: "border-accent-orange/30 bg-accent-orange/5 text-accent-orange",
};

export function VsComparison({
  left,
  right,
  className,
  delay = 1.8,
}: VsComparisonProps) {
  return (
    <div
      className={cn(
        "flex w-full max-w-content items-center gap-8",
        className,
      )}
    >
      <Reveal delay={delay}>
        <div
          className={cn(
            "flex-1 rounded-2xl border p-8 text-center",
            left.accent
              ? accentPanelClasses[left.accent]
              : "border-border bg-surface",
          )}
        >
          <Typography
            variant="h3"
            className={left.accent ? accentTextClasses[left.accent] : ""}
          >
            {left.label}
          </Typography>
        </div>
      </Reveal>

      <Reveal delay={delay + 0.15}>
        <Typography variant="h2" className="shrink-0 text-text-muted">
          VS
        </Typography>
      </Reveal>

      <Reveal delay={delay + 0.3} emphasis>
        <div
          className={cn(
            "flex-1 rounded-2xl border p-8 text-center",
            right.accent
              ? cn(accentPanelClasses[right.accent], "shadow-glow-green")
              : "border-border bg-surface",
          )}
        >
          <Typography
            variant="h3"
            className={right.accent ? accentTextClasses[right.accent] : ""}
          >
            {right.label}
          </Typography>
        </div>
      </Reveal>
    </div>
  );
}
