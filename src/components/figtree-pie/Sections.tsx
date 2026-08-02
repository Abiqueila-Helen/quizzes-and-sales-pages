import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Check, Clock, Lock, ShieldCheck, Star } from "lucide-react";

import decoHero from "@/assets/figtree-pie/deco-hero.png";
import handsImg from "@/assets/figtree-pie/hands.png";
import handsHeartImg from "@/assets/figtree-pie/hands-heart.avif";
import sunImg from "@/assets/figtree-pie/sun.png";
import treeImg from "@/assets/figtree-pie/tree.avif";
import mok01 from "@/assets/figtree-pie/Tela-inicial.avif";
import mok02 from "@/assets/figtree-pie/explorar-topicos.avif";
import mok03 from "@/assets/figtree-pie/Tela-tarefas-mock.avif";

import { CHECKOUT, FIG, GRADIENT_SOFT, SANS, SERIF, TITLE, go } from "./theme";

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Serif({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span style={{ fontFamily: SERIF }} className={className}>
      {children}
    </span>
  );
}

function BigCta({
  label,
  onClick,
  tone = "dark",
}: {
  label: string;
  onClick: () => void;
  tone?: "dark" | "yellow";
}) {
  const style =
    tone === "dark"
      ? { background: FIG.charcoal, color: FIG.white }
      : { background: FIG.yellow, color: FIG.charcoal };
  return (
    <button
      onClick={onClick}
      style={{ ...style, fontFamily: SANS }}
      className="w-full rounded-full px-7 py-4 text-base font-bold shadow-[0_16px_34px_-18px_rgba(55,52,53,0.6)] transition-transform active:scale-[0.98] hover:-translate-y-0.5 sm:w-auto"
    >
      {label}
    </button>
  );
}

/* ----------------------------- 1. Hero ----------------------------- */

export function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="pie-stack relative overflow-hidden px-6 pb-20 pt-16" style={{ background: FIG.white, zIndex: 1 }}>
      <img
        src={decoHero}
        alt=""
        aria-hidden
        width={1024}
        height={768}
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full object-cover opacity-70"
      />
      <div className="relative mx-auto max-w-xl">
        <h1
          className="text-center text-[42px] leading-[1.15] sm:text-[58px]"
          style={{ fontFamily: TITLE, color: FIG.charcoal, fontWeight: 800 }}
        >
          Cultive o amor-próprio, alimente a autoconfiança e manifeste seus desejos com o
          Ressignifica.
        </h1>
        {/* <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <BigCta label="Quero Recuperar Meus Dias" onClick={onCta} />
          <BigCta label="Escolher Meu Plano" onClick={onCta} tone="yellow" />
        </div> */}
      </div>
    </section>
  );
}

/* --------------------- 2-4. Numbered feature blocks --------------------- */

