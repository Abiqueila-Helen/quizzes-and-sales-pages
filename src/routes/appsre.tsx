import { createFileRoute } from "@tanstack/react-router";
import AppsrePage from "@/pages/AppsrePage";

export const Route = createFileRoute("/appsre")({
  head: () => ({
    meta: [
      { title: "Ressignifica | App de Intervenção Emocional" },
      { name: "description", content: "Interrompa o loop dos pensamentos negativos em menos de 5 minutos. O app de intervenção emocional para recuperar seu foco e voltar a agir." },
      { property: "og:title", content: "Ressignifica | App de Intervenção Emocional" },
      { property: "og:description", content: "Interrompa o loop dos pensamentos negativos em menos de 5 minutos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ressignifica.app/appsre" },
    ],
    links: [
      { rel: "canonical", href: "https://ressignifica.app/appsre" },
    ],
  }),
  component: AppsrePage,
});