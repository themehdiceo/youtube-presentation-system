import { typography } from "@/design-system/typography";
import type { TypographyVariant } from "@/design-system/typography";
import { cn } from "@/lib/cn";

type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "span"
  | "div"
  | "blockquote"
  | "label";

const variantStyles: Record<TypographyVariant, string> = {
  display: "text-display font-extrabold tracking-display text-text-primary",
  h1: "text-h1 font-bold tracking-h1 text-text-primary",
  h2: "text-h2 font-bold tracking-h2 text-text-primary",
  h3: "text-h3 font-semibold tracking-h3 text-text-primary",
  bodyLarge: "text-body-lg text-text-primary",
  body: "text-body text-text-secondary",
  caption: "text-caption text-text-muted",
  eyebrow:
    "text-eyebrow uppercase tracking-eyebrow text-text-secondary font-semibold",
  quote: "text-quote text-text-primary italic",
  metric: "text-metric font-extrabold tracking-metric text-text-primary tabular-nums",
};

const defaultElements: Record<TypographyVariant, TypographyElement> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  bodyLarge: "p",
  body: "p",
  caption: "p",
  eyebrow: "span",
  quote: "blockquote",
  metric: "p",
};

interface TypographyProps {
  as?: TypographyElement;
  variant: TypographyVariant;
  className?: string;
  children: React.ReactNode;
}

export function Typography({
  as,
  variant,
  className,
  children,
}: TypographyProps) {
  const Component = as ?? defaultElements[variant];

  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
}

export { typography };