function FeatureBlock({
  num,
  tag,
  image,
  title,
  text,
  bg,
  zIndex,
}: {
  num: string;
  tag: string;
  image: string;
  title: string;
  text: string;
  bg: string;
  zIndex: number;
}) {
  return (
    <section className="pie-stack px-6 py-16" style={{ background: bg, zIndex }}>
      <div className="mx-auto max-w-xl">
        <Reveal>
          <div
            className="flex items-baseline gap-3 text-[13px] font-medium uppercase tracking-[0.18em]"
            style={{ color: FIG.ochre, fontFamily: SANS }}
          >
            <span>{num}</span>
            <span style={{ color: FIG.charcoal }}>{tag}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 overflow-hidden rounded-[32px]" style={{ background: FIG.white }}>
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="mx-auto block w-full max-w-[320px] object-contain p-6"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="mt-10 text-[34px] leading-[1.2] sm:text-[46px]"
            style={{ fontFamily: TITLE, color: FIG.charcoal, fontWeight: 700 }}
          >
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p
            className="mt-4 text-[19px] leading-relaxed"
            style={{ fontFamily: SANS, color: `${FIG.charcoal}cc` }}
          >
            {text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Afirmacoes() {
  return (
    <FeatureBlock
      num="01"
      tag="Afirmações"
      image={mok01}
      bg={FIG.white}
      zIndex={2}
      title="Cultive o seu amor-próprio"
      text="Cultive o amor-próprio e a autoaceitação, aliviando emoções negativas com afirmações poderosas e inspiradoras."
    />
  );
}

export function Conquista() {
  return (
    <FeatureBlock
      num="02"
      tag="Categorias"
      image={mok02}
      bg={FIG.mint}
      zIndex={3}
      title="Escolha afirmações que ressoem profundamente em você"
      text="Selecione as categorias que melhor representam as áreas da sua vida que você gostaria de melhorar e pratique afirmações profundas e significativas diariamente."
    />
  );
}

export function Temas() {
  return (
    <FeatureBlock
      num="03"
      tag="Microações"
      image={mok03}
      bg={FIG.white}
      zIndex={4}
      title="Personalize sua experiência com temas, lembretes e widgets"
      text="Deixe o Ressignifica com a sua cara escolhendo um fundo personalizado. Ajuste os lembretes e instale widgets para ter sua inspiração diária sempre à mão."
    />
  );
}

/* --------------------------- 5. Benefícios --------------------------- */

const BENEFITS = [
  {
    n: "01",
    image: handsImg,
    title: "Acesse sua conexão interior",
    text: "Aprofunde sua conexão espiritual e seu senso de propósito com a prática constante de afirmações positivas e revigorantes.",
  },
  {
    n: "02",
    image: handsHeartImg,
    title: "Fortaleça os seus relacionamentos",
    text: "Irradie amor e compaixão pelas pessoas que você ama com afirmações que melhoram seus relacionamentos e elevam seu senso de união.",
  },
  {
    n: "03",
    image: sunImg,
    title: "Encontre a paz interior",
    text: "Cultive a tranquilidade praticando afirmações espirituais, criando um santuário interno que ajuda você a lidar melhor com os desafios da vida.",
  },
  {
    n: "04",
    image: treeImg,
    title: "Alimente o seu crescimento pessoal",
    text: "Concentre-se em cumprir o propósito da sua vida com afirmações que apoiam sua jornada de autodesenvolvimento e autoconhecimento.",
  },
];

export function Beneficios() {
  return (
    <section className="pie-stack px-6 py-20" style={{ background: FIG.mint, zIndex: 5 }}>
      <div className="mx-auto max-w-xl">
        <Reveal>
          <h2
            className="text-center text-[38px] sm:text-[52px]"
            style={{ fontFamily: TITLE, color: FIG.charcoal, fontWeight: 800 }}
          >
            Benefícios
          </h2>
        </Reveal>

        <div className="mt-12 space-y-12">
          {BENEFITS.slice(0, 2).map((b, i) => (
            <Reveal key={b.n} delay={i * 0.05}>
              <BenefitItem {...b} />
            </Reveal>
          ))}

          <Reveal>
            <div className="pie-marquee py-6">
              <div className="pie-marquee-track">
                <span className="pie-marquee-item" style={{ fontFamily: TITLE, color: FIG.charcoal, fontWeight: 800 }}>
                  Eu mereço uma vida que seja prazerosa de viver.
                </span>
                <span className="pie-marquee-item" style={{ fontFamily: TITLE, color: FIG.charcoal, fontWeight: 800 }}>
                  Eu mereço uma vida que seja prazerosa de viver.
                </span>
              </div>
            </div>
          </Reveal>

          {BENEFITS.slice(2).map((b, i) => (
            <Reveal key={b.n} delay={i * 0.05}>
              <BenefitItem {...b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitItem({
  n,
  image,
  title,
  text,
}: {
  n: string;
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <img
        src={image}
        alt=""
        aria-hidden
        loading="lazy"
        className="h-auto w-[180px] object-contain"
      />
      <h3
        className="mt-5 text-[22px] leading-snug sm:text-[26px]"
        style={{ fontFamily: TITLE, color: FIG.charcoal, fontWeight: 500 }}
      >
        {n}. {title}
      </h3>
      <p
        className="mt-3 text-[16px] leading-relaxed"
        style={{ fontFamily: SANS, color: `${FIG.charcoal}cc` }}
      >
        {text}
      </p>
    </div>
  );
}

/* -------------------------- 6. Depoimentos -------------------------- */

const TESTIMONIALS = [
  {
    text: "Esse é um aplicativo que todo mundo deveria ter. Ele muda seus pensamentos, sentimentos, humores e dias. O Ressignifica me ajuda a valorizar quem eu sou e me motiva. Eu envio afirmações diárias para a minha filha adolescente.",
    name: "Marge",
  },
  {
    text: "Estou aproveitando essas afirmações diárias durante a minha reavaliação pessoal. Elas ajudam na minha jornada de me conectar de forma mais saudável comigo mesma, trazendo abundância e me ajudando a espalhar alegria para os outros.",
    name: "Mike",
  },
  {
    text: "Mais coisas positivas acontecem na minha vida. No começo, eu sentia que essas palavras não fariam diferença. Eu estava errada. As afirmações combatem meus pensamentos negativos e ajudam a quebrar o ciclo.",
    name: "Becky",
  },
  {
    text: "Quando eu duvido de mim mesma, uma notificação é a salvação. Ela me traz de volta ao presente. Aplicativo incrível.",
    name: "Eu Sou Suficiente",
  },
  {
    text: "Aplicativo maravilhoso! Ajudou a aumentar minha confiança! Eu sempre tive dificuldade com a imagem do meu corpo; esse app me ajudou imensamente. É um salva-vidas para mim.",
    name: "Camila",
  },
];

export function Depoimentos() {
  return (
    <section className="pie-stack px-6 py-20" style={{ background: FIG.white, zIndex: 6 }}>
      <div className="mx-auto max-w-xl">
        <Reveal>
          <h2
            className="text-center text-[34px] sm:text-[46px]"
            style={{ fontFamily: TITLE, color: FIG.charcoal, fontWeight: 400 }}
          >
            Depoimentos
          </h2>
        </Reveal>
        <div className="mt-10 space-y-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.04}>
              <article
                className="rounded-[28px] p-6"
                style={{ background: FIG.mint, fontFamily: SANS }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill={FIG.terracota} color={FIG.terracota} />
                  ))}
                </div>
                <p className="mt-4 text-[16px] leading-relaxed" style={{ color: FIG.charcoal }}>
                  {t.text}
                </p>
                <p className="mt-5 text-[15px] font-semibold" style={{ color: FIG.charcoal }}>
                  {t.name}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- 7. Oferta ----------------------------- */

function useCountdown(total = 15 * 60) {
  const [left, setLeft] = useState(total);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  return {
    m: String(Math.floor(left / 60)).padStart(2, "0"),
    s: String(left % 60).padStart(2, "0"),
  };
}

type Plan = {
  id: string;
  tag?: string;
  name: string;
  perMonth: string;
  billed: string;
  save?: string;
  perk: string;
  cta: string;
  url: string;
  featured?: boolean;
  benefits: string[];
};

const BASE_BENEFITS = [
  "Acesso completo ao aplicativo",
  "Afirmações e áudios ilimitados",
  "Temas, lembretes e widgets",
  "Atualizações incluídas",
];

const PLANS: Plan[] = [
  {
    id: "anual",
    tag: "Maior Economia",
    name: "Anual",
    perMonth: "Apenas R$ 3,99 por mês",
    billed: "Cobrado R$ 47,88 por ano",
    save: "Economize 60%",
    perk: "Maior economia do ano",
    cta: "Quero o Melhor Valor",
    url: CHECKOUT.anual,
    benefits: BASE_BENEFITS,
  },
  {
    id: "trimestral",
    tag: "Mais Popular",
    name: "Trimestral",
    perMonth: "Apenas R$ 7,40 por mês",
    billed: "Cobrado R$ 22,20 a cada 3 meses",
    save: "Economize 25%",
    perk: "Melhor custo-benefício",
    cta: "Quero Economizar",
    url: CHECKOUT.trimestral,
    featured: true,
    benefits: BASE_BENEFITS,
  },
  {
    id: "mensal",
    name: "Mensal",
    perMonth: "Apenas R$ 9,90 por mês",
    billed: "Cobrado R$ 9,90 por mês",
    perk: "Ideal para quem deseja conhecer o aplicativo",
    cta: "Começar Agora",
    url: CHECKOUT.mensal,
    benefits: BASE_BENEFITS,
  },
];

export function Oferta() {
  const { m, s } = useCountdown();

  return (
    <section id="oferta" className="pie-stack px-6 py-20" style={{ background: FIG.mint, zIndex: 7 }}>
      <div className="mx-auto max-w-xl">
        <Reveal>
          <div
            className="mx-auto flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold"
            style={{ background: FIG.charcoal, color: FIG.yellow, fontFamily: SANS }}
          >
            <Clock size={16} />
            Oferta expira em {m}:{s}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-8 text-center text-[32px] leading-[1.2] sm:text-[44px]"
            style={{ fontFamily: TITLE, color: FIG.charcoal, fontWeight: 400 }}
          >
            Escolha o seu plano e comece hoje
          </h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          {PLANS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <div
                className={`relative rounded-[32px] p-7 ${p.featured ? "sm:scale-[1.03]" : ""}`}
                style={{
                  background: FIG.white,
                  border: p.featured ? `2px solid ${FIG.charcoal}` : `1px solid ${FIG.charcoal}22`,
                  boxShadow: p.featured
                    ? "0 30px 60px -30px rgba(55,52,53,0.55)"
                    : "0 18px 40px -32px rgba(55,52,53,0.5)",
                  fontFamily: SANS,
                }}
              >
                {p.tag && (
                  <span
                    className="absolute -top-3 left-7 rounded-full px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-wide"
                    style={{ background: FIG.charcoal, color: FIG.yellow }}
                  >
                    {p.tag}
                  </span>
                )}

                <p
                  className="text-[13px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: FIG.ochre }}
                >
                  {p.name}
                </p>

                <p
                  className="mt-3 text-[30px] leading-tight sm:text-[36px]"
                  style={{ fontFamily: SERIF, color: FIG.charcoal, fontWeight: 600 }}
                >
                  {p.perMonth}
                </p>
                <p className="mt-1 text-[14px]" style={{ color: `${FIG.charcoal}aa` }}>
                  {p.billed}
                </p>

                {p.save && (
                  <span
                    className="mt-4 inline-block rounded-full px-3 py-1 text-[12px] font-bold"
                    style={{ background: FIG.dark_green, color: FIG.white }}
                  >
                    {p.save}
                  </span>
                )}

                <ul className="mt-6 space-y-3">
                  {[p.perk, ...p.benefits].map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[15px]"
                      style={{ color: FIG.charcoal }}
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ background: FIG.mint }}
                      >
                        <Check size={13} color={FIG.charcoal} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => go(p.url)}
                  className="mt-7 w-full rounded-full px-6 py-4 text-base font-extrabold transition-transform active:scale-[0.98] hover:-translate-y-0.5"
                  style={
                    p.featured
                      ? { background: FIG.charcoal, color: FIG.white }
                      : { background: FIG.orange, color: FIG.charcoal }
                  }
                >
                  {p.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] font-semibold"
            style={{ color: FIG.charcoal, fontFamily: SANS }}
          >
            <span className="flex items-center gap-2">
              <Lock size={15} /> Compra 100% segura
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={15} /> Garantia de 7 dias
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- 8. Footer ----------------------------- */

export function Rodape({ onCta }: { onCta: () => void }) {
  return (
    <footer className="pie-stack px-6 py-16" style={{ background: FIG.charcoal, zIndex: 8 }}>
      <div className="mx-auto max-w-xl">
        <h2
          className="text-[34px] leading-tight sm:text-[44px]"
          style={{ fontFamily: TITLE, color: FIG.white, fontWeight: 400 }}
        >
          Baixe já o Ressignifica
        </h2>
        <p
          className="mt-4 text-[16px] leading-relaxed"
          style={{ fontFamily: SANS, color: `${FIG.white}cc` }}
        >
          Cultive o amor-próprio, alimente a autoconfiança e manifeste seus desejos mais profundos
          com afirmações poderosas e inspiradoras.
        </p>

        <div className="mt-8">
          <BigCta label="Escolher Meu Plano" onClick={onCta} tone="yellow" />
        </div>

        <div
          className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-[14px]"
          style={{ fontFamily: SANS, color: `${FIG.white}aa` }}
        >
          <a href="/politica-de-privacidade" className="hover:underline">
            Política de Privacidade
          </a>
          <a href="/termos-de-uso" className="hover:underline">
            Termos de Uso
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Contato
          </a>
        </div>
        <p className="mt-6 text-[13px]" style={{ fontFamily: SANS, color: `${FIG.white}77` }}>
          Copyright © 2026 Ressignifica
        </p>
      </div>
    </footer>
  );
}
