import { createFileRoute } from "@tanstack/react-router";
import RessignificaAppSellPiePage from "@/pages/RessignificaAppSellPiePage";

const TITLE = "Ressignifica | Cultive o amor-próprio todos os dias";
const DESC =
  "Afirmações, temas e lembretes para fortalecer o amor-próprio, alimentar a autoconfiança e manifestar seus desejos. Planos a partir de R$ 3,99 por mês.";
const URL = "https://quizzes-and-sales-pages.lovable.app/ressignifica-app-sell-pie";

export const Route = createFileRoute("/ressignifica-app-sell-pie")({
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
  component: RessignificaAppSellPiePage,
});
