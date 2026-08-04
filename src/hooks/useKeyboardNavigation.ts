"use client";

import { useEffect } from "react";
import { isEditableTarget } from "@/lib/presentation/navigation";
import type { PresentationNavigation } from "@/types/presentation";

interface UseKeyboardNavigationOptions extends PresentationNavigation {
  onToggleFullscreen: () => void;
  onExitFullscreen: () => void;
  isFullscreen: boolean;
  enabled?: boolean;
}

const NEXT_KEYS = new Set([
  "ArrowRight",
  "ArrowDown",
  " ",
  "PageDown",
]);

const PREV_KEYS = new Set(["ArrowLeft", "ArrowUp", "PageUp"]);

export function useKeyboardNavigation({
  goNext,
  goPrev,
  goFirst,
  goLast,
  isLast,
  isFirst,
  onToggleFullscreen,
  onExitFullscreen,
  isFullscreen,
  enabled = true,
}: UseKeyboardNavigationOptions): void {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) return;

      const key = event.key;

      if (NEXT_KEYS.has(key)) {
        if (!isLast) {
          event.preventDefault();
          goNext();
        }
        return;
      }

      if (PREV_KEYS.has(key)) {
        if (!isFirst) {
          event.preventDefault();
          goPrev();
        }
        return;
      }

      if (key === "Home") {
        if (!isFirst) {
          event.preventDefault();
          goFirst();
        }
        return;
      }

      if (key === "End") {
        if (!isLast) {
          event.preventDefault();
          goLast();
        }
        return;
      }

      if (key === "f" || key === "F") {
        event.preventDefault();
        onToggleFullscreen();
        return;
      }

      if (key === "Escape" && isFullscreen) {
        event.preventDefault();
        onExitFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    enabled,
    goNext,
    goPrev,
    goFirst,
    goLast,
    isFirst,
    isLast,
    onToggleFullscreen,
    onExitFullscreen,
    isFullscreen,
  ]);
}
