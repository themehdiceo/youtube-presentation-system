export const colors = {
  background: "#050505",
  surface: "#111111",
  surfaceElevated: "#1A1A1A",
  surfaceMuted: "#0C0C0C",

  textPrimary: "#F4F4F0",
  textSecondary: "#A8A8A3",
  textMuted: "#6B6B66",
  textInverse: "#050505",

  border: "#262626",
  borderSubtle: "#1A1A1A",
  borderStrong: "#333333",

  accentBlue: "#4F8CFF",
  accentPurple: "#A78BFA",
  accentGreen: "#34D399",
  accentYellow: "#F5C542",
  accentRed: "#F87171",
  accentOrange: "#FB923C",
} as const;

export type ColorToken = keyof typeof colors;

export const accentColors = {
  blue: colors.accentBlue,
  purple: colors.accentPurple,
  green: colors.accentGreen,
  yellow: colors.accentYellow,
  red: colors.accentRed,
  orange: colors.accentOrange,
} as const;

export type AccentColor = keyof typeof accentColors;

export const backgroundColors = {
  background: colors.background,
  surface: colors.surface,
  surfaceElevated: colors.surfaceElevated,
  surfaceMuted: colors.surfaceMuted,
} as const;

export const textColors = {
  textPrimary: colors.textPrimary,
  textSecondary: colors.textSecondary,
  textMuted: colors.textMuted,
  textInverse: colors.textInverse,
} as const;
