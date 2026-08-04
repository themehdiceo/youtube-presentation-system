export const fontFamily = {
  sans: "var(--font-geist-sans), system-ui, sans-serif",
  mono: "var(--font-geist-mono), ui-monospace, monospace",
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
} as const;

export const typography = {
  display: {
    fontSize: "6rem",
    lineHeight: "1.05",
    letterSpacing: "-0.03em",
    fontWeight: fontWeight.extrabold,
  },
  h1: {
    fontSize: "4.5rem",
    lineHeight: "1.08",
    letterSpacing: "-0.025em",
    fontWeight: fontWeight.bold,
  },
  h2: {
    fontSize: "3.5rem",
    lineHeight: "1.12",
    letterSpacing: "-0.02em",
    fontWeight: fontWeight.bold,
  },
  h3: {
    fontSize: "2.5rem",
    lineHeight: "1.2",
    letterSpacing: "-0.015em",
    fontWeight: fontWeight.semibold,
  },
  bodyLarge: {
    fontSize: "2rem",
    lineHeight: "1.45",
    letterSpacing: "-0.01em",
    fontWeight: fontWeight.regular,
  },
  body: {
    fontSize: "1.5rem",
    lineHeight: "1.5",
    letterSpacing: "-0.005em",
    fontWeight: fontWeight.regular,
  },
  caption: {
    fontSize: "1.125rem",
    lineHeight: "1.5",
    letterSpacing: "0",
    fontWeight: fontWeight.medium,
  },
  eyebrow: {
    fontSize: "0.875rem",
    lineHeight: "1.4",
    letterSpacing: "0.12em",
    fontWeight: fontWeight.semibold,
  },
  quote: {
    fontSize: "2.25rem",
    lineHeight: "1.4",
    letterSpacing: "-0.01em",
    fontWeight: fontWeight.medium,
  },
  metric: {
    fontSize: "5rem",
    lineHeight: "1",
    letterSpacing: "-0.03em",
    fontWeight: fontWeight.extrabold,
  },
} as const;

export type TypographyVariant = keyof typeof typography;
