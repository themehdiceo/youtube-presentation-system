"use client";

import { Reveal } from "@/components/slides/Reveal";
import { Typography } from "@/components/ui/Typography";
import type { AccentColor } from "@/design-system/colors";
import { cn } from "@/lib/cn";

interface ComparisonColumn {
  title: string;
  items: string[];
  accent: AccentColor;
  muted?: boolean;
}

interface ComparisonColumnsProps {
  left: ComparisonColumn;
  right: ComparisonColumn;
  className?: string;
}

const accentTitleClasses: Record<AccentColor, string> = {
  blue: "text-accent-blue",
  purple: "text-accent-purple",
  green: "text-accent-green",
  yellow: "text-accent-yellow",
  red: "text-accent-red",
  orange: "text-accent-orange",
};

const accentBorderClasses: Record<AccentColor, string> = {
  blue: "border-accent-blue/30",
  purple: "border-accent-purple/30",
  green: "border-accent-green/30",
  yellow: "border-accent-yellow/30",
  red: "border-accent-red/30",
  orange: "border-accent-orange/30",
};

function ComparisonColumnPanel({
  column,
  delay,
}: {
  column: ComparisonColumn;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div
        className={cn(
          "flex h-full flex-col gap-8 rounded-2xl border bg-surface p-10",
          accentBorderClasses[column.accent],
          column.muted && "opacity-60",
        )}
      >
        <Typography
          variant="h2"
          className={cn("text-balance", accentTitleClasses[column.accent])}
        >
          {column.title}
        </Typography>
        <ul className="flex flex-col gap-5">
          {column.items.map((item, index) => (
            <li key={item}>
              <Reveal delay={delay + 0.15 + index * 0.1}>
                <Typography variant="bodyLarge" className="text-text-secondary">
                  {item}
                </Typography>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function ComparisonColumns({
  left,
  right,
  className,
}: ComparisonColumnsProps) {
  return (
    <div
      className={cn(
        "grid w-full max-w-content grid-cols-2 gap-8",
        className,
      )}
    >
      <ComparisonColumnPanel column={left} delay={0.2} />
      <ComparisonColumnPanel column={right} delay={0.35} />
    </div>
  );
}
