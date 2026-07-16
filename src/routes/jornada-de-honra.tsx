import { createFileRoute } from "@tanstack/react-router";
import { JornadaDeHonraPage } from "@/components/marketing/JornadaDeHonraPage";

export const Route = createFileRoute("/jornada-de-honra")({
  head: () => ({
    meta: [
      { title: "Jornada de Honra | Talita Marques" },
      { name: "description", content: "Página de links e conteúdos de Talita Marques." },
    ],
  }),
  component: JornadaDeHonraPage,
});
