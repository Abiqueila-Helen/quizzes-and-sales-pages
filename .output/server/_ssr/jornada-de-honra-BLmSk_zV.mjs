import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { m as Instagram, t as Youtube, u as MessageCircleMore } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jornada-de-honra-BLmSk_zV.js
var import_jsx_runtime = require_jsx_runtime();
var cards = [
	{
		title: "BLACK EXPERT",
		href: "https://talitaamarques.com.br/black-expert/",
		image: "/jornada-de-honra/jornada-de-honra.svg",
		cta: "QUERO ACESSAR O BLACK EXPERT"
	},
	{
		title: "JORNADA DE HONRA",
		href: "https://talitaamarques.com.br/jornada-honra/",
		image: "/jornada-de-honra/jornada-de-honra.svg",
		cta: "QUERO ENTRAR NA JORNADA"
	},
	{
		title: "AC PRÁTICA",
		href: "https://talitaamarques.com.br/ac-pratica/",
		image: "/jornada-de-honra/ac-pratica.svg",
		cta: "QUERO VER A AC PRÁTICA"
	},
	{
		title: "WORKSHOP IA PARA MENTORAS",
		href: "https://talitaamarques.com.br/workshop-conteudo-para-mentoras-com-ia/",
		image: "/jornada-de-honra/workshop-ia.svg",
		cta: "QUERO O WORKSHOP"
	},
	{
		title: "PRESENCIAL AC",
		href: "https://talitaamarques.com.br/presencial-ac/",
		image: "/jornada-de-honra/presencial-ac.svg",
		cta: "QUERO O PRESENCIAL"
	},
	{
		title: "LUCRAR COM TICKET BAIXO",
		href: "https://talitaamarques.com.br/lctb/",
		image: "/jornada-de-honra/jornada-de-honra.svg",
		cta: "QUERO LUCRAR COM TICKET BAIXO"
	},
	{
		title: "FATURAR COM O FUNIL",
		href: "https://talitaamarques.com.br/3k-semana-c-infoprodutos/",
		image: "/jornada-de-honra/jornada-de-honra.svg",
		cta: "QUERO O FATURAR COM O FUNIL"
	},
	{
		title: "MENTORIAS 10K",
		href: "https://talitaamarques.com.br/mentora-10k",
		image: "/jornada-de-honra/jornada-de-honra.svg",
		cta: "QUERO FATURAR COM MENTORIAS"
	}
];
function JornadaDeHonraPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7efe3] text-[#24160f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto flex w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-4 sm:grid-cols-2",
				children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: card.href,
					target: "_blank",
					rel: "noreferrer",
					className: "group overflow-hidden rounded-[1.75rem] border border-[#e3d5bc] bg-white shadow-[0_20px_45px_rgba(36,22,15,0.08)] transition duration-200 hover:-translate-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: card.image,
						alt: card.title,
						className: "aspect-[16/9] w-full object-cover",
						loading: "eager"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-[#f7efe3] p-4 text-center sm:p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex rounded-full bg-[#b9833b] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white",
							children: card.cta
						})
					})]
				}, card.href))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "border-t border-[#e3d5bc] bg-[#2d2017] px-4 py-10 text-center text-[#f8ebdc] sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-3xl flex-col items-center gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold sm:text-3xl",
						children: "Faça parte da nossa comunidade!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.instagram.com/atalitamarques",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram",
								className: "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://api.whatsapp.com/send/?phone=5527992739429",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Whatsapp",
								className: "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleMore, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.youtube.com/@ATalitaMarques",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "YouTube",
								className: "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-5 w-5" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[#e7d4ba]",
						children: "Viver de Infoprodutos - Talita Marques © 2021"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[#e7d4ba]",
						children: "E-mail: suporte@talitasouzamarques.com.br"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://talitasouzamarques.com.br/politica-de-privacidade/",
						className: "text-sm text-[#f8ebdc] underline decoration-white/30 underline-offset-4",
						children: "Termos de Uso | Política de Privacidade"
					})
				]
			})
		})]
	});
}
var SplitComponent = JornadaDeHonraPage;
//#endregion
export { SplitComponent as component };
