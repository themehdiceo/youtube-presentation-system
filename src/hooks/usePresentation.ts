"use client";

import { useCallback, useMemo, useState } from "react";
import {
  clampSlideIndex,
  getNavigationDirection,
  getSlideProgress,
} from "@/lib/presentation/navigation";
import type {
  NavigationDirection,
  PresentationNavigation,
} from "@/types/presentation";

interface UsePresentationOptions {
  totalSlides: number;
  initialSlide?: number;
}

export function usePresentation({
  totalSlides,
  initialSlide = 0,
}: UsePresentationOptions): PresentationNavigation {
  const safeInitial = clampSlideIndex(initialSlide, totalSlides);
  const [currentSlide, setCurrentSlide] = useState(safeInitial);
  const [direction, setDirection] = useState<NavigationDirection>(1);

  const goToSlide = useCallback(
    (index: number) => {
      if (totalSlides <= 0) return;

      setCurrentSlide((prev) => {
        const next = clampSlideIndex(index, totalSlides);
        if (next === prev) return prev;
        setDirection(getNavigationDirection(prev, next));
        return next;
      });
    },
    [totalSlides],
  );

  const goNext = useCallback(() => {
    if (totalSlides <= 0) return;

    setCurrentSlide((prev) => {
      const next = clampSlideIndex(prev + 1, totalSlides);
      if (next === prev) return prev;
      setDirection(1);
      return next;
    });
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    if (totalSlides <= 0) return;

    setCurrentSlide((prev) => {
      const next = clampSlideIndex(prev - 1, totalSlides);
      if (next === prev) return prev;
      setDirection(-1);
      return next;
    });
  }, [totalSlides]);

  const goFirst = useCallback(() => {
    goToSlide(0);
  }, [goToSlide]);

  const goLast = useCallback(() => {
    goToSlide(totalSlides - 1);
  }, [goToSlide, totalSlides]);

  const isFirst = currentSlide === 0;
  const isLast = totalSlides > 0 && currentSlide === totalSlides - 1;
  const progress = getSlideProgress(currentSlide, totalSlides);

  return useMemo(
    () => ({
      currentSlide,
      totalSlides,
      direction,
      isFirst,
      isLast,
      progress,
      goToSlide,
      goNext,
      goPrev,
      goFirst,
      goLast,
    }),
    [
      currentSlide,
      totalSlides,
      direction,
      isFirst,
      isLast,
      progress,
      goToSlide,
      goNext,
      goPrev,
      goFirst,
      goLast,
    ],
  );
}
