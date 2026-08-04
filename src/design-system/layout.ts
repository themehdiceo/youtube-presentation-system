export const slide = {
  width: 1920,
  height: 1080,
  aspectRatio: "16 / 9",
} as const;

export const content = {
  maxWidth: "1600px",
  maxWidthNarrow: "1200px",
} as const;

export const safeArea = {
  horizontal: "5rem",
  vertical: "4rem",
} as const;

export const zIndex = {
  base: 0,
  content: 10,
  header: 20,
  footer: 20,
  overlay: 30,
  modal: 40,
  tooltip: 50,
} as const;

export const layout = {
  slide,
  content,
  safeArea,
  zIndex,
} as const;
