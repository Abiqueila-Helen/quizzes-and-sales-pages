import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Crown,
  Gift,
  Lock,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Users,
} from "lucide-react";

import { Card, CHECKOUT, CTA, go, Reveal, SectionTitle, useCountdown } from "./ui";
import bonusComunidade from "@/assets/ressignifica-sell/bonus-comunidade.avif";
import bonusWebinar from "@/assets/ressignifica-sell/bonus-webinar.avif";
import fotoDaniela from "@/assets/appsre/Daniela.jpg";
import fotoFernanda from "@/assets/appsre/Fernanda.jpg";
import fotoRicardo from "@/assets/appsre/Ricardo.jpg";

/* ------------------------------------------------------------------ Bônus */

const BONUS = [
  {
    img: bonusComunidade,
    tag: "Bônus 1",
    t: "Comunidade Secreta",
    d: "Acesso a um grupo exclusivo para troca de experiências, suporte mútuo e networking com pessoas que buscam o mesmo crescimento.",
    icon: Users,
  },
  {
    img: bonusWebinar,
    tag: "Bônus 2",
    t: "Webinar Exclusivo",
    d: "Sessões ao vivo com o criador para aprofundar o redirecionamento emocional e tirar suas dúvidas em tempo real.",
    icon: Sparkles,
  },
];

