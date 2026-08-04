export const shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.4)",
  md: "0 4px 12px -2px rgb(0 0 0 / 0.5)",
  lg: "0 12px 32px -8px rgb(0 0 0 / 0.6)",
  xl: "0 24px 48px -12px rgb(0 0 0 / 0.7)",
  glowBlue: "0 0 40px -8px rgb(79 140 255 / 0.35)",
  glowPurple: "0 0 40px -8px rgb(167 139 250 / 0.35)",
  glowGreen: "0 0 40px -8px rgb(52 211 153 / 0.35)",
  inner: "inset 0 1px 0 0 rgb(255 255 255 / 0.04)",
} as const;

export type ShadowToken = keyof typeof shadows;
