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

const controlButtonClass = cn(
  "flex h-6 w-6 items-center justify-center rounded-md text-text-muted transition-colors",
  "hover:bg-surface-elevated hover:text-text-secondary",
  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-accent-blue/60",
  "disabled:cursor-not-allowed disabled:opacity-25",
  "[&_svg]:h-3 [&_svg]:w-3",
);

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
        "pointer-events-none absolute bottom-3 right-3 z-overlay",
        "opacity-35 transition-opacity duration-300",
        "group-hover/presentation:opacity-90 group-focus-within/presentation:opacity-90",
        isFullscreen && "bottom-4 right-4",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-auto flex items-center gap-0.5 rounded-md border border-border/40 bg-surface/65 px-1 py-0.5 backdrop-blur-sm",
          "shadow-md",
        )}
      >
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Slide précédente"
          className={controlButtonClass}
        >
          <ChevronLeftIcon />
        </button>

        <span
          className="min-w-10 px-1 text-center text-[0.65rem] font-medium tabular-nums text-text-muted"
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
          className={controlButtonClass}
        >
          <ChevronRightIcon />
        </button>

        {isFullscreenSupported && (
          <>
            <div className="mx-0.5 h-4 w-px bg-border/60" aria-hidden />
            <button
              type="button"
              onClick={onToggleFullscreen}
              aria-label={isFullscreen ? "Quitter le plein écran" : "Activer le plein écran"}
              className={controlButtonClass}
            >
              <FullscreenIcon exit={isFullscreen} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
