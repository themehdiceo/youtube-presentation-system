import type { AccentColor } from "@/design-system/colors";
import { cn } from "@/lib/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  accent?: AccentColor;
}

const accentClasses: Record<AccentColor, string> = {
  blue: "text-accent-blue",
  purple: "text-accent-purple",
  green: "text-accent-green",
  yellow: "text-accent-yellow",
  red: "text-accent-red",
  orange: "text-accent-orange",
};

export function SectionLabel({
  children,
  className,
  accent = "blue",
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-eyebrow font-semibold uppercase tracking-eyebrow",
        accentClasses[accent],
        className,
      )}
    >
      <span
        className={cn("h-px w-8 bg-current opacity-60", accentClasses[accent])}
        aria-hidden
      />
      {children}
    </span>
  );
}
