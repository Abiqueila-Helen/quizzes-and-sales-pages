import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-5euZHj5S.js
var LOREM_SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";
var config$3 = {
	slug: "o-dialogo-interno",
	brand: "O Diálogo Interno",
	topbarCta: "Diagnóstico gratuito",
	seo: {
		title: "O Diálogo Interno — Diagnóstico Emocional Gratuito",
		description: "Descubra em menos de 2 minutos qual padrão de diálogo interno está sabotando suas decisões e sua paz.",
		ogTitle: "O Diálogo Interno — Diagnóstico Gratuito",
		ogDescription: "Responda 18 perguntas rápidas e receba um diagnóstico personalizado do seu padrão emocional dominante.",
		canonical: "/o-dialogo-interno"
	},
	hero: {
		badge: "DIAGNÓSTICO GRATUITO",
		headline: "Você sente que está sempre lutando contra si mesma, mesmo quando ninguém está te atacando?",
		subheadline: "Responda às próximas perguntas e descubra qual padrão de diálogo interno pode estar drenando sua energia e travando suas decisões.",
		footnote: "Leva menos de 2 minutos.",
		button: "Começar agora"
	},
	questions: [
		{
			id: "q1",
			title: "Com que frequência você se critica internamente durante o dia?",
			options: [
				{
					id: "a",
					label: "Quase nunca",
					weights: {
						culpa: 0,
						insegurança: 0
					}
				},
				{
					id: "b",
					label: "Algumas vezes por semana",
					weights: { culpa: 1 }
				},
				{
					id: "c",
					label: "Várias vezes por dia",
					weights: {
						culpa: 2,
						insegurança: 1
					}
				},
				{
					id: "d",
					label: "O tempo todo, é quase automático",
					weights: {
						culpa: 3,
						insegurança: 2
					}
				}
			]
		},
		{
			id: "q2",
			title: "Quando algo dá errado, qual é seu primeiro pensamento?",
			options: [
				{
					id: "a",
					label: "“A culpa é minha, deveria ter previsto”",
					weights: { culpa: 3 }
				},
				{
					id: "b",
					label: "“Nada nunca dá certo pra mim”",
					weights: {
						escassez: 2,
						medo: 1
					}
				},
				{
					id: "c",
					label: "“Vou ser julgada por isso”",
					weights: { insegurança: 3 }
				},
				{
					id: "d",
					label: "“Tenho que resolver sozinha, como sempre”",
					weights: { sobrecarga: 3 }
				}
			]
		},
		{
			id: "q3",
			title: "Como você se sente ao tomar uma decisão importante?",
			options: [
				{
					id: "a",
					label: "Travo e adio o quanto posso",
					weights: {
						procrastinação: 3,
						medo: 2
					}
				},
				{
					id: "b",
					label: "Decido, mas fico dias me questionando",
					weights: { insegurança: 3 }
				},
				{
					id: "c",
					label: "Decido rápido para tirar o peso",
					weights: { sobrecarga: 2 }
				},
				{
					id: "d",
					label: "Peço opinião de todo mundo antes",
					weights: {
						insegurança: 2,
						medo: 1
					}
				}
			]
		},
		{
			id: "q4",
			title: "Qual frase mais parece com sua voz interna?",
			options: [
				{
					id: "a",
					label: "“Eu não sou suficiente”",
					weights: {
						insegurança: 3,
						culpa: 1
					}
				},
				{
					id: "b",
					label: "“Eu nunca vou conseguir”",
					weights: {
						medo: 3,
						escassez: 1
					}
				},
				{
					id: "c",
					label: "“Não posso falhar agora”",
					weights: {
						medo: 2,
						sobrecarga: 2
					}
				},
				{
					id: "d",
					label: "“Faço depois, agora não dou conta”",
					weights: { procrastinação: 3 }
				}
			]
		},
		{
			id: "q5",
			title: "Quando você conquista algo, como reage?",
			options: [
				{
					id: "a",
					label: "Minimizo: “qualquer um faria”",
					weights: { insegurança: 2 }
				},
				{
					id: "b",
					label: "Já penso no próximo problema",
					weights: { sobrecarga: 3 }
				},
				{
					id: "c",
					label: "Sinto que vão descobrir que sou uma fraude",
					weights: {
						insegurança: 3,
						medo: 1
					}
				},
				{
					id: "d",
					label: "Comemoro com tranquilidade",
					weights: {}
				}
			]
		},
		{
			id: "q6",
			title: "Como está sua relação com dinheiro hoje?",
			options: [
				{
					id: "a",
					label: "Sempre falta, por mais que eu ganhe",
					weights: { escassez: 3 }
				},
				{
					id: "b",
					label: "Tenho medo de gastar, mesmo quando tem",
					weights: {
						escassez: 2,
						medo: 2
					}
				},
				{
					id: "c",
					label: "Evito olhar contas e extratos",
					weights: {
						procrastinação: 2,
						medo: 1
					}
				},
				{
					id: "d",
					label: "Está tranquila",
					weights: {}
				}
			]
		},
		{
			id: "q7",
			title: "Quando alguém te elogia, você...",
			options: [
				{
					id: "a",
					label: "Desconversa ou desconfia",
					weights: { insegurança: 3 }
				},
				{
					id: "b",
					label: "Agradece, mas não acredita por dentro",
					weights: { insegurança: 2 }
				},
				{
					id: "c",
					label: "Sente vergonha",
					weights: {
						insegurança: 2,
						culpa: 1
					}
				},
				{
					id: "d",
					label: "Recebe naturalmente",
					weights: {}
				}
			]
		},
		{
			id: "q8",
			title: "Quantas vezes você adiou algo importante este mês?",
			options: [
				{
					id: "a",
					label: "Nenhuma",
					weights: {}
				},
				{
					id: "b",
					label: "Uma ou duas",
					weights: { procrastinação: 1 }
				},
				{
					id: "c",
					label: "Várias",
					weights: { procrastinação: 3 }
				},
				{
					id: "d",
					label: "Perdi a conta",
					weights: {
						procrastinação: 3,
						sobrecarga: 2
					}
				}
			]
		},
		{
			id: "q9",
			title: "Como você descreveria seu nível de cansaço mental?",
			options: [
				{
					id: "a",
					label: "Leve",
					weights: {}
				},
				{
					id: "b",
					label: "Constante de fundo",
					weights: { sobrecarga: 2 }
				},
				{
					id: "c",
					label: "Acordo já cansada",
					weights: { sobrecarga: 3 }
				},
				{
					id: "d",
					label: "Estou no limite",
					weights: {
						sobrecarga: 3,
						medo: 1
					}
				}
			]
		},
		{
			id: "q10",
			title: "Quando pensa no futuro, o que sente primeiro?",
			options: [
				{
					id: "a",
					label: "Medo do que pode dar errado",
					weights: { medo: 3 }
				},
				{
					id: "b",
					label: "Que não vai dar tempo",
					weights: {
						escassez: 2,
						sobrecarga: 1
					}
				},
				{
					id: "c",
					label: "Que vou decepcionar alguém",
					weights: { culpa: 3 }
				},
				{
					id: "d",
					label: "Curiosidade e esperança",
					weights: {}
				}
			]
		},
		{
			id: "q11",
			title: "Quando precisa pedir ajuda, você...",
			options: [
				{
					id: "a",
					label: "Evita ao máximo",
					weights: {
						sobrecarga: 3,
						insegurança: 1
					}
				},
				{
					id: "b",
					label: "Pede e fica se sentindo culpada",
					weights: { culpa: 3 }
				},
				{
					id: "c",
					label: "Pede sem problema",
					weights: {}
				},
				{
					id: "d",
					label: "Acha que ninguém pode ajudar mesmo",
					weights: {
						medo: 2,
						escassez: 1
					}
				}
			]
		},
		{
			id: "q12",
			title: "O que mais te paralisa?",
			options: [
				{
					id: "a",
					label: "Medo de errar",
					weights: { medo: 3 }
				},
				{
					id: "b",
					label: "Medo do julgamento",
					weights: { insegurança: 3 }
				},
				{
					id: "c",
					label: "Falta de tempo",
					weights: { sobrecarga: 3 }
				},
				{
					id: "d",
					label: "Falta de clareza",
					weights: { procrastinação: 2 }
				}
			]
		},
		{
			id: "q13",
			title: "Como você se trata quando está exausta?",
			options: [
				{
					id: "a",
					label: "Me cobro pra continuar produzindo",
					weights: {
						sobrecarga: 2,
						culpa: 2
					}
				},
				{
					id: "b",
					label: "Me sinto culpada por descansar",
					weights: { culpa: 3 }
				},
				{
					id: "c",
					label: "Descanso sem peso",
					weights: {}
				},
				{
					id: "d",
					label: "Travo e procrastino tudo",
					weights: { procrastinação: 3 }
				}
			]
		},
		{
			id: "q14",
			title: "Em discussões, qual sua tendência?",
			options: [
				{
					id: "a",
					label: "Ceder pra evitar conflito",
					weights: {
						medo: 2,
						insegurança: 2
					}
				},
				{
					id: "b",
					label: "Engolir e remoer depois",
					weights: {
						sobrecarga: 2,
						culpa: 1
					}
				},
				{
					id: "c",
					label: "Explodir e me arrepender",
					weights: { sobrecarga: 3 }
				},
				{
					id: "d",
					label: "Falar com firmeza e tranquilidade",
					weights: {}
				}
			]
		},
		{
			id: "q15",
			title: "Qual destas situações mais te trava hoje?",
			options: [
				{
					id: "a",
					label: "Tomar uma decisão financeira",
					weights: { escassez: 3 }
				},
				{
					id: "b",
					label: "Começar um projeto pessoal",
					weights: {
						procrastinação: 3,
						medo: 1
					}
				},
				{
					id: "c",
					label: "Impor um limite",
					weights: {
						insegurança: 2,
						culpa: 2
					}
				},
				{
					id: "d",
					label: "Pedir o que mereço",
					weights: { insegurança: 3 }
				}
			]
		},
		{
			id: "q16",
			title: "Como está seu sono nas últimas semanas?",
			options: [
				{
					id: "a",
					label: "Tranquilo",
					weights: {}
				},
				{
					id: "b",
					label: "Custo a dormir pensando em problemas",
					weights: {
						sobrecarga: 2,
						medo: 2
					}
				},
				{
					id: "c",
					label: "Acordo de madrugada e não volto a dormir",
					weights: { sobrecarga: 3 }
				},
				{
					id: "d",
					label: "Durmo demais pra fugir",
					weights: { procrastinação: 2 }
				}
			]
		},
		{
			id: "q17",
			title: "O que você mais gostaria de mudar agora?",
			options: [
				{
					id: "a",
					label: "Parar de me cobrar tanto",
					weights: { culpa: 3 }
				},
				{
					id: "b",
					label: "Confiar mais em mim",
					weights: { insegurança: 3 }
				},
				{
					id: "c",
					label: "Ter mais energia",
					weights: { sobrecarga: 3 }
				},
				{
					id: "d",
					label: "Sair da inércia",
					weights: { procrastinação: 3 }
				}
			]
		},
		{
			id: "q18",
			title: "Se você pudesse silenciar uma voz interna, qual seria?",
			options: [
				{
					id: "a",
					label: "“Você não é boa o bastante”",
					weights: { insegurança: 3 }
				},
				{
					id: "b",
					label: "“Vai dar tudo errado”",
					weights: { medo: 3 }
				},
				{
					id: "c",
					label: "“A culpa é sua”",
					weights: { culpa: 3 }
				},
				{
					id: "d",
					label: "“Você não dá conta de tudo isso”",
					weights: { sobrecarga: 3 }
				}
			]
		}
	],
	processing: {
		title: "Analisando suas respostas...",
		steps: [
			{
				label: "Identificando padrões de comportamento",
				duration: 1400
			},
			{
				label: "Avaliando seus principais desafios",
				duration: 1400
			},
			{
				label: "Gerando seu diagnóstico personalizado",
				duration: 1600
			}
		]
	},
	diagnoses: [
		{
			key: "insegurança",
			title: "Padrão dominante: Insegurança Interna",
			summary: "Sua voz interna está constantemente questionando seu valor — e isso faz você duvidar de cada decisão."
		},
		{
			key: "culpa",
			title: "Padrão dominante: Culpa Crônica",
			summary: "Você carrega o peso de tudo o que acontece ao seu redor — inclusive do que não é sua responsabilidade."
		},
		{
			key: "medo",
			title: "Padrão dominante: Medo do Futuro",
			summary: "Você vive antecipando o que pode dar errado — e isso bloqueia suas melhores escolhas no presente."
		},
		{
			key: "sobrecarga",
			title: "Padrão dominante: Sobrecarga Silenciosa",
			summary: "Você está operando no modo sobrevivência — fazendo tudo por todos, sem espaço para você."
		},
		{
			key: "escassez",
			title: "Padrão dominante: Mentalidade de Escassez",
			summary: "Sua mente está presa em ‘falta’ — de tempo, de dinheiro, de espaço — mesmo quando há mais do que parece."
		},
		{
			key: "procrastinação",
			title: "Padrão dominante: Travamento e Procrastinação",
			summary: "Você sabe o que precisa fazer — mas algo dentro de você empurra tudo para depois."
		}
	],
	defaultDiagnosis: "insegurança",
	offer: {
		hero: {
			badge: "MÉTODO COMPLETO",
			headline: "A Prisão da Autossabotagem",
			subheadline: "Um caminho prático para silenciar a voz que te trava."
		},
		problem: {
			title: "Você não está sozinha nisso",
			text: LOREM_SHORT
		},
		solution: {
			title: "Mudar não acontece pela motivação",
			text: LOREM_SHORT
		},
		beforeAfter: {
			title: "Como a sua mente vai funcionar",
			before: [
				"Você se cobra o tempo todo",
				"Decisões viram dias de ansiedade",
				"Você termina o dia exausta sem produzir",
				"A voz interna sabota cada conquista"
			],
			after: [
				"Você responde com clareza, não com medo",
				"Decisões fluem com mais leveza",
				"Sua energia volta para o que importa",
				"Você se torna sua maior aliada"
			]
		},
		benefits: {
			title: "O que você vai destravar",
			items: [
				"Identificar gatilhos automáticos de autossabotagem",
				"Reescrever os diálogos internos que te paralisam",
				"Tomar decisões sem o peso da culpa",
				"Sair do modo sobrevivência",
				"Construir uma rotina mental sustentável"
			]
		},
		howItWorks: {
			title: "Método S.A.R.",
			steps: [
				{
					title: "S — Silenciar",
					text: "Aprenda a separar a voz interna da sua identidade."
				},
				{
					title: "A — Acolher",
					text: "Transforme autocrítica em escuta real."
				},
				{
					title: "R — Reescrever",
					text: "Crie novos padrões mentais sustentáveis."
				}
			]
		},
		testimonials: {
			title: "Quem já passou por aqui",
			items: [
				{
					name: "Carla M.",
					text: "Pela primeira vez consegui tomar uma decisão sem travar.",
					role: "Aluna"
				},
				{
					name: "Renata S.",
					text: "Identifiquei padrões que carrego há 20 anos.",
					role: "Aluna"
				},
				{
					name: "Júlia P.",
					text: "Me sinto mais leve e mais presente comigo mesma.",
					role: "Aluna"
				}
			]
		},
		author: {
			title: "Sobre quem te guia",
			name: "Sofia Andrade",
			bio: "Especialista em comportamento e diálogo interno. Há mais de 10 anos ajudando mulheres a se libertarem de padrões mentais que sabotam suas vidas."
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
				"Garantia incondicional de 7 dias"
			],
			cta: "Quero meu acesso agora",
			ctaUrl: "#"
		},
		guarantee: {
			title: "Garantia incondicional de 7 dias",
			text: "Se em 7 dias você não sentir mudança real no seu diálogo interno, devolvemos 100% do valor."
		},
		faq: {
			title: "Perguntas frequentes",
			items: [
				{
					q: "Como recebo o acesso?",
					a: "Imediatamente após a compra, no seu e-mail."
				},
				{
					q: "Funciona pelo celular?",
					a: "Sim, o conteúdo é otimizado para o celular."
				},
				{
					q: "Quanto tempo de acesso?",
					a: "Acesso vitalício ao material adquirido."
				},
				{
					q: "E se eu não gostar?",
					a: "Você tem 7 dias para pedir reembolso, sem perguntas."
				}
			]
		},
		finalCta: {
			headline: "Sua mente merece um espaço de descanso real.",
			button: "Começar minha transformação",
			url: "#"
		},
		footer: {
			brand: "O Diálogo Interno",
			text: "© Todos os direitos reservados."
		}
	}
};
var config$2 = {
	slug: "prisao-da-autossabotagem",
	brand: "Prisão da Autossabotagem",
	topbarCta: "Diagnóstico gratuito",
	seo: {
		title: "A Prisão da Autossabotagem — Diagnóstico Gratuito",
		description: "Descubra o padrão que está te mantendo presa às mesmas decisões e travamentos.",
		canonical: "/prisao-da-autossabotagem"
	},
	hero: {
		badge: "DIAGNÓSTICO GRATUITO",
		headline: "Você sabe o que precisa fazer, mas algo dentro de você sempre te puxa pra trás?",
		subheadline: "Responda algumas perguntas rápidas e descubra qual padrão de autossabotagem está te prendendo.",
		footnote: "Leva menos de 2 minutos.",
		button: "Começar agora"
	},
	questions: [
		{
			id: "q1",
			title: "Com que frequência você adia coisas importantes?",
			options: [
				{
					id: "a",
					label: "Quase nunca"
				},
				{
					id: "b",
					label: "Às vezes",
					weights: { procrastinação: 1 }
				},
				{
					id: "c",
					label: "Quase sempre",
					weights: { procrastinação: 3 }
				},
				{
					id: "d",
					label: "Sempre",
					weights: {
						procrastinação: 3,
						medo: 1
					}
				}
			]
		},
		{
			id: "q2",
			title: "Você se sente merecedora do que quer?",
			options: [
				{
					id: "a",
					label: "Sim"
				},
				{
					id: "b",
					label: "Às vezes",
					weights: { insegurança: 1 }
				},
				{
					id: "c",
					label: "Raramente",
					weights: { insegurança: 3 }
				},
				{
					id: "d",
					label: "Não",
					weights: {
						insegurança: 3,
						culpa: 1
					}
				}
			]
		},
		{
			id: "q3",
			title: "Como você lida com elogios?",
			options: [
				{
					id: "a",
					label: "Aceito naturalmente"
				},
				{
					id: "b",
					label: "Desconverso",
					weights: { insegurança: 2 }
				},
				{
					id: "c",
					label: "Acho exagero",
					weights: { insegurança: 3 }
				}
			]
		}
	],
	processing: {
		title: "Analisando suas respostas...",
		steps: [
			{ label: "Identificando padrões emocionais" },
			{ label: "Avaliando comportamentos" },
			{ label: "Gerando seu diagnóstico" }
		]
	},
	diagnoses: [
		{
			key: "insegurança",
			title: "Padrão: Insegurança",
			summary: "Você duvida do seu valor."
		},
		{
			key: "procrastinação",
			title: "Padrão: Procrastinação",
			summary: "Você adia o que mais importa."
		},
		{
			key: "medo",
			title: "Padrão: Medo",
			summary: "Você antecipa o pior."
		}
	],
	defaultDiagnosis: "insegurança",
	offer: {
		hero: {
			headline: "A Prisão da Autossabotagem",
			subheadline: "Liberte sua mente."
		},
		problem: {
			title: "O problema",
			text: "Lorem ipsum dolor sit amet."
		},
		solution: {
			title: "A solução",
			text: "Lorem ipsum dolor sit amet."
		},
		beforeAfter: {
			title: "Antes e depois",
			before: [
				"Travada",
				"Cansada",
				"Ansiosa"
			],
			after: [
				"Livre",
				"Leve",
				"Presente"
			]
		},
		benefits: {
			title: "Benefícios",
			items: [
				"Clareza",
				"Leveza",
				"Direção"
			]
		},
		howItWorks: {
			title: "Como funciona",
			steps: [
				{
					title: "1",
					text: "Lorem ipsum."
				},
				{
					title: "2",
					text: "Lorem ipsum."
				},
				{
					title: "3",
					text: "Lorem ipsum."
				}
			]
		},
		testimonials: {
			title: "Depoimentos",
			items: [{
				name: "Ana",
				text: "Mudou minha vida."
			}]
		},
		author: {
			title: "Sobre",
			name: "Autor",
			bio: "Lorem ipsum."
		},
		pricing: {
			title: "Acesso completo",
			price: "R$ 37",
			bullets: ["Acesso imediato", "Garantia 7 dias"],
			cta: "Quero agora",
			ctaUrl: "#"
		},
		guarantee: {
			title: "Garantia 7 dias",
			text: "Sem riscos."
		},
		faq: {
			title: "FAQ",
			items: [{
				q: "Como funciona?",
				a: "Lorem ipsum."
			}]
		},
		finalCta: {
			headline: "Comece hoje",
			button: "Quero meu acesso",
			url: "#"
		},
		footer: { brand: "Prisão da Autossabotagem" }
	}
};
var config$1 = {
	slug: "diagnostico-gratuito",
	brand: "Cristina Camargo",
	topbarCta: "Diagnóstico gratuito",
	seo: {
		title: "Diagnóstico Gratuito — Cristina Camargo",
		description: "Descubra qual padrão está conduzindo sua vida com este diagnóstico gratuito.",
		canonical: "/diagnostico-gratuito"
	},
	hero: {
		badge: "DIAGNÓSTICO GRATUITO",
		headline: "Descubra qual padrão está conduzindo sua vida",
		subheadline: "Um diagnóstico que vai mudar sua vida.",
		footnote: "Leva menos de 2 minutos.",
		button: "Começar agora"
	},
	questions: [
		{
			id: "q1",
			title: "Quando enfrenta um desafio importante, você costuma:",
			image: "https://imersao.cristinacamargo.com.br/quiz/q1.jpeg",
			options: [
				{
					id: "a",
					label: "Assumir tudo sozinha e seguir em frente."
				},
				{
					id: "b",
					label: "Adiar decisões ou esperar o momento perfeito para agir.",
					weights: { procrastinação: 1 }
				},
				{
					id: "c",
					label: "Ficar preocupada com o que os outros vão pensar.",
					weights: { medo: 1 }
				},
				{
					id: "d",
					label: "Sentir dificuldade para entender o que realmente quer fazer.",
					weights: { insegurança: 1 }
				}
			]
		},
		{
			id: "q2",
			title: "Quando algo dá errado, o que costuma acontecer primeiro?",
			image: "https://imersao.cristinacamargo.com.br/quiz/q2.jpeg",
			options: [
				{
					id: "a",
					label: "Você se organiza e tenta resolver."
				},
				{
					id: "b",
					label: "Você entra em dúvida e se fecha por um tempo.",
					weights: { procrastinação: 1 }
				},
				{
					id: "c",
					label: "Você se culpa e pensa que não é capaz.",
					weights: { insegurança: 1 }
				},
				{
					id: "d",
					label: "Você antecipa o pior e fica ansiosa.",
					weights: { medo: 1 }
				}
			]
		},
		{
			id: "q3",
			title: "Como você costuma reagir quando recebe uma oportunidade nova?",
			image: "https://imersao.cristinacamargo.com.br/quiz/q3.jpeg",
			options: [
				{
					id: "a",
					label: "Você encara com coragem e disposição."
				},
				{
					id: "b",
					label: "Você pensa muito antes de decidir.",
					weights: { procrastinação: 1 }
				},
				{
					id: "c",
					label: "Você sente medo de não dar conta.",
					weights: { medo: 1 }
				},
				{
					id: "d",
					label: "Você duvida do seu valor e se fecha.",
					weights: { insegurança: 1 }
				}
			]
		},
		{
			id: "q4",
			title: "O que mais te faz parar no meio do caminho?",
			image: "https://imersao.cristinacamargo.com.br/quiz/q4.jpeg",
			options: [
				{
					id: "a",
					label: "A falta de clareza."
				},
				{
					id: "b",
					label: "O medo de errar.",
					weights: { medo: 1 }
				},
				{
					id: "c",
					label: "A sensação de que você não merece.",
					weights: { insegurança: 1 }
				},
				{
					id: "d",
					label: "A dificuldade de começar.",
					weights: { procrastinação: 1 }
				}
			]
		},
		{
			id: "q5",
			title: "Quando alguém te elogia, o que costuma vir à mente?",
			image: "https://imersao.cristinacamargo.com.br/quiz/q5.jpeg",
			options: [
				{
					id: "a",
					label: "Você aceita com naturalidade."
				},
				{
					id: "b",
					label: "Você desvia o assunto.",
					weights: { insegurança: 1 }
				},
				{
					id: "c",
					label: "Você acha que não merece.",
					weights: { insegurança: 1 }
				},
				{
					id: "d",
					label: "Você se sente desconfortável e quer mudar de assunto.",
					weights: { medo: 1 }
				}
			]
		},
		{
			id: "q6",
			title: "Como você costuma lidar com decisões importantes?",
			image: "https://imersao.cristinacamargo.com.br/quiz/q6.jpeg",
			options: [
				{
					id: "a",
					label: "Você decide e segue."
				},
				{
					id: "b",
					label: "Você adia para não se comprometer.",
					weights: { procrastinação: 1 }
				},
				{
					id: "c",
					label: "Você pesa tudo e se perde no medo.",
					weights: { medo: 1 }
				},
				{
					id: "d",
					label: "Você questiona se realmente merece aquilo.",
					weights: { insegurança: 1 }
				}
			]
		},
		{
			id: "q7",
			title: "Quando sente pressão, o que aparece primeiro?",
			image: "https://imersao.cristinacamargo.com.br/quiz/q7.jpeg",
			options: [
				{
					id: "a",
					label: "Você mantém a calma e procura agir."
				},
				{
					id: "b",
					label: "Você se paralisa e adia.",
					weights: { procrastinação: 1 }
				},
				{
					id: "c",
					label: "Você se sente ameaçada e entra em pânico.",
					weights: { medo: 1 }
				},
				{
					id: "d",
					label: "Você duvida de si e se desvaloriza.",
					weights: { insegurança: 1 }
				}
			]
		},
		{
			id: "q8",
			title: "No fim do dia, o que você mais sente?",
			image: "https://imersao.cristinacamargo.com.br/quiz/q8.jpeg",
			options: [
				{
					id: "a",
					label: "Você se sente mais leve e alinhada."
				},
				{
					id: "b",
					label: "Você sente que deixou muita coisa para depois.",
					weights: { procrastinação: 1 }
				},
				{
					id: "c",
					label: "Você sente medo de não ter feito o suficiente.",
					weights: { medo: 1 }
				},
				{
					id: "d",
					label: "Você sente que não é suficiente.",
					weights: { insegurança: 1 }
				}
			]
		}
	],
	processing: {
		title: "Analisando suas respostas...",
		steps: [
			{ label: "Identificando padrões emocionais" },
			{ label: "Avaliando comportamentos" },
			{ label: "Gerando seu diagnóstico" }
		]
	},
	diagnoses: [
		{
			key: "insegurança",
			title: "Padrão: Insegurança",
			summary: "Você duvida do seu valor e tende a se desvalorizar diante de desafios ou elogios."
		},
		{
			key: "procrastinação",
			title: "Padrão: Procrastinação",
			summary: "Você adia decisões e ações importantes, principalmente quando sente pressão ou incerteza."
		},
		{
			key: "medo",
			title: "Padrão: Medo",
			summary: "Você antecipa o pior e se fecha diante de mudanças, riscos ou julgamentos."
		}
	],
	defaultDiagnosis: "insegurança",
	offer: {
		hero: {
			headline: "A Prisão da Autossabotagem",
			subheadline: "Liberte sua mente e comece a agir com clareza, coragem e consistência.",
			badge: "DIAGNÓSTICO GRATUITO"
		},
		problem: {
			title: "O problema",
			text: "Muitas pessoas sabem o que deveria fazer, mas continuam se travando, adiando ou se sabotando emocionalmente. Isso costuma vir de padrões invisíveis que se repetem sem que você perceba."
		},
		solution: {
			title: "A solução",
			text: "Ao identificar o padrão que está te conduzindo, você passa a agir com mais consciência, menos culpa e mais direção. O objetivo não é se cobrar mais — e sim entender o que precisa ser transformado."
		},
		beforeAfter: {
			title: "Antes e depois",
			before: [
				"Travada",
				"Cansada",
				"Ansiosa"
			],
			after: [
				"Livre",
				"Leve",
				"Presente"
			]
		},
		benefits: {
			title: "Benefícios",
			items: [
				"Clareza sobre o padrão que te prende",
				"Mais leveza emocional",
				"Mais direção para agir"
			]
		},
		howItWorks: {
			title: "Como funciona",
			steps: [
				{
					title: "1",
					text: "Você responde ao diagnóstico e identifica o padrão dominante."
				},
				{
					title: "2",
					text: "Você entende o mecanismo por trás do comportamento automático."
				},
				{
					title: "3",
					text: "Você recebe uma proposta de transformação com mais consciência e ação."
				}
			]
		},
		testimonials: {
			title: "Depoimentos",
			items: [{
				name: "Ana",
				text: "Finalmente consegui entender por que eu me travava tanto."
			}]
		},
		author: {
			title: "Sobre",
			name: "Cristina Camargo",
			bio: "Especialista em padrões emocionais e transformação pessoal."
		},
		pricing: {
			title: "Acesso completo",
			price: "R$ 37",
			bullets: [
				"Acesso imediato",
				"Garantia de 7 dias",
				"Ferramentas práticas para transformação"
			],
			cta: "Quero agora",
			ctaUrl: "https://pay.hotmart.com/R106094271E?checkoutMode=10&bid=1780369115154"
		},
		guarantee: {
			title: "Garantia 7 dias",
			text: "Você tem 7 dias para avaliar se o conteúdo faz sentido para você. Se não for o que esperava, pode pedir reembolso."
		},
		faq: {
			title: "FAQ",
			items: [{
				q: "Como funciona?",
				a: "O diagnóstico identifica o padrão dominante com base nas suas respostas e te conduz a uma oferta de transformação."
			}]
		},
		finalCta: {
			headline: "Comece hoje a entender o que tem te travado.",
			button: "Quero meu acesso",
			url: "https://pay.hotmart.com/R106094271E?checkoutMode=10&bid=1780369115154"
		},
		footer: {
			brand: "Cristina Camargo",
			text: "© 2026 Cristina Camargo"
		}
	}
};
var config = {
	slug: "parar-de-procrastinar",
	brand: "Rotina Produtiva",
	seo: {
		title: "Você sabe o que precisa fazer. O problema é que você não faz.",
		description: "Em 10 dias, com apenas 5 minutos por dia, o Protocolo Do Zero À Rotina Produtiva ajuda você a parar de procrastinar e criar a rotina dos sonhos.",
		canonical: "/parar-de-procrastinar"
	},
	hero: {
		headline: "",
		button: ""
	},
	questions: [],
	processing: { steps: [] },
	diagnoses: [{
		key: "default",
		title: "",
		summary: ""
	}],
	offer: {
		hero: { headline: "" },
		problem: {
			title: "",
			text: ""
		},
		solution: {
			title: "",
			text: ""
		},
		beforeAfter: {
			title: "",
			before: [],
			after: []
		},
		benefits: {
			title: "",
			items: []
		},
		howItWorks: {
			title: "",
			steps: []
		},
		testimonials: {
			title: "",
			items: []
		},
		author: {
			title: "",
			name: "",
			bio: ""
		},
		pricing: {
			title: "",
			price: "",
			bullets: [],
			cta: "",
			ctaUrl: ""
		},
		guarantee: {
			title: "",
			text: ""
		},
		faq: {
			title: "",
			items: []
		},
		finalCta: {
			headline: "",
			button: "",
			url: ""
		},
		footer: { brand: "" }
	}
};
/**
* Registry de quizzes. Para adicionar um novo quiz:
*   1. crie src/data/quizzes/meu-novo-quiz.ts exportando um QuizConfig default
*   2. importe aqui e adicione ao objeto abaixo
* Pronto — a rota /meu-novo-quiz passa a funcionar automaticamente.
*/
var quizzes = {
	[config$3.slug]: config$3,
	[config$2.slug]: config$2,
	[config$1.slug]: config$1,
	[config.slug]: config
};
function getQuiz(slug) {
	return quizzes[slug];
}
var $$splitComponentImporter = () => import("./_slug-BH4ummnj.mjs");
var Route = createFileRoute("/$slug")({
	loader: ({ params }) => {
		const quiz = getQuiz(params.slug);
		if (!quiz) throw notFound();
		return { quiz };
	},
	head: ({ loaderData }) => {
		const q = loaderData?.quiz;
		if (!q) return {};
		const canonical = q.seo.canonical ?? `/${q.slug}`;
		return {
			meta: [
				{ title: q.seo.title },
				{
					name: "description",
					content: q.seo.description
				},
				{
					property: "og:title",
					content: q.seo.ogTitle ?? q.seo.title
				},
				{
					property: "og:description",
					content: q.seo.ogDescription ?? q.seo.description
				},
				{
					property: "og:url",
					content: canonical
				},
				{
					property: "og:type",
					content: "website"
				}
			],
			links: [{
				rel: "canonical",
				href: canonical
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
