"use client";

import { ComparisonColumns } from "@/components/slides/ComparisonColumns";
import { FlowSteps } from "@/components/slides/FlowSteps";
import { Reveal, RevealGroup, StepReveal } from "@/components/slides/Reveal";
import {
  ProofBarChart,
  ProofBlock,
  ProofCitation,
  ProofStat,
  ProofStatRow,
} from "@/components/slides/SlideProof";
import { SlideLayout } from "@/components/slides/SlideLayout";
import {
  StatementGrid,
  StatementGridItem,
} from "@/components/slides/StatementCard";
import { Stagger, StaggerItem } from "@/components/slides/Stagger";
import { Typography } from "@/components/ui/Typography";
import { COPY } from "@/presentations/high-ticket/copy";
import {
  COMPETITION_FLOW,
  computeExampleMetrics,
  ECOMMERCE_CHECKOUT_FLOW,
  EXAMPLE_LABELS,
  EXAMPLE_METRICS,
  formatCurrency,
  LOW_TICKET_COMPARISON,
  NEXT_VIDEO,
  PAS_HIGH_TICKET_COMPARISON,
  TERMS,
  TRIED_BUSINESSES,
  TRADITIONAL_VS_PAS,
  VOLUME_WEIGHT_ITEMS,
} from "@/presentations/high-ticket/data";
import {
  AD_COMPETITION_QUOTE,
  GOOGLE_ADS_ACQUISITION_COST,
  GOOGLE_ADS_CPC_TREND,
  META_ADS_ACQUISITION_COST,
  SHOPIFY_AOV_BENCHMARK,
  SHOPIFY_COMPETITION,
} from "@/presentations/high-ticket/evidence";
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
        "flex w-full flex-col items-center text-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ExampleLabel({ children }: { children: string }) {
  return (
    <Typography variant="caption" className="text-text-muted">
      {children}
    </Typography>
  );
}

function LtrMetric({ children }: { children: React.ReactNode }) {
  return (
    <span dir="ltr" className="inline-block [unicode-bidi:plaintext]">
      {children}
    </span>
  );
}

function RevenueExampleBlock({
  label,
  calculation,
  total,
  accent,
}: {
  label: string;
  calculation: string;
  total: string;
  accent: "red" | "green";
}) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col gap-3 rounded-2xl border p-8 text-center",
        accent === "red"
          ? "border-accent-red/30 bg-accent-red/5"
          : "border-accent-green/30 bg-accent-green/5",
      )}
    >
      <Typography
        variant="h3"
        className={accent === "red" ? "text-accent-red" : "text-accent-green"}
      >
        {label}
      </Typography>
      <Typography variant="bodyLarge" className="text-text-secondary">
        <LtrMetric>{calculation}</LtrMetric>
      </Typography>
      <Typography variant="h3">
        <LtrMetric>= {total}</LtrMetric>
      </Typography>
    </div>
  );
}

function CycleStep({
  label,
  accent,
}: {
  label: string;
  accent: "red" | "green";
}) {
  return (
    <div
      className={cn(
        "rounded-xl border px-10 py-4 text-center",
        accent === "red"
          ? "border-accent-red/30 bg-accent-red/5"
          : "border-accent-green/30 bg-accent-green/5",
      )}
    >
      <Typography
        variant="h3"
        className={cn(
          "text-balance",
          accent === "red" ? "text-accent-red" : "text-accent-green",
        )}
      >
        {label}
      </Typography>
    </div>
  );
}

