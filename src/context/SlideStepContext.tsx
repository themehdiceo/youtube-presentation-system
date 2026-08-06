"use client";

import { createContext, useContext } from "react";

interface SlideStepContextValue {
  step: number;
}

const SlideStepContext = createContext<SlideStepContextValue>({ step: 0 });

export function SlideStepProvider({
  step,
  children,
}: {
  step: number;
  children: React.ReactNode;
}) {
  return (
    <SlideStepContext.Provider value={{ step }}>
      {children}
    </SlideStepContext.Provider>
  );
}

export function useSlideStep(): SlideStepContextValue {
  return useContext(SlideStepContext);
}
