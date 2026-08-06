"use client";

import { Reveal } from "@/components/slides/Reveal";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/cn";

interface FlowStepsProps {
  steps: string[];
  className?: string;
  baseDelay?: number;
  stepDelay?: number;
  accentLast?: boolean;
}

/** Flux statique sans animation — pour slides à révélations manuelles. */
export function StaticFlowSteps({
  steps,
  className,
  accentLast = false,
}: Omit<FlowStepsProps, "baseDelay" | "stepDelay">) {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center gap-4">
          <Typography
            variant={
              accentLast && index === steps.length - 1 ? "h2" : "h3"
            }
            className={cn(
              "text-center",
              accentLast && index === steps.length - 1
                ? "text-accent-green"
                : index === 0
                  ? "text-text-primary"
                  : "text-text-secondary",
            )}
          >
            {step}
          </Typography>
          {index < steps.length - 1 && (
            <span className="text-h2 font-light text-text-muted" aria-hidden>
              ↓
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function FlowSteps({
  steps,
  className,
  baseDelay = 0.2,
  stepDelay = 0.35,
  accentLast = false,
}: FlowStepsProps) {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center gap-4">
          <Reveal delay={baseDelay + index * stepDelay}>
            <Typography
              variant={accentLast && index === steps.length - 1 ? "metric" : "h3"}
              className={cn(
                "text-center",
                accentLast && index === steps.length - 1
                  ? "text-accent-green"
                  : index === 0
                    ? "text-text-primary"
                    : "text-text-secondary",
              )}
            >
              {step}
            </Typography>
          </Reveal>
          {index < steps.length - 1 && (
            <Reveal delay={baseDelay + index * stepDelay + stepDelay * 0.5}>
              <span
                className="text-h2 font-light text-text-muted"
                aria-hidden
              >
                ↓
              </span>
            </Reveal>
          )}
        </div>
      ))}
    </div>
  );
}