export function Bonus() {
  return (
    <section className="py-16 sm:py-24" style={{ background: "#fffdfd" }}>
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle
          eyebrow="Bônus inclusos"
          tone="green"
          title={
            <>
              Você não entra sozinho <span style={{ color: "#e8732e" }}>nessa virada</span>.
            </>
          }
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {BONUS.map(({ img, tag, t, d, icon: Icon }, i) => (
            <Reveal key={t} delay={0.06 * i}>
              <Card className="h-full overflow-hidden !p-0">
                <img src={img} alt={t} loading="lazy" width={1024} height={768} className="h-40 w-full object-cover" />
                <div className="p-6">
                   <span
                     className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
                     style={{ background: "#00AFEF16", color: "#00AFEF" }}
                   >
                    <Gift className="h-3.5 w-3.5" /> {tag}
                  </span>
                  <p className="mt-3 flex items-center gap-2 text-lg font-extrabold" style={{ color: "#373435" }}>
                    <Icon className="h-4.5 w-4.5" style={{ color: "#00AFEF" }} /> {t}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#2f3a48cc" }}>
                    {d}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Oferta */

type Plano = {
  nome: string;
  precoMensal: string;
  precoMensalLabel: string;
  precoTotal: string;
  precoTotalLabel: string;
  sub: string;
  economia?: string;
  bullets: string[];
  cta: string;
  url: string;
  selo?: string;
  destaque?: boolean;
};

const BASE_BULLETS = [
  "Acesso completo ao app",
  "Biblioteca de áudios e vídeos",
  "Microações e dashboard",
  "Comunidade Secreta",
  "Webinar exclusivo",
];

const PLANOS: Plano[] = [
  {
    nome: "Anual",
    precoMensal: "R$ 3,99",
    precoMensalLabel: "por mês",
    precoTotal: "R$ 47,88",
    precoTotalLabel: "por ano",
    sub: "Apenas R$ 3,99 por mês — economize 60%.",
    economia: "Economize 60%",
    bullets: [...BASE_BULLETS, "Maior economia do ano"],
    cta: "Quero o Melhor Valor",
    url: CHECKOUT.anual,
    selo: "Maior Economia",
  },
  {
    nome: "Trimestral",
    precoMensal: "R$ 7,40",
    precoMensalLabel: "por mês",
    precoTotal: "R$ 22,20",
    precoTotalLabel: "a cada 3 meses",
    sub: "Apenas R$ 7,40 por mês — economize 25%.",
    economia: "Economize 25%",
    bullets: [...BASE_BULLETS, "Melhor custo-benefício"],
    cta: "Quero Economizar",
    url: CHECKOUT.trimestral,
    selo: "Mais Popular",
    destaque: true,
  },
  {
    nome: "Mensal",
    precoMensal: "R$ 9,90",
    precoMensalLabel: "por mês",
    precoTotal: "R$ 9,90",
    precoTotalLabel: "por mês",
    sub: "Ideal para quem deseja conhecer o aplicativo.",
    bullets: BASE_BULLETS,
    cta: "Começar Agora",
    url: CHECKOUT.mensal,
  },
];

function TimeBox({ v, label }: { v: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-2xl bg-white/15 px-4 py-2.5 text-2xl font-extrabold tabular-nums text-white">{v}</div>
      <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">{label}</span>
    </div>
  );
}

export function Oferta() {
  const { m, s } = useCountdown();

  return (
    <section id="oferta" className="py-16 sm:py-24" style={{ background: "#ebded6" }}>
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
            <div
              className="mx-auto max-w-md rounded-3xl p-6 text-center"
              style={{ background: "linear-gradient(135deg, #ED3237 0%, #C95241 100%)", boxShadow: "0 26px 55px -30px #F5863488" }}
            >
            <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              <Timer className="h-4 w-4" /> Condição especial expira em
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <TimeBox v={m} label="min" />
              <span className="text-2xl font-extrabold text-white/70">:</span>
              <TimeBox v={s} label="seg" />
            </div>
          </div>
        </Reveal>

        <div className="mt-10">
          <SectionTitle
            eyebrow="Escolha seu plano"
            title={
              <>
                Menos que um café por semana para <span style={{ color: "#e8732e" }}>recuperar seus dias</span>.
              </>
            }
          />
        </div>

        <div className="mt-10 grid items-start gap-5 lg:grid-cols-3">
          {PLANOS.map((p, i) => (
            <Reveal key={p.nome} delay={0.06 * i}>
              <div
                className="relative h-full rounded-[28px] bg-white p-6"
                style={{
                  border: p.destaque ? "2px solid #F58634" : "1px solid #E2E8F0",
                  boxShadow: p.destaque
                    ? "0 30px 60px -30px #F5863488"
                    : "0 18px 40px -30px rgba(15,23,42,0.4)",
                  transform: p.destaque ? "scale(1.015)" : undefined,
                }}
              >
                {p.selo && (
                  <span
                    className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white"
                    style={{ background: p.destaque ? "#373435" : "#00AFEF" }}
                  >
                    <Crown className="h-3.5 w-3.5" /> {p.selo}
                  </span>
                )}

                <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.14em]" style={{ color: "#2f3a48cc" }}>
                  {p.nome}
                </p>
                <p className="mt-3 text-4xl font-extrabold tracking-tight" style={{ color: "#373435" }}>
                  {p.precoMensal}
                </p>
                <p className="text-sm font-semibold" style={{ color: "#2f3a48cc" }}>
                  {p.precoMensalLabel}
                </p>
                <p className="mt-1 text-sm" style={{ color: "#2f3a48cc" }}>
                  Cobrado {p.precoTotal} {p.precoTotalLabel}
                </p>
                {p.economia && (
                  <p className="mt-1 text-sm font-bold" style={{ color: p.destaque ? "#379263" : "#0095C7" }}>
                    {p.economia}
                  </p>
                )}

                <ul className="mt-5 space-y-2.5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: "#373435" }}>
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#00A859" }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <CTA variant={p.destaque ? "gradient" : "green"} onClick={() => go(p.url)}>
                    {p.cta}
                  </CTA>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold" style={{ color: "#2f3a48cc" }}>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5" /> Compra 100% segura
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" /> Garantia de 7 dias
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> Acesso imediato
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Galeria */

const carouselModules = import.meta.glob<{ default: string }>(
  "/src/assets/appsre/carousel/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, query: "?url" },
);

const GALLERY = Object.entries(carouselModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod], i) => ({ src: mod.default, alt: `Tela real do aplicativo Ressignifica ${i + 1}` }));

export function Galeria() {
  const autoplay = useRef(Autoplay({ delay: 3800, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", containScroll: "trimSnaps" }, [
    autoplay.current,
  ]);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (GALLERY.length === 0) return null;

  return (
    <section className="py-16 sm:py-24" style={{ background: "#fffdfd" }}>
      <div className="mx-auto max-w-5xl px-5">
        <SectionTitle
          eyebrow="Veja o aplicativo"
          title={
            <>
              Telas reais do <span style={{ color: "#e8732e" }}>Ressignifica</span>.
            </>
          }
          subtitle="Toque em qualquer tela para ver em tamanho real."
        />

        <Reveal delay={0.1}>
          <div className="relative mt-10">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {GALLERY.map((g, i) => (
                  <div key={i} className="min-w-0 flex-[0_0_70%] px-2.5 sm:flex-[0_0_38%] lg:flex-[0_0_26%]">
                    <button
                      onClick={() => setLightboxIndex(i)}
                      className="group block w-full overflow-hidden rounded-[26px] bg-white transition-transform hover:-translate-y-1"
                      style={{
                        border: "1px solid #E2E8F0",
                        boxShadow: "0 20px 40px -24px rgba(15,23,42,0.35)",
                        aspectRatio: "9 / 16",
                      }}
                    >
                      <img
                        src={g.src}
                        alt={g.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Anterior"
              className="absolute -left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2.5 shadow-lg transition-transform hover:scale-105"
              style={{ border: "1px solid #E2E8F0", color: "#373435" }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Próximo"
              className="absolute -right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2.5 shadow-lg transition-transform hover:scale-105"
              style={{ border: "1px solid #E2E8F0", color: "#373435" }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="mt-8 flex items-center justify-center gap-2">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Ir para a tela ${i + 1}`}
                  className="h-2 rounded-full transition-all"
                  style={{ width: selected === i ? 26 : 8, background: selected === i ? "#00AFEF" : "#E2E8F0" }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Lightbox
        open={lightboxIndex !== null}
        index={lightboxIndex ?? 0}
        close={() => setLightboxIndex(null)}
        slides={GALLERY.map((g) => ({ src: g.src, alt: g.alt }))}
        controller={{ closeOnBackdropClick: true }}
        styles={{ container: { backgroundColor: "rgba(15,23,42,0.94)" } }}
      />
    </section>
  );
}

/* ----------------------------------------------------------- Depoimentos */

const DEPOIMENTOS = [
  {
    foto: fotoDaniela,
    nome: "Daniela M.",
    cidade: "Curitiba, PR",
    nota: 5,
    texto:
      "Eu não sabia nomear o que sentia. Fazer o check-in e ouvir um áudio de três minutos me tirou da paralisia. Na primeira semana entreguei dois trabalhos que estavam parados há um mês.",
  },
  {
    foto: fotoFernanda,
    nome: "Fernanda R.",
    cidade: "Belo Horizonte, MG",
    nota: 5,
    texto:
      "O que mudou pra mim foi a microação depois do áudio. Dez minutos parece pouco, mas é o que me faz começar. Hoje o meu dia rende bem mais do que rendia antes.",
  },
  {
    foto: fotoRicardo,
    nome: "Ricardo A.",
    cidade: "São Paulo, SP",
    nota: 5,
    texto:
      "Sou autônomo e perdia manhãs inteiras travado. Uso o app quando percebo que estou fugindo. O registro de vitórias me mostrou, em números, que eu estava produzindo de novo.",
  },
];

export function Depoimentos() {
  return (
    <section className="py-16 sm:py-24" style={{ background: "#ebded6" }}>
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle
          eyebrow="Depoimentos"
          tone="green"
          title={
            <>
              Pessoas comuns que <span style={{ color: "#e8732e" }}>voltaram a agir</span>.
            </>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEPOIMENTOS.map((d, i) => (
            <Reveal key={d.nome} delay={0.06 * i}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <img
                    src={d.foto}
                    alt={d.nome}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-extrabold" style={{ color: "#373435" }}>
                      {d.nome}
                    </p>
                    <p className="text-xs" style={{ color: "#2f3a48cc" }}>
                      {d.cidade}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: d.nota }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5" style={{ color: "#F59E0B", fill: "#F59E0B" }} />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#2f3a48cc" }}>
                  “{d.texto}”
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Garantia */

export function Garantia() {
  return (
    <section className="py-16 sm:py-24" style={{ background: "#fffdfd" }}>
      <div className="mx-auto max-w-2xl px-5">
        <Reveal>
          <div
            className="rounded-[32px] bg-white p-8 text-center"
            style={{ border: "1px solid #E2E8F0", boxShadow: "0 26px 55px -34px rgba(15,23,42,0.5)" }}
          >
            <div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg, #00AFEF 0%, #00A859 100%)", boxShadow: "0 18px 36px -18px #00AFEF88" }}
            >
              <ShieldCheck className="h-9 w-9 text-white" />
            </div>
            <p className="mt-5 text-2xl font-extrabold" style={{ color: "#373435" }}>
              Garantia incondicional de 7 dias
            </p>
            <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#2f3a48cc" }}>
              Teste o Ressignifica por sete dias. Se você sentir que não é para você, basta pedir o
              reembolso — devolvemos 100% do valor, sem perguntas e sem burocracia. O risco é todo nosso.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- FAQ */

const FAQS = [
  {
    q: "Funciona para ansiedade?",
    a: "O Ressignifica não trata transtornos, mas ajuda você a interromper o loop de pensamentos que costuma alimentar a ansiedade no dia a dia, devolvendo clareza para agir.",
  },
  {
    q: "Quanto tempo leva para perceber resultados?",
    a: "A maior parte das pessoas sente o primeiro alívio já na primeira intervenção, entre 2 e 5 minutos. A mudança de produtividade costuma aparecer na primeira semana de uso.",
  },
  {
    q: "Preciso usar todos os dias?",
    a: "Não. O app foi feito para ser usado no momento em que você trava. Mas o check-in diário acelera muito a evolução, porque cria evidência de progresso.",
  },
  {
    q: "É terapia?",
    a: "Não. É uma ferramenta de intervenção emocional e execução. Ela não substitui acompanhamento psicológico ou médico — pode caminhar junto com ele.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Assim que o pagamento é confirmado, você recebe o acesso por e-mail e já pode usar o app no Android ou no iPhone, direto do navegador do celular.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-24" style={{ background: "#ebded6" }}>
      <div className="mx-auto max-w-2xl px-5">
        <SectionTitle eyebrow="Perguntas frequentes" tone="green" title="Ainda com alguma dúvida?" />
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={0.04 * i}>
                <div className="overflow-hidden rounded-2xl bg-white" style={{ border: "1px solid #E2E8F0" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[15px] font-bold" style={{ color: "#373435" }}>
                      {f.q}
                    </span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0" style={{ color: "#00AFEF" }} />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0" style={{ color: "#00AFEF" }} />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#2f3a48cc" }}>
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- CTA final */

export function CTAFinal({ onCta }: { onCta: () => void }) {
  return (
    <section className="px-5 py-16 sm:py-24" style={{ background: "#fffdfd" }}>
      <Reveal>
        <div
          className="mx-auto max-w-3xl rounded-[32px] px-6 py-12 text-center"
          style={{ background: "linear-gradient(135deg, #221a12 0%, #443634 100%)", boxShadow: "0 30px 70px -34px #E8732E" }}
        >
          <h2 className="mt-5 text-[28px] font-extrabold leading-[1.15] text-white sm:text-4xl">
            Enquanto você adia mais um dia, sua mente continua alimentando o ciclo.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/90 sm:text-lg">
            Basta interromper esse ciclo uma única vez para começar a construir uma nova realidade. Um
            botão. Cinco minutos. Uma vida de volta ao movimento.
          </p>
          <div className="mx-auto mt-8 max-w-sm">
            <button
              onClick={onCta}
              className="w-full rounded-2xl bg-white px-6 py-4 text-base font-extrabold transition-transform active:scale-[0.98] hover:-translate-y-0.5"
              style={{ color: "#E8732E", boxShadow: "0 18px 36px -18px #221a12" }}
            >
              Quero Recuperar Minha Capacidade de Produzir
            </button>
            <p className="mt-3 text-xs text-white/85">Acesso imediato • Garantia incondicional de 7 dias</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------------------------------------------------------- Rodapé */

export function Rodape() {
  return (
    <footer className="px-5 py-10" style={{ borderTop: "1px solid #E2E8F0", background: "linear-gradient(135deg, #221a12 0%, #443634 100%)" }}>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <p className="text-sm font-extrabold" style={{ color: "#fff" }}>
          Ressignifica
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold" style={{ color: "#fffdfdcc" }}>
          <a href="/politica-de-privacidade" className="hover:opacity-70">
            Política de Privacidade
          </a>
          <a href="/termos-de-uso" className="hover:opacity-70">
            Termos de Uso
          </a>
          <a href="https://wa.me/19991703327" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            Contato
          </a>
        </div>
        <p className="text-xs" style={{ color: "#fffdfdcc" }}>
          © 2026 Ressignifica. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export { ChevronDown };
