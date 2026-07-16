import type { QuizConfig } from "@/types/quiz";

// Este quiz usa um fluxo 100% customizado (PararDeProcrastinarFlow),
// então a maior parte do QuizConfig é apenas ceremony para satisfazer o tipo.
const config: QuizConfig = {
  slug: "parar-de-procrastinar",
  brand: "Rotina Produtiva",
  seo: {
    title: "Você sabe o que precisa fazer. O problema é que você não faz.",
    description:
      "Em 10 dias, com apenas 5 minutos por dia, o Protocolo Do Zero À Rotina Produtiva ajuda você a parar de procrastinar e criar a rotina dos sonhos.",
    canonical: "/parar-de-procrastinar",
  },
  hero: { headline: "", button: "" },
  questions: [],
  processing: { steps: [] },
  diagnoses: [{ key: "default", title: "", summary: "" }],
  offer: {
    hero: { headline: "" },
    problem: { title: "", text: "" },
    solution: { title: "", text: "" },
    beforeAfter: { title: "", before: [], after: [] },
    benefits: { title: "", items: [] },
    howItWorks: { title: "", steps: [] },
    testimonials: { title: "", items: [] },
    author: { title: "", name: "", bio: "" },
    pricing: { title: "", price: "", bullets: [], cta: "", ctaUrl: "" },
    guarantee: { title: "", text: "" },
    faq: { title: "", items: [] },
    finalCta: { headline: "", button: "", url: "" },
    footer: { brand: "" },
  },
};

export default config;
