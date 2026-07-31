import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as Crown, B as ChartLine, D as Gift, E as Headphones, G as BadgeCheck, H as CalendarCheck, I as ChevronRight, J as ArrowDown, L as ChevronLeft, M as Clock, O as Flame, T as HeartPulse, W as BrainCircuit, _ as Plus, a as Users, b as Lock, c as TrendingUp, d as Target, f as Star, i as Video, l as TrendingDown, m as ShieldCheck, p as Sparkles, r as X, s as Trophy, t as Zap, u as Timer, v as Minus, x as ListChecks, z as Check } from "../_libs/lucide-react.mjs";
import { a as mok02_exports, c as mok05_exports, d as mok08_exports, f as mok09_exports, i as mok01_exports, l as mok06_exports, n as Fernanda_default, o as mok03_exports, p as mok10_exports, r as Ricardo_default, s as mok04_exports, t as Daniela_default, u as mok07_exports } from "./Ricardo-CuxXmDSQ.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { t as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
import { n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { t as Lightbox } from "../_libs/yet-another-react-lightbox.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ressignifica-app-sell-DXC05vIL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BRAND = {
	blue: "#00AFEF",
	blueDark: "#0095C7",
	green: "#00A859",
	greenDark: "#379263",
	orange: "#F58634",
	orangeDark: "#D96D28",
	yellow: "#FFCC29",
	black: "#373435",
	red: "#ED3237",
	terracota: "#C95241",
	brown: "#BF7F4D",
	mint: "#CCE7D4",
	olive: "#D2E28B",
	text: "#0F172A",
	textSoft: "#64748B",
	border: "#E2E8F0",
	bg: "#FFFFFF",
	bgSoft: "#F8FAFC"
};
var GRADIENT_CTA = `linear-gradient(135deg, ${BRAND.orange} 0%, ${BRAND.yellow} 100%)`;
`${BRAND.green}${BRAND.greenDark}`;
`${BRAND.blue}${BRAND.green}`;
`${BRAND.orange}${BRAND.yellow}`;
var CHECKOUT = {
	mensal: "https://pay.cakto.com.br/3bfg6d6_992279",
	trimestral: "https://pay.cakto.com.br/38uxdqx",
	anual: "https://pay.cakto.com.br/39ainba"
};
function go(url) {
	window.open(url, "_blank", "noopener,noreferrer");
}
function Reveal({ children, delay = 0, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		className,
		initial: {
			opacity: 0,
			y: 20
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Eyebrow({ children, tone = "blue" }) {
	const c = tone === "blue" ? BRAND.blue : BRAND.green;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]",
		style: {
			color: c,
			background: `${c}18`
		},
		children
	});
}
function CTA({ children, onClick, variant = "gradient", className = "" }) {
	const styles = variant === "gradient" ? {
		background: GRADIENT_CTA,
		color: "#fff",
		boxShadow: `0 16px 34px -14px ${BRAND.orange}88`
	} : variant === "green" ? {
		background: BRAND.green,
		color: "#fff",
		boxShadow: `0 16px 34px -14px ${BRAND.green}88`
	} : {
		background: "#fff",
		color: BRAND.text,
		border: `1px solid ${BRAND.border}`
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		style: styles,
		className: `w-full rounded-2xl px-6 py-4 text-base font-extrabold transition-all active:scale-[0.98] hover:-translate-y-0.5 ${className}`,
		children
	});
}
function Card({ children, className = "", style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-3xl bg-white p-6 ${className}`,
		style: {
			border: `1px solid ${BRAND.border}`,
			boxShadow: "0 18px 40px -28px rgba(15,23,42,0.35)",
			...style
		},
		children
	});
}
function SectionTitle({ eyebrow, tone = "blue", title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				tone,
				children: eyebrow
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-[28px] font-extrabold leading-[1.15] tracking-tight sm:text-4xl",
					children: title
				})
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[15px] leading-relaxed sm:text-lg",
					style: { color: BRAND.textSoft },
					children: subtitle
				})
			})
		]
	});
}
function useCountdown(totalSeconds = 900) {
	const [left, setLeft] = (0, import_react.useState)(totalSeconds);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setLeft((s) => s > 0 ? s - 1 : 0), 1e3);
		return () => clearInterval(id);
	}, []);
	const m = Math.floor(left / 60);
	const s = left % 60;
	return {
		m: String(m).padStart(2, "0"),
		s: String(s).padStart(2, "0")
	};
}
var ciclo_default = "/assets/ciclo-wwVOrpdh.avif";
var transformacao_default = "/assets/transformacao-mECemVJs.avif";
var titulo01_default = "/assets/titulo01-a6ainNey.avif";
function Hero({ onCta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "hero-bg overflow-hidden",
		style: { padding: "88px 0 96px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-logo-text",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "l1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
								className: "inline-block h-3.5 w-3.5 mr-1.5",
								style: { verticalAlign: "-0.125em" }
							}), "Sistema Intervenção Emocional"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: titulo01_default,
						alt: "Sua mente não está apenas roubando sua paz. Ela pode estar roubando o seu futuro financeiro.",
						className: "mx-auto mt-5 w-full max-w-[600px] sm:max-w-[700px] h-auto"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-5 max-w-xl text-[16px] leading-relaxed sm:text-lg",
						style: { color: "#2f3a48cc" },
						children: [
							"Medo, insegurança, culpa e ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "#443634",
									fontWeight: 800
								},
								className: "text-[16px]",
								children: "ESCASSEZ"
							}),
							" fazem milhares de pessoas perderem dias inteiros de produtividade. O ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									color: "#443634",
									fontWeight: 800
								},
								className: "text-[16px]",
								children: "Ressignifica"
							}),
							" interrompe esse ciclo em menos de 2 minutos e ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "#e8732e" },
								className: "text-[16px]",
								children: "devolve sua capacidade de agir."
							})
						]
					})
				]
			})
		})
	});
}
var CICLO = [
	"Pensamentos negativos",
	"Escassez",
	"Ansiedade",
	"Paralisia",
	"Procrastinação",
	"Você produz menos",
	"Você ganha menos dinheiro",
	"Sua autoestima diminui",
	"O ciclo recomeça"
];
function CicloInvisivel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		style: { background: "#fffdfd" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "O ciclo invisível",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Existe um loop rodando na sua cabeça",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "#e8732e" },
							children: "todos os dias"
						}),
						"."
					] }),
					subtitle: "Ele não avisa quando começa. Só cobra o preço no fim do mês."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: ciclo_default,
						alt: "Ilustração de um ciclo mental fechado",
						loading: "lazy",
						width: 1024,
						height: 1024,
						className: "mx-auto mt-10 w-40 sm:w-52"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-10 max-w-sm",
					children: CICLO.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .04 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full rounded-2xl px-5 py-3.5 text-center text-sm font-bold",
								style: {
									background: i === CICLO.length - 1 ? "#FEF2F2" : "#fff",
									border: `1px solid ${i === CICLO.length - 1 ? "#FECACA" : "#E2E8F0"}`,
									color: i === CICLO.length - 1 ? "#DC2626" : "#373435",
									boxShadow: "0 12px 28px -24px rgba(15,23,42,0.5)"
								},
								children: step
							}), i < CICLO.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
								className: "my-1.5 h-4 w-4",
								style: { color: "#2f3a48cc" }
							})]
						})
					}, step))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-10 max-w-xl rounded-3xl p-6 text-center",
						style: {
							background: "#00AFEF0F",
							border: "1px solid #00AFEF33"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-extrabold",
							style: { color: "#373435" },
							children: "Disciplina nunca foi o seu problema."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							style: { color: "#2f3a48cc" },
							children: "Ninguém executa bem enquanto a mente está em modo de defesa. O que você precisa não é de mais força de vontade — é de uma interrupção no momento exato em que o ciclo começa."
						})]
					})
				})
			]
		})
	});
}
var DIA = [
	{
		h: "06:40",
		t: "Você acorda antes do despertador tocar."
	},
	{
		h: "06:41",
		t: "Pega o celular ainda deitado."
	},
	{
		h: "06:55",
		t: "Compara sua vida com a de todo mundo."
	},
	{
		h: "08:10",
		t: "Senta para trabalhar e trava na primeira tarefa."
	},
	{
		h: "12:30",
		t: "Percebe que perdeu a manhã inteira."
	},
	{
		h: "18:00",
		t: "Adia de novo o que era mais importante."
	},
	{
		h: "23:40",
		t: "Vai dormir com culpa, prometendo que amanhã é diferente."
	},
	{
		h: "06:40",
		t: "E amanhã tudo recomeça."
	}
];
function VerdadeiroProblema() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		style: { background: "#ebded6" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "O verdadeiro problema",
					tone: "green",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Não é preguiça. É um",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "#e8732e" },
							children: "dia inteiro sendo sequestrado"
						}),
						"."
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-3",
					children: DIA.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .04 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 rounded-2xl bg-white p-4",
							style: { border: "1px solid #E2E8F0" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 shrink-0 rounded-lg px-2.5 py-1 text-xs font-extrabold tabular-nums",
								style: {
									background: "#00AFEF14",
									color: "#00AFEF"
								},
								children: d.h
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] leading-relaxed",
								style: { color: "#373435" },
								children: d.t
							})]
						})
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-10 text-center text-lg font-extrabold",
						style: { color: "#373435" },
						children: ["Esse ciclo pode ser interrompido. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "#e8732e" },
							children: "Hoje."
						})]
					})
				})
			]
		})
	});
}
var FLUXO = [
	{
		icon: HeartPulse,
		t: "Você identifica o sentimento",
		d: "Culpa, medo, escassez, insegurança."
	},
	{
		icon: Headphones,
		t: "O app faz a intervenção",
		d: "Um áudio ou vídeo de 2 a 5 minutos."
	},
	{
		icon: Sparkles,
		t: "Seu estado emocional muda",
		d: "A atenção sai do medo e volta para a ação."
	},
	{
		icon: Target,
		t: "Você executa uma microação",
		d: "Uma tarefa pequena, de 10 minutos."
	},
	{
		icon: Trophy,
		t: "Sua autoestima aumenta",
		d: "O cérebro recebe evidência de que você é capaz."
	},
	{
		icon: TrendingUp,
		t: "Você produz novamente",
		d: "E a produção é o que gera resultado real."
	}
];
function ConhecaOApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		style: { background: "#fffdfd" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Conheça o Ressignifica",
					tone: "green",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Um botão. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "#e8732e" },
							children: "Dois minutos."
						}),
						" Um dia inteiro recuperado."
					] }),
					subtitle: "O Ressignifica não é um app de meditação. É um sistema de redirecionamento emocional que age no momento exato em que sua mente tenta te paralisar."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-3",
					children: FLUXO.map(({ icon: Icon, t, d }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 rounded-3xl bg-white p-5",
							style: { border: "1px solid #E2E8F0" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
								style: { background: "#00AFEF18" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5",
									style: { color: "#00AFEF" }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[15px] font-extrabold",
								style: { color: "#373435" },
								children: [
									i + 1,
									". ",
									t
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed",
								style: { color: "#2f3a48cc" },
								children: d
							})] })]
						})
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 rounded-3xl p-6 text-center",
						style: {
							background: "#CCE7D4",
							border: "1px solid #B8DFC8"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] font-extrabold",
							style: { color: "#373435" },
							children: "Quanto mais você age, mais você produz. Quanto mais você produz, maiores as suas chances de mudar sua vida financeira."
						})
					})
				})
			]
		})
	});
}
var RECEBE = [
	{
		icon: Headphones,
		t: "Biblioteca de áudios",
		d: "Intervenções de 2 a 5 minutos para cada sentimento."
	},
	{
		icon: Video,
		t: "Biblioteca de vídeos",
		d: "Conteúdos curtos para destravar na hora."
	},
	{
		icon: BrainCircuit,
		t: "Exercícios de ressignificação",
		d: "Reinterprete a situação e saia da paralisia."
	},
	{
		icon: Target,
		t: "Microações",
		d: "Tarefas de 10 minutos que recolocam você em movimento."
	},
	{
		icon: ChartLine,
		t: "Dashboard de evolução",
		d: "Veja em números que você está avançando."
	},
	{
		icon: Trophy,
		t: "Registro de vitórias",
		d: "Cada tarefa concluída vira evidência concreta."
	},
	{
		icon: HeartPulse,
		t: "Check-in emocional",
		d: "Identifique o que está sentindo em 10 segundos."
	},
	{
		icon: CalendarCheck,
		t: "Evolução diária",
		d: "Constância sem depender de motivação."
	}
];
function Recebe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		style: { background: "#ebded6" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "O que você recebe",
				tone: "green",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Tudo o que você precisa para",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "#e8732e" },
						children: "voltar a produzir"
					}),
					"."
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2",
				children: RECEBE.map(({ icon: Icon, t, d }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .04 * i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-2xl",
								style: { background: "#00AFEF18" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5",
									style: { color: "#00AFEF" }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[15px] font-extrabold",
								style: { color: "#373435" },
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed",
								style: { color: "#2f3a48cc" },
								children: d
							})
						]
					})
				}, t))
			})]
		})
	});
}
var PORQUE = [
	{
		icon: Flame,
		t: "Não depende de motivação",
		d: "Motivação vai e volta. O botão está sempre lá."
	},
	{
		icon: ListChecks,
		t: "Não depende de disciplina",
		d: "Você não precisa mudar de vida. Só apertar um botão."
	},
	{
		icon: Zap,
		t: "Não depende de força de vontade",
		d: "O áudio faz o trabalho de redirecionar sua atenção."
	},
	{
		icon: Clock,
		t: "Age no momento exato",
		d: "Interrompe o ciclo mental quando ele começa, não depois."
	}
];
function PorqueFunciona() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		style: { background: "#fffdfd" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Por que funciona",
					tone: "green",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Funciona justamente porque",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "#e8732e" },
							children: "não exige nada de você"
						}),
						"."
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2",
					children: PORQUE.map(({ icon: Icon, t, d }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-11 w-11 items-center justify-center rounded-2xl",
									style: { background: "#00AFEF16" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-5 w-5",
										style: { color: "#00AFEF" }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-[15px] font-extrabold",
									style: { color: "#373435" },
									children: t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm leading-relaxed",
									style: { color: "#2f3a48cc" },
									children: d
								})
							]
						})
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl p-6",
							style: {
								background: "#FEF2F2",
								border: "1px solid #C9524155"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-extrabold",
								style: { color: "#C95241" },
								children: "O jeito antigo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2.5",
								children: [
									"Esperar a motivação chegar",
									"Prometer que amanhã começa",
									"Se cobrar mais",
									"Se culpar à noite"
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm",
									style: { color: "#9B2C2C" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
											className: "mt-0.5 h-4 w-4 shrink-0",
											style: { color: "#C95241" }
										}),
										" ",
										x
									]
								}, x))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl p-6 text-white",
							style: {
								background: "linear-gradient(135deg, #00A859 0%, #379263 100%)",
								border: "1px solid #00A85944"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-extrabold",
								children: "Com o Ressignifica"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2.5",
								children: [
									"Apertar o botão quando travar",
									"Ouvir 2 a 5 minutos",
									"Executar uma microação",
									"Registrar a vitória"
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "mt-0.5 h-4 w-4 shrink-0",
											style: { color: "#FFCC29" }
										}),
										" ",
										x
									]
								}, x))
							})]
						})]
					})
				})
			]
		})
	});
}
function Transformacao() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		style: { background: "#ebded6" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Sua transformação",
					tone: "green",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"De travado a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "#e8732e" },
							children: "em movimento"
						}),
						"."
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: transformacao_default,
						alt: "Comparativo visual entre paralisia e evolução",
						loading: "lazy",
						width: 1280,
						height: 1024,
						className: "mx-auto mt-8 w-full max-w-sm"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-3xl bg-white p-6",
						style: { border: "1px solid #E2E8F0" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-3.5 w-3.5" }), " Antes"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: [
								"Paralisa",
								"Procrastina",
								"Perde oportunidades",
								"Perde dinheiro",
								"Autoestima baixa"
							].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-[15px]",
								style: { color: "#2f3a48cc" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-300" }),
									" ",
									x
								]
							}, x))
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-3xl p-6",
							style: {
								background: "linear-gradient(135deg, #00A859 0%, #379263 100%)",
								boxShadow: "0 24px 50px -28px #00A85988"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3.5 w-3.5" }), " Depois"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: [
									"Age",
									"Executa",
									"Produz",
									"Recupera a autoestima",
									"Volta a gerar resultados"
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 text-[15px] font-semibold text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
											className: "h-4 w-4 shrink-0",
											style: { color: "#FFCC29" }
										}),
										" ",
										x
									]
								}, x))
							})]
						})
					})]
				})
			]
		})
	});
}
var BONUS = [{
	img: "/assets/bonus-comunidade-C3vkRoIw.avif",
	tag: "Bônus 1",
	t: "Comunidade Secreta",
	d: "Acesso a um grupo exclusivo para troca de experiências, suporte mútuo e networking com pessoas que buscam o mesmo crescimento.",
	icon: Users
}, {
	img: "/assets/bonus-webinar-w5WbI-aL.avif",
	tag: "Bônus 2",
	t: "Webinar Exclusivo",
	d: "Sessões ao vivo com o criador para aprofundar o redirecionamento emocional e tirar suas dúvidas em tempo real.",
	icon: Sparkles
}];
function Bonus() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		style: { background: "#fffdfd" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Bônus inclusos",
				tone: "green",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Você não entra sozinho ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "#e8732e" },
						children: "nessa virada"
					}),
					"."
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2",
				children: BONUS.map(({ img, tag, t, d, icon: Icon }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .06 * i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "h-full overflow-hidden !p-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img,
							alt: t,
							loading: "lazy",
							width: 1024,
							height: 768,
							className: "h-40 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]",
									style: {
										background: "#00AFEF16",
										color: "#00AFEF"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-3.5 w-3.5" }),
										" ",
										tag
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 flex items-center gap-2 text-lg font-extrabold",
									style: { color: "#373435" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-4.5 w-4.5",
											style: { color: "#00AFEF" }
										}),
										" ",
										t
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed",
									style: { color: "#2f3a48cc" },
									children: d
								})
							]
						})]
					})
				}, t))
			})]
		})
	});
}
var BASE_BULLETS = [
	"Acesso completo ao app",
	"Biblioteca de áudios e vídeos",
	"Microações e dashboard",
	"Comunidade Secreta",
	"Webinar exclusivo"
];
var PLANOS = [
	{
		nome: "Anual",
		precoMensal: "R$ 3,99",
		precoMensalLabel: "por mês",
		precoTotal: "R$ 47,88",
		precoTotalLabel: "por ano",
		sub: "Apenas R$ 3,99 por mês — economize 60%.",
		economia: "Economize 60%",
		bullets: [...BASE_BULLETS, "Maior economia do ano"],
		cta: "Quero o Melhor Valor",
		url: CHECKOUT.anual,
		selo: "Maior Economia"
	},
	{
		nome: "Trimestral",
		precoMensal: "R$ 7,40",
		precoMensalLabel: "por mês",
		precoTotal: "R$ 22,20",
		precoTotalLabel: "a cada 3 meses",
		sub: "Apenas R$ 7,40 por mês — economize 25%.",
		economia: "Economize 25%",
		bullets: [...BASE_BULLETS, "Melhor custo-benefício"],
		cta: "Quero Economizar",
		url: CHECKOUT.trimestral,
		selo: "Mais Popular",
		destaque: true
	},
	{
		nome: "Mensal",
		precoMensal: "R$ 9,90",
		precoMensalLabel: "por mês",
		precoTotal: "R$ 9,90",
		precoTotalLabel: "por mês",
		sub: "Ideal para quem deseja conhecer o aplicativo.",
		bullets: BASE_BULLETS,
		cta: "Começar Agora",
		url: CHECKOUT.mensal
	}
];
function TimeBox({ v, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl bg-white/15 px-4 py-2.5 text-2xl font-extrabold tabular-nums text-white",
			children: v
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80",
			children: label
		})]
	});
}
function Oferta() {
	const { m, s } = useCountdown();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "oferta",
		className: "py-16 sm:py-24",
		style: { background: "#ebded6" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-md rounded-3xl p-6 text-center",
					style: {
						background: "linear-gradient(135deg, #ED3237 0%, #C95241 100%)",
						boxShadow: "0 26px 55px -30px #F5863488"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "h-4 w-4" }), " Condição especial expira em"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeBox, {
								v: m,
								label: "min"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-extrabold text-white/70",
								children: ":"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeBox, {
								v: s,
								label: "seg"
							})
						]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						eyebrow: "Escolha seu plano",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Menos que um café por semana para ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "#e8732e" },
								children: "recuperar seus dias"
							}),
							"."
						] })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid items-start gap-5 lg:grid-cols-3",
					children: PLANOS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .06 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-full rounded-[28px] bg-white p-6",
							style: {
								border: p.destaque ? "2px solid #F58634" : "1px solid #E2E8F0",
								boxShadow: p.destaque ? "0 30px 60px -30px #F5863488" : "0 18px 40px -30px rgba(15,23,42,0.4)",
								transform: p.destaque ? "scale(1.015)" : void 0
							},
							children: [
								p.selo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white",
									style: { background: p.destaque ? "#373435" : "#00AFEF" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-3.5 w-3.5" }),
										" ",
										p.selo
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-extrabold uppercase tracking-[0.14em]",
									style: { color: "#2f3a48cc" },
									children: p.nome
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-4xl font-extrabold tracking-tight",
									style: { color: "#373435" },
									children: p.precoMensal
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									style: { color: "#2f3a48cc" },
									children: p.precoMensalLabel
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm",
									style: { color: "#2f3a48cc" },
									children: [
										"Cobrado ",
										p.precoTotal,
										" ",
										p.precoTotalLabel
									]
								}),
								p.economia && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-bold",
									style: { color: p.destaque ? "#379263" : "#0095C7" },
									children: p.economia
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2.5",
									children: p.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5 text-sm",
										style: { color: "#373435" },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
											className: "mt-0.5 h-4 w-4 shrink-0",
											style: { color: "#00A859" }
										}), b]
									}, b))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {
										variant: p.destaque ? "gradient" : "green",
										onClick: () => go(p.url),
										children: p.cta
									})
								})
							]
						})
					}, p.nome))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold",
						style: { color: "#2f3a48cc" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), " Compra 100% segura"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), " Garantia de 7 dias"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Acesso imediato"]
							})
						]
					})
				})
			]
		})
	});
}
var GALLERY = Object.entries(/* @__PURE__ */ Object.assign({
	"/src/assets/appsre/carousel/mok01.jpg": mok01_exports,
	"/src/assets/appsre/carousel/mok02.jpg": mok02_exports,
	"/src/assets/appsre/carousel/mok03.jpg": mok03_exports,
	"/src/assets/appsre/carousel/mok04.jpg": mok04_exports,
	"/src/assets/appsre/carousel/mok05.jpg": mok05_exports,
	"/src/assets/appsre/carousel/mok06.jpg": mok06_exports,
	"/src/assets/appsre/carousel/mok07.jpg": mok07_exports,
	"/src/assets/appsre/carousel/mok08.jpg": mok08_exports,
	"/src/assets/appsre/carousel/mok09.jpg": mok09_exports,
	"/src/assets/appsre/carousel/mok10.jpg": mok10_exports
})).sort(([a], [b]) => a.localeCompare(b)).map(([, mod], i) => ({
	src: mod.default,
	alt: `Tela real do aplicativo Ressignifica ${i + 1}`
}));
function Galeria() {
	const autoplay = (0, import_react.useRef)(Autoplay({
		delay: 3800,
		stopOnInteraction: false,
		stopOnMouseEnter: true
	}));
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "center",
		containScroll: "trimSnaps"
	}, [autoplay.current]);
	const [selected, setSelected] = (0, import_react.useState)(0);
	const [snaps, setSnaps] = (0, import_react.useState)([]);
	const [lightboxIndex, setLightboxIndex] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!emblaApi) return;
		setSnaps(emblaApi.scrollSnapList());
		const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
		emblaApi.on("select", onSelect);
		onSelect();
		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi]);
	if (GALLERY.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-16 sm:py-24",
		style: { background: "#fffdfd" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Veja o aplicativo",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Telas reais do ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "#e8732e" },
						children: "Ressignifica"
					}),
					"."
				] }),
				subtitle: "Toque em qualquer tela para ver em tamanho real."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							ref: emblaRef,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex touch-pan-y",
								children: GALLERY.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-w-0 flex-[0_0_70%] px-2.5 sm:flex-[0_0_38%] lg:flex-[0_0_26%]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setLightboxIndex(i),
										className: "group block w-full overflow-hidden rounded-[26px] bg-white transition-transform hover:-translate-y-1",
										style: {
											border: "1px solid #E2E8F0",
											boxShadow: "0 20px 40px -24px rgba(15,23,42,0.35)",
											aspectRatio: "9 / 16"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: g.src,
											alt: g.alt,
											loading: "lazy",
											decoding: "async",
											className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
										})
									})
								}, i))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => emblaApi?.scrollPrev(),
							"aria-label": "Anterior",
							className: "absolute -left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2.5 shadow-lg transition-transform hover:scale-105",
							style: {
								border: "1px solid #E2E8F0",
								color: "#373435"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => emblaApi?.scrollNext(),
							"aria-label": "Próximo",
							className: "absolute -right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2.5 shadow-lg transition-transform hover:scale-105",
							style: {
								border: "1px solid #E2E8F0",
								color: "#373435"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex items-center justify-center gap-2",
							children: snaps.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => emblaApi?.scrollTo(i),
								"aria-label": `Ir para a tela ${i + 1}`,
								className: "h-2 rounded-full transition-all",
								style: {
									width: selected === i ? 26 : 8,
									background: selected === i ? "#00AFEF" : "#E2E8F0"
								}
							}, i))
						})
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			open: lightboxIndex !== null,
			index: lightboxIndex ?? 0,
			close: () => setLightboxIndex(null),
			slides: GALLERY.map((g) => ({
				src: g.src,
				alt: g.alt
			})),
			controller: { closeOnBackdropClick: true },
			styles: { container: { backgroundColor: "rgba(15,23,42,0.94)" } }
		})]
	});
}
var DEPOIMENTOS = [
	{
		foto: Daniela_default,
		nome: "Daniela M.",
		cidade: "Curitiba, PR",
		nota: 5,
		texto: "Eu não sabia nomear o que sentia. Fazer o check-in e ouvir um áudio de três minutos me tirou da paralisia. Na primeira semana entreguei dois trabalhos que estavam parados há um mês."
	},
	{
		foto: Fernanda_default,
		nome: "Fernanda R.",
		cidade: "Belo Horizonte, MG",
		nota: 5,
		texto: "O que mudou pra mim foi a microação depois do áudio. Dez minutos parece pouco, mas é o que me faz começar. Hoje o meu dia rende bem mais do que rendia antes."
	},
	{
		foto: Ricardo_default,
		nome: "Ricardo A.",
		cidade: "São Paulo, SP",
		nota: 5,
		texto: "Sou autônomo e perdia manhãs inteiras travado. Uso o app quando percebo que estou fugindo. O registro de vitórias me mostrou, em números, que eu estava produzindo de novo."
	}
];
function Depoimentos() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		style: { background: "#ebded6" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Depoimentos",
				tone: "green",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Pessoas comuns que ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "#e8732e" },
						children: "voltaram a agir"
					}),
					"."
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: DEPOIMENTOS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .06 * i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: d.foto,
									alt: d.nome,
									loading: "lazy",
									className: "h-11 w-11 rounded-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-extrabold",
									style: { color: "#373435" },
									children: d.nome
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs",
									style: { color: "#2f3a48cc" },
									children: d.cidade
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex gap-0.5",
								children: Array.from({ length: d.nota }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: "h-3.5 w-3.5",
									style: {
										color: "#F59E0B",
										fill: "#F59E0B"
									}
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm leading-relaxed",
								style: { color: "#2f3a48cc" },
								children: [
									"“",
									d.texto,
									"”"
								]
							})
						]
					})
				}, d.nome))
			})]
		})
	});
}
function Garantia() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		style: { background: "#fffdfd" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-2xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[32px] bg-white p-8 text-center",
				style: {
					border: "1px solid #E2E8F0",
					boxShadow: "0 26px 55px -34px rgba(15,23,42,0.5)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-20 w-20 items-center justify-center rounded-full",
						style: {
							background: "linear-gradient(135deg, #00AFEF 0%, #00A859 100%)",
							boxShadow: "0 18px 36px -18px #00AFEF88"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-9 w-9 text-white" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-2xl font-extrabold",
						style: { color: "#373435" },
						children: "Garantia incondicional de 7 dias"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[15px] leading-relaxed",
						style: { color: "#2f3a48cc" },
						children: "Teste o Ressignifica por sete dias. Se você sentir que não é para você, basta pedir o reembolso — devolvemos 100% do valor, sem perguntas e sem burocracia. O risco é todo nosso."
					})
				]
			}) })
		})
	});
}
var FAQS = [
	{
		q: "Funciona para ansiedade?",
		a: "O Ressignifica não trata transtornos, mas ajuda você a interromper o loop de pensamentos que costuma alimentar a ansiedade no dia a dia, devolvendo clareza para agir."
	},
	{
		q: "Quanto tempo leva para perceber resultados?",
		a: "A maior parte das pessoas sente o primeiro alívio já na primeira intervenção, entre 2 e 5 minutos. A mudança de produtividade costuma aparecer na primeira semana de uso."
	},
	{
		q: "Preciso usar todos os dias?",
		a: "Não. O app foi feito para ser usado no momento em que você trava. Mas o check-in diário acelera muito a evolução, porque cria evidência de progresso."
	},
	{
		q: "É terapia?",
		a: "Não. É uma ferramenta de intervenção emocional e execução. Ela não substitui acompanhamento psicológico ou médico — pode caminhar junto com ele."
	},
	{
		q: "Como recebo o acesso?",
		a: "Assim que o pagamento é confirmado, você recebe o acesso por e-mail e já pode usar o app no Android ou no iPhone, direto do navegador do celular."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-24",
		style: { background: "#ebded6" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Perguntas frequentes",
				tone: "green",
				title: "Ainda com alguma dúvida?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-3",
				children: FAQS.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .04 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-2xl bg-white",
							style: { border: "1px solid #E2E8F0" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpen(isOpen ? null : i),
								className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[15px] font-bold",
									style: { color: "#373435" },
									children: f.q
								}), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
									className: "h-4 w-4 shrink-0",
									style: { color: "#00AFEF" }
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									className: "h-4 w-4 shrink-0",
									style: { color: "#00AFEF" }
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								initial: false,
								children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										height: 0,
										opacity: 0
									},
									animate: {
										height: "auto",
										opacity: 1
									},
									exit: {
										height: 0,
										opacity: 0
									},
									transition: { duration: .25 },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "px-5 pb-5 text-sm leading-relaxed",
										style: { color: "#2f3a48cc" },
										children: f.a
									})
								})
							})]
						})
					}, f.q);
				})
			})]
		})
	});
}
function CTAFinal({ onCta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 py-16 sm:py-24",
		style: { background: "#fffdfd" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl rounded-[32px] px-6 py-12 text-center",
			style: {
				background: "linear-gradient(135deg, #221a12 0%, #443634 100%)",
				boxShadow: "0 30px 70px -34px #E8732E"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-[28px] font-extrabold leading-[1.15] text-white sm:text-4xl",
					children: "Enquanto você adia mais um dia, sua mente continua alimentando o ciclo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/90 sm:text-lg",
					children: "Basta interromper esse ciclo uma única vez para começar a construir uma nova realidade. Um botão. Cinco minutos. Uma vida de volta ao movimento."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-8 max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onCta,
						className: "w-full rounded-2xl bg-white px-6 py-4 text-base font-extrabold transition-transform active:scale-[0.98] hover:-translate-y-0.5",
						style: {
							color: "#E8732E",
							boxShadow: "0 18px 36px -18px #221a12"
						},
						children: "Quero Recuperar Minha Capacidade de Produzir"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-white/85",
						children: "Acesso imediato • Garantia incondicional de 7 dias"
					})]
				})
			]
		}) })
	});
}
function Rodape() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "px-5 py-10",
		style: {
			borderTop: "1px solid #E2E8F0",
			background: "linear-gradient(135deg, #221a12 0%, #443634 100%)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-4xl flex-col items-center gap-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-extrabold",
					style: { color: "#fff" },
					children: "Ressignifica"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold",
					style: { color: "#fffdfdcc" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/politica-de-privacidade",
							className: "hover:opacity-70",
							children: "Política de Privacidade"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/termos-de-uso",
							className: "hover:opacity-70",
							children: "Termos de Uso"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/19991703327",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:opacity-70",
							children: "Contato"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs",
					style: { color: "#fffdfdcc" },
					children: "© 2026 Ressignifica. Todos os direitos reservados."
				})
			]
		})
	});
}
function RessignificaAppSellPage() {
	const scrollToOffer = (0, import_react.useCallback)(() => {
		document.getElementById("oferta")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "rs-sell min-h-screen antialiased",
		style: {
			background: BRAND.bg,
			color: BRAND.text
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onCta: scrollToOffer }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CicloInvisivel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerdadeiroProblema, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConhecaOApp, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recebe, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PorqueFunciona, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transformacao, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bonus, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Oferta, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Galeria, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Depoimentos, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Garantia, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAFinal, { onCta: scrollToOffer }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rodape, {})
		]
	});
}
var SplitComponent = RessignificaAppSellPage;
//#endregion
export { SplitComponent as component };
