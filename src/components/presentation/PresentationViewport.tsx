"use client";

import { useEffect, useRef, useState } from "react";
import { slide } from "@/design-system/layout";
import { cn } from "@/lib/cn";

interface PresentationViewportProps {
  children: React.ReactNode;
  className?: string;
  isFullscreen?: boolean;
}

export function PresentationViewport({
  children,
  className,
  isFullscreen = false,
}: PresentationViewportProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateScale = () => {
      const { width, height } = element.getBoundingClientRect();
      const scaleX = width / slide.width;
      const scaleY = height / slide.height;
      setScale(Math.min(scaleX, scaleY));
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(element);

    return () => observer.disconnect();
  }, [isFullscreen]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
    >
      <div
        className="relative origin-center"
        style={{
          width: slide.width,
          height: slide.height,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
