import type { QuizConfig } from "@/types/quiz";

const config: QuizConfig = {
  slug: "diagnostico-gratuito",
  brand: "Cristina Camargo",
  topbarCta: "Diagnóstico gratuito",
  seo: {
    title: "Diagnóstico Gratuito — Cristina Camargo",
    description: "Descubra qual padrão está conduzindo sua vida com este diagnóstico gratuito.",
    canonical: "/diagnostico-gratuito",
  },
  hero: {
    badge: "DIAGNÓSTICO GRATUITO",
    headline: "Descubra qual padrão está conduzindo sua vida",
    subheadline: "Um diagnóstico que vai mudar sua vida.",
    footnote: "Leva menos de 2 minutos.",
    button: "Começar agora",
  },
  questions: [
    {
      id: "q1",
      title: "Quando enfrenta um desafio importante, você costuma:",
      image: "https://imersao.cristinacamargo.com.br/quiz/q1.jpeg",
      options: [
        { id: "a", label: "Assumir tudo sozinha e seguir em frente." },
        { id: "b", label: "Adiar decisões ou esperar o momento perfeito para agir." , weights: { procrastinação: 1 } },
        { id: "c", label: "Ficar preocupada com o que os outros vão pensar.", weights: { medo: 1 } },
        { id: "d", label: "Sentir dificuldade para entender o que realmente quer fazer.", weights: { insegurança: 1 } },
      ],
    },
    {
      id: "q2",
      title: "Quando algo dá errado, o que costuma acontecer primeiro?",
      image: "https://imersao.cristinacamargo.com.br/quiz/q2.jpeg",
      options: [
        { id: "a", label: "Você se organiza e tenta resolver." },
        { id: "b", label: "Você entra em dúvida e se fecha por um tempo.", weights: { procrastinação: 1 } },
        { id: "c", label: "Você se culpa e pensa que não é capaz.", weights: { insegurança: 1 } },
        { id: "d", label: "Você antecipa o pior e fica ansiosa.", weights: { medo: 1 } },
      ],
    },
    {
      id: "q3",
      title: "Como você costuma reagir quando recebe uma oportunidade nova?",
      image: "https://imersao.cristinacamargo.com.br/quiz/q3.jpeg",
      options: [
        { id: "a", label: "Você encara com coragem e disposição." },
        { id: "b", label: "Você pensa muito antes de decidir.", weights: { procrastinação: 1 } },
        { id: "c", label: "Você sente medo de não dar conta.", weights: { medo: 1 } },
        { id: "d", label: "Você duvida do seu valor e se fecha.", weights: { insegurança: 1 } },
      ],
    },
    {
      id: "q4",
      title: "O que mais te faz parar no meio do caminho?",
      image: "https://imersao.cristinacamargo.com.br/quiz/q4.jpeg",
      options: [
        { id: "a", label: "A falta de clareza." },
        { id: "b", label: "O medo de errar.", weights: { medo: 1 } },
        { id: "c", label: "A sensação de que você não merece.", weights: { insegurança: 1 } },
        { id: "d", label: "A dificuldade de começar.", weights: { procrastinação: 1 } },
      ],
    },
    {
      id: "q5",
      title: "Quando alguém te elogia, o que costuma vir à mente?",
      image: "https://imersao.cristinacamargo.com.br/quiz/q5.jpeg",
      options: [
        { id: "a", label: "Você aceita com naturalidade." },
        { id: "b", label: "Você desvia o assunto.", weights: { insegurança: 1 } },
        { id: "c", label: "Você acha que não merece.", weights: { insegurança: 1 } },
        { id: "d", label: "Você se sente desconfortável e quer mudar de assunto.", weights: { medo: 1 } },
      ],
    },
    {
      id: "q6",
      title: "Como você costuma lidar com decisões importantes?",
      image: "https://imersao.cristinacamargo.com.br/quiz/q6.jpeg",
      options: [
        { id: "a", label: "Você decide e segue." },
        { id: "b", label: "Você adia para não se comprometer.", weights: { procrastinação: 1 } },
        { id: "c", label: "Você pesa tudo e se perde no medo.", weights: { medo: 1 } },
        { id: "d", label: "Você questiona se realmente merece aquilo.", weights: { insegurança: 1 } },
      ],
    },
    {
      id: "q7",
      title: "Quando sente pressão, o que aparece primeiro?",
      image: "https://imersao.cristinacamargo.com.br/quiz/q7.jpeg",
      options: [
        { id: "a", label: "Você mantém a calma e procura agir." },
        { id: "b", label: "Você se paralisa e adia.", weights: { procrastinação: 1 } },
        { id: "c", label: "Você se sente ameaçada e entra em pânico.", weights: { medo: 1 } },
        { id: "d", label: "Você duvida de si e se desvaloriza.", weights: { insegurança: 1 } },
      ],
    },
    {
      id: "q8",
      title: "No fim do dia, o que você mais sente?",
      image: "https://imersao.cristinacamargo.com.br/quiz/q8.jpeg",
      options: [
        { id: "a", label: "Você se sente mais leve e alinhada." },
        { id: "b", label: "Você sente que deixou muita coisa para depois.", weights: { procrastinação: 1 } },
        { id: "c", label: "Você sente medo de não ter feito o suficiente.", weights: { medo: 1 } },
        { id: "d", label: "Você sente que não é suficiente.", weights: { insegurança: 1 } },
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
    { key: "insegurança", title: "Padrão: Insegurança", summary: "Você duvida do seu valor e tende a se desvalorizar diante de desafios ou elogios." },
    { key: "procrastinação", title: "Padrão: Procrastinação", summary: "Você adia decisões e ações importantes, principalmente quando sente pressão ou incerteza." },
    { key: "medo", title: "Padrão: Medo", summary: "Você antecipa o pior e se fecha diante de mudanças, riscos ou julgamentos." },
  ],
  defaultDiagnosis: "insegurança",
  offer: {
    hero: {
      headline: "A Prisão da Autossabotagem",
      subheadline: "Liberte sua mente e comece a agir com clareza, coragem e consistência.",
      badge: "DIAGNÓSTICO GRATUITO",
    },
    problem: {
      title: "O problema",
      text: "Muitas pessoas sabem o que deveria fazer, mas continuam se travando, adiando ou se sabotando emocionalmente. Isso costuma vir de padrões invisíveis que se repetem sem que você perceba.",
    },
    solution: {
      title: "A solução",
      text: "Ao identificar o padrão que está te conduzindo, você passa a agir com mais consciência, menos culpa e mais direção. O objetivo não é se cobrar mais — e sim entender o que precisa ser transformado.",
    },
    beforeAfter: {
      title: "Antes e depois",
      before: ["Travada", "Cansada", "Ansiosa"],
      after: ["Livre", "Leve", "Presente"],
    },
    benefits: {
      title: "Benefícios",
      items: ["Clareza sobre o padrão que te prende", "Mais leveza emocional", "Mais direção para agir"],
    },
    howItWorks: {
      title: "Como funciona",
      steps: [
        { title: "1", text: "Você responde ao diagnóstico e identifica o padrão dominante." },
        { title: "2", text: "Você entende o mecanismo por trás do comportamento automático." },
        { title: "3", text: "Você recebe uma proposta de transformação com mais consciência e ação." },
      ],
    },
    testimonials: {
      title: "Depoimentos",
      items: [{ name: "Ana", text: "Finalmente consegui entender por que eu me travava tanto." }],
    },
    author: {
      title: "Sobre",
      name: "Cristina Camargo",
      bio: "Especialista em padrões emocionais e transformação pessoal.",
    },
    pricing: {
      title: "Acesso completo",
      price: "R$ 37",
      bullets: ["Acesso imediato", "Garantia de 7 dias", "Ferramentas práticas para transformação"],
      cta: "Quero agora",
      ctaUrl: "https://pay.hotmart.com/R106094271E?checkoutMode=10&bid=1780369115154",
    },
    guarantee: {
      title: "Garantia 7 dias",
      text: "Você tem 7 dias para avaliar se o conteúdo faz sentido para você. Se não for o que esperava, pode pedir reembolso.",
    },
    faq: {
      title: "FAQ",
      items: [{ q: "Como funciona?", a: "O diagnóstico identifica o padrão dominante com base nas suas respostas e te conduz a uma oferta de transformação." }],
    },
    finalCta: {
      headline: "Comece hoje a entender o que tem te travado.",
      button: "Quero meu acesso",
      url: "https://pay.hotmart.com/R106094271E?checkoutMode=10&bid=1780369115154",
    },
    footer: {
      brand: "Cristina Camargo",
      text: "© 2026 Cristina Camargo",
    },
  },
};

export default config;
