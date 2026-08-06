"use client";

import { Stagger, StaggerItem } from "@/components/slides/Stagger";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/cn";

type StatementTone = "negative" | "positive" | "neutral";

interface StatementCardProps {
  children: React.ReactNode;
  tone?: StatementTone;
  className?: string;
}

const toneConfig: Record<
  StatementTone,
  { icon: string; border: string; bg: string }
> = {
  negative: {
    icon: "✕",
    border: "border-accent-red/30",
    bg: "bg-accent-red/5",
  },
  positive: {
    icon: "✓",
    border: "border-accent-green/30",
    bg: "bg-accent-green/5",
  },
  neutral: {
    icon: "•",
    border: "border-border",
    bg: "bg-surface",
  },
};

export function StatementCard({
  children,
  tone = "neutral",
  className,
}: StatementCardProps) {
  const config = toneConfig[tone];

  return (
    <div
      className={cn(
        "flex items-center gap-6 rounded-2xl border p-10",
        config.border,
        config.bg,
        className,
      )}
    >
      <span
        className={cn(
          "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-h3 font-bold",
          tone === "negative" && "bg-accent-red/10 text-accent-red",
          tone === "positive" && "bg-accent-green/10 text-accent-green",
          tone === "neutral" && "bg-surface-elevated text-text-muted",
        )}
        aria-hidden
      >
        {config.icon}
      </span>
      <Typography variant="h3" className="text-balance">
        {children}
      </Typography>
    </div>
  );
}

interface StatementGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3;
}

export function StatementGrid({
  children,
  className,
  columns = 3,
}: StatementGridProps) {
  const columnClass =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
        ? "grid-cols-2"
        : "grid-cols-3";

  return (
    <Stagger
      className={cn("grid w-full max-w-content gap-6", columnClass, className)}
      staggerDelay={0.12}
    >
      {children}
    </Stagger>
  );
}

export function StatementGridItem({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: StatementTone;
}) {
  return (
    <StaggerItem>
      <StatementCard tone={tone}>{children}</StatementCard>
    </StaggerItem>
  );
}
