import Link from "next/link";
import { DemoPresentation } from "@/components/demo/DemoPresentation";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";

export default function DemoPage() {
  return (
    <main className="py-12">
      <Container className="flex flex-col gap-10">
        <header className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-caption text-text-muted transition-colors hover:text-text-primary"
          >
            ← Retour
          </Link>
          <div className="flex flex-col gap-3">
            <Badge variant="neutral">Phase 2 — Presentation Engine</Badge>
            <Typography variant="h1">Démo du moteur</Typography>
            <Typography variant="body" className="max-w-2xl text-text-secondary">
              Page interne de test — navigation clavier, swipe, plein écran,
              transitions et ratio 16:9.
            </Typography>
          </div>
        </header>

        <DemoPresentation />
      </Container>
    </main>
  );
}
