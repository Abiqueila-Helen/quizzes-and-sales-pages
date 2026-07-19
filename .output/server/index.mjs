globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
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
	"/assets/antes-depois-CM32NS16.jpg": {
		"type": "image/jpeg",
		"etag": "\"16338-XBATzXSOU1s91PSkarFVNPayhfg\"",
		"mtime": "2026-07-19T12:53:58.948Z",
		"size": 90936,
		"path": "../public/assets/antes-depois-CM32NS16.jpg"
	},
	"/assets/appsre-Du3uL6IP.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14c8-+2TMGaAxSsLQ006SytZkhj/elO0\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 5320,
		"path": "../public/assets/appsre-Du3uL6IP.css"
	},
	"/assets/button-CpTEEiup.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e12-NS47tKDI1SfCk6E905zVYAB+IK8\"",
		"mtime": "2026-07-19T12:53:58.938Z",
		"size": 32274,
		"path": "../public/assets/button-CpTEEiup.js"
	},
	"/assets/hero-Dcf32M4q.jpg": {
		"type": "image/jpeg",
		"etag": "\"e9d2-1zBZgv9Ncsuf+To1g352Zxan4fQ\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 59858,
		"path": "../public/assets/hero-Dcf32M4q.jpg"
	},
	"/assets/createLucideIcon-B_1GbDvl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-Y4enwiXY2yAcF1Gu2b12sxHBTW8\"",
		"mtime": "2026-07-19T12:53:58.938Z",
		"size": 1195,
		"path": "../public/assets/createLucideIcon-B_1GbDvl.js"
	},
	"/assets/appsre-uqf7U-Sv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"336b8-pN4kWe+Y5gYCg2kghTOkDFGI3U8\"",
		"mtime": "2026-07-19T12:53:58.938Z",
		"size": 210616,
		"path": "../public/assets/appsre-uqf7U-Sv.js"
	},
	"/assets/jornada-de-honra-my6d8qCw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12ec-6bxrsakl7sl02qqJ44M8WXTI3lc\"",
		"mtime": "2026-07-19T12:53:58.938Z",
		"size": 4844,
		"path": "../public/assets/jornada-de-honra-my6d8qCw.js"
	},
	"/assets/Logo-CEZ_QuOe.png": {
		"type": "image/png",
		"etag": "\"155ed-0Swy+uQhUyd5BRLxSjhi6e6YZc4\"",
		"mtime": "2026-07-19T12:53:58.948Z",
		"size": 87533,
		"path": "../public/assets/Logo-CEZ_QuOe.png"
	},
	"/assets/mockup-DtadlHOq.jpg": {
		"type": "image/jpeg",
		"etag": "\"df3f-qbpIXs5OPb5F5CBLOsO1PSWG90E\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 57151,
		"path": "../public/assets/mockup-DtadlHOq.jpg"
	},
	"/assets/jsx-runtime-D8nDyRPw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2210-qrBAUPDOR8ROKpBVNEla8AGnGKU\"",
		"mtime": "2026-07-19T12:53:58.938Z",
		"size": 8720,
		"path": "../public/assets/jsx-runtime-D8nDyRPw.js"
	},
	"/assets/para-quem-BEbbknBt.jpg": {
		"type": "image/jpeg",
		"etag": "\"18518-VKGgEbjJaCzLdtnM14JKoIGyggw\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 99608,
		"path": "../public/assets/para-quem-BEbbknBt.jpg"
	},
	"/assets/screen-audios-DqbagL6F.jpg": {
		"type": "image/jpeg",
		"etag": "\"eef3-ZkB3qfKS5ZMuvJv01TzPYcBKhZo\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 61171,
		"path": "../public/assets/screen-audios-DqbagL6F.jpg"
	},
	"/assets/politica-de-privacidade-Cbb63RjO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1808-h1CxhGTxfTQQyuey3SKuqBcy7x4\"",
		"mtime": "2026-07-19T12:53:58.938Z",
		"size": 6152,
		"path": "../public/assets/politica-de-privacidade-Cbb63RjO.js"
	},
	"/assets/screen-checkin-BQZ0GZY-.jpg": {
		"type": "image/jpeg",
		"etag": "\"e06f-ho7jfU0UvbdnUpmAgdJQAUiXVN0\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 57455,
		"path": "../public/assets/screen-checkin-BQZ0GZY-.jpg"
	},
	"/assets/react-dom-CrK8yE57.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dda-TYAl7GnUPUCbV+AVNcbJobxY8L4\"",
		"mtime": "2026-07-19T12:53:58.938Z",
		"size": 3546,
		"path": "../public/assets/react-dom-CrK8yE57.js"
	},
	"/assets/screen-dashboard-B30khCPl.jpg": {
		"type": "image/jpeg",
		"etag": "\"e827-IH/OO7ancEfggsciJl7/5+qMUsg\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 59431,
		"path": "../public/assets/screen-dashboard-B30khCPl.jpg"
	},
	"/assets/screen-tarefas-CyKXyYtL.jpg": {
		"type": "image/jpeg",
		"etag": "\"f14c-Ou1KAg3/u0M0eDUqE43VOSZzgDU\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 61772,
		"path": "../public/assets/screen-tarefas-CyKXyYtL.jpg"
	},
	"/assets/screen-videos-lI6hL3N-.jpg": {
		"type": "image/jpeg",
		"etag": "\"ec46-NtfQTA07W08OjksC7sAqFqzvocc\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 60486,
		"path": "../public/assets/screen-videos-lI6hL3N-.jpg"
	},
	"/assets/styles-Cg-_MUWO.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"172ff-lkN37cy1XKCWWIvy+/hqP9y1TiQ\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 94975,
		"path": "../public/assets/styles-Cg-_MUWO.css"
	},
	"/assets/index-NVGaDF-V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59d00-5DXxKy0rAfHIegTwmc6v7yrjmeY\"",
		"mtime": "2026-07-19T12:53:58.938Z",
		"size": 367872,
		"path": "../public/assets/index-NVGaDF-V.js"
	},
	"/assets/hero-mockup-D1wke1Ye.png": {
		"type": "image/png",
		"etag": "\"1352b5-BGt0vl1/Zsv04SzgUhUBtKqH2l4\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 1266357,
		"path": "../public/assets/hero-mockup-D1wke1Ye.png"
	},
	"/assets/testi-1-CiqZlaoh.jpg": {
		"type": "image/jpeg",
		"etag": "\"61aa-1dyCuLQS09SMIG8Nv+i0J6hSVgk\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 25002,
		"path": "../public/assets/testi-1-CiqZlaoh.jpg"
	},
	"/assets/testi-3-DwPFJxU_.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c3a-7/d3vOdxW8bH1xvJ4yJLcputZkA\"",
		"mtime": "2026-07-19T12:53:58.949Z",
		"size": 23610,
		"path": "../public/assets/testi-3-DwPFJxU_.jpg"
	},
	"/jornada-de-honra/ac-pratica.svg": {
		"type": "image/svg+xml",
		"etag": "\"7f14-UWkEBtvoB8HMRIGHTUkaMWH0yeU\"",
		"mtime": "2026-07-18T14:54:30.278Z",
		"size": 32532,
		"path": "../public/jornada-de-honra/ac-pratica.svg"
	},
	"/assets/termos-de-uso-BT6rKNfN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"200c-C9Zje0fvdxMwRGy2YwOFJ7T/nf4\"",
		"mtime": "2026-07-19T12:53:58.938Z",
		"size": 8204,
		"path": "../public/assets/termos-de-uso-BT6rKNfN.js"
	},
	"/assets/x-a7nUlXUP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4eb-upXwmiyxM8H94mKMgTr6xP+9aKs\"",
		"mtime": "2026-07-19T12:53:58.938Z",
		"size": 1259,
		"path": "../public/assets/x-a7nUlXUP.js"
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
	"/assets/_slug-C6TCZ9zQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d67e-9lvjvFUVfzp5RoDqkdUFlg1SAAA\"",
		"mtime": "2026-07-19T12:53:58.938Z",
		"size": 54910,
		"path": "../public/assets/_slug-C6TCZ9zQ.js"
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
