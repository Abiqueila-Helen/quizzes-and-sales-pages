import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-BkG05R2I.js
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
//#endregion
export { Reveal as a, useCountdown as c, Card as i, CHECKOUT as n, SectionTitle as o, CTA as r, go as s, BRAND as t };
