/**
 * Données de crédibilité — sources réelles uniquement.
 * Ne jamais inventer de statistique ici.
 */

export type EvidenceSource = {
  label: string;
  url: string;
};

export type BarChartPoint = {
  label: string;
  value: number;
  display: string;
  annotation?: string;
};

/** WordStream · Google Ads Benchmarks 2024 & 2025 (campagnes US) */
export const GOOGLE_ADS_CPC_TREND = {
  title: "CPC moyen — Google Ads (US)",
  points: [
    { label: "2023", value: 4.22, display: "$4,22" },
    { label: "2024", value: 4.66, display: "$4,66", annotation: "+10 %" },
    { label: "2025", value: 5.26, display: "$5,26", annotation: "+13 %" },
  ] satisfies BarChartPoint[],
  source: {
    label: "WordStream · Google Ads Benchmarks 2024–2025",
    url: "https://www.wordstream.com/blog/2024-google-ads-benchmarks",
  } satisfies EvidenceSource,
} as const;

/** WordStream · Google Ads Benchmarks 2024 — hausse du coût de conversion */
export const GOOGLE_ADS_ACQUISITION_COST = {
  headline: "+25 %",
  subtitle: "Coût d'acquisition client · Google Ads",
  detail: "19/23 secteurs en hausse · moy. $66,69",
  source: {
    label: "WordStream · Google Ads Benchmarks 2024",
    url: "https://www.wordstream.com/blog/2024-google-ads-benchmarks",
  } satisfies EvidenceSource,
} as const;

/** WordStream · Facebook Ads Benchmarks 2025 */
export const META_ADS_ACQUISITION_COST = {
  headline: "+20,9 %",
  subtitle: "Coût d'acquisition client · Meta Ads",
  detail: "Moy. $27,66 · campagnes US (2025)",
  source: {
    label: "WordStream · Facebook Ads Benchmarks 2025",
    url: "https://www.wordstream.com/blog/facebook-ads-benchmarks-2025",
  } satisfies EvidenceSource,
} as const;

/** Shopify Inc. · Form 10-K 2024 (SEC) */
export const SHOPIFY_COMPETITION = {
  headline: "875 M",
  subtitle: "acheteurs uniques sur Shopify · 2024",
  detail: "Millions de marchands · 175+ pays",
  source: {
    label: "Shopify · Form 10-K 2024",
    url: "https://www.sec.gov/Archives/edgar/data/1594805/000159480525000012/shop-20241231.htm",
  } satisfies EvidenceSource,
} as const;

/** Littledata · benchmark 2 800 sites Shopify */
export const SHOPIFY_AOV_BENCHMARK = {
  title: "Panier moyen Shopify (US)",
  benchmarkPoints: [
    { label: "Médiane", value: 85, display: "~$85" },
    { label: "Top 20 %", value: 192, display: ">$192" },
  ] satisfies BarChartPoint[],
  source: {
    label: "Littledata · 2 800 sites Shopify",
    url: "https://www.littledata.io/average-website-performance",
  } satisfies EvidenceSource,
} as const;

/** WordStream · Google Ads Benchmarks 2025 */
export const AD_COMPETITION_QUOTE = {
  excerpt:
    "87 % des secteurs ont vu leur CPC augmenter — concurrence accrue sur les enchères.",
  source: {
    label: "WordStream · Google Ads Benchmarks 2025",
    url: "https://www.wordstream.com/blog/2025-google-ads-benchmarks",
  } satisfies EvidenceSource,
} as const;
