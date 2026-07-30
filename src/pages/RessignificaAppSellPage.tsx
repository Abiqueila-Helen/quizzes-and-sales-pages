import { useCallback } from "react";

import {
  CicloInvisivel,
  ConhecaOApp,
  Hero,
  PorqueFunciona,
  Recebe,
  Transformacao,
  VerdadeiroProblema,
} from "@/components/ressignifica-sell/SectionsTop";
import {
  Bonus,
  CTAFinal,
  Depoimentos,
  FAQ,
  Galeria,
  Garantia,
  Oferta,
  Rodape,
} from "@/components/ressignifica-sell/SectionsBottom";
import { BRAND } from "@/components/ressignifica-sell/ui";

export default function RessignificaAppSellPage() {
  const scrollToOffer = useCallback(() => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main
      className="rs-sell min-h-screen antialiased"
      style={{ background: BRAND.bg, color: BRAND.text }}
    >
      <Hero onCta={scrollToOffer} />
      <CicloInvisivel />
      <VerdadeiroProblema />
      <ConhecaOApp />
      <Recebe />
      <PorqueFunciona />
      <Transformacao />
      <Bonus />
      <Oferta />
      <Galeria />
      <Depoimentos />
      <Garantia />
      <FAQ />
      <CTAFinal onCta={scrollToOffer} />
      <Rodape />
    </main>
  );
}
