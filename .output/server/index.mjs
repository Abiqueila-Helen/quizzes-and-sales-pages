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
	"/Logo-white.png": {
		"type": "image/png",
		"etag": "\"2b6a-i5T8uNNxLqdyf8FliFepFXCnbOw\"",
		"mtime": "2026-06-10T00:06:36.970Z",
		"size": 11114,
		"path": "../public/Logo-white.png"
	},
	"/Logo.png": {
		"type": "image/png",
		"etag": "\"155ed-0Swy+uQhUyd5BRLxSjhi6e6YZc4\"",
		"mtime": "2025-11-21T19:46:29.470Z",
		"size": 87533,
		"path": "../public/Logo.png"
	},
	"/Logo2.png": {
		"type": "image/png",
		"etag": "\"2b65-NjgsRG/GyImoBzZRJ5Qyb0uRakk\"",
		"mtime": "2026-06-09T23:58:32.388Z",
		"size": 11109,
		"path": "../public/Logo2.png"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4077e-DdZRO2M+UvaJMVDotf28EkCjR5w\"",
		"mtime": "2026-03-24T14:11:46.956Z",
		"size": 264062,
		"path": "../public/favicon.ico"
	},
	"/assets/antes-depois-CM32NS16.jpg": {
		"type": "image/jpeg",
		"etag": "\"16338-XBATzXSOU1s91PSkarFVNPayhfg\"",
		"mtime": "2026-07-31T20:43:53.469Z",
		"size": 90936,
		"path": "../public/assets/antes-depois-CM32NS16.jpg"
	},
	"/assets/appsre-obrigado-DffzpFhm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"60b-nAa4jWj2ANA0zZPvYft69pGQhqY\"",
		"mtime": "2026-07-31T20:43:53.451Z",
		"size": 1547,
		"path": "../public/assets/appsre-obrigado-DffzpFhm.js"
	},
	"/assets/appsre-GPsZ8_4M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a095-0KjdGmJdBxaRnr1kEhI0nXXiYBs\"",
		"mtime": "2026-07-31T20:43:53.451Z",
		"size": 41109,
		"path": "../public/assets/appsre-GPsZ8_4M.js"
	},
	"/assets/bonus-comunidade-C3vkRoIw.avif": {
		"type": "image/avif",
		"etag": "\"4328-t6YCrnAJcMk/EJOJ0eDXkHdJwmE\"",
		"mtime": "2026-07-31T20:43:53.469Z",
		"size": 17192,
		"path": "../public/assets/bonus-comunidade-C3vkRoIw.avif"
	},
	"/assets/bonus-webinar-w5WbI-aL.avif": {
		"type": "image/avif",
		"etag": "\"88c5-GIyTW38YstbVc36Ntkpx7cXEutQ\"",
		"mtime": "2026-07-31T20:43:53.469Z",
		"size": 35013,
		"path": "../public/assets/bonus-webinar-w5WbI-aL.avif"
	},
	"/assets/chevron-down-BFrOMcKd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"80-Q5AM9gpda82k5ZdluD6JaxvIpDg\"",
		"mtime": "2026-07-31T20:43:53.451Z",
		"size": 128,
		"path": "../public/assets/chevron-down-BFrOMcKd.js"
	},
	"/assets/button-D-nTmaqB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8068-jiJPJ97QSDhx39t8wqHjkufNayA\"",
		"mtime": "2026-07-31T20:43:53.451Z",
		"size": 32872,
		"path": "../public/assets/button-D-nTmaqB.js"
	},
	"/assets/createLucideIcon-BSmofTXP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-8vDRVsAUkUOVhQsMsu/Glj8EMzI\"",
		"mtime": "2026-07-31T20:43:53.451Z",
		"size": 1195,
		"path": "../public/assets/createLucideIcon-BSmofTXP.js"
	},
	"/assets/ciclo-wwVOrpdh.avif": {
		"type": "image/avif",
		"etag": "\"4074-wHU6iwF/fZqdq1UWHj+sEKuHdXc\"",
		"mtime": "2026-07-31T20:43:53.469Z",
		"size": 16500,
		"path": "../public/assets/ciclo-wwVOrpdh.avif"
	},
	"/assets/Daniela-jX2YN69T.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ef4-fD1ktdypMVKSS+rKNz9T9XAVim4\"",
		"mtime": "2026-07-31T20:43:53.465Z",
		"size": 7924,
		"path": "../public/assets/Daniela-jX2YN69T.jpg"
	},
	"/assets/Fernanda-CPFDmNng.jpg": {
		"type": "image/jpeg",
		"etag": "\"2214-TjoTYhvKhRfct1djApdbCISE6NI\"",
		"mtime": "2026-07-31T20:43:53.465Z",
		"size": 8724,
		"path": "../public/assets/Fernanda-CPFDmNng.jpg"
	},
	"/assets/fileRoute-Bo7q35Wh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11df-xPK08qlk1EQe6VmrvI2YIEtSZp8\"",
		"mtime": "2026-07-31T20:43:53.461Z",
		"size": 4575,
		"path": "../public/assets/fileRoute-Bo7q35Wh.js"
	},
	"/assets/hands-BsDN2vyS.png": {
		"type": "image/png",
		"etag": "\"2b51-s5XYtJA9rBYcU1tCkvmYLXMPm1Y\"",
		"mtime": "2026-07-31T20:43:53.469Z",
		"size": 11089,
		"path": "../public/assets/hands-BsDN2vyS.png"
	},
	"/assets/deco-hero-DzOQOP_5.png": {
		"type": "image/png",
		"etag": "\"fb28-j19WwGRHXUDGSZw56tAADicJHjI\"",
		"mtime": "2026-07-31T20:43:53.469Z",
		"size": 64296,
		"path": "../public/assets/deco-hero-DzOQOP_5.png"
	},
	"/assets/hero-Dcf32M4q.jpg": {
		"type": "image/jpeg",
		"etag": "\"e9d2-1zBZgv9Ncsuf+To1g352Zxan4fQ\"",
		"mtime": "2026-07-31T20:43:53.469Z",
		"size": 59858,
		"path": "../public/assets/hero-Dcf32M4q.jpg"
	},
	"/assets/index-Qh85E3mt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e84c-P09unQCALZMT0+9Z7XycqoQExCM\"",
		"mtime": "2026-07-31T20:43:53.451Z",
		"size": 321612,
		"path": "../public/assets/index-Qh85E3mt.js"
	},
	"/assets/jornada-de-honra-C5cV7cN3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12ec-49lqoWlQgthabpjkokgiSm2A3VQ\"",
		"mtime": "2026-07-31T20:43:53.461Z",
		"size": 4844,
		"path": "../public/assets/jornada-de-honra-C5cV7cN3.js"
	},
	"/assets/link-DjatesvC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b49-egGv20pyYkjDYc37tB5cbnO+rdM\"",
		"mtime": "2026-07-31T20:43:53.463Z",
		"size": 23369,
		"path": "../public/assets/link-DjatesvC.js"
	},
	"/assets/jsx-runtime-B5yqYJvp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2226-XsrmBuwhkbXf60BH0d4803yDfiE\"",
		"mtime": "2026-07-31T20:43:53.462Z",
		"size": 8742,
		"path": "../public/assets/jsx-runtime-B5yqYJvp.js"
	},
	"/assets/Logo-CEZ_QuOe.png": {
		"type": "image/png",
		"etag": "\"155ed-0Swy+uQhUyd5BRLxSjhi6e6YZc4\"",
		"mtime": "2026-07-31T20:43:53.465Z",
		"size": 87533,
		"path": "../public/assets/Logo-CEZ_QuOe.png"
	},
	"/assets/hero-mockup-BRrUpKR-.png": {
		"type": "image/png",
		"etag": "\"f6dd5-4IPnD6PbqwW0t+G3t2n4cIU5Pqo\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 1011157,
		"path": "../public/assets/hero-mockup-BRrUpKR-.png"
	},
	"/assets/mockup-DtadlHOq.jpg": {
		"type": "image/jpeg",
		"etag": "\"df3f-qbpIXs5OPb5F5CBLOsO1PSWG90E\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 57151,
		"path": "../public/assets/mockup-DtadlHOq.jpg"
	},
	"/assets/mok01-D-FFaEID.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c629-cBHu/dmw6yt4Nd50Rx3ZzPWbwpw\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 116265,
		"path": "../public/assets/mok01-D-FFaEID.jpg"
	},
	"/assets/mok02-BPOgHwav.jpg": {
		"type": "image/jpeg",
		"etag": "\"2188a-bi3hy7JbKt01AHDzX5xL2nWNnhU\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 137354,
		"path": "../public/assets/mok02-BPOgHwav.jpg"
	},
	"/assets/mok03-DAf-0ugj.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a323-NxpZynWnCeOv0wL+0WvjyVqFSt0\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 107299,
		"path": "../public/assets/mok03-DAf-0ugj.jpg"
	},
	"/assets/mok04-DEu0M3k5.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dc15-isSCifJzsncoDMAHT+7mHHqSnSY\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 121877,
		"path": "../public/assets/mok04-DEu0M3k5.jpg"
	},
	"/assets/mok05-nleNJcpk.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a7bd-GSTYLkvNK0if7zHidXqOx4THuoM\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 108477,
		"path": "../public/assets/mok05-nleNJcpk.jpg"
	},
	"/assets/mok06-BoxnKUKo.jpg": {
		"type": "image/jpeg",
		"etag": "\"24a2b-6scUALfROEFAAx5iYTqbZ0HoKGc\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 150059,
		"path": "../public/assets/mok06-BoxnKUKo.jpg"
	},
	"/assets/mok07-DU36nfep.jpg": {
		"type": "image/jpeg",
		"etag": "\"31cce-T7cZEWYWtMJfdVlIC+p1woQ/Cbc\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 203982,
		"path": "../public/assets/mok07-DU36nfep.jpg"
	},
	"/assets/mok08-DCkUsTkj.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b4ca-80AQ9CuEpO9ltkwolebnnLumnTM\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 111818,
		"path": "../public/assets/mok08-DCkUsTkj.jpg"
	},
	"/assets/mok09-BMFyJdfO.jpg": {
		"type": "image/jpeg",
		"etag": "\"18cc7-DUoC6HhotIW37wfw/d2rDLSYEb8\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 101575,
		"path": "../public/assets/mok09-BMFyJdfO.jpg"
	},
	"/assets/mok10-BaUl_rrg.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aa68-dX1B/7qEaHbfvSWN94UGTzxgpi8\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 109160,
		"path": "../public/assets/mok10-BaUl_rrg.jpg"
	},
	"/assets/politica-de-privacidade-yS7PSWpV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1800-uXwwnRFXZcPSZpCq4zMM6kFLmHg\"",
		"mtime": "2026-07-31T20:43:53.463Z",
		"size": 6144,
		"path": "../public/assets/politica-de-privacidade-yS7PSWpV.js"
	},
	"/assets/para-quem-BEbbknBt.jpg": {
		"type": "image/jpeg",
		"etag": "\"18518-VKGgEbjJaCzLdtnM14JKoIGyggw\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 99608,
		"path": "../public/assets/para-quem-BEbbknBt.jpg"
	},
	"/assets/react-dom-DjQW_1RK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dda-unTAmSURc9O2+D61NrhA5/rItfU\"",
		"mtime": "2026-07-31T20:43:53.463Z",
		"size": 3546,
		"path": "../public/assets/react-dom-DjQW_1RK.js"
	},
	"/assets/ressignifica-app-sell-CwXn-2Tm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a314-LZWjWBJiflmBGV2zlA+/o164eKE\"",
		"mtime": "2026-07-31T20:43:53.464Z",
		"size": 41748,
		"path": "../public/assets/ressignifica-app-sell-CwXn-2Tm.js"
	},
	"/assets/ressignifica-app-sell-pie-Cqera4F2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b77-MbbNBDYzbNrMkF3eUUB19/tFA2E\"",
		"mtime": "2026-07-31T20:43:53.464Z",
		"size": 19319,
		"path": "../public/assets/ressignifica-app-sell-pie-Cqera4F2.js"
	},
	"/assets/Ricardo-CBN1YdlJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c76b-wm99RfOMB2H2d2PPTTcI2S4gK0Y\"",
		"mtime": "2026-07-31T20:43:53.451Z",
		"size": 51051,
		"path": "../public/assets/Ricardo-CBN1YdlJ.js"
	},
	"/assets/Ricardo-Du3uL6IP.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14c8-+2TMGaAxSsLQ006SytZkhj/elO0\"",
		"mtime": "2026-07-31T20:43:53.465Z",
		"size": 5320,
		"path": "../public/assets/Ricardo-Du3uL6IP.css"
	},
	"/assets/Ricardo-FsMybVYy.jpg": {
		"type": "image/jpeg",
		"etag": "\"11e6-r1hDjjTp8jUZKgSDYSrfFTCeJXo\"",
		"mtime": "2026-07-31T20:43:53.465Z",
		"size": 4582,
		"path": "../public/assets/Ricardo-FsMybVYy.jpg"
	},
	"/assets/shield-check-CJR-qjua.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"187-7xDUY7R1nZBpyYwDt6TjtKQNh90\"",
		"mtime": "2026-07-31T20:43:53.464Z",
		"size": 391,
		"path": "../public/assets/shield-check-CJR-qjua.js"
	},
	"/assets/styles-D4RrEvxl.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"189d8-WWbVWK5HYPAFUR9WdQmCUAlP694\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 100824,
		"path": "../public/assets/styles-D4RrEvxl.css"
	},
	"/assets/sun-xzwx8LmK.png": {
		"type": "image/png",
		"etag": "\"1a7d-KWdyhsdyQ7kIndCOvh5JwW9u4fw\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 6781,
		"path": "../public/assets/sun-xzwx8LmK.png"
	},
	"/assets/target-CQ8dvmEi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-qwXiXXC4AwDAvnAdHVZ+dgD7i3g\"",
		"mtime": "2026-07-31T20:43:53.465Z",
		"size": 226,
		"path": "../public/assets/target-CQ8dvmEi.js"
	},
	"/assets/termos-de-uso-BvdCOu0a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ff6-G/5Qx93WOQa73tIa2s/OeevT/zU\"",
		"mtime": "2026-07-31T20:43:53.465Z",
		"size": 8182,
		"path": "../public/assets/termos-de-uso-BvdCOu0a.js"
	},
	"/assets/titulo01-a6ainNey.avif": {
		"type": "image/avif",
		"etag": "\"ecbb-HX4kbe9PwFa+mIehKrci6BhJNCg\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 60603,
		"path": "../public/assets/titulo01-a6ainNey.avif"
	},
	"/assets/transformacao-mECemVJs.avif": {
		"type": "image/avif",
		"etag": "\"3fb6-3/f5Dj/Qk7Vf2rVnAJag0xLPVPY\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 16310,
		"path": "../public/assets/transformacao-mECemVJs.avif"
	},
	"/assets/tree-Bx8Fnw94.avif": {
		"type": "image/avif",
		"etag": "\"100b-jEM+fJmCIgVNo727ySTqaRB7BB8\"",
		"mtime": "2026-07-31T20:43:53.471Z",
		"size": 4107,
		"path": "../public/assets/tree-Bx8Fnw94.avif"
	},
	"/assets/x-BXMh1pg9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"296-SoKhMF60bVq5P7EefAZHz3grMfg\"",
		"mtime": "2026-07-31T20:43:53.465Z",
		"size": 662,
		"path": "../public/assets/x-BXMh1pg9.js"
	},
	"/assets/use-in-view-9eIYAl57.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1de24-jscNknRzgNHAzUNQCVxMyVaC+qY\"",
		"mtime": "2026-07-31T20:43:53.465Z",
		"size": 122404,
		"path": "../public/assets/use-in-view-9eIYAl57.js"
	},
	"/assets/_slug-DcljFBFZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d71c-2yeMHBV1D92RcUKleRl+yRf7AVo\"",
		"mtime": "2026-07-31T20:43:53.451Z",
		"size": 55068,
		"path": "../public/assets/_slug-DcljFBFZ.js"
	},
	"/assets/_slug-DqNYkqOO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6055-HK7tzs3MJRf/j0z5Y7nCdOaVda0\"",
		"mtime": "2026-07-31T20:43:53.451Z",
		"size": 24661,
		"path": "../public/assets/_slug-DqNYkqOO.js"
	},
	"/jornada-de-honra/ac-pratica.svg": {
		"type": "image/svg+xml",
		"etag": "\"7f14-UWkEBtvoB8HMRIGHTUkaMWH0yeU\"",
		"mtime": "2026-07-18T14:54:30.278Z",
		"size": 32532,
		"path": "../public/jornada-de-honra/ac-pratica.svg"
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
	"/jornada-de-honra/presencial-ac.svg": {
		"type": "image/svg+xml",
		"etag": "\"929e-aZOUKwM35me8/Cfo/r3/MbfLzhY\"",
		"mtime": "2026-07-18T14:54:30.280Z",
		"size": 37534,
		"path": "../public/jornada-de-honra/presencial-ac.svg"
	},
	"/jornada-de-honra/Thumb-Bio-Jornada-de-Honra.webp": {
		"type": "image/webp",
		"etag": "\"2b910-lICcoqs/xq7WNaPkb3d3fbruxC4\"",
		"mtime": "2026-07-18T14:54:30.277Z",
		"size": 178448,
		"path": "../public/jornada-de-honra/Thumb-Bio-Jornada-de-Honra.webp"
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
