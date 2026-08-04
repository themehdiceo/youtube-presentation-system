import type { AccentColor } from "@/design-system/colors";
import { cn } from "@/lib/cn";

type IconBoxSize = "sm" | "md" | "lg";

interface IconBoxProps {
  children: React.ReactNode;
  className?: string;
  size?: IconBoxSize;
  accent?: AccentColor;
}

const sizeClasses: Record<IconBoxSize, string> = {
  sm: "h-12 w-12 rounded-lg [&_svg]:h-5 [&_svg]:w-5",
  md: "h-16 w-16 rounded-xl [&_svg]:h-7 [&_svg]:w-7",
  lg: "h-20 w-20 rounded-2xl [&_svg]:h-9 [&_svg]:w-9",
};

const accentClasses: Record<AccentColor, string> = {
  blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  purple: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
  green: "bg-accent-green/10 text-accent-green border-accent-green/20",
  yellow: "bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20",
  red: "bg-accent-red/10 text-accent-red border-accent-red/20",
  orange: "bg-accent-orange/10 text-accent-orange border-accent-orange/20",
};

export function IconBox({
  children,
  className,
  size = "md",
  accent = "blue",
}: IconBoxProps) {
  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center border",
        sizeClasses[size],
        accentClasses[accent],
        className,
      )}
    >
      {children}
    </div>
  );
}
