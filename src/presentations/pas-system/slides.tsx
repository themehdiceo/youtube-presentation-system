"use client";

import { ComparisonColumns } from "@/components/slides/ComparisonColumns";
import { RevealGroup, StepReveal } from "@/components/slides/Reveal";
import { SlideLayout } from "@/components/slides/SlideLayout";
import { StatementCard } from "@/components/slides/StatementCard";
import { Stagger, StaggerItem } from "@/components/slides/Stagger";
import { Typography } from "@/components/ui/Typography";
import { COPY } from "@/presentations/pas-system/copy";
import {
  ACQUISITION_START,
  COACHING_AVAILABILITY,
  PAS_PILLARS,
  PROBLEM_EXAMPLES,
  SCALE_FLOW,
  SCALABILITY_FLOW,
  WRONG_ECOMMERCE_FLOW,
} from "@/presentations/pas-system/data";
import { cn } from "@/lib/cn";

function CenterContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full max-w-content flex-col items-center text-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

function CompactFlow({
  steps,
  muted = false,
  accentLast = false,
}: {
  steps: readonly string[];
  muted?: boolean;
  accentLast?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2",
        muted && "opacity-40",
      )}
    >
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center gap-2">
          <Typography
            variant={accentLast && index === steps.length - 1 ? "h2" : "h3"}
            className={cn(
              "text-center",
              accentLast && index === steps.length - 1
                ? "text-accent-green"
                : muted
                  ? "text-text-muted"
                  : index === 0
                    ? "text-text-primary"
                    : "text-text-secondary",
            )}
          >
            {step}
          </Typography>
          {index < steps.length - 1 && (
            <span className="text-body font-light text-text-muted" aria-hidden>
              ↓
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function PasPillarCard({
  pillar,
  index,
}: {
  pillar: { letter: string; label: string };
  index: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-8 py-8",
        index === 0 && "border-accent-blue/30",
        index === 1 && "border-accent-purple/30",
        index === 2 && "border-accent-green/30",
      )}
    >
      <Typography
        variant="h1"
        className={cn(
          index === 0 && "text-accent-blue",
          index === 1 && "text-accent-purple",
          index === 2 && "text-accent-green",
        )}
      >
        {pillar.letter}
      </Typography>
      <Typography variant="h3">{pillar.label}</Typography>
    </div>
  );
}

function DescriptionCta({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-surface px-8 py-3">
      <Typography variant="caption" className="text-text-muted">
        {label}
      </Typography>
    </div>
  );
}

