import { createFileRoute } from "@tanstack/react-router";
import RessignificaAppSellPage from "@/pages/RessignificaAppSellPage";

const TITLE = "Ressignifica | Recupere sua capacidade de produzir";
const DESC =
  "O aplicativo que interrompe o ciclo da procrastinação em menos de 5 minutos e devolve sua capacidade de agir, produzir e gerar resultados.";
const URL = "https://ressignifica.app/ressignifica-app-sell";

export const Route = createFileRoute("/ressignifica-app-sell")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "product" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: RessignificaAppSellPage,
});
