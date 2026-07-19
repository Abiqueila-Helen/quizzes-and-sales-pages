import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { C as ChevronRight, D as Calendar, E as Check, M as CirclePlay, O as Brain, T as ChevronDown, _ as Flame, b as Clock, d as Lock, f as ListChecks, g as Headphones, h as Heart, i as TrendingUp, j as Sparkles, k as ArrowRight, l as Quote, n as X, o as Star, p as LayoutDashboard, r as Upload, s as ShieldCheck, w as ChevronLeft, y as Compass } from "../_libs/lucide-react.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { t as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { t as Lightbox } from "../_libs/yet-another-react-lightbox.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/appsre-CJ7CdqrN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Logo_default = "/assets/Logo-CEZ_QuOe.png";
var hero_mockup_default = "/assets/hero-mockup-D1wke1Ye.png";
var screen_checkin_default = "/assets/screen-checkin-BQZ0GZY-.jpg";
var screen_audios_default = "/assets/screen-audios-DqbagL6F.jpg";
var screen_dashboard_default = "/assets/screen-dashboard-B30khCPl.jpg";
var screen_tarefas_default = "/assets/screen-tarefas-CyKXyYtL.jpg";
var screen_videos_default = "/assets/screen-videos-lI6hL3N-.jpg";
var testi_1_default = "/assets/testi-1-CiqZlaoh.jpg";
var testi_3_default = "/assets/testi-3-DwPFJxU_.jpg";
var BRAND = {
	blue: "#1ABCFE",
	blueDeep: "#0FA6E6",
	green: "#0ACF83",
	greenDeep: "#07B372",
	bg: "#FFFFFF",
	bgSoft: "#F8FAFC",
	border: "#E2E8F0",
	text: "#1E293B",
	textSoft: "#475569",
	textMute: "#64748B"
};
var font = { fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" };
function Reveal({ children, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			y: 24
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .6,
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
		style: {
			color: c,
			background: `${c}14`,
			border: `1px solid ${c}33`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "h-1.5 w-1.5 rounded-full",
			style: { background: c }
		}), children]
	});
}
function PrimaryButton({ children, onClick, className = "", full = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		whileHover: {
			scale: 1.02,
			y: -1
		},
		whileTap: { scale: .98 },
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 22
		},
		onClick,
		className: `group inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold text-white shadow-lg transition-colors ${full ? "w-full" : ""} ${className}`,
		style: {
			background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.blueDeep} 100%)`,
			boxShadow: `0 12px 30px -8px ${BRAND.blue}80`
		},
		onMouseEnter: (e) => {
			e.currentTarget.style.background = `linear-gradient(135deg, ${BRAND.green} 0%, ${BRAND.greenDeep} 100%)`;
			e.currentTarget.style.boxShadow = `0 14px 34px -8px ${BRAND.green}99`;
		},
		onMouseLeave: (e) => {
			e.currentTarget.style.background = `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.blueDeep} 100%)`;
			e.currentTarget.style.boxShadow = `0 12px 30px -8px ${BRAND.blue}80`;
		},
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
	});
}
function Card({ children, className = "", interactive = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-3xl border bg-white/80 backdrop-blur-sm transition-all duration-300 ${interactive ? "hover:-translate-y-1 hover:shadow-xl" : ""} ${className}`,
		style: {
			borderColor: BRAND.border,
			boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.08)"
		},
		children
	});
}
function AppsrePage() {
	const scrollToOffer = (0, import_react.useCallback)(() => {
		document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			...font,
			color: BRAND.text,
			background: BRAND.bg
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        html { scroll-behavior: smooth; }
        .rs-grad-text {
          background: linear-gradient(90deg, ${BRAND.blue}, ${BRAND.green});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .rs-dot-grid {
          background-image: radial-gradient(${BRAND.blue}22 1px, transparent 1px);
          background-size: 22px 22px;
        }
        @keyframes rs-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        .rs-float { animation: rs-float 6s ease-in-out infinite; }
        .rs-float-slow { animation: rs-float 8s ease-in-out infinite; }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { onCta: scrollToOffer }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onCta: scrollToOffer }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialProofStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comparison, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppGallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bonuses, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Offer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guarantee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, { onCta: scrollToOffer }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav({ onCta }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-0 z-40 transition-all duration-300",
		style: {
			background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
			backdropFilter: scrolled ? "blur(14px)" : "none",
			borderBottom: scrolled ? `1px solid ${BRAND.border}` : "1px solid transparent"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: Logo_default,
					alt: "Ressignifica",
					className: "h-9 w-9 rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg font-extrabold tracking-tight",
					children: "Ressignifica"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onCta,
				className: "hidden rounded-full px-5 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 sm:inline-flex",
				style: { background: BRAND.blue },
				children: "Começar agora"
			})]
		})
	});
}
function Hero({ onCta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28",
		style: { background: BRAND.bgSoft },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				style: { background: `radial-gradient(60% 50% at 85% 10%, ${BRAND.blue}22, transparent 60%),
                      radial-gradient(50% 45% at 10% 90%, ${BRAND.green}1f, transparent 60%)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 rs-dot-grid opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "App de intervenção emocional" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 text-[2.4rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]",
							children: [
								"Interrompa o loop dos ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rs-grad-text",
									children: "pensamentos negativos"
								}),
								" em menos de 5 minutos."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-lg leading-relaxed",
							style: { color: BRAND.textSoft },
							children: "O Ressignifica é um aplicativo de intervenção emocional que ajuda você a interromper ansiedade, culpa, medo, procrastinação e autossabotagem — para recuperar o foco e voltar a agir com clareza."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-7 flex flex-col gap-3",
							children: [
								"Alívio emocional em poucos minutos",
								"Áudios de ressignificação para cada estado",
								"Micro-ações que quebram a paralisia"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-[0.98rem]",
								style: { color: BRAND.text },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white",
									style: { background: BRAND.green },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-3.5 w-3.5",
										strokeWidth: 3
									})
								}), t]
							}, t))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
								onClick: onCta,
								children: "Quero começar agora"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm",
								style: { color: BRAND.textMute },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "h-4 w-4",
									style: { color: BRAND.green }
								}), "Garantia incondicional de 7 dias"]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .25,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm",
							style: { color: BRAND.textMute },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-4 w-4",
										style: { color: BRAND.blue }
									}), " Acesso imediato"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-4 w-4",
										style: { color: BRAND.blue }
									}), " Funciona no celular"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-4 w-4",
										style: { color: BRAND.blue }
									}), " Sem instalação obrigatória"]
								})
							]
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-[520px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "absolute inset-0 -z-10 blur-3xl",
							style: { background: `radial-gradient(50% 50% at 50% 50%, ${BRAND.blue}44, transparent 70%)` }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
							src: hero_mockup_default,
							alt: "App Ressignifica no smartphone",
							width: 1024,
							height: 1280,
							initial: {
								opacity: 0,
								scale: .94,
								y: 20
							},
							animate: {
								opacity: 1,
								scale: 1,
								y: 0
							},
							transition: {
								duration: .8,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "relative z-10 mx-auto w-full drop-shadow-2xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
							label: "ansiedade",
							className: "left-[-4%] top-[8%]",
							struckThrough: true,
							animationDelay: "0s"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
							label: "culpa",
							className: "right-[-2%] top-[24%]",
							struckThrough: true,
							animationDelay: "1.2s"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
							label: "medo",
							className: "left-[-2%] top-[46%]",
							struckThrough: true,
							animationDelay: "2.4s"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
							label: "procrastinação",
							className: "right-[-6%] top-[62%]",
							struckThrough: true,
							animationDelay: "3.6s"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .7,
								duration: .6
							},
							className: "rs-float-slow absolute bottom-[6%] left-[-4%] z-20 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-semibold shadow-xl",
							style: {
								color: BRAND.green,
								border: `1px solid ${BRAND.green}33`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" }), " +1 pequena vitória"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto mt-14 max-w-5xl px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-3xl border bg-white p-5 sm:p-6",
						style: { borderColor: BRAND.border },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-5",
							children: [
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-4 w-4" }),
									label: "Pensamentos negativos",
									tone: "mute"
								},
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "h-4 w-4" }),
									label: "Ação",
									tone: "green"
								},
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }),
									label: "Intervenção",
									tone: "blue"
								},
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-4 w-4" }),
									label: "Clareza",
									tone: "blue"
								},
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" }),
									label: "Resultado",
									tone: "green"
								}
							].map((s, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold",
									style: {
										background: s.tone === "mute" ? "#F1F5F9" : s.tone === "blue" ? `${BRAND.blue}12` : `${BRAND.green}14`,
										color: s.tone === "mute" ? BRAND.textMute : s.tone === "blue" ? BRAND.blueDeep : BRAND.greenDeep
									},
									children: [s.icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: s.label
									})]
								}), i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									className: "hidden h-4 w-4 shrink-0 sm:block",
									style: { color: BRAND.textMute }
								})]
							}, s.label))
						})
					})
				})
			})
		]
	});
}
function FloatingChip({ label, className = "", struckThrough = false, animationDelay = "0s" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			x: -10
		},
		animate: {
			opacity: 1,
			x: 0
		},
		transition: {
			duration: .6,
			delay: .4
		},
		className: `rs-float absolute z-20 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-lg ${className}`,
		style: {
			animationDelay,
			color: BRAND.textMute,
			border: `1px solid ${BRAND.border}`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: struckThrough ? "line-through" : "",
			children: label
		}), struckThrough && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-4 w-4 place-items-center rounded-full text-white",
			style: { background: BRAND.green },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "h-2.5 w-2.5",
				strokeWidth: 3
			})
		})]
	});
}
function SocialProofStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y",
		style: {
			borderColor: BRAND.border,
			background: BRAND.bg
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4",
			children: [
				{
					k: "+12.000",
					v: "pessoas atendidas"
				},
				{
					k: "4,9 / 5",
					v: "avaliação média"
				},
				{
					k: "< 5 min",
					v: "para se sentir melhor"
				},
				{
					k: "7 dias",
					v: "garantia incondicional"
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-2xl font-extrabold",
					style: { color: BRAND.text },
					children: s.k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-xs uppercase tracking-wider",
					style: { color: BRAND.textMute },
					children: s.v
				})]
			}, s.v))
		})
	});
}
function Features() {
	const items = [
		{
			icon: Heart,
			title: "Check-in de sentimentos",
			text: "Reconheça o que está sentindo em segundos e receba a intervenção certa."
		},
		{
			icon: Headphones,
			title: "Áudios de Ressignificação",
			text: "Faixas curtas para interromper ansiedade, culpa, medo e paralisia."
		},
		{
			icon: CirclePlay,
			title: "Biblioteca de Vídeos",
			text: "Conteúdos práticos organizados por estado emocional."
		},
		{
			icon: ListChecks,
			title: "Tarefas Inteligentes",
			text: "Micro-ações prontas para quebrar o ciclo e voltar a agir."
		},
		{
			icon: LayoutDashboard,
			title: "Dashboard",
			text: "Acompanhe seu progresso emocional com clareza visual."
		},
		{
			icon: Clock,
			title: "Histórico",
			text: "Volte para revisitar suas evidências de evolução."
		},
		{
			icon: Upload,
			title: "Seus próprios conteúdos",
			text: "Envie áudios e vídeos pessoais que funcionam para você."
		},
		{
			icon: ShieldCheck,
			title: "Privacidade real",
			text: "Seus registros ficam protegidos e nunca são compartilhados."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-28",
		style: { background: BRAND.bg },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						tone: "green",
						children: "O que você recebe"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl",
							children: [
								"Tudo o que você precisa para ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rs-grad-text",
									children: "recuperar seu estado produtivo"
								}),
								"."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg",
							style: { color: BRAND.textSoft },
							children: "Recursos pensados para atuar exatamente no momento em que a mente trava."
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: items.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "h-full p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-2xl",
								style: {
									background: `linear-gradient(135deg, ${BRAND.blue}18, ${BRAND.green}18)`,
									color: BRAND.blueDeep
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-bold",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed",
								style: { color: BRAND.textSoft },
								children: f.text
							})
						]
					})
				}, f.title))
			})]
		})
	});
}
function FlowSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		style: { background: BRAND.bgSoft },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Por que funciona" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-extrabold sm:text-4xl",
						children: "Você não precisa esperar se sentir melhor para agir."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl text-lg",
						style: { color: BRAND.textSoft },
						children: "O Ressignifica interrompe o ciclo negativo no exato momento em que ele começa — devolvendo controle, clareza e capacidade de execução."
					})
				})
			]
		})
	});
}
function Comparison() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		style: { background: BRAND.bg },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						tone: "green",
						children: "Antes vs Depois"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-3xl font-extrabold sm:text-4xl",
							children: [
								"Duas rotinas mentais. ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rs-grad-text",
									children: "Duas vidas diferentes"
								}),
								"."
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						interactive: false,
						className: "h-full p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl",
								style: {
									background: "#FEE2E2",
									color: "#B91C1C"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold",
								children: "Sem o Ressignifica"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-col gap-3",
							children: [
								"Pensamentos negativos em loop",
								"Procrastinação constante",
								"Culpa e autocobrança",
								"Ansiedade e paralisia",
								"Baixa autoestima"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-[0.98rem]",
								style: { color: BRAND.textSoft },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full",
									style: {
										background: "#FEE2E2",
										color: "#B91C1C"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
										className: "h-3.5 w-3.5",
										strokeWidth: 3
									})
								}), t]
							}, t))
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							interactive: false,
							className: "h-full p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-x-0 -top-px h-1 rounded-t-3xl",
									style: { background: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.green})` }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 place-items-center rounded-xl text-white",
										style: { background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.green})` },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "h-5 w-5",
											strokeWidth: 3
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold",
										children: "Com o Ressignifica"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex flex-col gap-3",
									children: [
										"Reconhece o sentimento",
										"Interrompe o ciclo",
										"Recupera a clareza",
										"Executa uma ação real",
										"Constrói autoestima com evidências"
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-[0.98rem]",
										style: { color: BRAND.text },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white",
											style: { background: BRAND.green },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												className: "h-3.5 w-3.5",
												strokeWidth: 3
											})
										}), t]
									}, t))
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
						children: [
							"Foco recuperado",
							"Menos procrastinação",
							"Ciclos interrompidos",
							"Autoestima em alta",
							"Clareza mental",
							"Evidências de progresso"
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border bg-white px-4 py-3 text-center text-sm font-semibold",
							style: {
								borderColor: BRAND.border,
								color: BRAND.text
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "mx-auto mb-1 h-4 w-4",
								style: { color: BRAND.green }
							}), b]
						}, b))
					})
				})
			]
		})
	});
}
var GALLERY = [
	{
		src: screen_checkin_default,
		alt: "Tela de check-in de sentimentos"
	},
	{
		src: screen_audios_default,
		alt: "Tela de áudios de ressignificação"
	},
	{
		src: screen_dashboard_default,
		alt: "Tela de dashboard e progresso"
	},
	{
		src: screen_tarefas_default,
		alt: "Tela de tarefas inteligentes"
	},
	{
		src: screen_videos_default,
		alt: "Tela de biblioteca de vídeos"
	}
];
function AppGallery() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "center",
		containScroll: "trimSnaps"
	}, [(0, import_react.useRef)(Autoplay({
		delay: 4200,
		stopOnInteraction: false,
		stopOnMouseEnter: true
	})).current]);
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
	const scrollPrev = () => emblaApi?.scrollPrev();
	const scrollNext = () => emblaApi?.scrollNext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24",
		style: { background: BRAND.bgSoft },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Por dentro do app" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-3xl font-extrabold sm:text-4xl",
							children: [
								"Conheça o Ressignifica ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rs-grad-text",
									children: "por dentro"
								}),
								"."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg",
							style: { color: BRAND.textSoft },
							children: "Toque nas telas para ver em tamanho real."
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .12,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							ref: emblaRef,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex touch-pan-y",
								children: GALLERY.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-w-0 flex-[0_0_78%] px-3 sm:flex-[0_0_42%] lg:flex-[0_0_28%]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setLightboxIndex(i),
										className: "group relative block w-full overflow-hidden rounded-[28px] border bg-white transition-all hover:-translate-y-1",
										style: {
											borderColor: BRAND.border,
											boxShadow: "0 20px 40px -20px rgba(15,23,42,0.25)",
											aspectRatio: "9 / 16"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: g.src,
											alt: g.alt,
											loading: "lazy",
											decoding: "async",
											className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" })]
									})
								}, i))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: scrollPrev,
							"aria-label": "Anterior",
							className: "absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border bg-white p-2.5 shadow-lg transition-all hover:scale-105 sm:block",
							style: {
								borderColor: BRAND.border,
								color: BRAND.text
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: scrollNext,
							"aria-label": "Próximo",
							className: "absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border bg-white p-2.5 shadow-lg transition-all hover:scale-105 sm:block",
							style: {
								borderColor: BRAND.border,
								color: BRAND.text
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex items-center justify-center gap-2",
							children: snaps.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => emblaApi?.scrollTo(i),
								"aria-label": `Ir para slide ${i + 1}`,
								className: "h-2 rounded-full transition-all",
								style: {
									width: selected === i ? 28 : 8,
									background: selected === i ? BRAND.blue : BRAND.border
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
			styles: { container: { backgroundColor: "rgba(15,23,42,0.92)" } }
		})]
	});
}
function Bonuses() {
	const bonuses = [
		{
			icon: Flame,
			tag: "Bônus #1",
			title: "Guia PDF — 30 Microações",
			text: "Sequência de 30 microações prontas para sair da procrastinação em qualquer situação.",
			value: "R$ 47"
		},
		{
			icon: Headphones,
			tag: "Bônus #2",
			title: "20 Áudios exclusivos",
			text: "Coleção completa de intervenção emocional para diferentes momentos do dia.",
			value: "R$ 97"
		},
		{
			icon: Calendar,
			tag: "Bônus #3",
			title: "Desafio de 7 dias",
			text: "Plano diário para reconstruir a autoestima com pequenas vitórias reais.",
			value: "R$ 53"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		style: { background: BRAND.bg },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						tone: "green",
						children: "Bônus exclusivos"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-3xl font-extrabold sm:text-4xl",
							children: [
								"Você também recebe ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rs-grad-text",
									children: "estes bônus"
								}),
								"."
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-3",
					children: bonuses.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "relative h-full overflow-hidden p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -right-8 -top-8 h-24 w-24 rounded-full",
									style: { background: `radial-gradient(circle, ${BRAND.green}33, transparent 70%)` }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider",
										style: {
											background: `${BRAND.green}18`,
											color: BRAND.greenDeep
										},
										children: b.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-semibold",
										style: { color: BRAND.textMute },
										children: ["Valor ", b.value]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 grid h-14 w-14 place-items-center rounded-2xl text-white",
									style: { background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.green})` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg font-bold",
									children: b.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed",
									style: { color: BRAND.textSoft },
									children: b.text
								})
							]
						})
					}, b.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-10 max-w-2xl rounded-2xl border p-5 text-center text-sm",
						style: {
							borderColor: `${BRAND.green}55`,
							background: `${BRAND.green}0d`,
							color: BRAND.text
						},
						children: [
							"Valor total dos bônus: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "line-through",
								style: { color: BRAND.textMute },
								children: "R$ 197"
							}),
							" ",
							"— ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: { color: BRAND.greenDeep },
								children: "hoje incluso gratuitamente"
							}),
							"."
						]
					})
				})
			]
		})
	});
}
function Avatar({ src, name }) {
	const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
	if (src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: name,
		loading: "lazy",
		className: "h-12 w-12 rounded-full object-cover",
		style: { border: `2px solid ${BRAND.border}` }
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-12 w-12 place-items-center rounded-full text-sm font-bold text-white",
		style: { background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.green})` },
		children: initials
	});
}
function Testimonials() {
	const list = [
		{
			name: "Carlos M.",
			role: "Empreendedor",
			img: testi_1_default,
			text: "Eu passava horas preso em pensamentos negativos. Hoje em poucos minutos consigo recuperar o foco e voltar ao trabalho."
		},
		{
			name: "Fernanda A.",
			role: "Designer",
			img: void 0,
			text: "O aplicativo virou meu botão de emergência emocional. Simplesmente funciona."
		},
		{
			name: "Ricardo S.",
			role: "Analista",
			img: testi_3_default,
			text: "Foi a primeira vez que consegui transformar pequenas ações em uma rotina consistente."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		style: { background: BRAND.bgSoft },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Histórias reais" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-3xl font-extrabold sm:text-4xl",
						children: [
							"Veja o que quem usa o Ressignifica ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rs-grad-text",
								children: "está dizendo"
							}),
							"."
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-3",
				children: list.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex h-full flex-col p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
								className: "h-6 w-6",
								style: { color: BRAND.blue }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex-1 text-[0.98rem] leading-relaxed",
								style: { color: BRAND.text },
								children: [
									"“",
									t.text,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										src: t.img,
										name: t.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate font-bold",
											children: t.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs",
											style: { color: BRAND.textMute },
											children: t.role
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "ml-auto flex",
										"aria-label": "5 estrelas",
										children: [
											0,
											1,
											2,
											3,
											4
										].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											className: "h-4 w-4 fill-current",
											style: { color: "#F59E0B" }
										}, s))
									})
								]
							})
						]
					})
				}, t.name))
			})]
		})
	});
}
function useCountdown(totalSeconds = 900) {
	const [left, setLeft] = (0, import_react.useState)(totalSeconds);
	(0, import_react.useEffect)(() => {
		if (left <= 0) return;
		const id = setInterval(() => setLeft((v) => Math.max(0, v - 1)), 1e3);
		return () => clearInterval(id);
	}, [left]);
	return {
		mm: Math.floor(left / 60).toString().padStart(2, "0"),
		ss: (left % 60).toString().padStart(2, "0")
	};
}
function Offer() {
	const { mm, ss } = useCountdown(900);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "offer",
		className: "relative overflow-hidden py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0",
				style: { background: `linear-gradient(180deg, ${BRAND.bg} 0%, ${BRAND.bgSoft} 100%)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0",
				style: { background: `radial-gradient(60% 40% at 50% 0%, ${BRAND.blue}22, transparent 70%)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						tone: "green",
						children: "Oferta por tempo limitado"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-3xl font-extrabold sm:text-4xl",
							children: [
								"Comece hoje. ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rs-grad-text",
									children: "Alívio já na primeira sessão"
								}),
								"."
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-10 overflow-hidden rounded-3xl border bg-white p-8 sm:p-10",
						style: {
							borderColor: BRAND.border,
							boxShadow: `0 30px 60px -20px ${BRAND.blue}55`
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 top-0 h-1.5",
								style: { background: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.green})` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "h-4 w-4",
									style: { color: BRAND.blueDeep }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider",
									style: { color: BRAND.textMute },
									children: "Esta oferta expira em"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeBox, {
										v: mm,
										label: "min"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl font-bold",
										style: { color: BRAND.textMute },
										children: ":"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeBox, {
										v: ss,
										label: "seg"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-sm",
										style: { color: BRAND.textMute },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "line-through",
												children: "De R$ 197"
											}),
											" ",
											"por apenas"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 flex items-end justify-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl font-bold",
												style: { color: BRAND.text },
												children: "R$"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-6xl font-extrabold leading-none",
												style: { color: BRAND.text },
												children: "47"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mb-1 text-lg font-bold",
												style: { color: BRAND.text },
												children: ",00"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 text-sm",
										style: { color: BRAND.textMute },
										children: [
											"ou 12x de ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: { color: BRAND.text },
												children: "R$ 4,90"
											}),
											" no cartão"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2",
								children: [
									"Aplicativo Ressignifica (acesso vitalício)",
									"Biblioteca completa de áudios e vídeos",
									"Dashboard e histórico emocional",
									"Upload dos seus próprios áudios e vídeos",
									"Todas as futuras atualizações",
									"Bônus #1 — Guia PDF 30 Microações",
									"Bônus #2 — 20 Áudios exclusivos",
									"Bônus #3 — Desafio de 7 dias"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm",
									style: { color: BRAND.text },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white",
										style: { background: BRAND.green },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "h-3 w-3",
											strokeWidth: 3
										})
									}), t]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
									full: true,
									children: "QUERO COMEÇAR AGORA"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs",
								style: { color: BRAND.textMute },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), " Pagamento seguro"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), " Compra protegida"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pix • Cartão • Parcelamento" })
								]
							})
						]
					})
				})]
			})
		]
	});
}
function TimeBox({ v, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-[72px] rounded-2xl px-4 py-3 text-center",
		style: {
			background: BRAND.text,
			color: "#fff",
			boxShadow: "0 10px 24px -12px rgba(15,23,42,0.5)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-3xl font-extrabold leading-none",
			children: v
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-[0.65rem] uppercase tracking-widest opacity-70",
			children: label
		})]
	});
}
function Guarantee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		style: { background: BRAND.bg },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl border p-8 sm:p-12",
				style: {
					borderColor: BRAND.border,
					background: BRAND.bgSoft
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute -right-16 -top-16 h-64 w-64 rounded-full",
					style: { background: `radial-gradient(circle, ${BRAND.green}33, transparent 70%)` }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid grid-cols-1 items-center gap-8 sm:grid-cols-[auto_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid h-32 w-32 place-items-center rounded-full text-white",
							style: {
								background: `linear-gradient(135deg, ${BRAND.green}, ${BRAND.greenDeep})`,
								boxShadow: `0 20px 40px -12px ${BRAND.green}88`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center leading-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[0.62rem] font-bold uppercase tracking-wider opacity-90",
										children: "Garantia"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-4xl font-extrabold",
										children: "7"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[0.62rem] font-bold uppercase tracking-wider opacity-90",
										children: "dias"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute inset-[-6px] rounded-full border-2",
								style: { borderColor: `${BRAND.green}55` }
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							tone: "green",
							children: "Risco zero"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-2xl font-extrabold sm:text-3xl",
							children: "Garantia incondicional de 7 dias"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-[0.98rem] leading-relaxed",
							style: { color: BRAND.textSoft },
							children: ["Experimente o Ressignifica por 7 dias completos. Se não sentir que o aplicativo ajudou você a recuperar o foco e interromper pensamentos negativos, basta solicitar o reembolso.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								style: { color: BRAND.text },
								children: " Sem perguntas. Sem burocracia. Reembolso integral."
							})]
						})
					] })]
				})]
			})
		})
	});
}
var FAQS = [
	{
		q: "O aplicativo funciona em Android e iPhone?",
		a: "Sim. Basta acessar pelo navegador ou instalar como aplicativo em qualquer celular moderno."
	},
	{
		q: "Preciso de internet?",
		a: "Sim, para sincronização e acesso aos conteúdos."
	},
	{
		q: "Posso adicionar meus próprios áudios?",
		a: "Sim. Você pode enviar seus próprios arquivos MP3 e M4A."
	},
	{
		q: "Posso cancelar quando quiser?",
		a: "Sim. Você possui garantia incondicional de 7 dias e cancelamento sem burocracia."
	},
	{
		q: "Em quanto tempo começo a perceber resultados?",
		a: "Muitos usuários relatam clareza e alívio já na primeira intervenção de poucos minutos."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		style: { background: BRAND.bgSoft },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Perguntas frequentes" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-extrabold sm:text-4xl",
						children: "Tudo o que você precisa saber."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-col gap-3",
				children: FAQS.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .04,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-2xl border bg-white transition-colors",
							style: { borderColor: isOpen ? BRAND.blue : BRAND.border },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpen(isOpen ? null : i),
								className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.98rem] font-semibold",
									style: { color: BRAND.text },
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform",
									style: {
										background: isOpen ? BRAND.blue : `${BRAND.blue}12`,
										color: isOpen ? "#fff" : BRAND.blueDeep,
										transform: isOpen ? "rotate(180deg)" : "rotate(0)"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: false,
								animate: {
									height: isOpen ? "auto" : 0,
									opacity: isOpen ? 1 : 0
								},
								transition: {
									duration: .3,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								style: { overflow: "hidden" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-5 pb-5 text-sm leading-relaxed",
									style: { color: BRAND.textSoft },
									children: f.a
								})
							})]
						})
					}, f.q);
				})
			})]
		})
	});
}
function FinalCTA({ onCta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		style: { background: BRAND.bg },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl p-10 text-center text-white sm:p-14",
				style: { background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.green})` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 rs-dot-grid opacity-30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-3xl font-extrabold sm:text-4xl",
							children: "Retome o controle da sua mente hoje."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-xl text-white/90",
							children: "A cada dia adiado, mais um ciclo de ansiedade, culpa e procrastinação. Interrompa isso agora."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								whileHover: { scale: 1.03 },
								whileTap: { scale: .97 },
								onClick: onCta,
								className: "inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold shadow-xl",
								style: { color: BRAND.blueDeep },
								children: ["Quero começar agora ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					]
				})]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t py-10",
		style: {
			borderColor: BRAND.border,
			background: BRAND.bg
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Logo_default,
						alt: "Ressignifica",
						className: "h-8 w-8 rounded-lg object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-bold",
						children: "Ressignifica"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-5 text-xs",
					style: { color: BRAND.textMute },
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs",
					style: { color: BRAND.textMute },
					children: "© 2026 Ressignifica"
				})
			]
		})
	});
}
var SplitComponent = AppsrePage;
//#endregion
export { SplitComponent as component };
