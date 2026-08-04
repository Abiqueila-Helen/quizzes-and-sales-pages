globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { a as toEventHandler, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4077e-DdZRO2M+UvaJMVDotf28EkCjR5w\"",
		"mtime": "2026-03-24T14:11:46.956Z",
		"size": 264062,
		"path": "../public/favicon.ico"
	},
	"/Logo-white.png": {
		"type": "image/png",
		"etag": "\"2b6a-i5T8uNNxLqdyf8FliFepFXCnbOw\"",
		"mtime": "2026-06-10T00:06:36.970Z",
		"size": 11114,
		"path": "../public/Logo-white.png"
	},
	"/Logo2.png": {
		"type": "image/png",
		"etag": "\"2b65-NjgsRG/GyImoBzZRJ5Qyb0uRakk\"",
		"mtime": "2026-06-09T23:58:32.388Z",
		"size": 11109,
		"path": "../public/Logo2.png"
	},
	"/Logo.png": {
		"type": "image/png",
		"etag": "\"155ed-0Swy+uQhUyd5BRLxSjhi6e6YZc4\"",
		"mtime": "2025-11-21T19:46:29.470Z",
		"size": 87533,
		"path": "../public/Logo.png"
	},
	"/assets/antes-depois-CM32NS16.jpg": {
		"type": "image/jpeg",
		"etag": "\"16338-XBATzXSOU1s91PSkarFVNPayhfg\"",
		"mtime": "2026-08-04T13:24:35.678Z",
		"size": 90936,
		"path": "../public/assets/antes-depois-CM32NS16.jpg"
	},
	"/assets/bonus-comunidade-C3vkRoIw.avif": {
		"type": "image/avif",
		"etag": "\"4328-t6YCrnAJcMk/EJOJ0eDXkHdJwmE\"",
		"mtime": "2026-08-04T13:24:35.679Z",
		"size": 17192,
		"path": "../public/assets/bonus-comunidade-C3vkRoIw.avif"
	},
	"/assets/appsre-obrigado-BTrIXVSG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"612-Hf2saiv7F29Ew3uREdFJvzMu89c\"",
		"mtime": "2026-08-04T13:24:35.670Z",
		"size": 1554,
		"path": "../public/assets/appsre-obrigado-BTrIXVSG.js"
	},
	"/assets/bonus-webinar-w5WbI-aL.avif": {
		"type": "image/avif",
		"etag": "\"88c5-GIyTW38YstbVc36Ntkpx7cXEutQ\"",
		"mtime": "2026-08-04T13:24:35.679Z",
		"size": 35013,
		"path": "../public/assets/bonus-webinar-w5WbI-aL.avif"
	},
	"/assets/appsre-Iauj6_-y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"964f-qta3j8VKXfNP6xcTsJTyzbaR7c8\"",
		"mtime": "2026-08-04T13:24:35.670Z",
		"size": 38479,
		"path": "../public/assets/appsre-Iauj6_-y.js"
	},
	"/assets/ciclo-wwVOrpdh.avif": {
		"type": "image/avif",
		"etag": "\"4074-wHU6iwF/fZqdq1UWHj+sEKuHdXc\"",
		"mtime": "2026-08-04T13:24:35.679Z",
		"size": 16500,
		"path": "../public/assets/ciclo-wwVOrpdh.avif"
	},
	"/assets/Daniela-jX2YN69T.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ef4-fD1ktdypMVKSS+rKNz9T9XAVim4\"",
		"mtime": "2026-08-04T13:24:35.677Z",
		"size": 7924,
		"path": "../public/assets/Daniela-jX2YN69T.jpg"
	},
	"/assets/deco-hero-DzOQOP_5.png": {
		"type": "image/png",
		"etag": "\"fb28-j19WwGRHXUDGSZw56tAADicJHjI\"",
		"mtime": "2026-08-04T13:24:35.680Z",
		"size": 64296,
		"path": "../public/assets/deco-hero-DzOQOP_5.png"
	},
	"/assets/Fernanda-CPFDmNng.jpg": {
		"type": "image/jpeg",
		"etag": "\"2214-TjoTYhvKhRfct1djApdbCISE6NI\"",
		"mtime": "2026-08-04T13:24:35.677Z",
		"size": 8724,
		"path": "../public/assets/Fernanda-CPFDmNng.jpg"
	},
	"/assets/hands-BsDN2vyS.png": {
		"type": "image/png",
		"etag": "\"2b51-s5XYtJA9rBYcU1tCkvmYLXMPm1Y\"",
		"mtime": "2026-08-04T13:24:35.680Z",
		"size": 11089,
		"path": "../public/assets/hands-BsDN2vyS.png"
	},
	"/assets/button-L9pNThCA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75d6-qx0MHC2HmUiAXk6Htl9ivsv5p5A\"",
		"mtime": "2026-08-04T13:24:35.670Z",
		"size": 30166,
		"path": "../public/assets/button-L9pNThCA.js"
	},
	"/assets/hero-Dcf32M4q.jpg": {
		"type": "image/jpeg",
		"etag": "\"e9d2-1zBZgv9Ncsuf+To1g352Zxan4fQ\"",
		"mtime": "2026-08-04T13:24:35.680Z",
		"size": 59858,
		"path": "../public/assets/hero-Dcf32M4q.jpg"
	},
	"/assets/fileRoute-DEUCKY8n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1238-vMjbpBBwHWShBdsUQtoaDbhdKR4\"",
		"mtime": "2026-08-04T13:24:35.671Z",
		"size": 4664,
		"path": "../public/assets/fileRoute-DEUCKY8n.js"
	},
	"/assets/index-3Sk4Izfl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e914-WL7S96Fbv6W2hUW0fFTJNocTObs\"",
		"mtime": "2026-08-04T13:24:35.666Z",
		"size": 321812,
		"path": "../public/assets/index-3Sk4Izfl.js"
	},
	"/assets/mockup-DtadlHOq.jpg": {
		"type": "image/jpeg",
		"etag": "\"df3f-qbpIXs5OPb5F5CBLOsO1PSWG90E\"",
		"mtime": "2026-08-04T13:24:35.682Z",
		"size": 57151,
		"path": "../public/assets/mockup-DtadlHOq.jpg"
	},
	"/assets/Logo-CEZ_QuOe.png": {
		"type": "image/png",
		"etag": "\"155ed-0Swy+uQhUyd5BRLxSjhi6e6YZc4\"",
		"mtime": "2026-08-04T13:24:35.677Z",
		"size": 87533,
		"path": "../public/assets/Logo-CEZ_QuOe.png"
	},
	"/assets/mok01-BReIQGjl.avif": {
		"type": "image/avif",
		"etag": "\"482b-vqGBQd5U+7kaBTPEjPiVmpiRTWk\"",
		"mtime": "2026-08-04T13:24:35.682Z",
		"size": 18475,
		"path": "../public/assets/mok01-BReIQGjl.avif"
	},
	"/assets/mok02-DGNKLdV7.avif": {
		"type": "image/avif",
		"etag": "\"4e1b-1zxDa4cW4xrB/US1ttOOtLhDsj4\"",
		"mtime": "2026-08-04T13:24:35.682Z",
		"size": 19995,
		"path": "../public/assets/mok02-DGNKLdV7.avif"
	},
	"/assets/jornada-de-honra-pSwpd3yk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe2-VDgv0W6tkv1fOATPIvoBbe1oxCQ\"",
		"mtime": "2026-08-04T13:24:35.671Z",
		"size": 4066,
		"path": "../public/assets/jornada-de-honra-pSwpd3yk.js"
	},
	"/assets/link-GbiKc79j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b9e-KYN+dg9h9b7XSaK+CxVjPE3E27M\"",
		"mtime": "2026-08-04T13:24:35.672Z",
		"size": 23454,
		"path": "../public/assets/link-GbiKc79j.js"
	},
	"/assets/hero-mockup-BRrUpKR-.png": {
		"type": "image/png",
		"etag": "\"f6dd5-4IPnD6PbqwW0t+G3t2n4cIU5Pqo\"",
		"mtime": "2026-08-04T13:24:35.681Z",
		"size": 1011157,
		"path": "../public/assets/hero-mockup-BRrUpKR-.png"
	},
	"/assets/mok03-U-IZKLZM.avif": {
		"type": "image/avif",
		"etag": "\"4330-PyQEUi+G5KMoesKiCl49WpnBSAI\"",
		"mtime": "2026-08-04T13:24:35.682Z",
		"size": 17200,
		"path": "../public/assets/mok03-U-IZKLZM.avif"
	},
	"/assets/mok04-Dna5mhNv.avif": {
		"type": "image/avif",
		"etag": "\"3bf2-sti6yTasNjbZ2q9mWQvF7gKLvFg\"",
		"mtime": "2026-08-04T13:24:35.683Z",
		"size": 15346,
		"path": "../public/assets/mok04-Dna5mhNv.avif"
	},
	"/assets/mok05-CjXHQFLF.avif": {
		"type": "image/avif",
		"etag": "\"5156-1QUN+6Q0sSLMFZxblv7v/AxeZLA\"",
		"mtime": "2026-08-04T13:24:35.683Z",
		"size": 20822,
		"path": "../public/assets/mok05-CjXHQFLF.avif"
	},
	"/assets/mok06-D61zMPhD.avif": {
		"type": "image/avif",
		"etag": "\"4ee0-Ju4+6RZtpmRzoW4fOJw+QtLhQuY\"",
		"mtime": "2026-08-04T13:24:35.684Z",
		"size": 20192,
		"path": "../public/assets/mok06-D61zMPhD.avif"
	},
	"/assets/mok07-Ciry7Qce.avif": {
		"type": "image/avif",
		"etag": "\"97fd-GEuoX6aEjacqmhjKKs+MqAgnv5Q\"",
		"mtime": "2026-08-04T13:24:35.684Z",
		"size": 38909,
		"path": "../public/assets/mok07-Ciry7Qce.avif"
	},
	"/assets/mok08-1OqH-CHF.avif": {
		"type": "image/avif",
		"etag": "\"5ee6-jbp/+cYxijIGHCsx6tt1J8QhvVc\"",
		"mtime": "2026-08-04T13:24:35.685Z",
		"size": 24294,
		"path": "../public/assets/mok08-1OqH-CHF.avif"
	},
	"/assets/mok09-CzeAjxff.avif": {
		"type": "image/avif",
		"etag": "\"1e1d-Agsvz0aGT3o2053oG5gps6h5WXw\"",
		"mtime": "2026-08-04T13:24:35.685Z",
		"size": 7709,
		"path": "../public/assets/mok09-CzeAjxff.avif"
	},
	"/assets/para-quem-BEbbknBt.jpg": {
		"type": "image/jpeg",
		"etag": "\"18518-VKGgEbjJaCzLdtnM14JKoIGyggw\"",
		"mtime": "2026-08-04T13:24:35.685Z",
		"size": 99608,
		"path": "../public/assets/para-quem-BEbbknBt.jpg"
	},
	"/assets/preload-helper-Czpn1I53.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ac-sE+5KsaRXTMfwOfrOATQajMSGV4\"",
		"mtime": "2026-08-04T13:24:35.672Z",
		"size": 1196,
		"path": "../public/assets/preload-helper-Czpn1I53.js"
	},
	"/assets/politica-de-privacidade-CA4b49LK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1807-Zonnis04LxqGoYwoJ7Bm/fyMxv0\"",
		"mtime": "2026-08-04T13:24:35.672Z",
		"size": 6151,
		"path": "../public/assets/politica-de-privacidade-CA4b49LK.js"
	},
	"/assets/ressignifica-app-sell-DIclTL6P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18e1-/gwE7hGn7+zghe1m1uiAFN4pmSA\"",
		"mtime": "2026-08-04T13:24:35.673Z",
		"size": 6369,
		"path": "../public/assets/ressignifica-app-sell-DIclTL6P.js"
	},
	"/assets/Ricardo-FsMybVYy.jpg": {
		"type": "image/jpeg",
		"etag": "\"11e6-r1hDjjTp8jUZKgSDYSrfFTCeJXo\"",
		"mtime": "2026-08-04T13:24:35.678Z",
		"size": 4582,
		"path": "../public/assets/Ricardo-FsMybVYy.jpg"
	},
	"/assets/Ricardo-CtRhEdEo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d4-BsJUALi1IxcLFLmEXUFjO2ewPOQ\"",
		"mtime": "2026-08-04T13:24:35.667Z",
		"size": 724,
		"path": "../public/assets/Ricardo-CtRhEdEo.js"
	},
	"/assets/ressignifica-app-sell-pie-0xBcbwIt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1256-YV3YmxWZdTSHLhwd+r418OovPyk\"",
		"mtime": "2026-08-04T13:24:35.673Z",
		"size": 4694,
		"path": "../public/assets/ressignifica-app-sell-pie-0xBcbwIt.js"
	},
	"/assets/rolldown-runtime-B0Z9INg1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"385-vn6fLblvytQt1hv6CJ89eGYvXrc\"",
		"mtime": "2026-08-04T13:24:35.674Z",
		"size": 901,
		"path": "../public/assets/rolldown-runtime-B0Z9INg1.js"
	},
	"/assets/Sections-Cc5c8Xzr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47b5-rSesezDfpDQRV4YRcml21m+Jtqg\"",
		"mtime": "2026-08-04T13:24:35.667Z",
		"size": 18357,
		"path": "../public/assets/Sections-Cc5c8Xzr.js"
	},
	"/assets/SectionsBottom-CTQbEZXU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4584-9t5OYyU4onzCnlo83iY27qkXOU8\"",
		"mtime": "2026-08-04T13:24:35.668Z",
		"size": 17796,
		"path": "../public/assets/SectionsBottom-CTQbEZXU.js"
	},
	"/assets/sun-xzwx8LmK.png": {
		"type": "image/png",
		"etag": "\"1a7d-KWdyhsdyQ7kIndCOvh5JwW9u4fw\"",
		"mtime": "2026-08-04T13:24:35.686Z",
		"size": 6781,
		"path": "../public/assets/sun-xzwx8LmK.png"
	},
	"/assets/SectionsTop-CLiug7r6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"377a-KN5ksRDadruYhQvA21ZAa8lskNA\"",
		"mtime": "2026-08-04T13:24:35.668Z",
		"size": 14202,
		"path": "../public/assets/SectionsTop-CLiug7r6.js"
	},
	"/assets/termos-de-uso-N5vWyLhy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ffd-xGBrYfItKo24thArwVpHA8brrUA\"",
		"mtime": "2026-08-04T13:24:35.674Z",
		"size": 8189,
		"path": "../public/assets/termos-de-uso-N5vWyLhy.js"
	},
	"/assets/transformacao-mECemVJs.avif": {
		"type": "image/avif",
		"etag": "\"3fb6-3/f5Dj/Qk7Vf2rVnAJag0xLPVPY\"",
		"mtime": "2026-08-04T13:24:35.686Z",
		"size": 16310,
		"path": "../public/assets/transformacao-mECemVJs.avif"
	},
	"/assets/theme-DZIxaUBM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20f-I9XT8irNT1a5ipeFCAZOEqC2G8A\"",
		"mtime": "2026-08-04T13:24:35.674Z",
		"size": 527,
		"path": "../public/assets/theme-DZIxaUBM.js"
	},
	"/assets/tree-Bx8Fnw94.avif": {
		"type": "image/avif",
		"etag": "\"100b-jEM+fJmCIgVNo727ySTqaRB7BB8\"",
		"mtime": "2026-08-04T13:24:35.686Z",
		"size": 4107,
		"path": "../public/assets/tree-Bx8Fnw94.avif"
	},
	"/assets/styles-DYgQkrUq.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18a0e-FOlo8Gh31/eN8FhUvhLUxrb52eM\"",
		"mtime": "2026-08-04T13:24:35.685Z",
		"size": 100878,
		"path": "../public/assets/styles-DYgQkrUq.css"
	},
	"/assets/ui-C8Uz8zJd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b38-rnmK1d6zuVvrym1Y+02sFzgHJeg\"",
		"mtime": "2026-08-04T13:24:35.675Z",
		"size": 2872,
		"path": "../public/assets/ui-C8Uz8zJd.js"
	},
	"/assets/vendor-carousel-BQRV-W2u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"70db-olqlHGHbagvevq5JPEAAQIp5EMM\"",
		"mtime": "2026-08-04T13:24:35.675Z",
		"size": 28891,
		"path": "../public/assets/vendor-carousel-BQRV-W2u.js"
	},
	"/assets/vendor-lightbox-Du3uL6IP.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14c8-+2TMGaAxSsLQ006SytZkhj/elO0\"",
		"mtime": "2026-08-04T13:24:35.686Z",
		"size": 5320,
		"path": "../public/assets/vendor-lightbox-Du3uL6IP.css"
	},
	"/assets/vendor-lightbox-DQXux2b7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"794d-edV3BNZ8b0SQou5lADbgM4D+gxk\"",
		"mtime": "2026-08-04T13:24:35.676Z",
		"size": 31053,
		"path": "../public/assets/vendor-lightbox-DQXux2b7.js"
	},
	"/assets/vendor-lucide-Crz-vuIw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e06-uTbis8+mvSAPxgdf2RTz0r6Te5Q\"",
		"mtime": "2026-08-04T13:24:35.676Z",
		"size": 11782,
		"path": "../public/assets/vendor-lucide-Crz-vuIw.js"
	},
	"/assets/vendor-framer-C9kjfo0H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ec79-kzw5JrEVqSGONUxmRhIuAcerVHE\"",
		"mtime": "2026-08-04T13:24:35.676Z",
		"size": 126073,
		"path": "../public/assets/vendor-framer-C9kjfo0H.js"
	},
	"/assets/vendor-ui-B_21CMBN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b5e-lDsN0q0cd1O4el/619PDU2kSBy0\"",
		"mtime": "2026-08-04T13:24:35.676Z",
		"size": 2910,
		"path": "../public/assets/vendor-ui-B_21CMBN.js"
	},
	"/jornada-de-honra/ac-pratica.svg": {
		"type": "image/svg+xml",
		"etag": "\"7f14-UWkEBtvoB8HMRIGHTUkaMWH0yeU\"",
		"mtime": "2026-07-18T14:54:30.278Z",
		"size": 32532,
		"path": "../public/jornada-de-honra/ac-pratica.svg"
	},
	"/jornada-de-honra/presencial-ac.svg": {
		"type": "image/svg+xml",
		"etag": "\"929e-aZOUKwM35me8/Cfo/r3/MbfLzhY\"",
		"mtime": "2026-07-18T14:54:30.280Z",
		"size": 37534,
		"path": "../public/jornada-de-honra/presencial-ac.svg"
	},
	"/jornada-de-honra/jornada-de-honra.svg": {
		"type": "image/svg+xml",
		"etag": "\"2b910-lICcoqs/xq7WNaPkb3d3fbruxC4\"",
		"mtime": "2026-07-18T14:54:30.280Z",
		"size": 178448,
		"path": "../public/jornada-de-honra/jornada-de-honra.svg"
	},
	"/jornada-de-honra/workshop-ia.svg": {
		"type": "image/svg+xml",
		"etag": "\"7aee-xKJpBlz2uTy3JOpj/8fqsQWgRcM\"",
		"mtime": "2026-07-18T14:54:30.281Z",
		"size": 31470,
		"path": "../public/jornada-de-honra/workshop-ia.svg"
	},
	"/jornada-de-honra/Thumb-Bio-Jornada-de-Honra.webp": {
		"type": "image/webp",
		"etag": "\"2b910-lICcoqs/xq7WNaPkb3d3fbruxC4\"",
		"mtime": "2026-07-18T14:54:30.277Z",
		"size": 178448,
		"path": "../public/jornada-de-honra/Thumb-Bio-Jornada-de-Honra.webp"
	},
	"/assets/_slug-C-yG630L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d22b-YNBhF4Fo5nFd14K0ennGK7XRPrU\"",
		"mtime": "2026-08-04T13:24:35.669Z",
		"size": 53803,
		"path": "../public/assets/_slug-C-yG630L.js"
	},
	"/assets/_slug-DFa8BVvd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5be6-T4T4Ab7Y1bj98sLGEEzWewXghOM\"",
		"mtime": "2026-08-04T13:24:35.669Z",
		"size": 23526,
		"path": "../public/assets/_slug-DFa8BVvd.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_ojVsnv = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_ojVsnv
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
