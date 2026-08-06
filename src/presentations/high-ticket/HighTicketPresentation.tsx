"use client";

import { PresentationEngine } from "@/components/presentation/PresentationEngine";
import {
  Slide01Hook,
  Slide02Businesses,
  Slide03Results,
  Slide05WhyIFailed,
  Slide06SameThing,
  Slide07Consequence,
  Slide08RealProblem,
  Slide09LowTicket,
  Slide10VolumeWeight,
  Slide12Trap,
  Slide13Discovery,
  Slide14NotClassicEcommerce,
  Slide15HowClientBuys,
  Slide16EconomicComparison,
  Slide17NumericExample,
  Slide18Conversion,
  Slide19CoreIdea,
  SlideBeginnerMistake,
  SlideDoubleCTA,
  SlideObjectionPrice,
  SlideTransition,
  SlideVirtuousCircle,
  SlideViciousCircle,
  SlideWhatIThoughtThen,
  SlideWhoAmI,
  SlideWhyAdCostsRise,
  SlideWhyChannel,
  SlideWhyMentoring,
  SlideWish2021,
} from "./slides";

export function HighTicketPresentation() {
  return (
    <PresentationEngine
      transition="slide"
      slides={[
        /* Partie 1 — Hook */
        { id: "hook", content: <Slide01Hook />, steps: 2 },

        /* Partie 2 — Crédibilité */
        { id: "who-am-i", content: <SlideWhoAmI />, steps: 6 },

        /* Partie 3 — Pourquoi cette chaîne */
        { id: "why-channel", content: <SlideWhyChannel />, steps: 3 },

        /* Partie 4 — Storytelling */
        { id: "what-i-thought", content: <SlideWhatIThoughtThen />, steps: 4 },

        /* Partie 5 — Pourquoi j'échouais */
        { id: "businesses", content: <Slide02Businesses /> },
        { id: "results", content: <Slide03Results />, steps: 2 },
        { id: "why-i-failed", content: <Slide05WhyIFailed /> },
        { id: "same-thing", content: <Slide06SameThing /> },
        { id: "consequence", content: <Slide07Consequence />, steps: 2 },
        { id: "real-problem", content: <Slide08RealProblem />, steps: 2 },
        { id: "low-ticket", content: <Slide09LowTicket />, steps: 2 },
        { id: "volume-weight", content: <Slide10VolumeWeight /> },

        /* Partie 6 — Preuve coûts publicitaires */
        { id: "why-ad-costs", content: <SlideWhyAdCostsRise />, steps: 4 },
        { id: "cost-trap", content: <Slide12Trap />, steps: 4 },

        /* Partie 7 — Cercle vicieux */
        { id: "vicious-circle", content: <SlideViciousCircle />, steps: 2 },

        /* Découverte + cercle vertueux */
        { id: "discovery", content: <Slide13Discovery />, steps: 3 },
        { id: "virtuous-circle", content: <SlideVirtuousCircle />, steps: 2 },

        /* Modèle PAS */
        { id: "not-classic", content: <Slide14NotClassicEcommerce />, steps: 2 },
        { id: "checkout", content: <Slide15HowClientBuys />, steps: 3 },
        { id: "economic-comparison", content: <Slide16EconomicComparison /> },
        { id: "numeric-example", content: <Slide17NumericExample />, steps: 3 },
        { id: "conversion", content: <Slide18Conversion />, steps: 3 },
        { id: "core-idea", content: <Slide19CoreIdea />, steps: 4 },

        /* Objections & erreurs */
        { id: "objection", content: <SlideObjectionPrice />, steps: 4 },
        { id: "beginner-mistake", content: <SlideBeginnerMistake />, steps: 7 },
        { id: "wish-2021", content: <SlideWish2021 />, steps: 4 },

        /* Conclusion */
        { id: "transition", content: <SlideTransition />, steps: 2 },
        { id: "mentoring", content: <SlideWhyMentoring />, steps: 5 },
        { id: "double-cta", content: <SlideDoubleCTA />, steps: 4 },
      ]}
    />
  );
}
