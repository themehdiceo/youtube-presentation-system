/**
 * PAS System — Vidéo 2
 * « Comment fonctionne réellement le PAS High Ticket ? »
 */

export const TERMS = {
  pasHighTicket: "PAS High Ticket",
  pas: "PAS",
} as const;

export const COPY = {
  hook: {
    title: "Comment fonctionne réellement le PAS High Ticket ?",
    wrongFlow: ["Produit", "Shopify", "Facebook Ads", "Argent"],
    cross: "✕",
    rejectLine: "C'est ce que la majorité des gens imaginent.",
    pivot: "En réalité…",
    reveal: "Ce n'est même pas 20 % du système.",
  },
  whoAmI: {
    title: "Qui suis-je ?",
    name: "Mehdi",
    credentials: [
      "Plus de 6 ans dans l'e-commerce",
      "Plus de 1 million de dollars de ventes générées",
      "Ventes dans plusieurs pays",
      "Plusieurs centaines de milliers de dollars investis en publicité",
    ],
  },
  pasFramework: {
    title: "Le système PAS High Ticket",
    pillars: [
      { letter: "P", label: "Produit" },
      { letter: "A", label: "Acquisition" },
      { letter: "S", label: "Scalabilité" },
    ],
  },
  productPhilosophy: {
    title: "Le Produit",
    mostPeople: "La plupart des gens cherchent un produit.",
    pivot: "Moi…",
    reveal: "Je cherche un problème.",
  },
  problemExamples: {
    examples: [
      "Perte de cheveux",
      "Perte de poids",
      "Douleurs menstruelles",
      "Douleurs chroniques",
      "Mauvais sommeil",
    ],
    message: "Plus le problème est important…",
    emphasis: "Plus il est facile de vendre une solution.",
  },
  problemCriteria: {
    title: "Tous les problèmes ne se valent pas",
    items: [
      "Douleur importante",
      "Urgence réelle",
      "Solution déjà recherchée",
      "Capacité de paiement",
    ],
    reveal:
      "Plus le problème est urgent, plus la personne cherche activement une solution.",
  },
  demandComparison: {
    create: {
      title: "Demande à créer",
      items: [
        "Produit gadget",
        "Bénéfice difficile à comprendre",
        "Aucune recherche active",
        "Besoin d'éduquer longtemps",
      ],
    },
    existing: {
      title: "Demande existante",
      items: [
        "Problème déjà connu",
        "Recherches Google",
        "Solutions déjà achetées",
        "Urgence ou frustration claire",
      ],
    },
    reveal: "Je préfère entrer sur un marché où la demande existe déjà.",
  },
  marketingAngle: {
    title: "Je ne cherche jamais un produit gagnant.",
    reveal: "Je cherche un angle marketing gagnant.",
  },
  sameProduct: {
    center: "Même produit",
    variants: [
      "Cible différente",
      "Promesse différente",
      "Émotion différente",
      "Contexte différent",
      "Raison d'acheter différente",
    ],
    reveal: "L'angle change la manière dont le marché perçoit le produit.",
  },
  caseStudy: {
    product: "Soulagement des douleurs menstruelles",
    testA: {
      title: "Premier angle",
      headline: "Vendre directement aux femmes",
      points: [
        "Ventes présentes",
        "Faible rentabilité",
        "Coût par achat trop élevé",
        "Marge insuffisante",
      ],
    },
    testB: {
      title: "Ce que nous avons changé",
      line1: "Nous n'avons pas changé le produit.",
      reveal: "Nous avons changé l'acheteur.",
    },
    testC: {
      title: "Nouvel angle",
      headline: "Les hommes qui veulent aider leur partenaire",
      points: [
        "Autre émotion",
        "Autre motivation",
        "Autre message",
        "Meilleure économie publicitaire",
      ],
    },
    testD: {
      line1: "Le produit n'était pas mauvais.",
      reveal: "Le premier angle l'était.",
    },
  },
  demandQuestion: {
    title: "Une seule question",
    question: "Est-ce qu'il existe suffisamment de demande ?",
    explain:
      "Avant de vendre un produit… je veux savoir si beaucoup de personnes cherchent déjà une solution.",
  },
  whatITest: {
    title: "Ce que je teste réellement",
    blocks: ["Le message", "La cible", "La promesse"],
    reveal1: "Je ne change pas tout en même temps.",
    reveal2:
      "Je teste une variable claire pour comprendre ce qui fonctionne.",
  },
  executionBridge: {
    line1: "Comprendre le système est la première étape.",
    line2:
      "L'exécuter demande des données, des critères et des décisions précises.",
    line3:
      "C'est cette partie que je travaille avec les personnes que j'accompagne.",
    cta: "Lien dans la description",
  },
  acquisition: {
    title: "L'acquisition",
    intro: "Au début :",
    items: ["Un seul pays", "Plusieurs angles marketing", "Une seule offre"],
    footer: "Valider. Pas scaler immédiatement.",
  },
  oneCountry: {
    title: "Pourquoi un seul pays ?",
    items: [
      "Une culture",
      "Une langue",
      "Un coût publicitaire",
      "Un comportement d'achat",
      "Un message à optimiser",
    ],
    reveal:
      "Si tu testes cinq pays à la fois, tu ne sais plus ce qui fonctionne.",
  },
  validation: {
    title: "On ne scale pas trop tôt",
    left: "Quelques ventes",
    right: "Modèle validé",
    criteria: [
      "Ventes répétables",
      "Coût par achat maîtrisé",
      "Marge positive",
      "Angle stable",
      "Opération capable de suivre",
    ],
    reveal: "La scalabilité commence après la validation.",
  },
  metaAdsRedirect: {
    line1: "Je ne vais pas expliquer Meta Ads aujourd'hui.",
    line2: "J'ai déjà une vidéo complète sur cette chaîne.",
  },
  pagePerAngle: {
    title: "Un angle gagnant mérite sa propre page",
    pairs: [
      { angle: "Angle 1", page: "Page produit 1" },
      { angle: "Angle 2", page: "Page produit 2" },
      { angle: "Angle 3", page: "Page produit 3" },
    ],
    reveal1: "Chaque page doit continuer la promesse de la publicité.",
    reveal2:
      "Une publicité et une page incohérentes détruisent la conversion.",
  },
  coherence: {
    title: "Pourquoi certaines publicités attirent… mais ne vendent pas",
    ad: { label: "Publicité", promise: "Promesse A" },
    page: { label: "Page produit", promise: "Promesse B" },
    cross: "✕",
    reveal: "Le client ne retrouve pas la raison pour laquelle il a cliqué.",
  },
  scalability: {
    title: "La Scalabilité",
    flow: [
      "Un angle fonctionne",
      "On le reproduit",
      "On ouvre un nouveau pays",
      "On recommence",
    ],
    keyMessage: "Je ne scale pas un produit.",
    keyEmphasis: "Je scale un système.",
  },
  whenItWorks: {
    title: "Quand ça fonctionne…",
    reveal: "On scale.",
    flow: [
      "Angles qui ont marché",
      "On se concentre dessus",
      "Page produit par angle",
      "Budget pub ↑ sur les gagnants",
    ],
  },
  errors: [
    "Chercher un produit miracle",
    "Changer de produit toutes les semaines",
    "Copier tous les concurrents",
    "Penser que Facebook Ads est le problème",
    "Tester trop de pays dès le début",
  ],
  pasSummary: {
    acronym: "PAS",
    pillars: ["Produit", "Acquisition", "Scalabilité"],
    reveal: "Le produit n'est qu'une partie du système.",
  },
  conclusion: {
    line1: "Aujourd'hui…",
    line2: "Tu comprends comment fonctionne le PAS High Ticket.",
    line3: "Mais comprendre un système…",
    line4: "…ne suffit pas.",
  },
  mentoring: {
    title: "Pourquoi j'accompagne des entrepreneurs ?",
    lines: [
      "Je ne vends pas une formation classique.",
      "J'accompagne un nombre limité d'entrepreneurs.",
      "Accompagnement gratuit à l'entrée.",
      "Je prends 10 % des ventes générées dans le cadre du partenariat.",
      "Je travaille sur le long terme avec chaque personne sélectionnée.",
    ],
    availabilityNote:
      "Les candidatures du mois peuvent être fermées selon les places disponibles.",
    cta: "Lien dans la description",
  },
  thankYou: {
    line1: "Merci d'avoir regardé.",
    line2: "Si cette vidéo t'a aidé…",
    subscribe: "Abonne-toi.",
    watchMore: "Regarde les autres vidéos de la chaîne.",
    endScreen: "Écran de fin YouTube",
    thumbnails: ["Vidéo 1", "Vidéo 2", "Vidéo 3"],
  },
} as const;

export const WRONG_ECOMMERCE_FLOW = COPY.hook.wrongFlow;

export const PAS_PILLARS = COPY.pasFramework.pillars;

export const PROBLEM_EXAMPLES = COPY.problemExamples.examples;

export const ACQUISITION_START = COPY.acquisition.items;

export const SCALE_FLOW = COPY.whenItWorks.flow;

export const SCALABILITY_FLOW = COPY.scalability.flow;
