"use client";

import { cn } from "@/lib/cn";

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  isFirst: boolean;
  isLast: boolean;
  isFullscreen: boolean;
  isFullscreenSupported: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  className?: string;
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FullscreenIcon({ exit }: { exit: boolean }) {
  if (exit) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M8 3v3H5M16 3v3h3M8 21v-3H5M16 21v-3h3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M8 3H5v3M16 3h3V5M8 21H5v-3M16 21v-3h3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PresentationControls({
  currentSlide,
  totalSlides,
  isFirst,
  isLast,
  isFullscreen,
  isFullscreenSupported,
  onPrev,
  onNext,
  onToggleFullscreen,
  className,
}: PresentationControlsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 z-overlay flex justify-center pb-6",
        "opacity-0 transition-opacity duration-300 group-hover/presentation:opacity-100 group-focus-within/presentation:opacity-100",
        isFullscreen && "pb-8",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-2 backdrop-blur-sm",
          "shadow-lg",
        )}
      >
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Slide précédente"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors",
            "hover:bg-surface-elevated hover:text-text-primary",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue",
            "disabled:cursor-not-allowed disabled:opacity-30",
            "[&_svg]:h-5 [&_svg]:w-5",
          )}
        >
          <ChevronLeftIcon />
        </button>

        <span
          className="min-w-16 px-2 text-center text-caption font-medium tabular-nums text-text-secondary"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="sr-only">Slide </span>
          {currentSlide + 1}
          <span aria-hidden> / </span>
          <span className="sr-only"> sur </span>
          {totalSlides}
        </span>

        <button
          type="button"
          onClick={onNext}
          disabled={isLast}
          aria-label="Slide suivante"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors",
            "hover:bg-surface-elevated hover:text-text-primary",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue",
            "disabled:cursor-not-allowed disabled:opacity-30",
            "[&_svg]:h-5 [&_svg]:w-5",
          )}
        >
          <ChevronRightIcon />
        </button>

        {isFullscreenSupported && (
          <>
            <div className="mx-1 h-6 w-px bg-border" aria-hidden />
            <button
              type="button"
              onClick={onToggleFullscreen}
              aria-label={isFullscreen ? "Quitter le plein écran" : "Activer le plein écran"}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors",
                "hover:bg-surface-elevated hover:text-text-primary",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue",
                "[&_svg]:h-5 [&_svg]:w-5",
              )}
            >
              <FullscreenIcon exit={isFullscreen} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