function CycleFlow({
  steps,
  accent,
}: {
  steps: readonly string[];
  accent: "red" | "green";
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center gap-3">
          <CycleStep label={step} accent={accent} />
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

function CompactCheckoutFlow({ steps }: { steps: readonly string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <Typography
            variant="caption"
            className={cn(
              "rounded-lg border border-border bg-surface px-4 py-2 text-text-secondary",
              index === 0 && "text-text-primary",
              index === steps.length - 1 && "border-accent-green/30 text-accent-green",
            )}
          >
            {step}
          </Typography>
          {index < steps.length - 1 && (
            <span className="text-caption text-text-muted" aria-hidden>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function NextVideoTeaser() {
  return (
    <div className="flex w-full max-w-content flex-col gap-4">
      <div className="flex items-center gap-8 rounded-2xl border border-border bg-surface p-8 text-left">
        <div className="flex h-36 w-56 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-surface-elevated">
          <Typography variant="caption" className="text-text-muted">
            {COPY.nextVideo.thumbnail}
          </Typography>
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="caption" className="text-accent-blue">
            {COPY.doubleCta.primaryCta} →
          </Typography>
          <Typography variant="h3" className="text-balance">
            {NEXT_VIDEO.title}
          </Typography>
        </div>
      </div>
      <div className="flex h-16 items-center justify-center rounded-xl border border-dashed border-border-subtle bg-surface-muted/50">
        <Typography variant="caption" className="text-text-muted">
          {COPY.doubleCta.endScreen}
        </Typography>
      </div>
    </div>
  );
}

/* ─── Partie 1 — Hook ─── */

export function Slide01Hook() {
  return (
    <SlideLayout>
      <CenterContent className="gap-10">
        <Typography variant="display" className="max-w-5xl text-balance">
          {COPY.hook.line1}
        </Typography>
        <StepReveal at={1} emphasis>
          <Typography
            variant="h1"
            className="max-w-4xl text-balance text-accent-blue"
          >
            {COPY.hook.line2}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Partie 2 — Qui suis-je ? ─── */

export function SlideWhoAmI() {
  return (
    <SlideLayout>
      <CenterContent className="gap-8">
        <Typography variant="h2">{COPY.whoAmI.title}</Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="display" className="text-accent-blue">
            {COPY.whoAmI.name}
          </Typography>
        </StepReveal>
        <RevealGroup className="items-center gap-4">
          {COPY.whoAmI.credentials.map((item, index) => (
            <StepReveal key={item} at={index + 2}>
              <Typography variant="h3" className="text-text-secondary">
                {item}
              </Typography>
            </StepReveal>
          ))}
        </RevealGroup>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Partie 3 — Pourquoi cette chaîne ─── */

export function SlideWhyChannel() {
  return (
    <SlideLayout>
      <CenterContent className="gap-12">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.whyChannel.title}
        </Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="max-w-4xl text-balance text-text-secondary">
            {COPY.whyChannel.line1}
          </Typography>
        </StepReveal>
        <StepReveal at={2} emphasis>
          <Typography variant="h3" className="max-w-4xl text-balance">
            {COPY.whyChannel.line2}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Partie 4 — Storytelling ─── */

export function SlideWhatIThoughtThen() {
  return (
    <SlideLayout>
      <CenterContent className="gap-10">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.whatIThoughtThen.title}
        </Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="max-w-4xl text-balance text-text-secondary">
            {COPY.whatIThoughtThen.thought}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="h2" className="text-text-muted">
            {COPY.whatIThoughtThen.pivot}
          </Typography>
        </StepReveal>
        <StepReveal at={3} emphasis>
          <Typography variant="h1" className="max-w-4xl text-balance text-accent-blue">
            {COPY.whatIThoughtThen.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Partie 5 — Pourquoi j'échouais ─── */

export function Slide02Businesses() {
  return (
    <SlideLayout align="start">
      <div className="flex w-full flex-col gap-12">
        <Typography variant="h2" className="text-center">
          {COPY.tested.title}
        </Typography>
        <Stagger className="grid grid-cols-4 gap-4" staggerDelay={0.06}>
          {TRIED_BUSINESSES.map((name) => (
            <StaggerItem key={name}>
              <div className="rounded-xl border border-border bg-surface px-5 py-6 text-center">
                <Typography variant="body" className="text-text-secondary">
                  {name}
                </Typography>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </SlideLayout>
  );
}

export function Slide03Results() {
  return (
    <SlideLayout>
      <CenterContent className="gap-12">
        <Typography variant="display" className="text-balance">
          {COPY.results.line1}
        </Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="h1" className="text-balance text-text-secondary">
            {COPY.results.line2}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function Slide05WhyIFailed() {
  return (
    <SlideLayout>
      <div className="flex w-full flex-col gap-12">
        <Reveal delay={0.1}>
          <Typography variant="h2" className="text-center">
            {COPY.whyFailed.title}
          </Typography>
        </Reveal>
        <StatementGrid columns={3}>
          {COPY.whyFailed.items.map((item) => (
            <StatementGridItem key={item} tone="negative">
              {item}
            </StatementGridItem>
          ))}
        </StatementGrid>
      </div>
    </SlideLayout>
  );
}

export function Slide06SameThing() {
  return (
    <SlideLayout>
      <CenterContent className="gap-10">
        <Reveal delay={0.1}>
          <Typography variant="h2">{COPY.sameThing.title}</Typography>
        </Reveal>
        <FlowSteps steps={[...COMPETITION_FLOW]} baseDelay={0.35} stepDelay={0.4} />
        <Reveal delay={1.6}>
          <ProofBlock source={SHOPIFY_COMPETITION.source}>
            <ProofStat
              headline={SHOPIFY_COMPETITION.headline}
              subtitle={SHOPIFY_COMPETITION.subtitle}
              detail={SHOPIFY_COMPETITION.detail}
            />
          </ProofBlock>
        </Reveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function Slide07Consequence() {
  return (
    <SlideLayout>
      <CenterContent className="gap-14">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.consequence.line1}
        </Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="display" className="max-w-5xl text-balance">
            {COPY.consequence.line2}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function Slide08RealProblem() {
  return (
    <SlideLayout>
      <CenterContent className="gap-16">
        <Typography variant="display" className="max-w-4xl text-balance">
          {COPY.realProblem.line1}
        </Typography>
        <StepReveal at={1} emphasis>
          <Typography
            variant="display"
            className="max-w-5xl text-balance text-accent-blue"
          >
            {COPY.realProblem.line2}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function Slide09LowTicket() {
  return (
    <SlideLayout>
      <CenterContent className="gap-12">
        <Typography variant="display" className="text-balance">
          {COPY.lowTicket.line1}
        </Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="h1" className="text-balance text-text-secondary">
            {COPY.lowTicket.line2}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function Slide10VolumeWeight() {
  return (
    <SlideLayout>
      <div className="flex w-full flex-col gap-12">
        <Reveal delay={0.1}>
          <Typography variant="h2" className="text-center">
            {COPY.volumeWeight.title}
          </Typography>
        </Reveal>
        <Stagger
          className="mx-auto grid w-full max-w-content grid-cols-1 gap-4"
          staggerDelay={0.1}
        >
          {VOLUME_WEIGHT_ITEMS.map((item) => (
            <StaggerItem key={item}>
              <div className="rounded-xl border border-border bg-surface px-8 py-5 text-center">
                <Typography variant="bodyLarge" className="text-text-secondary">
                  {item}
                </Typography>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.8}>
          <Typography variant="body" className="text-center text-text-muted">
            {COPY.volumeWeight.footer}
          </Typography>
        </Reveal>
      </div>
    </SlideLayout>
  );
}

/* ─── Partie 6 — Coûts publicitaires ─── */

export function SlideWhyAdCostsRise() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-8">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.whyAdCostsRise.title}
        </Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="max-w-4xl text-balance text-text-secondary">
            {COPY.whyAdCostsRise.line1}
          </Typography>
        </StepReveal>
        <StepReveal at={2} emphasis>
          <Typography variant="h3" className="max-w-4xl text-balance">
            {COPY.whyAdCostsRise.line2}
          </Typography>
        </StepReveal>
        <StepReveal at={3}>
          <ProofBarChart
            title={GOOGLE_ADS_CPC_TREND.title}
            points={GOOGLE_ADS_CPC_TREND.points}
            source={GOOGLE_ADS_CPC_TREND.source}
            accent="orange"
          />
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function Slide12Trap() {
  return (
    <SlideLayout>
      <CenterContent className="gap-10">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.costTrap.line1}
        </Typography>
        <StepReveal at={1}>
          <Typography variant="h2" className="max-w-4xl text-balance text-text-secondary">
            {COPY.costTrap.line2}
          </Typography>
        </StepReveal>
        <StepReveal at={2} emphasis>
          <Typography variant="h1" className="max-w-4xl text-balance text-accent-red">
            {COPY.costTrap.line3}
          </Typography>
        </StepReveal>
        <StepReveal at={3}>
          <ProofStatRow
            items={[
              {
                headline: GOOGLE_ADS_ACQUISITION_COST.headline,
                subtitle: GOOGLE_ADS_ACQUISITION_COST.subtitle,
                detail: GOOGLE_ADS_ACQUISITION_COST.detail,
              },
              {
                headline: META_ADS_ACQUISITION_COST.headline,
                subtitle: META_ADS_ACQUISITION_COST.subtitle,
                detail: META_ADS_ACQUISITION_COST.detail,
              },
            ]}
          />
          <div className="mt-2 flex flex-col gap-1">
            <Typography variant="caption" className="text-center text-text-muted/60">
              Sources :{" "}
              <a
                href={GOOGLE_ADS_ACQUISITION_COST.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border-strong/40 underline-offset-2"
              >
                {GOOGLE_ADS_ACQUISITION_COST.source.label}
              </a>
              {" · "}
              <a
                href={META_ADS_ACQUISITION_COST.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-border-strong/40 underline-offset-2"
              >
                {META_ADS_ACQUISITION_COST.source.label}
              </a>
            </Typography>
          </div>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Partie 7 — Cercle vicieux ─── */

export function SlideViciousCircle() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-8">
        <Typography variant="h2">{COPY.viciousCircle.title}</Typography>
        <StepReveal at={1}>
          <CycleFlow steps={COPY.viciousCircle.steps} accent="red" />
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Découverte PAS + Cercle vertueux ─── */

export function Slide13Discovery() {
  return (
    <SlideLayout>
      <CenterContent className="gap-10">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.discovery.line1}
        </Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="display" className="text-accent-green">
            {TERMS.pasHighTicket}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="caption" className="text-text-muted">
            {COPY.discovery.subtitle}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function SlideVirtuousCircle() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-8">
        <Typography variant="h2">{COPY.virtuousCircle.title}</Typography>
        <StepReveal at={1}>
          <CycleFlow steps={COPY.virtuousCircle.steps} accent="green" />
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function Slide14NotClassicEcommerce() {
  return (
    <SlideLayout align="start">
      <div className="flex w-full flex-col gap-8">
        <Typography variant="h2" className="text-center text-balance">
          {COPY.notClassic.title}
        </Typography>
        <StepReveal at={1}>
          <ComparisonColumns
            left={{
              title: TRADITIONAL_VS_PAS.traditional.title,
              accent: "red",
              items: [...TRADITIONAL_VS_PAS.traditional.items],
            }}
            right={{
              title: TRADITIONAL_VS_PAS.pas.title,
              accent: "green",
              items: [...TRADITIONAL_VS_PAS.pas.items],
            }}
          />
        </StepReveal>
      </div>
    </SlideLayout>
  );
}

export function Slide15HowClientBuys() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-6">
        <Typography variant="h2">{COPY.checkout.title}</Typography>
        <CompactCheckoutFlow steps={ECOMMERCE_CHECKOUT_FLOW} />
        <StepReveal at={1}>
          <Typography variant="h2" className="max-w-3xl text-balance">
            {COPY.checkout.reveal1}
          </Typography>
        </StepReveal>
        <StepReveal at={2} emphasis>
          <Typography variant="bodyLarge" className="max-w-3xl text-text-secondary">
            {COPY.checkout.reveal2}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function Slide16EconomicComparison() {
  return (
    <SlideLayout align="start">
      <div className="flex w-full flex-col gap-6">
        <Reveal delay={0.1}>
          <Typography variant="h2" className="text-center">
            {COPY.economicComparison.title}
          </Typography>
        </Reveal>
        <ComparisonColumns
          left={{
            title: LOW_TICKET_COMPARISON.title,
            accent: "red",
            items: [...LOW_TICKET_COMPARISON.items],
          }}
          right={{
            title: PAS_HIGH_TICKET_COMPARISON.title,
            accent: "green",
            items: [...PAS_HIGH_TICKET_COMPARISON.items],
          }}
        />
        <Reveal delay={0.6}>
          <ProofBarChart
            title={SHOPIFY_AOV_BENCHMARK.title}
            points={[
              ...SHOPIFY_AOV_BENCHMARK.benchmarkPoints,
              {
                label: "Ex. High Ticket",
                value: EXAMPLE_METRICS.highTicketOrderValue,
                display: `$${EXAMPLE_METRICS.highTicketOrderValue}`,
                annotation: "illustratif",
              },
            ]}
            source={SHOPIFY_AOV_BENCHMARK.source}
            accent="green"
            className="mx-auto"
          />
        </Reveal>
      </div>
    </SlideLayout>
  );
}

export function Slide17NumericExample() {
  const example = computeExampleMetrics();

  return (
    <SlideLayout>
      <CenterContent className="gap-8">
        <ExampleLabel>{EXAMPLE_LABELS.simplified}</ExampleLabel>

        <div className="flex w-full max-w-content flex-col gap-6 sm:flex-row sm:items-stretch">
          <RevenueExampleBlock
            label={example.lowTicket.label}
            calculation={example.formatted.lowTicketCalculation}
            total={`${example.formatted.revenue} ${COPY.numericExample.revenueSuffix}`}
            accent="red"
          />
          <RevenueExampleBlock
            label={example.pasHighTicket.label}
            calculation={example.formatted.highTicketCalculation}
            total={`${example.formatted.revenue} ${COPY.numericExample.revenueSuffix}`}
            accent="green"
          />
        </div>

        <RevealGroup className="items-center gap-4">
          <StepReveal at={1}>
            <Typography variant="h2">{COPY.numericExample.sameCa}</Typography>
          </StepReveal>
          <StepReveal at={2} emphasis>
            <Typography variant="h1" className="text-accent-green">
              {COPY.numericExample.fewerOrders}
            </Typography>
          </StepReveal>
        </RevealGroup>
      </CenterContent>
    </SlideLayout>
  );
}

export function Slide18Conversion() {
  return (
    <SlideLayout>
      <CenterContent className="gap-10">
        <ExampleLabel>{EXAMPLE_LABELS.illustrative}</ExampleLabel>
        <Typography variant="display" className="text-accent-yellow">
          {COPY.conversion.sameRate}
        </Typography>
        <Typography variant="h3" className="text-text-muted">
          {COPY.conversion.intro}
        </Typography>

        <StepReveal at={1}>
          <div className="grid w-full max-w-content grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-surface p-8 text-left">
              <Typography variant="h3" className="mb-4 text-text-muted">
                {TERMS.ecommerceLowTicket}
              </Typography>
              <Typography variant="metric" className="text-accent-red">
                {formatCurrency(EXAMPLE_METRICS.lowTicketOrderValue)}
              </Typography>
              <Typography variant="caption" className="mt-2 text-text-muted">
                {COPY.conversion.perOrder}
              </Typography>
            </div>
            <div className="rounded-2xl border border-accent-green/30 bg-accent-green/5 p-8 text-left">
              <Typography variant="h3" className="mb-4 text-text-muted">
                {TERMS.pasHighTicket}
              </Typography>
              <Typography variant="metric" className="text-accent-green">
                {formatCurrency(EXAMPLE_METRICS.highTicketOrderValue)}
              </Typography>
              <Typography variant="caption" className="mt-2 text-text-muted">
                {COPY.conversion.perOrder}
              </Typography>
            </div>
          </div>
        </StepReveal>

        <StepReveal at={2} emphasis>
          <Typography variant="h1" className="max-w-3xl text-balance">
            {COPY.conversion.differentValue}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

export function Slide19CoreIdea() {
  return (
    <SlideLayout>
      <CenterContent className="gap-10">
        <Typography variant="h1" className="max-w-5xl text-balance">
          {COPY.coreIdea.line1}
        </Typography>
        <StepReveal at={1}>
          <Typography variant="h2" className="max-w-4xl text-balance text-text-secondary">
            {COPY.coreIdea.line2}
          </Typography>
        </StepReveal>
        <StepReveal at={2} emphasis>
          <Typography variant="bodyLarge" className="max-w-3xl text-text-secondary">
            {COPY.coreIdea.line3}
          </Typography>
        </StepReveal>
        <StepReveal at={3}>
          <ProofCitation
            excerpt={AD_COMPETITION_QUOTE.excerpt}
            source={AD_COMPETITION_QUOTE.source}
          />
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Partie 9 — Objection ─── */

export function SlideObjectionPrice() {
  return (
    <SlideLayout>
      <CenterContent className="gap-10">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.objection.question}
        </Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="text-text-secondary">
            {COPY.objection.answer1}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="h3" className="text-text-secondary">
            {COPY.objection.answer2}
          </Typography>
        </StepReveal>
        <StepReveal at={3} emphasis>
          <Typography variant="h1" className="max-w-4xl text-balance text-accent-green">
            {COPY.objection.answer3}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Partie 10 — Erreur fréquente ─── */

export function SlideBeginnerMistake() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-8">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.beginnerMistake.title}
        </Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="text-text-muted">
            {COPY.beginnerMistake.searchIntro}
          </Typography>
        </StepReveal>
        <RevealGroup className="items-center gap-3">
          {COPY.beginnerMistake.searchItems.map((item, index) => (
            <StepReveal key={item} at={index + 2}>
              <Typography variant="h3" className="text-text-secondary">
                {item}
              </Typography>
            </StepReveal>
          ))}
        </RevealGroup>
        <StepReveal at={5}>
          <Typography variant="bodyLarge" className="max-w-3xl text-text-muted">
            {COPY.beginnerMistake.pivot}
          </Typography>
        </StepReveal>
        <StepReveal at={6} emphasis>
          <Typography variant="h2" className="max-w-4xl text-balance text-accent-blue">
            {COPY.beginnerMistake.reveal}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Partie 11 — Connexion émotionnelle ─── */

export function SlideWish2021() {
  return (
    <SlideLayout>
      <CenterContent className="gap-10">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.wish2021.title}
        </Typography>
        <StepReveal at={1}>
          <Typography variant="h3" className="text-text-muted">
            {COPY.wish2021.line1}
          </Typography>
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="h2" className="max-w-4xl text-balance text-text-secondary">
            {COPY.wish2021.line2}
          </Typography>
        </StepReveal>
        <StepReveal at={3} emphasis>
          <Typography variant="h1" className="max-w-4xl text-balance text-accent-blue">
            {COPY.wish2021.line3}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Partie 12 — Transition ─── */

export function SlideTransition() {
  return (
    <SlideLayout>
      <CenterContent className="gap-12">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.transition.line1}
        </Typography>
        <StepReveal at={1} emphasis>
          <Typography variant="h2" className="max-w-4xl text-balance text-text-secondary">
            {COPY.transition.line2}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Partie 13 — Accompagnement ─── */

export function SlideWhyMentoring() {
  return (
    <SlideLayout>
      <CenterContent className="gap-8">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.mentoring.title}
        </Typography>
        <RevealGroup className="items-center gap-5">
          {COPY.mentoring.lines.map((line, index) => (
            <StepReveal key={line} at={index + 1}>
              <Typography
                variant="h3"
                className={cn(
                  "max-w-4xl text-balance",
                  index === COPY.mentoring.lines.length - 1
                    ? "text-text-primary"
                    : "text-text-secondary",
                )}
              >
                {line}
              </Typography>
            </StepReveal>
          ))}
        </RevealGroup>
      </CenterContent>
    </SlideLayout>
  );
}

/* ─── Partie 14 — Double CTA ─── */

export function SlideDoubleCTA() {
  return (
    <SlideLayout align="start">
      <CenterContent className="gap-8">
        <Typography variant="h2" className="max-w-4xl text-balance">
          {COPY.doubleCta.primaryTitle}
        </Typography>
        <StepReveal at={1}>
          <NextVideoTeaser />
        </StepReveal>
        <StepReveal at={2}>
          <Typography variant="caption" className="max-w-2xl text-balance text-text-muted/70">
            {COPY.doubleCta.secondaryLine}
          </Typography>
        </StepReveal>
        <StepReveal at={3}>
          <Typography variant="caption" className="text-text-muted/50">
            {COPY.doubleCta.secondaryCta}
          </Typography>
        </StepReveal>
      </CenterContent>
    </SlideLayout>
  );
}
