import { useCallback } from "react";

import {
  Afirmacoes,
  Beneficios,
  Conquista,
  Depoimentos,
  Hero,
  Oferta,
  Rodape,
  Temas,
} from "@/components/figtree-pie/Sections";
import { FIG, SANS } from "@/components/figtree-pie/theme";

export default function RessignificaAppSellPiePage() {
  const scrollToOffer = useCallback(() => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main
      className="min-h-screen antialiased"
      style={{ background: FIG.white, color: FIG.charcoal, fontFamily: SANS }}
    >
      <Hero onCta={scrollToOffer} />
      <Afirmacoes />
      <Conquista />
      <Temas />
      <Beneficios />
      <Depoimentos />
      <Oferta />
      <Rodape onCta={scrollToOffer} />
    </main>
  );
}