function BulletPoints({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col gap-3 text-left", className)}>
      {items.map((item) => (
        <li key={item}>
          <Typography variant="body" className="text-text-secondary">
            · {item}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

function AvailabilityBadge() {
  if (COACHING_AVAILABILITY.isOpen) return null;
  return (
    <Typography variant="caption" className="text-accent-orange">
      {COACHING_AVAILABILITY.label}
    </Typography>
  );
}

/* ─── Hook — 4 slides ─── */

export function SlideHookTitle() {
  return (
    <SlideLayout>
      <CenterContent className="justify-center">
        <Typography variant="h1" className="max-w-5xl text-balance">
          {COPY.hook.title}
        </Typography>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideHookVision() {
  return (
    <SlideLayout>
      <CenterContent className="justify-center gap-6">
        <CompactFlow steps={WRONG_ECOMMERCE_FLOW} accentLast />
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideHookReject() {
  return (
    <SlideLayout>
      <CenterContent className="justify-center gap-8">
        <CompactFlow steps={WRONG_ECOMMERCE_FLOW} muted />
        <StepReveal at={1} emphasis>
          <Typography
            variant="display"
            className="text-[5rem] leading-none text-accent-red"
          >
            {COPY.hook.cross}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="h3" className="max-w-3xl text-text-secondary">
            {COPY.hook.rejectLine}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideHookReality() {
  return (
    <SlideLayout>
      <CenterContent className="justify-center gap-12">
        <Typography variant="h2" className="text-text-muted">
          {COPY.hook.pivot}
        </Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="display" className="max-w-4xl text-balance text-accent-blue">
            {COPY.hook.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Crédibilité & framework ─── */

export function SlideWhoAmI() {
  return (
    <SlideLayout>
      <CenterContent className="gap-6">
        <Typography variant="h2">{COPY.whoAmI.title}</Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="h1" className="text-accent-blue">
            {COPY.whoAmI.name}
          </Typography>
        </StepReveal>
        <RevealGroup className="items-center gap-3">
          {COPY.whoAmI.credentials.map((item, index) => (
            <StepReveal key={item} at={index + 2}>
              <Typography variant="bodyLarge" className="text-text-secondary">
                {item}
              </Typography>
            </StepReveal>
          ))}
        </RevealGroup>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlidePasFramework() {
  return (
    <SlideLayout>
      <CenterContent className="gap-8">
        <Typography variant="h2" className="text-balance">
          {COPY.pasFramework.title}
        </Typography>
        <div className="grid w-full grid-cols-3 gap-5">
          {PAS_PILLARS.map((pillar, index) => (
            <StepReveal key={pillar.letter} at={index + 1}>
              <PasPillarCard pillar={pillar} index={index} />
            </StepReveal>
          ))}
        </div>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Pilier P ─── */

export function SlideProductPhilosophy() {
  return (
    <SlideLayout>
      <CenterContent className="gap-8">
        <Typography variant="h2">{COPY.productPhilosophy.title}</Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="text-text-secondary">
            {COPY.productPhilosophy.mostPeople}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="h3" className="text-text-muted">
            {COPY.productPhilosophy.pivot}
          </Typography>
        </StepReveal>
        <StepReveal at={3} emphasis>
          <Typography variant="h1" className="text-accent-blue">
            {COPY.productPhilosophy.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideProblemExamples() {
  return (
    <SlideLayout align="start">
      <Stagger
        className="mx-auto grid w-full max-w-content grid-cols-2 gap-3 sm:grid-cols-3"
        staggerDelay={0.06}
      >
        {PROBLEM_EXAMPLES.map((item) => (
          <StaggerItem key={item}>
            <div className="rounded-xl border border-border bg-surface px-5 py-4 text-center">
              <Typography variant="body" className="text-text-secondary">
                {item}
              </Typography>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </SlideLayout>
  );
}

export function SlideProblemMessage() {
  return (
    <SlideLayout>
      <CenterContent className="justify-center gap-8">
        <Typography variant="h3" className="text-text-muted">
          {COPY.problemExamples.message}
        </Typography>
        <Typography variant="h2" className="text-accent-green">
          {COPY.problemExamples.emphasis}
        </Typography>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideProblemCriteria() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-6">
        <Typography variant="h2" className="text-balance">
          {COPY.problemCriteria.title}
        </Typography>
        <RevealGroup className="items-center gap-3">
          {COPY.problemCriteria.items.map((item, index) => (
            <StepReveal key={item} at={index + 1}>
              <Typography variant="h3" className="text-text-secondary">
                {item}
              </Typography>
            </StepReveal>
          ))}
        </RevealGroup>
        <StepReveal at={5} emphasis>
          <Typography variant="h3" className="max-w-4xl text-balance">
            {COPY.problemCriteria.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideDemandComparison() {
  return (
    <SlideLayout align="start">
      <div className="flex w-full flex-col gap-6">
        <ComparisonColumns
          left={{
            title: COPY.demandComparison.create.title,
            accent: "red",
            items: [...COPY.demandComparison.create.items],
          }}
          right={{
            title: COPY.demandComparison.existing.title,
            accent: "green",
            items: [...COPY.demandComparison.existing.items],
          }}
        />
        <StepReveal at={1} emphasis>
          <Typography variant="h3" className="mx-auto max-w-4xl text-center text-balance">
            {COPY.demandComparison.reveal}
          </Typography>
        </StepReveal>
      </div>
    </SlideLayout>
  );
}

export function SlideMarketingAngle() {
  return (
    <SlideLayout>
      <CenterContent className="justify-center gap-10">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.marketingAngle.title}
        </Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="h1" className="max-w-5xl text-balance text-accent-yellow">
            {COPY.marketingAngle.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideSameProduct() {
  return (
    <SlideLayout>
      <CenterContent className="gap-6">
        <Typography variant="h1">{COPY.sameProduct.center}</Typography>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {COPY.sameProduct.variants.map((item, index) => (
            <StepReveal key={item} at={index + 1}>
              <div className="rounded-xl border border-border bg-surface px-5 py-4">
                <Typography variant="body" className="text-text-secondary">
                  {item}
                </Typography>
              </div>
            </StepReveal>
          ))}
        </div>
        <StepReveal at={6} emphasis>
          <Typography variant="h3" className="max-w-4xl text-balance">
            {COPY.sameProduct.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Étude de cas — 4 slides ─── */

export function SlideCaseStudyA() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-6">
        <Typography variant="caption" className="text-text-muted">
          {COPY.caseStudy.product}
        </Typography>
        <Typography variant="h2">{COPY.caseStudy.testA.title}</Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="text-text-secondary">
            {COPY.caseStudy.testA.headline}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <BulletPoints items={COPY.caseStudy.testA.points} />
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideCaseStudyB() {
  return (
    <SlideLayout>
      <CenterContent className="justify-center gap-10">
        <Typography variant="h2">{COPY.caseStudy.testB.title}</Typography>
        <Typography variant="h3" className="text-text-secondary">
          {COPY.caseStudy.testB.line1}
        </Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="h1" className="text-accent-blue">
            {COPY.caseStudy.testB.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideCaseStudyC() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-6">
        <Typography variant="h2">{COPY.caseStudy.testC.title}</Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="max-w-3xl text-balance text-text-secondary">
            {COPY.caseStudy.testC.headline}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <BulletPoints items={COPY.caseStudy.testC.points} />
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideCaseStudyD() {
  return (
    <SlideLayout>
      <CenterContent className="justify-center gap-10">
        <Typography variant="h1" className="max-w-4xl text-balance">
          {COPY.caseStudy.testD.line1}
        </Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="display" className="text-accent-red">
            {COPY.caseStudy.testD.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideDemandQuestion() {
  return (
    <SlideLayout>
      <CenterContent className="gap-8">
        <Typography variant="h2">{COPY.demandQuestion.title}</Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="h1" className="max-w-4xl text-balance text-accent-blue">
            {COPY.demandQuestion.question}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="h3" className="max-w-4xl text-balance text-text-secondary">
            {COPY.demandQuestion.explain}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideWhatITest() {
  return (
    <SlideLayout>
      <CenterContent className="gap-6">
        <Typography variant="h2">{COPY.whatITest.title}</Typography>
        <div className="grid w-full grid-cols-3 gap-4">
          {COPY.whatITest.blocks.map((block, index) => (
            <StepReveal key={block} at={index + 1}>
              <div className="rounded-xl border border-border bg-surface px-5 py-6">
                <Typography variant="h3">{block}</Typography>
              </div>
            </StepReveal>
          ))}
        </div>
        <StepReveal at={4}>
          <Typography variant="h3" className="text-text-secondary">
            {COPY.whatITest.reveal1}
          </Typography>
        </StepReveal>
        <StepReveal at={5} emphasis>
          <Typography variant="h3" className="max-w-4xl text-balance">
            {COPY.whatITest.reveal2}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideExecutionBridge() {
  return (
    <SlideLayout>
      <CenterContent className="gap-6">
        <Typography variant="h3" className="max-w-4xl text-balance">
          {COPY.executionBridge.line1}
        </Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="max-w-4xl text-balance text-text-secondary">
            {COPY.executionBridge.line2}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="bodyLarge" className="max-w-3xl text-text-muted">
            {COPY.executionBridge.line3}
          </Typography>
        </StepReveal>
        <StepReveal at={3}>
          <DescriptionCta label={COPY.executionBridge.cta} />
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Pilier A ─── */

export function SlideAcquisition() {
  return (
    <SlideLayout>
      <CenterContent className="gap-6">
        <Typography variant="h2">{COPY.acquisition.title}</Typography>
        <Typography variant="h3" className="text-text-muted">
          {COPY.acquisition.intro}
        </Typography>
        <RevealGroup className="items-center gap-3">
          {ACQUISITION_START.map((item, index) => (
            <StepReveal key={item} at={index + 1}>
              <Typography variant="h3" className="text-text-secondary">
                {item}
              </Typography>
            </StepReveal>
          ))}
        </RevealGroup>
        <StepReveal at={4} emphasis>
          <Typography variant="h3" className="text-accent-blue">
            {COPY.acquisition.footer}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideOneCountry() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-5">
        <Typography variant="h2">{COPY.oneCountry.title}</Typography>
        <RevealGroup className="items-center gap-2">
          {COPY.oneCountry.items.map((item, index) => (
            <StepReveal key={item} at={index + 1}>
              <Typography variant="bodyLarge" className="text-text-secondary">
                {item}
              </Typography>
            </StepReveal>
          ))}
        </RevealGroup>
        <StepReveal at={6} emphasis>
          <Typography variant="h3" className="max-w-4xl text-balance">
            {COPY.oneCountry.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideValidation() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-6">
        <Typography variant="h2">{COPY.validation.title}</Typography>
        <div className="flex items-center gap-6">
          <Typography variant="h3" className="text-text-muted">
            {COPY.validation.left}
          </Typography>
          <Typography variant="h2" className="text-text-muted">
            ≠
          </Typography>
          <Typography variant="h3" className="text-accent-green">
            {COPY.validation.right}
          </Typography>
        </div>
        <StepReveal at={1}>
          <BulletPoints
            items={COPY.validation.criteria}
            className="mx-auto max-w-xl"
          />
        </StepReveal>
        <StepReveal at={2} emphasis>
          <Typography variant="h3">{COPY.validation.reveal}</Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideMetaAdsRedirect() {
  return (
    <SlideLayout>
      <CenterContent className="justify-center gap-8">
        <Typography variant="h3" className="max-w-4xl text-balance text-text-secondary">
          {COPY.metaAdsRedirect.line1}
        </Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="max-w-4xl text-balance">
            {COPY.metaAdsRedirect.line2}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlidePagePerAngle() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-5">
        <Typography variant="h2" className="text-balance">
          {COPY.pagePerAngle.title}
        </Typography>
        <StepReveal at={1}>
          <div className="flex w-full flex-col gap-3">
            {COPY.pagePerAngle.pairs.map((pair) => (
              <div
                key={pair.angle}
                className="flex items-center justify-center gap-4"
              >
                <Typography variant="body" className="text-text-secondary">
                  {pair.angle}
                </Typography>
                <span className="text-text-muted">→</span>
                <Typography variant="body">{pair.page}</Typography>
              </div>
            ))}
          </div>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="h3" className="max-w-3xl text-balance">
            {COPY.pagePerAngle.reveal1}
          </Typography>
        </StepReveal>
        <StepReveal at={3} emphasis>
          <Typography variant="h3" className="max-w-3xl text-balance text-accent-red">
            {COPY.pagePerAngle.reveal2}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideCoherence() {
  return (
    <SlideLayout>
      <CenterContent className="gap-6">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.coherence.title}
        </Typography>
        <div className="grid w-full max-w-2xl grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-surface p-6">
            <Typography variant="caption" className="text-text-muted">
              {COPY.coherence.ad.label}
            </Typography>
            <Typography variant="h3" className="mt-2">
              {COPY.coherence.ad.promise}
            </Typography>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <Typography variant="caption" className="text-text-muted">
              {COPY.coherence.page.label}
            </Typography>
            <Typography variant="h3" className="mt-2">
              {COPY.coherence.page.promise}
            </Typography>
          </div>
        </div>
        <StepReveal at={1} emphasis>
          <Typography variant="display" className="text-accent-red">
            {COPY.coherence.cross}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="h3" className="max-w-3xl text-balance">
            {COPY.coherence.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Pilier S ─── */

export function SlideScalability() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-5">
        <Typography variant="h2">{COPY.scalability.title}</Typography>
        <StepReveal at={1}>
          <CompactFlow steps={SCALABILITY_FLOW} />
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="h3" className="text-text-muted">
            {COPY.scalability.keyMessage}
          </Typography>
        </StepReveal>
        <StepReveal at={3} emphasis>
          <Typography variant="h1" className="text-accent-green">
            {COPY.scalability.keyEmphasis}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideWhenItWorks() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-6">
        <Typography variant="h2">{COPY.whenItWorks.title}</Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="h1" className="text-accent-green">
            {COPY.whenItWorks.reveal}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <CompactFlow steps={SCALE_FLOW} accentLast />
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideError({ text }: { text: string }) {
  return (
    <SlideLayout>
      <CenterContent className="justify-center">
        <StatementCard tone="negative" className="max-w-4xl">
          {text}
        </StatementCard>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlidePasSummary() {
  return (
    <SlideLayout>
      <CenterContent className="gap-8">
        <Typography variant="h1">{COPY.pasSummary.acronym}</Typography>
        <div className="flex flex-col gap-1">
          {COPY.pasSummary.pillars.map((label) => (
            <Typography key={label} variant="h3" className="text-text-secondary">
              {label}
            </Typography>
          ))}
        </div>
        <StepReveal at={1} emphasis>
          <Typography variant="h2" className="max-w-4xl text-balance text-accent-blue">
            {COPY.pasSummary.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideConclusion() {
  return (
    <SlideLayout>
      <CenterContent className="gap-6">
        <Typography variant="h3" className="text-text-muted">
          {COPY.conclusion.line1}
        </Typography>
        <StepReveal at={1}>
          <Typography variant="h2" className="max-w-4xl text-balance">
            {COPY.conclusion.line2}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="h3" className="text-text-muted">
            {COPY.conclusion.line3}
          </Typography>
        </StepReveal>
        <StepReveal at={3} emphasis>
          <Typography variant="display" className="text-accent-red">
            {COPY.conclusion.line4}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideMentoring() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-5">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.mentoring.title}
        </Typography>
        <AvailabilityBadge />
        <RevealGroup className="items-center gap-4">
          {COPY.mentoring.lines.map((line, index) => (
            <StepReveal key={line} at={index + 1}>
              <Typography variant="bodyLarge" className="max-w-4xl text-balance text-text-secondary">
                {line}
              </Typography>
            </StepReveal>
          ))}
        </RevealGroup>
        <StepReveal at={6}>
          <Typography variant="caption" className="text-text-muted">
            {COPY.mentoring.availabilityNote}
          </Typography>
        </StepReveal>
        <StepReveal at={7}>
          <DescriptionCta label={COPY.mentoring.cta} />
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideThankYou() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-5">
        <Typography variant="h2">{COPY.thankYou.line1}</Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="text-text-secondary">
            {COPY.thankYou.line2}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="h3">{COPY.thankYou.subscribe}</Typography>
        </StepReveal>
        <StepReveal at={3}>
          <Typography variant="h3" className="text-text-secondary">
            {COPY.thankYou.watchMore}
          </Typography>
        </StepReveal>
        <StepReveal at={4}>
          <div className="grid w-full grid-cols-3 gap-3">
            {COPY.thankYou.thumbnails.map((label) => (
              <div
                key={label}
                className="flex h-24 items-center justify-center rounded-xl border border-border-subtle bg-surface-elevated"
              >
                <Typography variant="caption" className="text-text-muted">
                  {label}
                </Typography>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-12 w-full items-center justify-center rounded-xl border border-dashed border-border-subtle">
            <Typography variant="caption" className="text-text-muted">
              {COPY.thankYou.endScreen}
            </Typography>
          </div>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}
