import type { AccentColor } from "@/design-system/colors";

export type SlideAccent = AccentColor;

export type SlideTransition = "fade" | "slide" | "scale" | "none";

export type NavigationDirection = 1 | -1;

export interface SlideMeta {
  id: string;
  title?: string;
  accent?: SlideAccent;
}

export interface PresentationSlideDefinition {
  id: string;
  content: React.ReactNode;
  /** Nombre d'états internes (indexés de 0 à steps - 1). Défaut : 1. */
  steps?: number;
}

export interface PresentationState {
  currentSlide: number;
  currentStep: number;
  totalSlides: number;
  direction: NavigationDirection;
  isFullscreen: boolean;
}

export interface PresentationNavigation {
  currentSlide: number;
  currentStep: number;
  totalSlides: number;
  totalStepsForSlide: number;
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
  slides: PresentationSlideDefinition[];
  initialSlide?: number;
  showControls?: boolean;
  showProgress?: boolean;
  showStepIndicator?: boolean;
  transition?: SlideTransition;
  className?: string;
}
