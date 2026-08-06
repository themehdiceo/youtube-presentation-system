import Link from "next/link";
import { PasSystemDemoPresentation } from "@/components/demo/PasSystemDemoPresentation";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";

export default function PasSystemDemoPage() {
  return (
    <main className="py-12">
      <Container className="flex flex-col gap-10">
        <header className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="text-caption text-text-muted transition-colors hover:text-text-primary"
            >
              ← Accueil
            </Link>
            <Link
              href="/demo"
              className="text-caption text-text-muted transition-colors hover:text-text-primary"
            >
              ← Vidéo 1
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Badge variant="accent">PAS High Ticket · Vidéo 2</Badge>
            <Typography variant="h1" className="text-balance">
              Comment fonctionne réellement le PAS High Ticket ?
            </Typography>
            <Typography variant="body" className="max-w-2xl text-text-secondary">
              37 slides · français · révélations manuelles · ~10–12 min · plein écran (F)
            </Typography>
          </div>
        </header>

        <PasSystemDemoPresentation />
      </Container>
    </main>
  );
}
