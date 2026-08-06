"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SlideStepProvider } from "@/context/SlideStepContext";
import { useFullscreen } from "@/hooks/useFullscreen";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";
import { usePresentation } from "@/hooks/usePresentation";
import { useSwipeNavigation } from "@/hooks/useSwipeNavigation";
import { getTransitionVariants } from "@/lib/presentation/transitions";
import { cn } from "@/lib/cn";
import type { PresentationEngineProps } from "@/types/presentation";
import { PresentationControls } from "./PresentationControls";
import { PresentationProgress } from "./PresentationProgress";
import { PresentationViewport } from "./PresentationViewport";
import { Typography } from "@/components/ui/Typography";

export function PresentationEngine({
  slides,
  initialSlide = 0,
  showControls = true,
  showProgress = true,
  showStepIndicator = true,
  transition = "slide",
  className,
}: PresentationEngineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;

  const stepsPerSlide = slides.map((slide) => slide.steps ?? 1);

  const navigation = usePresentation({
    totalSlides: slides.length,
    stepsPerSlide,
    initialSlide,
  });

  const fullscreen = useFullscreen(containerRef);

  useKeyboardNavigation({
    ...navigation,
    isFullscreen: fullscreen.isFullscreen,
    onToggleFullscreen: () => {
      void fullscreen.toggle();
    },
    onExitFullscreen: () => {
      void fullscreen.exit();
    },
  });

  const swipeHandlers = useSwipeNavigation({
    onSwipeLeft: navigation.goNext,
    onSwipeRight: navigation.goPrev,
    enabled: slides.length > 1,
  });

  const variants = getTransitionVariants(transition, reducedMotion);
  const activeSlide = slides[navigation.currentSlide];
  const hasInternalSteps = navigation.totalStepsForSlide > 1;

  if (slides.length === 0) {
    return (
      <div
        className={cn(
          "flex min-h-[480px] items-center justify-center rounded-2xl border border-border bg-surface",
          className,
        )}
      >
        <Typography variant="body" className="text-text-muted">
          Aucune slide à afficher.
        </Typography>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "group/presentation relative flex h-[min(80vh,calc(100vw*9/16))] w-full max-w-[min(100%,calc(80vh*16/9))] flex-col overflow-hidden rounded-2xl bg-background shadow-xl",
        fullscreen.isFullscreen && "h-screen w-screen max-w-none rounded-none",
        className,
      )}
      aria-roledescription="presentation"
      aria-label={`Présentation, slide ${navigation.currentSlide + 1} sur ${navigation.totalSlides}`}
      {...swipeHandlers}
    >
      {showProgress && navigation.totalSlides > 1 && (
        <PresentationProgress
          progress={navigation.progress}
          currentSlide={navigation.currentSlide}
          totalSlides={navigation.totalSlides}
        />
      )}

      {showStepIndicator && hasInternalSteps && (
        <div
          className="pointer-events-none absolute right-6 top-4 z-overlay flex gap-1.5"
          aria-hidden
        >
          {Array.from({ length: navigation.totalStepsForSlide }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1 w-1 rounded-full transition-colors duration-300",
                i <= navigation.currentStep
                  ? "bg-accent-blue/80"
                  : "bg-border-strong",
              )}
            />
          ))}
        </div>
      )}

      <PresentationViewport isFullscreen={fullscreen.isFullscreen}>
        <div className="relative h-full w-full overflow-hidden bg-background">
          <AnimatePresence mode="wait" custom={navigation.direction}>
            <motion.div
              key={navigation.currentSlide}
              custom={navigation.direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 h-full w-full"
            >
              <SlideStepProvider step={navigation.currentStep}>
                {activeSlide?.content}
              </SlideStepProvider>
            </motion.div>
          </AnimatePresence>
        </div>
      </PresentationViewport>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={navigation.goPrev}
            disabled={navigation.isFirst}
            aria-label="Étape ou slide précédente"
            className={cn(
              "absolute inset-y-0 left-0 z-overlay w-[12%] max-w-32 cursor-w-resize",
              "bg-gradient-to-r from-black/20 to-transparent opacity-0 transition-opacity",
              "hover:opacity-100 focus-visible:opacity-100",
              "focus-visible:outline-none",
              "disabled:pointer-events-none disabled:opacity-0",
            )}
          />
          <button
            type="button"
            onClick={navigation.goNext}
            disabled={navigation.isLast}
            aria-label="Étape ou slide suivante"
            className={cn(
              "absolute inset-y-0 right-0 z-overlay w-[12%] max-w-32 cursor-e-resize",
              "bg-gradient-to-l from-black/20 to-transparent opacity-0 transition-opacity",
              "hover:opacity-100 focus-visible:opacity-100",
              "focus-visible:outline-none",
              "disabled:pointer-events-none disabled:opacity-0",
            )}
          />
        </>
      )}

      {showControls && (
        <PresentationControls
          currentSlide={navigation.currentSlide}
          totalSlides={navigation.totalSlides}
          isFirst={navigation.isFirst}
          isLast={navigation.isLast}
          isFullscreen={fullscreen.isFullscreen}
          isFullscreenSupported={fullscreen.isSupported}
          onPrev={navigation.goPrev}
          onNext={navigation.goNext}
          onToggleFullscreen={() => {
            void fullscreen.toggle();
          }}
        />
      )}
    </div>
  );
}
