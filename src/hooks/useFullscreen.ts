"use client";

import { useCallback, useEffect, useState } from "react";

interface UseFullscreenReturn {
  isFullscreen: boolean;
  isSupported: boolean;
  enter: () => Promise<void>;
  exit: () => Promise<void>;
  toggle: () => Promise<void>;
}

function getFullscreenElement(): Element | null {
  if (typeof document === "undefined") return null;
  return (
    document.fullscreenElement ??
    (document as Document & { webkitFullscreenElement?: Element })
      .webkitFullscreenElement ??
    null
  );
}

async function requestFullscreen(element: HTMLElement): Promise<void> {
  if (element.requestFullscreen) {
    await element.requestFullscreen();
    return;
  }

  const webkitElement = element as HTMLElement & {
    webkitRequestFullscreen?: () => Promise<void>;
  };

  if (webkitElement.webkitRequestFullscreen) {
    await webkitElement.webkitRequestFullscreen();
  }
}

async function exitFullscreenDocument(): Promise<void> {
  if (document.exitFullscreen) {
    await document.exitFullscreen();
    return;
  }

  const webkitDocument = document as Document & {
    webkitExitFullscreen?: () => Promise<void>;
  };

  if (webkitDocument.webkitExitFullscreen) {
    await webkitDocument.webkitExitFullscreen();
  }
}

export function useFullscreen(
  containerRef: React.RefObject<HTMLElement | null>,
): UseFullscreenReturn {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const isSupported =
    typeof document !== "undefined" &&
    (document.fullscreenEnabled ||
      (document as Document & { webkitFullscreenEnabled?: boolean })
        .webkitFullscreenEnabled === true);

  useEffect(() => {
    const handleChange = () => {
      const element = containerRef.current;
      const active = getFullscreenElement();
      setIsFullscreen(Boolean(element && active === element));
    };

    document.addEventListener("fullscreenchange", handleChange);
    document.addEventListener("webkitfullscreenchange", handleChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
      document.removeEventListener("webkitfullscreenchange", handleChange);
    };
  }, [containerRef]);

  const enter = useCallback(async () => {
    const element = containerRef.current;
    if (!element || !isSupported) return;

    try {
      await requestFullscreen(element);
    } catch {
      // Silently ignore unsupported or denied fullscreen requests.
    }
  }, [containerRef, isSupported]);

  const exit = useCallback(async () => {
    if (!getFullscreenElement()) return;

    try {
      await exitFullscreenDocument();
    } catch {
      // Silently ignore exit errors.
    }
  }, []);

  const toggle = useCallback(async () => {
    if (isFullscreen) {
      await exit();
    } else {
      await enter();
    }
  }, [enter, exit, isFullscreen]);

  return {
    isFullscreen,
    isSupported,
    enter,
    exit,
    toggle,
  };
}
