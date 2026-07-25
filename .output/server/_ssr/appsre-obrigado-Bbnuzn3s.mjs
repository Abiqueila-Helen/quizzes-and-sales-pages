import { p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/appsre-obrigado-Bbnuzn3s.js
var import_jsx_runtime = require_jsx_runtime();
createFileRoute("/appsre-obrigado")({
	head: () => ({
		meta: [
			{ title: "Pagamento realizado com sucesso! | Ressignifica" },
			{
				name: "description",
				content: "Seu acesso está quase pronto. Verifique seu e-mail para concluir o cadastro."
			},
			{
				property: "og:title",
				content: "Pagamento realizado com sucesso! | Ressignifica"
			},
			{
				property: "og:description",
				content: "Seu acesso está quase pronto. Verifique seu e-mail para concluir o cadastro."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://ressignifica.app/appsre-obrigado"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://ressignifica.app/appsre-obrigado"
		}]
	}),
	component: AppsreThankYouPage
});
function AppsreThankYouPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-white px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md w-full text-center space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold text-gray-900",
					children: "Pagamento realizado com sucesso!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-gray-600 text-base leading-relaxed whitespace-pre-line",
					children: `Seu acesso está quase pronto.
Enviamos um e-mail para o endereço utilizado na compra.
Abra esse e-mail e clique no link para criar sua senha.
Depois disso faça login normalmente.`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://ressignifica.insightagency-ia.com.br/auth?mode=signin",
					className: "inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors",
					children: "Ir para Login"
				})
			]
		})
	});
}
var SplitComponent = AppsreThankYouPage;
//#endregion
export { SplitComponent as component };
