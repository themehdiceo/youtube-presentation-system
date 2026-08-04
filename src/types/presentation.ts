import type { AccentColor } from "@/design-system/colors";

export type SlideAccent = AccentColor;

export interface SlideMeta {
  id: string;
  title?: string;
  accent?: SlideAccent;
}
