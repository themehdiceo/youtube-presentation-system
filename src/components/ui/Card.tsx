import type { AccentColor } from "@/design-system/colors";
import { cn } from "@/lib/cn";

type CardVariant = "default" | "elevated" | "outline" | "muted" | "accent";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  accent?: AccentColor;
}

const variantClasses: Record<CardVariant, string> = {
  default: "bg-surface border border-border",
  elevated: "bg-surface-elevated border border-border shadow-md",
  outline: "bg-transparent border border-border-strong",
  muted: "bg-surface-muted border border-border-subtle",
  accent: "bg-surface border border-border",
};

const accentBorderClasses: Record<AccentColor, string> = {
  blue: "border-accent-blue/40",
  purple: "border-accent-purple/40",
  green: "border-accent-green/40",
  yellow: "border-accent-yellow/40",
  red: "border-accent-red/40",
  orange: "border-accent-orange/40",
};

const accentGlowClasses: Record<AccentColor, string> = {
  blue: "shadow-glow-blue",
  purple: "shadow-glow-purple",
  green: "shadow-glow-green",
  yellow: "shadow-md",
  red: "shadow-md",
  orange: "shadow-md",
};

export function Card({
  children,
  className,
  variant = "default",
  accent,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-8",
        variantClasses[variant],
        variant === "accent" && accent && accentBorderClasses[accent],
        variant === "accent" && accent && accentGlowClasses[accent],
        className,
      )}
    >
      {children}
    </div>
  );
}
