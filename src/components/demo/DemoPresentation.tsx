"use client";

import { DemoSlide } from "@/components/demo/DemoSlide";
import { PresentationEngine } from "@/components/presentation/PresentationEngine";

export function DemoPresentation() {
  return (
    <PresentationEngine
      slides={[
        <DemoSlide
          key="intro"
          number={1}
          title="Introduction"
          description="Bienvenue dans le moteur de présentation. Cette démo valide le ratio 16:9 et les fondations visuelles."
          accent="blue"
        />,
        <DemoSlide
          key="navigation"
          number={2}
          title="Navigation"
          description="Utilise les flèches, Espace, Page Up/Down, Home, End, le swipe tactile ou les zones latérales au survol."
          accent="purple"
        />,
        <DemoSlide
          key="animations"
          number={3}
          title="Animations"
          description="Transitions subtiles et premium entre les slides. La direction influence le mouvement."
          accent="green"
        />,
        <DemoSlide
          key="fullscreen"
          number={4}
          title="Plein écran"
          description="Appuie sur F ou utilise le bouton plein écran. Escape pour quitter."
          accent="orange"
        />,
        <DemoSlide
          key="progress"
          number={5}
          title="Progression"
          description="La barre en haut et le compteur reflètent l'avancement dans la présentation."
          accent="yellow"
        />,
        <DemoSlide
          key="fin"
          number={6}
          title="Fin"
          description="Phase 2 validée. Les composants de slides finaux arriveront en Phase 3."
          accent="red"
        />,
      ]}
    />
  );
}
