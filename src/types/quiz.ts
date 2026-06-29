export type DiagnosisKey = string;

export interface QuizOption {
  id: string;
  label: string;
  /** Pesos para o motor de diagnóstico, ex: { escassez: 2, medo: 1 } */
  weights?: Record<DiagnosisKey, number>;
}

export interface QuizQuestion {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  options: QuizOption[]; // 2 a 6 opções
}

export interface ProcessingStep {
  label: string;
  /** ms até marcar como concluído */
  duration?: number;
}

export interface QuizHero {
  badge?: string;
  headline: string;
  subheadline?: string;
  footnote?: string;
  button: string;
}

export interface QuizSEO {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

export interface DiagnosisResult {
  key: DiagnosisKey;
  title: string;
  summary: string;
  description?: string;
}

export interface OfferTestimonial {
  name: string;
  text: string;
  role?: string;
}

export interface OfferFAQ {
  q: string;
  a: string;
}

export interface QuizOffer {
  /** Hero da landing de vendas */
  hero: {
    badge?: string;
    headline: string;
    subheadline?: string;
    image?: string;
  };
  problem: { title: string; text: string };
  solution: { title: string; text: string };
  beforeAfter: {
    title: string;
    before: string[];
    after: string[];
  };
  benefits: { title: string; items: string[] };
  howItWorks: { title: string; steps: { title: string; text: string }[] };
  testimonials: { title: string; items: OfferTestimonial[] };
  author: { title: string; name: string; bio: string; image?: string };
  pricing: {
    badge?: string;
    title: string;
    price: string;
    oldPrice?: string;
    bullets: string[];
    cta: string;
    ctaUrl: string;
  };
  guarantee: { title: string; text: string };
  faq: { title: string; items: OfferFAQ[] };
  finalCta: { headline: string; button: string; url: string };
  footer: { brand: string; text?: string };
}

export interface QuizConfig {
  slug: string;
  brand: string;
  topbarCta?: string;
  seo: QuizSEO;
  hero: QuizHero;
  questions: QuizQuestion[];
  processing: {
    title?: string;
    steps: ProcessingStep[];
  };
  /** Lista de diagnósticos possíveis. O de maior peso somado vence. */
  diagnoses: DiagnosisResult[];
  /** Diagnóstico padrão caso pesos não decidam */
  defaultDiagnosis?: DiagnosisKey;
  offer: QuizOffer;
}
