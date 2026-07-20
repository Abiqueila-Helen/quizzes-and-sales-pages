import { createFileRoute } from "@tanstack/react-router";
import AppsreThankYouPage from "@/pages/AppsreThankYouPage";

export const Route = createFileRoute("/appsre-obrigado")({
  head: () => ({
    meta: [
      { title: "Pagamento realizado com sucesso! | Ressignifica" },
      { name: "description", content: "Seu acesso está quase pronto. Verifique seu e-mail para concluir o cadastro." },
      { property: "og:title", content: "Pagamento realizado com sucesso! | Ressignifica" },
      { property: "og:description", content: "Seu acesso está quase pronto. Verifique seu e-mail para concluir o cadastro." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ressignifica.app/appsre-obrigado" },
    ],
    links: [
      { rel: "canonical", href: "https://ressignifica.app/appsre-obrigado" },
    ],
  }),
  component: AppsreThankYouPage,
});