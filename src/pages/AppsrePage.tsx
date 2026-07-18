import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useInView } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  ArrowRight,
  Brain,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Flame,
  Headphones,
  Heart,
  LayoutDashboard,
  ListChecks,
  Lock,
  PlayCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Upload,
  X,
} from "lucide-react";

import heroMockup from "@/assets/appsre/hero-mockup.png";
import screenCheckin from "@/assets/appsre/screen-checkin.jpg";
import screenAudios from "@/assets/appsre/screen-audios.jpg";
import screenDashboard from "@/assets/appsre/screen-dashboard.jpg";
import screenTarefas from "@/assets/appsre/screen-tarefas.jpg";
import screenVideos from "@/assets/appsre/screen-videos.jpg";
import testi1 from "@/assets/appsre/testi-1.jpg";
import testi3 from "@/assets/appsre/testi-3.jpg";

/* =========================================================================
   Design tokens (page-scoped, não altera o tema global do projeto)
   Paleta: Azul #1ABCFE / Verde #0ACF83 / #F8FAFC / #1E293B
   Tipografia: Plus Jakarta Sans
   ========================================================================= */

const BRAND = {
  blue: "#1ABCFE",
  blueDeep: "#0FA6E6",
  green: "#0ACF83",
  greenDeep: "#07B372",
  bg: "#FFFFFF",
  bgSoft: "#F8FAFC",
  border: "#E2E8F0",
  text: "#1E293B",
  textSoft: "#475569",
  textMute: "#64748B",
};

const font = { fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" };

/* ---------- Small primitives ---------- */

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "green" }) {
  const c = tone === "blue" ? BRAND.blue : BRAND.green;
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]"
      style={{
        color: c,
        background: `${c}14`,
        border: `1px solid ${c}33`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />
      {children}
    </span>
  );
}

