"use client";

import { Typography } from "@/components/ui/Typography";
import type { BarChartPoint, EvidenceSource } from "@/presentations/high-ticket/evidence";
import { cn } from "@/lib/cn";

export function SlideSource({
  source,
  className,
}: {
  source: EvidenceSource;
  className?: string;
}) {
  return (
    <Typography
      as="p"
      variant="caption"
      className={cn(
        "text-center text-[0.7rem] leading-snug text-text-muted/60",
        className,
      )}
    >
      Source :{" "}
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-border-strong/40 underline-offset-2 transition-colors hover:text-text-muted"
      >
        {source.label}
      </a>
    </Typography>
  );
}

export function ProofPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-2xl rounded-xl border border-border-subtle bg-surface/50 px-6 py-5 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ProofStat({
  headline,
  subtitle,
  detail,
  className,
}: {
  headline: string;
  subtitle: string;
  detail?: string;
  className?: string;
}) {
  return (
    <ProofPanel className={cn("text-center", className)}>
      <Typography
        variant="h2"
        className="text-accent-orange tabular-nums"
      >
        {headline}
      </Typography>
      <Typography variant="caption" className="mt-1 text-text-secondary">
        {subtitle}
      </Typography>
      {detail ? (
        <Typography variant="caption" className="mt-1 text-text-muted">
          {detail}
        </Typography>
      ) : null}
    </ProofPanel>
  );
}

export function ProofStatRow({
  items,
  className,
}: {
  items: Array<{
    headline: string;
    subtitle: string;
    detail?: string;
  }>;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2",
        className,
      )}
    >
      {items.map((item) => (
        <ProofStat key={item.subtitle} {...item} className="max-w-none" />
      ))}
    </div>
  );
}

export function ProofBarChart({
  title,
  points,
  source,
  accent = "blue",
  className,
}: {
  title: string;
  points: readonly BarChartPoint[];
  source: EvidenceSource;
  accent?: "blue" | "green" | "orange";
  className?: string;
}) {
  const maxValue = Math.max(...points.map((p) => p.value));
  const accentClass =
    accent === "green"
      ? "bg-accent-green/80"
      : accent === "orange"
        ? "bg-accent-orange/80"
        : "bg-accent-blue/80";

  return (
    <div className={cn("flex w-full max-w-2xl flex-col gap-3", className)}>
      <ProofPanel>
        <Typography variant="caption" className="mb-4 text-text-muted">
          {title}
        </Typography>
        <div className="flex items-end justify-center gap-6 sm:gap-10">
          {points.map((point) => {
            const heightPct = Math.round((point.value / maxValue) * 100);
            return (
              <div
                key={point.label}
                className="flex flex-col items-center gap-2"
              >
                <Typography
                  variant="caption"
                  className="tabular-nums text-text-secondary"
                >
                  {point.display}
                </Typography>
                {point.annotation ? (
                  <Typography
                    variant="caption"
                    className="text-[0.65rem] text-accent-orange"
                  >
                    {point.annotation}
                  </Typography>
                ) : (
                  <span className="h-[0.875rem]" aria-hidden />
                )}
                <div className="flex h-28 w-14 items-end sm:w-16">
                  <div
                    className={cn(
                      "w-full rounded-t-md transition-all",
                      accentClass,
                      point.annotation
                        ? "opacity-100"
                        : "opacity-70",
                    )}
                    style={{ height: `${heightPct}%` }}
                    role="img"
                    aria-label={`${point.label} : ${point.display}`}
                  />
                </div>
                <Typography variant="caption" className="text-text-muted">
                  {point.label}
                </Typography>
              </div>
            );
          })}
        </div>
      </ProofPanel>
      <SlideSource source={source} />
    </div>
  );
}

export function ProofCitation({
  excerpt,
  source,
  className,
}: {
  excerpt: string;
  source: EvidenceSource;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full max-w-2xl flex-col gap-2", className)}>
      <ProofPanel>
        <Typography
          variant="caption"
          className="text-balance text-text-secondary italic"
        >
          « {excerpt} »
        </Typography>
      </ProofPanel>
      <SlideSource source={source} />
    </div>
  );
}

export function ProofBlock({
  children,
  source,
  className,
}: {
  children: React.ReactNode;
  source: EvidenceSource;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {children}
      <SlideSource source={source} />
    </div>
  );
}
