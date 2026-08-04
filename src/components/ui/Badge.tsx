import type { AccentColor } from "@/design-system/colors";
import { cn } from "@/lib/cn";

type BadgeVariant = "neutral" | "accent" | "success" | "warning" | "danger";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: BadgeVariant;
  accent?: AccentColor;
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-surface-elevated text-text-secondary border-border",
  accent: "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
  success: "bg-accent-green/10 text-accent-green border-accent-green/30",
  warning: "bg-accent-yellow/10 text-accent-yellow border-accent-yellow/30",
  danger: "bg-accent-red/10 text-accent-red border-accent-red/30",
};

const accentClasses: Record<AccentColor, string> = {
  blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
  purple: "bg-accent-purple/10 text-accent-purple border-accent-purple/30",
  green: "bg-accent-green/10 text-accent-green border-accent-green/30",
  yellow: "bg-accent-yellow/10 text-accent-yellow border-accent-yellow/30",
  red: "bg-accent-red/10 text-accent-red border-accent-red/30",
  orange: "bg-accent-orange/10 text-accent-orange border-accent-orange/30",
};

export function Badge({
  children,
  className,
  variant = "neutral",
  accent,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-1.5 text-caption font-medium",
        variant === "accent" && accent
          ? accentClasses[accent]
          : variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
