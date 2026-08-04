import type { AccentColor } from "@/design-system/colors";

export type SlideAccent = AccentColor;

export type SlideTransition = "fade" | "slide" | "scale" | "none";

export type NavigationDirection = 1 | -1;

export interface SlideMeta {
  id: string;
  title?: string;
  accent?: SlideAccent;
}

export interface PresentationState {
  currentSlide: number;
  totalSlides: number;
  direction: NavigationDirection;
  isFullscreen: boolean;
}

export interface PresentationNavigation {
  currentSlide: number;
  totalSlides: number;
  direction: NavigationDirection;
  isFirst: boolean;
  isLast: boolean;
  progress: number;
  goToSlide: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  goFirst: () => void;
  goLast: () => void;
}

export interface PresentationEngineProps {
  slides: React.ReactNode[];
  initialSlide?: number;
  showControls?: boolean;
  showProgress?: boolean;
  transition?: SlideTransition;
  className?: string;
}
