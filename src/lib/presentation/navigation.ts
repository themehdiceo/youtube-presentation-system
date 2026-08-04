import type { NavigationDirection } from "@/types/presentation";

/**
 * Normalise un index de slide dans les limites valides.
 * Retourne 0 si la liste est vide.
 */
export function clampSlideIndex(index: number, totalSlides: number): number {
  if (totalSlides <= 0) return 0;
  return Math.max(0, Math.min(index, totalSlides - 1));
}

/**
 * Calcule la progression normalisée (0–1).
 */
export function getSlideProgress(
  currentSlide: number,
  totalSlides: number,
): number {
  if (totalSlides <= 0) return 0;
  return (currentSlide + 1) / totalSlides;
}

/**
 * Détermine la direction de navigation entre deux index.
 */
export function getNavigationDirection(
  from: number,
  to: number,
): NavigationDirection {
  return to >= from ? 1 : -1;
}

export function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;

  const tagName = target.tagName;
  if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") {
    return true;
  }

  return target.isContentEditable;
}

export const SWIPE_THRESHOLD_PX = 50;
export const SWIPE_MAX_VERTICAL_PX = 80;
