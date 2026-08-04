import { cn } from "@/lib/cn";

type DividerOrientation = "horizontal" | "vertical";
type DividerVariant = "subtle" | "accent";

interface DividerProps {
  className?: string;
  orientation?: DividerOrientation;
  variant?: DividerVariant;
}

const orientationClasses: Record<DividerOrientation, string> = {
  horizontal: "w-full h-px",
  vertical: "h-full w-px min-h-8",
};

const variantClasses: Record<DividerVariant, string> = {
  subtle: "bg-border-subtle",
  accent: "bg-border-strong",
};

export function Divider({
  className,
  orientation = "horizontal",
  variant = "subtle",
}: DividerProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        orientationClasses[orientation],
        variantClasses[variant],
        className,
      )}
    />
  );
}
