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
  stepsPerSlide?: number[];
  initialSlide?: number;
}

function buildInitialSteps(totalSlides: number): Record<number, number> {
  const initial: Record<number, number> = {};
  const safeSlide = clampSlideIndex(0, totalSlides);
  initial[safeSlide] = 0;
  return initial;
}

export function usePresentation({
  totalSlides,
  stepsPerSlide = [],
  initialSlide = 0,
}: UsePresentationOptions): PresentationNavigation {
  const safeInitial = clampSlideIndex(initialSlide, totalSlides);

  const getStepsForSlide = useCallback(
    (slideIndex: number) => stepsPerSlide[slideIndex] ?? 1,
    [stepsPerSlide],
  );

  const [currentSlide, setCurrentSlide] = useState(safeInitial);
  const [direction, setDirection] = useState<NavigationDirection>(1);
  const [stepBySlide, setStepBySlide] = useState<Record<number, number>>(() =>
    buildInitialSteps(totalSlides),
  );

  const currentStep = stepBySlide[currentSlide] ?? 0;
  const totalStepsForSlide = getStepsForSlide(currentSlide);
  const maxStep = totalStepsForSlide - 1;

  const goToSlide = useCallback(
    (index: number) => {
      if (totalSlides <= 0) return;

      const nextSlide = clampSlideIndex(index, totalSlides);
      setCurrentSlide((prev) => {
        if (nextSlide === prev) return prev;
        setDirection(getNavigationDirection(prev, nextSlide));
        return nextSlide;
      });
      setStepBySlide((prev) => ({ ...prev, [nextSlide]: 0 }));
    },
    [totalSlides],
  );

  const goNext = useCallback(() => {
    if (totalSlides <= 0) return;

    const step = stepBySlide[currentSlide] ?? 0;
    const slideMaxStep = getStepsForSlide(currentSlide) - 1;

    if (step < slideMaxStep) {
      setStepBySlide((prev) => ({
        ...prev,
        [currentSlide]: step + 1,
      }));
      setDirection(1);
      return;
    }

    if (currentSlide < totalSlides - 1) {
      const nextSlide = currentSlide + 1;
      setCurrentSlide(nextSlide);
      setStepBySlide((prev) => ({ ...prev, [nextSlide]: 0 }));
      setDirection(1);
    }
  }, [currentSlide, getStepsForSlide, stepBySlide, totalSlides]);

  const goPrev = useCallback(() => {
    if (totalSlides <= 0) return;

    const step = stepBySlide[currentSlide] ?? 0;

    if (step > 0) {
      setStepBySlide((prev) => ({
        ...prev,
        [currentSlide]: step - 1,
      }));
      setDirection(-1);
      return;
    }

    if (currentSlide > 0) {
      const prevSlide = currentSlide - 1;
      const lastStep = getStepsForSlide(prevSlide) - 1;
      setCurrentSlide(prevSlide);
      setStepBySlide((prev) => ({ ...prev, [prevSlide]: lastStep }));
      setDirection(-1);
    }
  }, [currentSlide, getStepsForSlide, stepBySlide, totalSlides]);

  const goFirst = useCallback(() => {
    if (totalSlides <= 0) return;
    setCurrentSlide(0);
    setStepBySlide({ 0: 0 });
    setDirection(-1);
  }, [totalSlides]);

  const goLast = useCallback(() => {
    if (totalSlides <= 0) return;
    const lastSlide = totalSlides - 1;
    const lastStep = getStepsForSlide(lastSlide) - 1;
    setCurrentSlide(lastSlide);
    setStepBySlide((prev) => ({ ...prev, [lastSlide]: lastStep }));
    setDirection(1);
  }, [getStepsForSlide, totalSlides]);

  const isFirst = currentSlide === 0 && currentStep === 0;
  const isLast =
    totalSlides > 0 &&
    currentSlide === totalSlides - 1 &&
    currentStep >= maxStep;
  const progress = getSlideProgress(currentSlide, totalSlides);

  return useMemo(
    () => ({
      currentSlide,
      currentStep,
      totalSlides,
      totalStepsForSlide,
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
      currentStep,
      totalSlides,
      totalStepsForSlide,
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
