"use client";

import { useCallback, useRef } from "react";
import {
  SWIPE_MAX_VERTICAL_PX,
  SWIPE_THRESHOLD_PX,
} from "@/lib/presentation/navigation";

interface UseSwipeNavigationOptions {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  enabled?: boolean;
}

interface TouchPoint {
  x: number;
  y: number;
}

export function useSwipeNavigation({
  onSwipeLeft,
  onSwipeRight,
  enabled = true,
}: UseSwipeNavigationOptions) {
  const startRef = useRef<TouchPoint | null>(null);

  const handleTouchStart = useCallback(
    (event: React.TouchEvent) => {
      if (!enabled) return;

      const touch = event.touches[0];
      if (!touch) return;

      startRef.current = { x: touch.clientX, y: touch.clientY };
    },
    [enabled],
  );

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent) => {
      if (!enabled || !startRef.current) return;

      const touch = event.changedTouches[0];
      if (!touch) {
        startRef.current = null;
        return;
      }

      const deltaX = touch.clientX - startRef.current.x;
      const deltaY = touch.clientY - startRef.current.y;
      startRef.current = null;

      if (Math.abs(deltaY) > SWIPE_MAX_VERTICAL_PX) return;
      if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;

      if (deltaX < 0) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
    },
    [enabled, onSwipeLeft, onSwipeRight],
  );

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };
}
