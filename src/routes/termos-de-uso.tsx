import { createFileRoute } from "@tanstack/react-router";
import TermsOfUse from "@/pages/TermsOfUse";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Ressignifica" },
      { name: "description", content: "Termos de uso da plataforma Ressignifica." },
      { property: "og:title", content: "Termos de Uso | Ressignifica" },
      { property: "og:description", content: "Termos de uso da plataforma Ressignifica." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://ressignifica.app/termos-de-uso" },
    ],
  }),
  component: TermsOfUse,
});