function PrimaryButton({
  children,
  onClick,
  className = "",
  full = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  full?: boolean;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold text-white shadow-lg transition-colors ${
        full ? "w-full" : ""
      } ${className}`}
      style={{
        background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.blueDeep} 100%)`,
        boxShadow: `0 12px 30px -8px ${BRAND.blue}80`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = `linear-gradient(135deg, ${BRAND.green} 0%, ${BRAND.greenDeep} 100%)`;
        (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 14px 34px -8px ${BRAND.green}99`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.blueDeep} 100%)`;
        (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 12px 30px -8px ${BRAND.blue}80`;
      }}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </motion.button>
  );
}

function Card({
  children,
  className = "",
  interactive = true,
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border bg-white/80 backdrop-blur-sm transition-all duration-300 ${
        interactive ? "hover:-translate-y-1 hover:shadow-xl" : ""
      } ${className}`}
      style={{
        borderColor: BRAND.border,
        boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.08)",
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================================
   Page
   ========================================================================= */

export default function AppsrePage() {
  const scrollToOffer = useCallback(() => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div style={{ ...font, color: BRAND.text, background: BRAND.bg }}>
      <style>{`
        html { scroll-behavior: smooth; }
        .rs-grad-text {
          background: linear-gradient(90deg, ${BRAND.blue}, ${BRAND.green});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .rs-dot-grid {
          background-image: radial-gradient(${BRAND.blue}22 1px, transparent 1px);
          background-size: 22px 22px;
        }
        @keyframes rs-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        .rs-float { animation: rs-float 6s ease-in-out infinite; }
        .rs-float-slow { animation: rs-float 8s ease-in-out infinite; }
      `}</style>

      <Nav onCta={scrollToOffer} />
      <Hero onCta={scrollToOffer} />
      <SocialProofStrip />
      <Features />
      <FlowSection />
      <Comparison />
      <AppGallery />
      <Bonuses />
      <Testimonials />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA onCta={scrollToOffer} />
      <Footer />
    </div>
  );
}

/* =========================================================================
   Nav
   ========================================================================= */

function Nav({ onCta }: { onCta: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className="fixed inset-x-0 top-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${BRAND.border}` : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <div className="flex items-center gap-2">
          <div
            className="grid h-9 w-9 place-items-center rounded-xl text-white"
            style={{ background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.green})` }}
          >
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-lg font-extrabold tracking-tight">Ressignifica</span>
        </div>
        <button
          onClick={onCta}
          className="hidden rounded-full px-5 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 sm:inline-flex"
          style={{ background: BRAND.blue }}
        >
          Começar agora
        </button>
      </div>
    </header>
  );
}

/* =========================================================================
   Hero
   ========================================================================= */

function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28" style={{ background: BRAND.bgSoft }}>
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(60% 50% at 85% 10%, ${BRAND.blue}22, transparent 60%),
                      radial-gradient(50% 45% at 10% 90%, ${BRAND.green}1f, transparent 60%)`,
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 rs-dot-grid opacity-40" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]">
        {/* LEFT */}
        <div>
          <Reveal>
            <Eyebrow>App de intervenção emocional</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-[2.4rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Interrompa o loop dos <span className="rs-grad-text">pensamentos negativos</span> em menos de 5 minutos.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: BRAND.textSoft }}>
              O Ressignifica é um aplicativo de intervenção emocional que ajuda você a interromper ansiedade,
              culpa, medo, procrastinação e autossabotagem — para recuperar o foco e voltar a agir com clareza.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-7 flex flex-col gap-3">
              {[
                "Alívio emocional em poucos minutos",
                "Áudios de ressignificação para cada estado",
                "Micro-ações que quebram a paralisia",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[0.98rem]" style={{ color: BRAND.text }}>
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white"
                    style={{ background: BRAND.green }}
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton onClick={onCta}>Quero começar agora</PrimaryButton>
              <div className="flex items-center gap-2 text-sm" style={{ color: BRAND.textMute }}>
                <ShieldCheck className="h-4 w-4" style={{ color: BRAND.green }} />
                Garantia incondicional de 7 dias
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm" style={{ color: BRAND.textMute }}>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4" style={{ color: BRAND.blue }} /> Acesso imediato</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4" style={{ color: BRAND.blue }} /> Funciona no celular</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4" style={{ color: BRAND.blue }} /> Sem instalação obrigatória</span>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — mockup + floating chips */}
        <div className="relative mx-auto w-full max-w-[520px]">
          {/* Glow */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 blur-3xl"
            style={{
              background: `radial-gradient(50% 50% at 50% 50%, ${BRAND.blue}44, transparent 70%)`,
            }}
          />
          <motion.img
            src={heroMockup}
            alt="App Ressignifica no smartphone"
            width={1024}
            height={1280}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto w-full drop-shadow-2xl"
          />

          {/* Floating negative-state chips (superados) */}
          <FloatingChip
            label="ansiedade"
            className="left-[-4%] top-[8%]"
            struckThrough
            animationDelay="0s"
          />
          <FloatingChip
            label="culpa"
            className="right-[-2%] top-[24%]"
            struckThrough
            animationDelay="1.2s"
          />
          <FloatingChip
            label="medo"
            className="left-[-2%] top-[46%]"
            struckThrough
            animationDelay="2.4s"
          />
          <FloatingChip
            label="procrastinação"
            className="right-[-6%] top-[62%]"
            struckThrough
            animationDelay="3.6s"
          />

          {/* Positive chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="rs-float-slow absolute bottom-[6%] left-[-4%] z-20 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-semibold shadow-xl"
            style={{ color: BRAND.green, border: `1px solid ${BRAND.green}33` }}
          >
            <TrendingUp className="h-4 w-4" /> +1 pequena vitória
          </motion.div>
        </div>
      </div>

      {/* Flow arrow */}
      <Reveal delay={0.15}>
        <div className="relative mx-auto mt-14 max-w-5xl px-5">
          <div className="rounded-3xl border bg-white p-5 sm:p-6" style={{ borderColor: BRAND.border }}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {[
                { icon: <Brain className="h-4 w-4" />, label: "Pensamentos negativos", tone: "mute" },
                { icon: <Sparkles className="h-4 w-4" />, label: "Intervenção", tone: "blue" },
                { icon: <Compass className="h-4 w-4" />, label: "Clareza", tone: "blue" },
                { icon: <ListChecks className="h-4 w-4" />, label: "Ação", tone: "green" },
                { icon: <TrendingUp className="h-4 w-4" />, label: "Resultado", tone: "green" },
              ].map((s, i, arr) => (
                <div key={s.label} className="flex items-center gap-2">
                  <div
                    className="flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold"
                    style={{
                      background:
                        s.tone === "mute"
                          ? "#F1F5F9"
                          : s.tone === "blue"
                          ? `${BRAND.blue}12`
                          : `${BRAND.green}14`,
                      color:
                        s.tone === "mute" ? BRAND.textMute : s.tone === "blue" ? BRAND.blueDeep : BRAND.greenDeep,
                    }}
                  >
                    {s.icon}
                    <span className="truncate">{s.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <ChevronRight className="hidden h-4 w-4 shrink-0 sm:block" style={{ color: BRAND.textMute }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function FloatingChip({
  label,
  className = "",
  struckThrough = false,
  animationDelay = "0s",
}: {
  label: string;
  className?: string;
  struckThrough?: boolean;
  animationDelay?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`rs-float absolute z-20 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-lg ${className}`}
      style={{ animationDelay, color: BRAND.textMute, border: `1px solid ${BRAND.border}` }}
    >
      <span className={struckThrough ? "line-through" : ""}>{label}</span>
      {struckThrough && (
        <span
          className="grid h-4 w-4 place-items-center rounded-full text-white"
          style={{ background: BRAND.green }}
        >
          <Check className="h-2.5 w-2.5" strokeWidth={3} />
        </span>
      )}
    </motion.div>
  );
}

/* =========================================================================
   Social proof strip
   ========================================================================= */

function SocialProofStrip() {
  return (
    <section className="border-y" style={{ borderColor: BRAND.border, background: BRAND.bg }}>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4">
        {[
          { k: "+12.000", v: "pessoas atendidas" },
          { k: "4,9 / 5", v: "avaliação média" },
          { k: "< 5 min", v: "para se sentir melhor" },
          { k: "7 dias", v: "garantia incondicional" },
        ].map((s) => (
          <div key={s.v} className="text-center">
            <div className="text-2xl font-extrabold" style={{ color: BRAND.text }}>{s.k}</div>
            <div className="mt-1 text-xs uppercase tracking-wider" style={{ color: BRAND.textMute }}>{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================================
   Features
   ========================================================================= */

function Features() {
  const items = [
    { icon: Heart, title: "Check-in de sentimentos", text: "Reconheça o que está sentindo em segundos e receba a intervenção certa." },
    { icon: Headphones, title: "Áudios de Ressignificação", text: "Faixas curtas para interromper ansiedade, culpa, medo e paralisia." },
    { icon: PlayCircle, title: "Biblioteca de Vídeos", text: "Conteúdos práticos organizados por estado emocional." },
    { icon: ListChecks, title: "Tarefas Inteligentes", text: "Micro-ações prontas para quebrar o ciclo e voltar a agir." },
    { icon: LayoutDashboard, title: "Dashboard", text: "Acompanhe seu progresso emocional com clareza visual." },
    { icon: Clock, title: "Histórico", text: "Volte para revisitar suas evidências de evolução." },
    { icon: Upload, title: "Seus próprios conteúdos", text: "Envie áudios e vídeos pessoais que funcionam para você." },
    { icon: ShieldCheck, title: "Privacidade real", text: "Seus registros ficam protegidos e nunca são compartilhados." },
  ];
  return (
    <section className="py-24 sm:py-28" style={{ background: BRAND.bg }}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Reveal><Eyebrow tone="green">O que você recebe</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Tudo o que você precisa para <span className="rs-grad-text">recuperar seu estado produtivo</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-lg" style={{ color: BRAND.textSoft }}>
              Recursos pensados para atuar exatamente no momento em que a mente trava.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.04}>
              <Card className="h-full p-6">
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.blue}18, ${BRAND.green}18)`,
                    color: BRAND.blueDeep,
                  }}
                >
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: BRAND.textSoft }}>
                  {f.text}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   Flow section (emotional hook)
   ========================================================================= */

function FlowSection() {
  return (
    <section className="py-24" style={{ background: BRAND.bgSoft }}>
      <div className="mx-auto max-w-5xl px-5 text-center">
        <Reveal><Eyebrow>Por que funciona</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Você não precisa esperar se sentir melhor para agir.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: BRAND.textSoft }}>
            O Ressignifica interrompe o ciclo negativo no exato momento em que ele começa — devolvendo controle,
            clareza e capacidade de execução.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   Comparison
   ========================================================================= */

function Comparison() {
  const before = ["Pensamentos negativos em loop", "Procrastinação constante", "Culpa e autocobrança", "Ansiedade e paralisia", "Baixa autoestima"];
  const after = ["Reconhece o sentimento", "Interrompe o ciclo", "Recupera a clareza", "Executa uma ação real", "Constrói autoestima com evidências"];

  return (
    <section className="py-24" style={{ background: BRAND.bg }}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <Reveal><Eyebrow tone="green">Antes vs Depois</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Duas rotinas mentais. <span className="rs-grad-text">Duas vidas diferentes</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <Card interactive={false} className="h-full p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "#FEE2E2", color: "#B91C1C" }}>
                  <X className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Sem o Ressignifica</h3>
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {before.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.98rem]" style={{ color: BRAND.textSoft }}>
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full" style={{ background: "#FEE2E2", color: "#B91C1C" }}>
                      <X className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card
              interactive={false}
              className="h-full p-8"
              // Highlight the "after" card
            >
              <div
                className="absolute inset-x-0 -top-px h-1 rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.green})` }}
              />
              <div className="flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-xl text-white"
                  style={{ background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.green})` }}
                >
                  <Check className="h-5 w-5" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-bold">Com o Ressignifica</h3>
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {after.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.98rem]" style={{ color: BRAND.text }}>
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white" style={{ background: BRAND.green }}>
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>

        {/* Benefits grid */}
        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              "Foco recuperado",
              "Menos procrastinação",
              "Ciclos interrompidos",
              "Autoestima em alta",
              "Clareza mental",
              "Evidências de progresso",
            ].map((b) => (
              <div
                key={b}
                className="rounded-2xl border bg-white px-4 py-3 text-center text-sm font-semibold"
                style={{ borderColor: BRAND.border, color: BRAND.text }}
              >
                <Check className="mx-auto mb-1 h-4 w-4" style={{ color: BRAND.green }} />
                {b}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   App Gallery — Carrossel Embla + Lightbox
   ========================================================================= */

const GALLERY = [
  { src: screenCheckin, alt: "Tela de check-in de sentimentos" },
  { src: screenAudios, alt: "Tela de áudios de ressignificação" },
  { src: screenDashboard, alt: "Tela de dashboard e progresso" },
  { src: screenTarefas, alt: "Tela de tarefas inteligentes" },
  { src: screenVideos, alt: "Tela de biblioteca de vídeos" },
];

function AppGallery() {
  const autoplay = useRef(Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: "trimSnaps" },
    [autoplay.current],
  );
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

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-24" style={{ background: BRAND.bgSoft }}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><Eyebrow>Por dentro do app</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Conheça o Ressignifica <span className="rs-grad-text">por dentro</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-lg" style={{ color: BRAND.textSoft }}>
              Toque nas telas para ver em tamanho real.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="relative mt-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {GALLERY.map((g, i) => (
                  <div key={i} className="min-w-0 flex-[0_0_78%] px-3 sm:flex-[0_0_42%] lg:flex-[0_0_28%]">
                    <button
                      onClick={() => setLightboxIndex(i)}
                      className="group relative block w-full overflow-hidden rounded-[28px] border bg-white transition-all hover:-translate-y-1"
                      style={{
                        borderColor: BRAND.border,
                        boxShadow: "0 20px 40px -20px rgba(15,23,42,0.25)",
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
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={scrollPrev}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border bg-white p-2.5 shadow-lg transition-all hover:scale-105 sm:block"
              style={{ borderColor: BRAND.border, color: BRAND.text }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Próximo"
              className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border bg-white p-2.5 shadow-lg transition-all hover:scale-105 sm:block"
              style={{ borderColor: BRAND.border, color: BRAND.text }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: selected === i ? 28 : 8,
                    background: selected === i ? BRAND.blue : BRAND.border,
                  }}
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
        styles={{ container: { backgroundColor: "rgba(15,23,42,0.92)" } }}
      />
    </section>
  );
}

/* =========================================================================
   Bonuses
   ========================================================================= */

function Bonuses() {
  const bonuses = [
    { icon: Flame, tag: "Bônus #1", title: "Guia PDF — 30 Microações", text: "Sequência de 30 microações prontas para sair da procrastinação em qualquer situação.", value: "R$ 47" },
    { icon: Headphones, tag: "Bônus #2", title: "20 Áudios exclusivos", text: "Coleção completa de intervenção emocional para diferentes momentos do dia.", value: "R$ 97" },
    { icon: Calendar, tag: "Bônus #3", title: "Desafio de 7 dias", text: "Plano diário para reconstruir a autoestima com pequenas vitórias reais.", value: "R$ 53" },
  ];
  return (
    <section className="py-24" style={{ background: BRAND.bg }}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <Reveal><Eyebrow tone="green">Bônus exclusivos</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Você também recebe <span className="rs-grad-text">estes bônus</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {bonuses.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <Card className="relative h-full overflow-hidden p-7">
                <div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full"
                  style={{ background: `radial-gradient(circle, ${BRAND.green}33, transparent 70%)` }}
                />
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider"
                    style={{ background: `${BRAND.green}18`, color: BRAND.greenDeep }}
                  >
                    {b.tag}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: BRAND.textMute }}>Valor {b.value}</span>
                </div>
                <div
                  className="mt-5 grid h-14 w-14 place-items-center rounded-2xl text-white"
                  style={{ background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.green})` }}
                >
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: BRAND.textSoft }}>{b.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div
            className="mx-auto mt-10 max-w-2xl rounded-2xl border p-5 text-center text-sm"
            style={{ borderColor: `${BRAND.green}55`, background: `${BRAND.green}0d`, color: BRAND.text }}
          >
            Valor total dos bônus: <span className="line-through" style={{ color: BRAND.textMute }}>R$ 197</span>{" "}
            — <strong style={{ color: BRAND.greenDeep }}>hoje incluso gratuitamente</strong>.
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================================
   Testimonials
   ========================================================================= */

function Avatar({ src, name }: { src?: string; name: string }) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="h-12 w-12 rounded-full object-cover"
        style={{ border: `2px solid ${BRAND.border}` }}
      />
    );
  }
  return (
    <div
      className="grid h-12 w-12 place-items-center rounded-full text-sm font-bold text-white"
      style={{ background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.green})` }}
    >
      {initials}
    </div>
  );
}

function Testimonials() {
  const list = [
    { name: "Carlos M.", role: "Empreendedor", img: testi1, text: "Eu passava horas preso em pensamentos negativos. Hoje em poucos minutos consigo recuperar o foco e voltar ao trabalho." },
    { name: "Fernanda A.", role: "Designer", img: undefined, text: "O aplicativo virou meu botão de emergência emocional. Simplesmente funciona." },
    { name: "Ricardo S.", role: "Analista", img: testi3, text: "Foi a primeira vez que consegui transformar pequenas ações em uma rotina consistente." },
  ];
  return (
    <section className="py-24" style={{ background: BRAND.bgSoft }}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <Reveal><Eyebrow>Histórias reais</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Veja o que quem usa o Ressignifica <span className="rs-grad-text">está dizendo</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {list.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <Card className="flex h-full flex-col p-7">
                <Quote className="h-6 w-6" style={{ color: BRAND.blue }} />
                <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed" style={{ color: BRAND.text }}>
                  “{t.text}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar src={t.img} name={t.name} />
                  <div className="min-w-0">
                    <div className="truncate font-bold">{t.name}</div>
                    <div className="text-xs" style={{ color: BRAND.textMute }}>{t.role}</div>
                  </div>
                  <div className="ml-auto flex" aria-label="5 estrelas">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-current" style={{ color: "#F59E0B" }} />
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   Offer
   ========================================================================= */

function useCountdown(totalSeconds = 15 * 60) {
  const [left, setLeft] = useState(totalSeconds);
  useEffect(() => {
    if (left <= 0) return;
    const id = setInterval(() => setLeft((v) => Math.max(0, v - 1)), 1000);
    return () => clearInterval(id);
  }, [left]);
  const mm = Math.floor(left / 60).toString().padStart(2, "0");
  const ss = (left % 60).toString().padStart(2, "0");
  return { mm, ss };
}

function Offer() {
  const { mm, ss } = useCountdown(15 * 60);
  const includes = [
    "Aplicativo Ressignifica (acesso vitalício)",
    "Biblioteca completa de áudios e vídeos",
    "Dashboard e histórico emocional",
    "Upload dos seus próprios áudios e vídeos",
    "Todas as futuras atualizações",
    "Bônus #1 — Guia PDF 30 Microações",
    "Bônus #2 — 20 Áudios exclusivos",
    "Bônus #3 — Desafio de 7 dias",
  ];

  return (
    <section id="offer" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${BRAND.bg} 0%, ${BRAND.bgSoft} 100%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(60% 40% at 50% 0%, ${BRAND.blue}22, transparent 70%)`,
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5">
        <div className="text-center">
          <Reveal><Eyebrow tone="green">Oferta por tempo limitado</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Comece hoje. <span className="rs-grad-text">Alívio já na primeira sessão</span>.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            className="relative mt-10 overflow-hidden rounded-3xl border bg-white p-8 sm:p-10"
            style={{
              borderColor: BRAND.border,
              boxShadow: `0 30px 60px -20px ${BRAND.blue}55`,
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1.5"
              style={{ background: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.green})` }}
            />

            {/* Countdown */}
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-4 w-4" style={{ color: BRAND.blueDeep }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: BRAND.textMute }}>
                Esta oferta expira em
              </span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-2">
              <TimeBox v={mm} label="min" />
              <span className="text-2xl font-bold" style={{ color: BRAND.textMute }}>:</span>
              <TimeBox v={ss} label="seg" />
            </div>

            {/* Price */}
            <div className="mt-8 text-center">
              <div className="text-sm" style={{ color: BRAND.textMute }}>
                <span className="line-through">De R$ 197</span>{" "}
                por apenas
              </div>
              <div className="mt-1 flex items-end justify-center gap-1">
                <span className="text-2xl font-bold" style={{ color: BRAND.text }}>R$</span>
                <span className="text-6xl font-extrabold leading-none" style={{ color: BRAND.text }}>47</span>
                <span className="mb-1 text-lg font-bold" style={{ color: BRAND.text }}>,00</span>
              </div>
              <div className="mt-2 text-sm" style={{ color: BRAND.textMute }}>
                ou 12x de <strong style={{ color: BRAND.text }}>R$ 4,90</strong> no cartão
              </div>
            </div>

            {/* Includes */}
            <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {includes.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm" style={{ color: BRAND.text }}>
                  <span
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white"
                    style={{ background: BRAND.green }}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <PrimaryButton full>QUERO COMEÇAR AGORA</PrimaryButton>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs" style={{ color: BRAND.textMute }}>
              <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> Pagamento seguro</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Compra protegida</span>
              <span>Pix • Cartão • Parcelamento</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TimeBox({ v, label }: { v: string; label: string }) {
  return (
    <div
      className="min-w-[72px] rounded-2xl px-4 py-3 text-center"
      style={{
        background: BRAND.text,
        color: "#fff",
        boxShadow: "0 10px 24px -12px rgba(15,23,42,0.5)",
      }}
    >
      <div className="font-mono text-3xl font-extrabold leading-none">{v}</div>
      <div className="mt-1 text-[0.65rem] uppercase tracking-widest opacity-70">{label}</div>
    </div>
  );
}

/* =========================================================================
   Guarantee
   ========================================================================= */

function Guarantee() {
  return (
    <section className="py-24" style={{ background: BRAND.bg }}>
      <div className="mx-auto max-w-4xl px-5">
        <div
          className="relative overflow-hidden rounded-3xl border p-8 sm:p-12"
          style={{ borderColor: BRAND.border, background: BRAND.bgSoft }}
        >
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full"
            style={{ background: `radial-gradient(circle, ${BRAND.green}33, transparent 70%)` }}
          />
          <div className="relative grid grid-cols-1 items-center gap-8 sm:grid-cols-[auto_1fr]">
            {/* Seal */}
            <div className="mx-auto">
              <div
                className="relative grid h-32 w-32 place-items-center rounded-full text-white"
                style={{ background: `linear-gradient(135deg, ${BRAND.green}, ${BRAND.greenDeep})`, boxShadow: `0 20px 40px -12px ${BRAND.green}88` }}
              >
                <div className="text-center leading-none">
                  <div className="text-[0.62rem] font-bold uppercase tracking-wider opacity-90">Garantia</div>
                  <div className="mt-1 text-4xl font-extrabold">7</div>
                  <div className="text-[0.62rem] font-bold uppercase tracking-wider opacity-90">dias</div>
                </div>
                <div
                  aria-hidden
                  className="absolute inset-[-6px] rounded-full border-2"
                  style={{ borderColor: `${BRAND.green}55` }}
                />
              </div>
            </div>

            <div>
              <Eyebrow tone="green">Risco zero</Eyebrow>
              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">Garantia incondicional de 7 dias</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed" style={{ color: BRAND.textSoft }}>
                Experimente o Ressignifica por 7 dias completos. Se não sentir que o aplicativo ajudou você a recuperar
                o foco e interromper pensamentos negativos, basta solicitar o reembolso.
                <strong style={{ color: BRAND.text }}> Sem perguntas. Sem burocracia. Reembolso integral.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   FAQ
   ========================================================================= */

const FAQS = [
  { q: "O aplicativo funciona em Android e iPhone?", a: "Sim. Basta acessar pelo navegador ou instalar como aplicativo em qualquer celular moderno." },
  { q: "Preciso de internet?", a: "Sim, para sincronização e acesso aos conteúdos." },
  { q: "Posso adicionar meus próprios áudios?", a: "Sim. Você pode enviar seus próprios arquivos MP3 e M4A." },
  { q: "Posso cancelar quando quiser?", a: "Sim. Você possui garantia incondicional de 7 dias e cancelamento sem burocracia." },
  { q: "Em quanto tempo começo a perceber resultados?", a: "Muitos usuários relatam clareza e alívio já na primeira intervenção de poucos minutos." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24" style={{ background: BRAND.bgSoft }}>
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <Reveal><Eyebrow>Perguntas frequentes</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Tudo o que você precisa saber.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div
                  className="overflow-hidden rounded-2xl border bg-white transition-colors"
                  style={{ borderColor: isOpen ? BRAND.blue : BRAND.border }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[0.98rem] font-semibold" style={{ color: BRAND.text }}>{f.q}</span>
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform"
                      style={{
                        background: isOpen ? BRAND.blue : `${BRAND.blue}12`,
                        color: isOpen ? "#fff" : BRAND.blueDeep,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: BRAND.textSoft }}>
                      {f.a}
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   Final CTA
   ========================================================================= */

function FinalCTA({ onCta }: { onCta: () => void }) {
  return (
    <section className="py-24" style={{ background: BRAND.bg }}>
      <div className="mx-auto max-w-4xl px-5">
        <div
          className="relative overflow-hidden rounded-3xl p-10 text-center text-white sm:p-14"
          style={{ background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.green})` }}
        >
          <div aria-hidden className="absolute inset-0 rs-dot-grid opacity-30" />
          <div className="relative">
            <h3 className="text-3xl font-extrabold sm:text-4xl">
              Retome o controle da sua mente hoje.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-white/90">
              A cada dia adiado, mais um ciclo de ansiedade, culpa e procrastinação. Interrompa isso agora.
            </p>
            <div className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onCta}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold shadow-xl"
                style={{ color: BRAND.blueDeep }}
              >
                Quero começar agora <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   Footer
   ========================================================================= */

function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: BRAND.border, background: BRAND.bg }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2">
          <div
            className="grid h-8 w-8 place-items-center rounded-lg text-white"
            style={{ background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.green})` }}
          >
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <span className="text-sm font-bold">Ressignifica</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs" style={{ color: BRAND.textMute }}>
          <a href="#privacy" className="hover:opacity-70">Política de Privacidade</a>
          <a href="#terms" className="hover:opacity-70">Termos de Uso</a>
          <a href="#contact" className="hover:opacity-70">Contato</a>
        </div>
        <div className="text-xs" style={{ color: BRAND.textMute }}>© 2026 Ressignifica</div>
      </div>
    </footer>
  );
}
