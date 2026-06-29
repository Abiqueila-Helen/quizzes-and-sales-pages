import type { QuizConfig } from "@/types/quiz";

const config: QuizConfig = {
  slug: "prisao-da-autossabotagem",
  brand: "Prisão da Autossabotagem",
  topbarCta: "Diagnóstico gratuito",
  seo: {
    title: "A Prisão da Autossabotagem — Diagnóstico Gratuito",
    description:
      "Descubra o padrão que está te mantendo presa às mesmas decisões e travamentos.",
    canonical: "/prisao-da-autossabotagem",
  },
  hero: {
    badge: "DIAGNÓSTICO GRATUITO",
    headline:
      "Você sabe o que precisa fazer, mas algo dentro de você sempre te puxa pra trás?",
    subheadline:
      "Responda algumas perguntas rápidas e descubra qual padrão de autossabotagem está te prendendo.",
    footnote: "Leva menos de 2 minutos.",
    button: "Começar agora",
  },
  questions: [
    {
      id: "q1",
      title: "Com que frequência você adia coisas importantes?",
      options: [
        { id: "a", label: "Quase nunca" },
        { id: "b", label: "Às vezes", weights: { procrastinação: 1 } },
        { id: "c", label: "Quase sempre", weights: { procrastinação: 3 } },
        { id: "d", label: "Sempre", weights: { procrastinação: 3, medo: 1 } },
      ],
    },
    {
      id: "q2",
      title: "Você se sente merecedora do que quer?",
      options: [
        { id: "a", label: "Sim", },
        { id: "b", label: "Às vezes", weights: { insegurança: 1 } },
        { id: "c", label: "Raramente", weights: { insegurança: 3 } },
        { id: "d", label: "Não", weights: { insegurança: 3, culpa: 1 } },
      ],
    },
    {
      id: "q3",
      title: "Como você lida com elogios?",
      options: [
        { id: "a", label: "Aceito naturalmente" },
        { id: "b", label: "Desconverso", weights: { insegurança: 2 } },
        { id: "c", label: "Acho exagero", weights: { insegurança: 3 } },
      ],
    },
  ],
  processing: {
    title: "Analisando suas respostas...",
    steps: [
      { label: "Identificando padrões emocionais" },
      { label: "Avaliando comportamentos" },
      { label: "Gerando seu diagnóstico" },
    ],
  },
  diagnoses: [
    { key: "insegurança", title: "Padrão: Insegurança", summary: "Você duvida do seu valor." },
    { key: "procrastinação", title: "Padrão: Procrastinação", summary: "Você adia o que mais importa." },
    { key: "medo", title: "Padrão: Medo", summary: "Você antecipa o pior." },
  ],
  defaultDiagnosis: "insegurança",
  offer: {
    hero: { headline: "A Prisão da Autossabotagem", subheadline: "Liberte sua mente." },
    problem: { title: "O problema", text: "Lorem ipsum dolor sit amet." },
    solution: { title: "A solução", text: "Lorem ipsum dolor sit amet." },
    beforeAfter: {
      title: "Antes e depois",
      before: ["Travada", "Cansada", "Ansiosa"],
      after: ["Livre", "Leve", "Presente"],
    },
    benefits: { title: "Benefícios", items: ["Clareza", "Leveza", "Direção"] },
    howItWorks: {
      title: "Como funciona",
      steps: [
        { title: "1", text: "Lorem ipsum." },
        { title: "2", text: "Lorem ipsum." },
        { title: "3", text: "Lorem ipsum." },
      ],
    },
    testimonials: {
      title: "Depoimentos",
      items: [{ name: "Ana", text: "Mudou minha vida." }],
    },
    author: { title: "Sobre", name: "Autor", bio: "Lorem ipsum." },
    pricing: {
      title: "Acesso completo",
      price: "R$ 37",
      bullets: ["Acesso imediato", "Garantia 7 dias"],
      cta: "Quero agora",
      ctaUrl: "#",
    },
    guarantee: { title: "Garantia 7 dias", text: "Sem riscos." },
    faq: { title: "FAQ", items: [{ q: "Como funciona?", a: "Lorem ipsum." }] },
    finalCta: { headline: "Comece hoje", button: "Quero meu acesso", url: "#" },
    footer: { brand: "Prisão da Autossabotagem" },
  },
};

export default config;
