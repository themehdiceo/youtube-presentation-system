import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-24">
      <Container maxWidth="narrow" className="flex flex-col items-center gap-8 text-center">
        <Badge variant="neutral">Phase 2 — Presentation Engine</Badge>

        <div className="flex flex-col gap-4">
          <Typography variant="h1" className="text-balance">
            Mehdi Presentation Engine
          </Typography>
          <Typography variant="bodyLarge" className="max-w-2xl text-text-secondary">
            Moteur interne de présentations premium pour vidéos YouTube.
            Identité visuelle cohérente, composants réutilisables, format 16:9.
          </Typography>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/design-system"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface-elevated px-8 py-4 text-body font-medium text-text-primary transition-colors hover:border-accent-blue/40 hover:bg-surface"
          >
            Design System
            <span aria-hidden className="text-accent-blue">
              →
            </span>
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-8 py-4 text-body font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
          >
            Vidéo 1 — Pourquoi
            <span aria-hidden className="text-text-muted">
              →
            </span>
          </Link>
          <Link
            href="/demo/pas-system"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-8 py-4 text-body font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
          >
            Vidéo 2 — PAS System
            <span aria-hidden className="text-text-muted">
              →
            </span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
