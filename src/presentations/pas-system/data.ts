import { COPY, TERMS } from "./copy";

export { TERMS, COPY };

export {
  WRONG_ECOMMERCE_FLOW,
  PAS_PILLARS,
  PROBLEM_EXAMPLES,
  ACQUISITION_START,
  SCALE_FLOW,
  SCALABILITY_FLOW,
} from "./copy";

export const ERROR_SLIDES = COPY.errors;

/** Modifier ici le statut des candidatures accompagnement. */
export const COACHING_AVAILABILITY = {
  isOpen: false,
  label: "Complet ce mois-ci",
} as const;
