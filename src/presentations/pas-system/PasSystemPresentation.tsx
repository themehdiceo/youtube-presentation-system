"use client";

import { PresentationEngine } from "@/components/presentation/PresentationEngine";
import { ERROR_SLIDES } from "@/presentations/pas-system/data";
import {
  SlideAcquisition,
  SlideCaseStudyA,
  SlideCaseStudyB,
  SlideCaseStudyC,
  SlideCaseStudyD,
  SlideCoherence,
  SlideConclusion,
  SlideDemandComparison,
  SlideDemandQuestion,
  SlideError,
  SlideExecutionBridge,
  SlideHookReality,
  SlideHookReject,
  SlideHookTitle,
  SlideHookVision,
  SlideMarketingAngle,
  SlideMentoring,
  SlideMetaAdsRedirect,
  SlideOneCountry,
  SlidePagePerAngle,
  SlidePasFramework,
  SlidePasSummary,
  SlideProblemCriteria,
  SlideProblemExamples,
  SlideProblemMessage,
  SlideProductPhilosophy,
  SlideSameProduct,
  SlideScalability,
  SlideThankYou,
  SlideValidation,
  SlideWhatITest,
  SlideWhenItWorks,
  SlideWhoAmI,
} from "./slides";

export function PasSystemPresentation() {
  return (
    <PresentationEngine
      transition="slide"
      slides={[
        /* Hook — 4 slides */
        { id: "hook-title", content: <SlideHookTitle /> },
        { id: "hook-vision", content: <SlideHookVision /> },
        { id: "hook-reject", content: <SlideHookReject />, steps: 3 },
        { id: "hook-reality", content: <SlideHookReality />, steps: 2 },

        /* Crédibilité & framework */
        { id: "who-am-i", content: <SlideWhoAmI />, steps: 6 },
        { id: "pas-framework", content: <SlidePasFramework />, steps: 4 },

        /* Pilier P — Produit */
        { id: "product-philosophy", content: <SlideProductPhilosophy />, steps: 4 },
        { id: "problem-examples", content: <SlideProblemExamples /> },
        { id: "problem-message", content: <SlideProblemMessage /> },
        { id: "problem-criteria", content: <SlideProblemCriteria />, steps: 6 },
        { id: "demand-comparison", content: <SlideDemandComparison />, steps: 2 },
        { id: "marketing-angle", content: <SlideMarketingAngle />, steps: 2 },
        { id: "same-product", content: <SlideSameProduct />, steps: 7 },

        /* Étude de cas */
        { id: "case-a", content: <SlideCaseStudyA />, steps: 3 },
        { id: "case-b", content: <SlideCaseStudyB />, steps: 2 },
        { id: "case-c", content: <SlideCaseStudyC />, steps: 3 },
        { id: "case-d", content: <SlideCaseStudyD />, steps: 2 },

        { id: "demand-question", content: <SlideDemandQuestion />, steps: 3 },
        { id: "what-i-test", content: <SlideWhatITest />, steps: 6 },
        { id: "execution-bridge", content: <SlideExecutionBridge />, steps: 4 },

        /* Pilier A — Acquisition */
        { id: "acquisition", content: <SlideAcquisition />, steps: 5 },
        { id: "one-country", content: <SlideOneCountry />, steps: 7 },
        { id: "validation", content: <SlideValidation />, steps: 3 },
        { id: "meta-ads-redirect", content: <SlideMetaAdsRedirect />, steps: 2 },
        { id: "page-per-angle", content: <SlidePagePerAngle />, steps: 4 },
        { id: "coherence", content: <SlideCoherence />, steps: 3 },

        /* Pilier S — Scalabilité */
        { id: "scalability", content: <SlideScalability />, steps: 4 },
        { id: "when-it-works", content: <SlideWhenItWorks />, steps: 3 },

        /* Erreurs */
        ...ERROR_SLIDES.map((text, index) => ({
          id: `error-${index + 1}`,
          content: <SlideError key={`error-${index + 1}`} text={text} />,
        })),

        /* Conclusion */
        { id: "pas-summary", content: <SlidePasSummary />, steps: 2 },
        { id: "conclusion", content: <SlideConclusion />, steps: 4 },
        { id: "mentoring", content: <SlideMentoring />, steps: 8 },
        { id: "thank-you", content: <SlideThankYou />, steps: 5 },
      ]}
    />
  );
}
