import type { QuizConfig } from "@/types/quiz";

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";

const config: QuizConfig = {
  slug: "o-dialogo-interno",
  brand: "O Diálogo Interno",
  topbarCta: "Diagnóstico gratuito",
  seo: {
    title: "O Diálogo Interno — Diagnóstico Emocional Gratuito",
    description:
      "Descubra em menos de 2 minutos qual padrão de diálogo interno está sabotando suas decisões e sua paz.",
    ogTitle: "O Diálogo Interno — Diagnóstico Gratuito",
    ogDescription:
      "Responda 18 perguntas rápidas e receba um diagnóstico personalizado do seu padrão emocional dominante.",
    canonical: "/o-dialogo-interno",
  },
  hero: {
    badge: "DIAGNÓSTICO GRATUITO",
    headline:
      "Você sente que está sempre lutando contra si mesma, mesmo quando ninguém está te atacando?",
    subheadline:
      "Responda às próximas perguntas e descubra qual padrão de diálogo interno pode estar drenando sua energia e travando suas decisões.",
    footnote: "Leva menos de 2 minutos.",
    button: "Começar agora",
  },
  questions: [
    {
      id: "q1",
      title: "Com que frequência você se critica internamente durante o dia?",
      options: [
        { id: "a", label: "Quase nunca", weights: { culpa: 0, insegurança: 0 } },
        { id: "b", label: "Algumas vezes por semana", weights: { culpa: 1 } },
        { id: "c", label: "Várias vezes por dia", weights: { culpa: 2, insegurança: 1 } },
        { id: "d", label: "O tempo todo, é quase automático", weights: { culpa: 3, insegurança: 2 } },
      ],
    },
    {
      id: "q2",
      title: "Quando algo dá errado, qual é seu primeiro pensamento?",
      options: [
        { id: "a", label: "“A culpa é minha, deveria ter previsto”", weights: { culpa: 3 } },
        { id: "b", label: "“Nada nunca dá certo pra mim”", weights: { escassez: 2, medo: 1 } },
        { id: "c", label: "“Vou ser julgada por isso”", weights: { insegurança: 3 } },
        { id: "d", label: "“Tenho que resolver sozinha, como sempre”", weights: { sobrecarga: 3 } },
      ],
    },
    {
      id: "q3",
      title: "Como você se sente ao tomar uma decisão importante?",
      options: [
        { id: "a", label: "Travo e adio o quanto posso", weights: { procrastinação: 3, medo: 2 } },
        { id: "b", label: "Decido, mas fico dias me questionando", weights: { insegurança: 3 } },
        { id: "c", label: "Decido rápido para tirar o peso", weights: { sobrecarga: 2 } },
        { id: "d", label: "Peço opinião de todo mundo antes", weights: { insegurança: 2, medo: 1 } },
      ],
    },
    {
      id: "q4",
      title: "Qual frase mais parece com sua voz interna?",
      options: [
        { id: "a", label: "“Eu não sou suficiente”", weights: { insegurança: 3, culpa: 1 } },
        { id: "b", label: "“Eu nunca vou conseguir”", weights: { medo: 3, escassez: 1 } },
        { id: "c", label: "“Não posso falhar agora”", weights: { medo: 2, sobrecarga: 2 } },
        { id: "d", label: "“Faço depois, agora não dou conta”", weights: { procrastinação: 3 } },
      ],
    },
    {
      id: "q5",
      title: "Quando você conquista algo, como reage?",
      options: [
        { id: "a", label: "Minimizo: “qualquer um faria”", weights: { insegurança: 2 } },
        { id: "b", label: "Já penso no próximo problema", weights: { sobrecarga: 3 } },
        { id: "c", label: "Sinto que vão descobrir que sou uma fraude", weights: { insegurança: 3, medo: 1 } },
        { id: "d", label: "Comemoro com tranquilidade", weights: {} },
      ],
    },
    {
      id: "q6",
      title: "Como está sua relação com dinheiro hoje?",
      options: [
        { id: "a", label: "Sempre falta, por mais que eu ganhe", weights: { escassez: 3 } },
        { id: "b", label: "Tenho medo de gastar, mesmo quando tem", weights: { escassez: 2, medo: 2 } },
        { id: "c", label: "Evito olhar contas e extratos", weights: { procrastinação: 2, medo: 1 } },
        { id: "d", label: "Está tranquila", weights: {} },
      ],
    },
    {
      id: "q7",
      title: "Quando alguém te elogia, você...",
      options: [
        { id: "a", label: "Desconversa ou desconfia", weights: { insegurança: 3 } },
        { id: "b", label: "Agradece, mas não acredita por dentro", weights: { insegurança: 2 } },
        { id: "c", label: "Sente vergonha", weights: { insegurança: 2, culpa: 1 } },
        { id: "d", label: "Recebe naturalmente", weights: {} },
      ],
    },
    {
      id: "q8",
      title: "Quantas vezes você adiou algo importante este mês?",
      options: [
        { id: "a", label: "Nenhuma", weights: {} },
        { id: "b", label: "Uma ou duas", weights: { procrastinação: 1 } },
        { id: "c", label: "Várias", weights: { procrastinação: 3 } },
        { id: "d", label: "Perdi a conta", weights: { procrastinação: 3, sobrecarga: 2 } },
      ],
    },
    {
      id: "q9",
      title: "Como você descreveria seu nível de cansaço mental?",
      options: [
        { id: "a", label: "Leve", weights: {} },
        { id: "b", label: "Constante de fundo", weights: { sobrecarga: 2 } },
        { id: "c", label: "Acordo já cansada", weights: { sobrecarga: 3 } },
        { id: "d", label: "Estou no limite", weights: { sobrecarga: 3, medo: 1 } },
      ],
    },
    {
      id: "q10",
      title: "Quando pensa no futuro, o que sente primeiro?",
      options: [
        { id: "a", label: "Medo do que pode dar errado", weights: { medo: 3 } },
        { id: "b", label: "Que não vai dar tempo", weights: { escassez: 2, sobrecarga: 1 } },
        { id: "c", label: "Que vou decepcionar alguém", weights: { culpa: 3 } },
        { id: "d", label: "Curiosidade e esperança", weights: {} },
      ],
    },
    {
      id: "q11",
      title: "Quando precisa pedir ajuda, você...",
      options: [
        { id: "a", label: "Evita ao máximo", weights: { sobrecarga: 3, insegurança: 1 } },
        { id: "b", label: "Pede e fica se sentindo culpada", weights: { culpa: 3 } },
        { id: "c", label: "Pede sem problema", weights: {} },
        { id: "d", label: "Acha que ninguém pode ajudar mesmo", weights: { medo: 2, escassez: 1 } },
      ],
    },
    {
      id: "q12",
      title: "O que mais te paralisa?",
      options: [
        { id: "a", label: "Medo de errar", weights: { medo: 3 } },
        { id: "b", label: "Medo do julgamento", weights: { insegurança: 3 } },
        { id: "c", label: "Falta de tempo", weights: { sobrecarga: 3 } },
        { id: "d", label: "Falta de clareza", weights: { procrastinação: 2 } },
      ],
    },
    {
      id: "q13",
      title: "Como você se trata quando está exausta?",
      options: [
        { id: "a", label: "Me cobro pra continuar produzindo", weights: { sobrecarga: 2, culpa: 2 } },
        { id: "b", label: "Me sinto culpada por descansar", weights: { culpa: 3 } },
        { id: "c", label: "Descanso sem peso", weights: {} },
        { id: "d", label: "Travo e procrastino tudo", weights: { procrastinação: 3 } },
      ],
    },
    {
      id: "q14",
      title: "Em discussões, qual sua tendência?",
      options: [
        { id: "a", label: "Ceder pra evitar conflito", weights: { medo: 2, insegurança: 2 } },
        { id: "b", label: "Engolir e remoer depois", weights: { sobrecarga: 2, culpa: 1 } },
        { id: "c", label: "Explodir e me arrepender", weights: { sobrecarga: 3 } },
        { id: "d", label: "Falar com firmeza e tranquilidade", weights: {} },
      ],
    },
    {
      id: "q15",
      title: "Qual destas situações mais te trava hoje?",
      options: [
        { id: "a", label: "Tomar uma decisão financeira", weights: { escassez: 3 } },
        { id: "b", label: "Começar um projeto pessoal", weights: { procrastinação: 3, medo: 1 } },
        { id: "c", label: "Impor um limite", weights: { insegurança: 2, culpa: 2 } },
        { id: "d", label: "Pedir o que mereço", weights: { insegurança: 3 } },
      ],
    },
    {
      id: "q16",
      title: "Como está seu sono nas últimas semanas?",
      options: [
        { id: "a", label: "Tranquilo", weights: {} },
        { id: "b", label: "Custo a dormir pensando em problemas", weights: { sobrecarga: 2, medo: 2 } },
        { id: "c", label: "Acordo de madrugada e não volto a dormir", weights: { sobrecarga: 3 } },
        { id: "d", label: "Durmo demais pra fugir", weights: { procrastinação: 2 } },
      ],
    },
    {
      id: "q17",
      title: "O que você mais gostaria de mudar agora?",
      options: [
        { id: "a", label: "Parar de me cobrar tanto", weights: { culpa: 3 } },
        { id: "b", label: "Confiar mais em mim", weights: { insegurança: 3 } },
        { id: "c", label: "Ter mais energia", weights: { sobrecarga: 3 } },
        { id: "d", label: "Sair da inércia", weights: { procrastinação: 3 } },
      ],
    },
    {
      id: "q18",
      title: "Se você pudesse silenciar uma voz interna, qual seria?",
      options: [
        { id: "a", label: "“Você não é boa o bastante”", weights: { insegurança: 3 } },
        { id: "b", label: "“Vai dar tudo errado”", weights: { medo: 3 } },
        { id: "c", label: "“A culpa é sua”", weights: { culpa: 3 } },
        { id: "d", label: "“Você não dá conta de tudo isso”", weights: { sobrecarga: 3 } },
      ],
    },
  ],
  processing: {
    title: "Analisando suas respostas...",
    steps: [
      { label: "Identificando padrões de comportamento", duration: 1400 },
      { label: "Avaliando seus principais desafios", duration: 1400 },
      { label: "Gerando seu diagnóstico personalizado", duration: 1600 },
    ],
  },
  diagnoses: [
    {
      key: "insegurança",
      title: "Padrão dominante: Insegurança Interna",
      summary:
        "Sua voz interna está constantemente questionando seu valor — e isso faz você duvidar de cada decisão.",
    },
    {
      key: "culpa",
      title: "Padrão dominante: Culpa Crônica",
      summary:
        "Você carrega o peso de tudo o que acontece ao seu redor — inclusive do que não é sua responsabilidade.",
    },
    {
      key: "medo",
      title: "Padrão dominante: Medo do Futuro",
      summary:
        "Você vive antecipando o que pode dar errado — e isso bloqueia suas melhores escolhas no presente.",
    },
    {
      key: "sobrecarga",
      title: "Padrão dominante: Sobrecarga Silenciosa",
      summary:
        "Você está operando no modo sobrevivência — fazendo tudo por todos, sem espaço para você.",
    },
    {
      key: "escassez",
      title: "Padrão dominante: Mentalidade de Escassez",
      summary:
        "Sua mente está presa em ‘falta’ — de tempo, de dinheiro, de espaço — mesmo quando há mais do que parece.",
    },
    {
      key: "procrastinação",
      title: "Padrão dominante: Travamento e Procrastinação",
      summary:
        "Você sabe o que precisa fazer — mas algo dentro de você empurra tudo para depois.",
    },
  ],
  defaultDiagnosis: "insegurança",
  offer: {
    hero: {
      badge: "MÉTODO COMPLETO",
      headline: "A Prisão da Autossabotagem",
      subheadline: "Um caminho prático para silenciar a voz que te trava.",
    },
    problem: {
      title: "Você não está sozinha nisso",
      text: LOREM_SHORT,
    },
    solution: {
      title: "Mudar não acontece pela motivação",
      text: LOREM_SHORT,
    },
    beforeAfter: {
      title: "Como a sua mente vai funcionar",
      before: [
        "Você se cobra o tempo todo",
        "Decisões viram dias de ansiedade",
        "Você termina o dia exausta sem produzir",
        "A voz interna sabota cada conquista",
      ],
      after: [
        "Você responde com clareza, não com medo",
        "Decisões fluem com mais leveza",
        "Sua energia volta para o que importa",
        "Você se torna sua maior aliada",
      ],
    },
    benefits: {
      title: "O que você vai destravar",
      items: [
        "Identificar gatilhos automáticos de autossabotagem",
        "Reescrever os diálogos internos que te paralisam",
        "Tomar decisões sem o peso da culpa",
        "Sair do modo sobrevivência",
        "Construir uma rotina mental sustentável",
      ],
    },
    howItWorks: {
      title: "Método S.A.R.",
      steps: [
        { title: "S — Silenciar", text: "Aprenda a separar a voz interna da sua identidade." },
        { title: "A — Acolher", text: "Transforme autocrítica em escuta real." },
        { title: "R — Reescrever", text: "Crie novos padrões mentais sustentáveis." },
      ],
    },
    testimonials: {
      title: "Quem já passou por aqui",
      items: [
        { name: "Carla M.", text: "Pela primeira vez consegui tomar uma decisão sem travar.", role: "Aluna" },
        { name: "Renata S.", text: "Identifiquei padrões que carrego há 20 anos.", role: "Aluna" },
        { name: "Júlia P.", text: "Me sinto mais leve e mais presente comigo mesma.", role: "Aluna" },
      ],
    },
    author: {
      title: "Sobre quem te guia",
      name: "Sofia Andrade",
      bio: "Especialista em comportamento e diálogo interno. Há mais de 10 anos ajudando mulheres a se libertarem de padrões mentais que sabotam suas vidas.",
    },
    pricing: {
      badge: "OFERTA ESPECIAL",
      title: "O Despertar da Consciência",
      price: "R$ 37",
      oldPrice: "R$ 97",
      bullets: [
        "Acesso imediato ao método completo",
        "Material complementar em PDF",
        "Bônus: Trilha de áudios diários",
        "Garantia incondicional de 7 dias",
      ],
      cta: "Quero meu acesso agora",
      ctaUrl: "#",
    },
    guarantee: {
      title: "Garantia incondicional de 7 dias",
      text: "Se em 7 dias você não sentir mudança real no seu diálogo interno, devolvemos 100% do valor.",
    },
    faq: {
      title: "Perguntas frequentes",
      items: [
        { q: "Como recebo o acesso?", a: "Imediatamente após a compra, no seu e-mail." },
        { q: "Funciona pelo celular?", a: "Sim, o conteúdo é otimizado para o celular." },
        { q: "Quanto tempo de acesso?", a: "Acesso vitalício ao material adquirido." },
        { q: "E se eu não gostar?", a: "Você tem 7 dias para pedir reembolso, sem perguntas." },
      ],
    },
    finalCta: {
      headline: "Sua mente merece um espaço de descanso real.",
      button: "Começar minha transformação",
      url: "#",
    },
    footer: {
      brand: "O Diálogo Interno",
      text: "© Todos os direitos reservados.",
    },
  },
};

export default config;
