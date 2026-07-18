import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Ressignifica" },
      { name: "description", content: "Política de privacidade da plataforma Ressignifica. Saiba como protegemos seus dados." },
      { property: "og:title", content: "Política de Privacidade | Ressignifica" },
      { property: "og:description", content: "Política de privacidade da plataforma Ressignifica." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://ressignifica.app/politica-de-privacidade" },
    ],
  }),
  component: PrivacyPolicy,
});