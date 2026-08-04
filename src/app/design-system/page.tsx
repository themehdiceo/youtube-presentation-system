import Link from "next/link";
import { SlideCanvas } from "@/components/presentation/SlideCanvas";
import { SlideContainer } from "@/components/presentation/SlideContainer";
import { SlideFooter } from "@/components/presentation/SlideFooter";
import { SlideHeader } from "@/components/presentation/SlideHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Grid } from "@/components/ui/Grid";
import { IconBox } from "@/components/ui/IconBox";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Typography } from "@/components/ui/Typography";
import {
  accentColors,
  backgroundColors,
  colors,
  textColors,
} from "@/design-system/colors";
import { radius } from "@/design-system/radius";
import { shadows } from "@/design-system/shadows";
import { spacing } from "@/design-system/spacing";
import { typography } from "@/design-system/typography";
import type { AccentColor } from "@/design-system/colors";

function DsSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <SectionLabel accent="blue">{id}</SectionLabel>
        <Typography variant="h2">{title}</Typography>
        {description && (
          <Typography variant="body" className="max-w-3xl">
            {description}
          </Typography>
        )}
      </div>
      {children}
    </section>
  );
}

function ColorSwatch({
  name,
  value,
  textDark = false,
}: {
  name: string;
  value: string;
  textDark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="h-24 rounded-xl border border-border"
        style={{ backgroundColor: value }}
      />
      <div>
        <p
          className={`text-caption font-medium ${textDark ? "text-text-inverse" : "text-text-primary"}`}
        >
          {name}
        </p>
        <p className="font-mono text-caption text-text-muted">{value}</p>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

const accentKeys = Object.keys(accentColors) as AccentColor[];

export default function DesignSystemPage() {
  return (
    <main className="py-16">
      <Container className="flex flex-col gap-24">
        <header className="flex flex-col gap-6 border-b border-border pb-12">
          <Link
            href="/"
            className="text-caption text-text-muted transition-colors hover:text-text-primary"
          >
            ← Retour
          </Link>
          <div className="flex flex-col gap-4">
            <Badge variant="neutral">Laboratoire visuel</Badge>
            <Typography variant="display" className="text-balance">
              Design System
            </Typography>
            <Typography variant="bodyLarge" className="max-w-3xl text-text-secondary">
              Fondations visuelles du Mehdi Presentation Engine — couleurs,
              typographie, espacements et composants communs.
            </Typography>
          </div>
        </header>

        <DsSection
          id="colors"
          title="Couleurs"
          description="Palette sombre premium avec accents saturés et élégants."
        >
          <div className="flex flex-col gap-10">
            <div>
              <Typography variant="h3" className="mb-6">
                Backgrounds
              </Typography>
              <Grid columns={4} gap="md">
                {Object.entries(backgroundColors).map(([name, value]) => (
                  <ColorSwatch key={name} name={name} value={value} />
                ))}
              </Grid>
            </div>

            <div>
              <Typography variant="h3" className="mb-6">
                Textes
              </Typography>
              <Grid columns={4} gap="md">
                {Object.entries(textColors).map(([name, value]) => (
                  <ColorSwatch key={name} name={name} value={value} />
                ))}
              </Grid>
            </div>

            <div>
              <Typography variant="h3" className="mb-6">
                Accents
              </Typography>
              <Grid columns={3} gap="md">
                {Object.entries(accentColors).map(([name, value]) => (
                  <ColorSwatch key={name} name={name} value={value} />
                ))}
              </Grid>
            </div>

            <div>
              <Typography variant="h3" className="mb-6">
                Bordures
              </Typography>
              <Grid columns={3} gap="md">
                <ColorSwatch name="border" value={colors.border} />
                <ColorSwatch name="borderSubtle" value={colors.borderSubtle} />
                <ColorSwatch name="borderStrong" value={colors.borderStrong} />
              </Grid>
            </div>
          </div>
        </DsSection>

        <Divider variant="accent" />

        <DsSection
          id="typography"
          title="Typographie"
          description="Hiérarchie pensée pour le format 1920×1080 — tailles généreuses, impact visuel fort."
        >
          <div className="flex flex-col gap-10 rounded-2xl border border-border bg-surface p-10">
            {(Object.keys(typography) as Array<keyof typeof typography>).map(
              (variant) => (
                <div
                  key={variant}
                  className="flex flex-col gap-2 border-b border-border-subtle pb-8 last:border-0 last:pb-0"
                >
                  <Typography variant="caption" className="font-mono uppercase">
                    {variant} — {typography[variant].fontSize} /{" "}
                    {typography[variant].fontWeight}
                  </Typography>
                  <Typography variant={variant}>
                    {variant === "metric"
                      ? "847K"
                      : variant === "quote"
                        ? "« La clarté bat la complexité. »"
                        : variant === "eyebrow"
                          ? "Section label"
                          : "Mehdi Presentation Engine"}
                  </Typography>
                </div>
              ),
            )}
          </div>
        </DsSection>

        <Divider variant="accent" />

        <DsSection
          id="spacing"
          title="Espacements"
          description="Échelle d'espacement adaptée aux slides et au contenu vidéo."
        >
          <div className="flex flex-col gap-4">
            {(Object.entries(spacing) as [string, string][]).map(
              ([token, value]) => (
                <div
                  key={token}
                  className="flex items-center gap-6 rounded-lg border border-border-subtle bg-surface p-4"
                >
                  <span className="w-12 font-mono text-caption text-text-muted">
                    {token}
                  </span>
                  <span className="w-20 font-mono text-caption text-text-secondary">
                    {value}
                  </span>
                  <div
                    className="h-4 rounded-sm bg-accent-blue/60"
                    style={{ width: value }}
                  />
                </div>
              ),
            )}
          </div>
        </DsSection>

        <Divider variant="accent" />

        <DsSection id="radius" title="Rayons">
          <Grid columns={4} gap="md">
            {(Object.entries(radius) as [string, string][]).map(
              ([token, value]) => (
                <div key={token} className="flex flex-col gap-3">
                  <div
                    className="h-20 border border-border bg-surface-elevated"
                    style={{ borderRadius: value }}
                  />
                  <div>
                    <p className="text-caption font-medium text-text-primary">
                      {token}
                    </p>
                    <p className="font-mono text-caption text-text-muted">
                      {value}
                    </p>
                  </div>
                </div>
              ),
            )}
          </Grid>
        </DsSection>

        <Divider variant="accent" />

        <DsSection id="shadows" title="Ombres">
          <Grid columns={3} gap="lg">
            {(Object.entries(shadows) as [string, string][])
              .filter(([key]) => key !== "none")
              .map(([token, value]) => (
                <div key={token} className="flex flex-col gap-4">
                  <div
                    className="h-24 rounded-xl bg-surface-elevated"
                    style={{ boxShadow: value }}
                  />
                  <p className="font-mono text-caption text-text-muted">
                    {token}
                  </p>
                </div>
              ))}
          </Grid>
        </DsSection>

        <Divider variant="accent" />

        <DsSection id="badges" title="Badges">
          <div className="flex flex-wrap gap-4">
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            {accentKeys.map((accent) => (
              <Badge key={accent} variant="accent" accent={accent}>
                {accent}
              </Badge>
            ))}
          </div>
        </DsSection>

        <Divider variant="accent" />

        <DsSection id="cards" title="Cartes">
          <Grid columns={2} gap="lg">
            <Card variant="default">
              <Typography variant="h3">Default</Typography>
              <Typography variant="body">Surface standard avec bordure.</Typography>
            </Card>
            <Card variant="elevated">
              <Typography variant="h3">Elevated</Typography>
              <Typography variant="body">Surface surélevée avec ombre.</Typography>
            </Card>
            <Card variant="outline">
              <Typography variant="h3">Outline</Typography>
              <Typography variant="body">Transparente, bordure marquée.</Typography>
            </Card>
            <Card variant="muted">
              <Typography variant="h3">Muted</Typography>
              <Typography variant="body">Surface discrète et atténuée.</Typography>
            </Card>
            {accentKeys.slice(0, 3).map((accent) => (
              <Card key={accent} variant="accent" accent={accent}>
                <Typography variant="h3">Accent — {accent}</Typography>
                <Typography variant="body">
                  Carte avec accent coloré subtil.
                </Typography>
              </Card>
            ))}
          </Grid>
        </DsSection>

        <Divider variant="accent" />

        <DsSection id="grid" title="Grilles">
          <div className="flex flex-col gap-10">
            {([1, 2, 3, 4] as const).map((cols) => (
              <div key={cols} className="flex flex-col gap-4">
                <Typography variant="caption" className="font-mono">
                  {cols} colonne{cols > 1 ? "s" : ""}
                </Typography>
                <Grid columns={cols} gap="md">
                  {Array.from({ length: cols }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border bg-surface p-6 text-center text-caption text-text-muted"
                    >
                      Col {i + 1}
                    </div>
                  ))}
                </Grid>
              </div>
            ))}
          </div>
        </DsSection>

        <Divider variant="accent" />

        <DsSection id="components" title="Composants communs">
          <Grid columns={2} gap="lg">
            <Card variant="default">
              <div className="flex flex-col gap-6">
                <SectionLabel accent="purple">Section Label</SectionLabel>
                <Typography variant="h3">IconBox</Typography>
                <div className="flex gap-4">
                  <IconBox size="sm" accent="blue">
                    <PlayIcon />
                  </IconBox>
                  <IconBox size="md" accent="green">
                    <PlayIcon />
                  </IconBox>
                  <IconBox size="lg" accent="orange">
                    <PlayIcon />
                  </IconBox>
                </div>
              </div>
            </Card>

            <Card variant="default">
              <Typography variant="h3" className="mb-6">
                Dividers
              </Typography>
              <div className="flex flex-col gap-6">
                <div>
                  <Typography variant="caption" className="mb-2">
                    Subtle
                  </Typography>
                  <Divider variant="subtle" />
                </div>
                <div>
                  <Typography variant="caption" className="mb-2">
                    Accent
                  </Typography>
                  <Divider variant="accent" />
                </div>
                <div className="flex h-16 items-center gap-4">
                  <Typography variant="caption">Vertical</Typography>
                  <Divider orientation="vertical" variant="accent" />
                  <Typography variant="caption">Vertical</Typography>
                </div>
              </div>
            </Card>
          </Grid>
        </DsSection>

        <Divider variant="accent" />

        <DsSection
          id="slide-canvas"
          title="SlideCanvas"
          description="Wrapper 16:9 avec safe areas — aperçu structurel, pas une slide finale."
        >
          <SlideCanvas className="max-w-5xl mx-auto">
            <SlideContainer className="justify-between">
              <SlideHeader>
                <SectionLabel accent="blue">Aperçu structurel</SectionLabel>
              </SlideHeader>

              <div className="flex flex-1 flex-col justify-center gap-6">
                <Typography variant="h1" className="text-balance">
                  Zone de contenu
                </Typography>
                <Typography variant="bodyLarge" className="max-w-2xl text-text-secondary">
                  SlideContainer + safe areas. Ratio 16:9 conservé sur écran
                  normal.
                </Typography>
              </div>

              <SlideFooter>
                <Divider variant="subtle" className="mb-4" />
                <Typography variant="caption" className="text-text-muted">
                  SlideFooter — zone optionnelle
                </Typography>
              </SlideFooter>
            </SlideContainer>
          </SlideCanvas>
        </DsSection>
      </Container>
    </main>
  );
}
