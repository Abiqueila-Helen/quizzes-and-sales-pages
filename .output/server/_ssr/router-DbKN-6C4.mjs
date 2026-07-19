import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { A as notFound, P as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as Route$6 } from "../_slug-5euZHj5S.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as Container, i as Row, n as Card, r as Col, t as CardBody } from "../_libs/reactstrap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DbKN-6C4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Cg-_MUWO.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var Alt404 = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-overlay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "auth-page-content overflow-hidden pt-lg-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				className: "justify-content-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Col, {
					xl: 5,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBody, {
							className: "p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "ri-bard-line display-5 text-success" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-primary mb-4",
										children: "Oops!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-uppercase",
										children: "Desculpe, página não encontrada 😭"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted mb-4",
										children: "A página que você procura não está disponível!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://wa.me/19991703327",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
										children: "Fale com o suporte"
									})
								]
							})
						})
					})
				})
			}) })
		})]
	}) });
};
if (typeof window !== "undefined") document.title = "404 Error Alt | Velzon - React Admin & Dashboard Template";
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: Alt404,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$3 = () => import("./termos-de-uso-CfynaMbf.mjs");
var Route$4 = createFileRoute("/termos-de-uso")({
	head: () => ({
		meta: [
			{ title: "Termos de Uso | Ressignifica" },
			{
				name: "description",
				content: "Termos de uso da plataforma Ressignifica."
			},
			{
				property: "og:title",
				content: "Termos de Uso | Ressignifica"
			},
			{
				property: "og:description",
				content: "Termos de uso da plataforma Ressignifica."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ressignifica.app/termos-de-uso"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./politica-de-privacidade-BmkvUpAO.mjs");
var Route$3 = createFileRoute("/politica-de-privacidade")({
	head: () => ({
		meta: [
			{ title: "Política de Privacidade | Ressignifica" },
			{
				name: "description",
				content: "Política de privacidade da plataforma Ressignifica. Saiba como protegemos seus dados."
			},
			{
				property: "og:title",
				content: "Política de Privacidade | Ressignifica"
			},
			{
				property: "og:description",
				content: "Política de privacidade da plataforma Ressignifica."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ressignifica.app/politica-de-privacidade"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./jornada-de-honra-BLmSk_zV.mjs");
var Route$2 = createFileRoute("/jornada-de-honra")({
	head: () => ({ meta: [{ title: "Jornada de Honra | Talita Marques" }, {
		name: "description",
		content: "Página de links e conteúdos de Talita Marques."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./appsre-CJ7CdqrN.mjs");
var Route$1 = createFileRoute("/appsre")({
	head: () => ({
		meta: [
			{ title: "Ressignifica | App de Intervenção Emocional" },
			{
				name: "description",
				content: "Interrompa o loop dos pensamentos negativos em menos de 5 minutos. O app de intervenção emocional para recuperar seu foco e voltar a agir."
			},
			{
				property: "og:title",
				content: "Ressignifica | App de Intervenção Emocional"
			},
			{
				property: "og:description",
				content: "Interrompa o loop dos pensamentos negativos em menos de 5 minutos."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ressignifica.app/appsre"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ressignifica.app/appsre"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var Route = createFileRoute("/")({ beforeLoad: () => {
	throw notFound();
} });
var TermosDeUsoRoute = Route$4.update({
	id: "/termos-de-uso",
	path: "/termos-de-uso",
	getParentRoute: () => Route$5
});
var PoliticaDePrivacidadeRoute = Route$3.update({
	id: "/politica-de-privacidade",
	path: "/politica-de-privacidade",
	getParentRoute: () => Route$5
});
var JornadaDeHonraRoute = Route$2.update({
	id: "/jornada-de-honra",
	path: "/jornada-de-honra",
	getParentRoute: () => Route$5
});
var AppsreRoute = Route$1.update({
	id: "/appsre",
	path: "/appsre",
	getParentRoute: () => Route$5
});
var SlugRoute = Route$6.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	SlugRoute,
	AppsreRoute,
	JornadaDeHonraRoute,
	PoliticaDePrivacidadeRoute,
	TermosDeUsoRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
