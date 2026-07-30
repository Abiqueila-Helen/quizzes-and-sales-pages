import { motion } from "framer-motion";
import {
  ArrowDown,
  Apple,
  BadgeCheck,
  BrainCircuit,
  Clock,
  Flame,
  Headphones,
  ListChecks,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Trophy,
  Video,
  Zap,
  X,
  Check,
  HeartPulse,
  LineChart,
  CalendarCheck,
} from "lucide-react";

import { BRAND, CTA, Card, Eyebrow, GradText, GRADIENT, Reveal, SectionTitle } from "./ui";
import heroImg from "@/assets/ressignifica-sell/hero.png";
import cicloImg from "@/assets/ressignifica-sell/ciclo.png";
import transformacaoImg from "@/assets/ressignifica-sell/transformacao.png";

/* ---------------------------------------------------------------- Hero */

export function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16" style={{ background: BRAND.bgSoft }}>
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: GRADIENT }}
      />
      <div className="relative mx-auto max-w-5xl px-5">
        <div className="text-center">
          <Reveal>
            <Eyebrow tone="green">
              <Zap className="h-3.5 w-3.5" /> Botão de emergência mental
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-[32px] font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Sua mente não está apenas roubando sua paz.{" "}
              <GradText>Ela pode estar roubando o seu futuro financeiro.</GradText>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed sm:text-lg" style={{ color: BRAND.textSoft }}>
              Medo, insegurança, culpa e escassez fazem milhares de pessoas perderem dias inteiros de
              produtividade. O Ressignifica interrompe esse ciclo em menos de 5 minutos e devolve sua
              capacidade de agir.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-8 max-w-sm">
              <CTA onClick={onCta}>Quero Recuperar Minha Produtividade</CTA>
              <p className="mt-3 text-xs" style={{ color: BRAND.textSoft }}>
                Acesso imediato • Garantia de 7 dias • Cancele quando quiser
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mx-auto mt-10 max-w-[320px] sm:max-w-[380px]">
            <motion.img
              src={heroImg}
              alt="Aplicativo Ressignifica aberto em um smartphone"
              width={1024}
              height={1280}
              className="w-full drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-2">
            {[
              { icon: Smartphone, label: "Android" },
              { icon: Apple, label: "iPhone" },
              { icon: Zap, label: "Acesso imediato" },
              { icon: ShieldCheck, label: "Garantia 7 dias" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold"
                style={{ border: `1px solid ${BRAND.border}`, color: BRAND.text }}
              >
                <Icon className="h-3.5 w-3.5" style={{ color: BRAND.blue }} />
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Ciclo Invisível */

const CICLO = [
  "Pensamentos negativos",
  "Escassez",
  "Ansiedade",
  "Paralisia",
  "Procrastinação",
  "Você produz menos",
  "Você ganha menos dinheiro",
  "Sua autoestima diminui",
  "O ciclo recomeça",
];

export function CicloInvisivel() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle
          eyebrow="O ciclo invisível"
          title={
            <>
              Existe um loop rodando na sua cabeça <GradText>todos os dias</GradText>.
            </>
          }
          subtitle="Ele não avisa quando começa. Só cobra o preço no fim do mês."
        />

        <Reveal delay={0.1}>
          <img
            src={cicloImg}
            alt="Ilustração de um ciclo mental fechado"
            loading="lazy"
            width={1024}
            height={1024}
            className="mx-auto mt-10 w-40 sm:w-52"
          />
        </Reveal>

        <div className="mx-auto mt-10 max-w-sm">
          {CICLO.map((step, i) => (
            <Reveal key={step} delay={0.04 * i}>
              <div className="flex flex-col items-center">
                <div
                  className="w-full rounded-2xl px-5 py-3.5 text-center text-sm font-bold"
                  style={{
                    background: i === CICLO.length - 1 ? "#FEF2F2" : "#fff",
                    border: `1px solid ${i === CICLO.length - 1 ? "#FECACA" : BRAND.border}`,
                    color: i === CICLO.length - 1 ? "#DC2626" : BRAND.text,
                    boxShadow: "0 12px 28px -24px rgba(15,23,42,0.5)",
                  }}
                >
                  {step}
                </div>
                {i < CICLO.length - 1 && (
                  <ArrowDown className="my-1.5 h-4 w-4" style={{ color: BRAND.textSoft }} />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div
            className="mx-auto mt-10 max-w-xl rounded-3xl p-6 text-center"
            style={{ background: `${BRAND.blue}0F`, border: `1px solid ${BRAND.blue}33` }}
          >
            <p className="text-lg font-extrabold" style={{ color: BRAND.text }}>
              Disciplina nunca foi o seu problema.
            </p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: BRAND.textSoft }}>
              Ninguém executa bem enquanto a mente está em modo de defesa. O que você precisa não é de
              mais força de vontade — é de uma interrupção no momento exato em que o ciclo começa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------- Verdadeiro Problema */

const DIA = [
  { h: "06:40", t: "Você acorda antes do despertador tocar." },
  { h: "06:41", t: "Pega o celular ainda deitado." },
  { h: "06:55", t: "Compara sua vida com a de todo mundo." },
  { h: "08:10", t: "Senta para trabalhar e trava na primeira tarefa." },
  { h: "12:30", t: "Percebe que perdeu a manhã inteira." },
  { h: "18:00", t: "Adia de novo o que era mais importante." },
  { h: "23:40", t: "Vai dormir com culpa, prometendo que amanhã é diferente." },
  { h: "06:40", t: "E amanhã tudo recomeça." },
];

export function VerdadeiroProblema() {
  return (
    <section className="py-16 sm:py-24" style={{ background: BRAND.bgSoft }}>
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle
          eyebrow="O verdadeiro problema"
          title={
            <>
              Não é preguiça. É um <GradText>dia inteiro sendo sequestrado</GradText>.
            </>
          }
        />

        <div className="mt-10 space-y-3">
          {DIA.map((d, i) => (
            <Reveal key={i} delay={0.04 * i}>
              <div
                className="flex items-start gap-4 rounded-2xl bg-white p-4"
                style={{ border: `1px solid ${BRAND.border}` }}
              >
                <span
                  className="mt-0.5 shrink-0 rounded-lg px-2.5 py-1 text-xs font-extrabold tabular-nums"
                  style={{ background: `${BRAND.blue}14`, color: BRAND.blueDark }}
                >
                  {d.h}
                </span>
                <p className="text-[15px] leading-relaxed" style={{ color: BRAND.text }}>
                  {d.t}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-lg font-extrabold" style={{ color: BRAND.text }}>
            Esse ciclo pode ser interrompido. <GradText>Hoje.</GradText>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- Conheça o app */

const FLUXO = [
  { icon: HeartPulse, t: "Você identifica o sentimento", d: "Culpa, medo, escassez, insegurança." },
  { icon: Headphones, t: "O app faz a intervenção", d: "Um áudio ou vídeo de 2 a 5 minutos." },
  { icon: Sparkles, t: "Seu estado emocional muda", d: "A atenção sai do medo e volta para a ação." },
  { icon: Target, t: "Você executa uma microação", d: "Uma tarefa pequena, de 10 minutos." },
  { icon: Trophy, t: "Sua autoestima aumenta", d: "O cérebro recebe evidência de que você é capaz." },
  { icon: TrendingUp, t: "Você produz novamente", d: "E a produção é o que gera resultado real." },
];

export function ConhecaOApp() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle
          eyebrow="Conheça o Ressignifica"
          tone="green"
          title={
            <>
              Um botão. <GradText>Cinco minutos.</GradText> Um dia inteiro recuperado.
            </>
          }
          subtitle="O Ressignifica não é um app de meditação. É um sistema de redirecionamento emocional que age no momento exato em que sua mente tenta te paralisar."
        />

        <div className="mt-10 space-y-3">
          {FLUXO.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={0.05 * i}>
              <div className="flex items-start gap-4 rounded-3xl bg-white p-5" style={{ border: `1px solid ${BRAND.border}` }}>
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: GRADIENT }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[15px] font-extrabold" style={{ color: BRAND.text }}>
                    {i + 1}. {t}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: BRAND.textSoft }}>
                    {d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div
            className="mt-6 rounded-3xl p-6 text-center"
            style={{ background: `${BRAND.green}12`, border: `1px solid ${BRAND.green}33` }}
          >
            <p className="text-[15px] font-extrabold" style={{ color: BRAND.text }}>
              Quanto mais você age, mais você produz. Quanto mais você produz, maiores as suas chances de
              mudar sua vida financeira.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- O que você recebe */

const RECEBE = [
  { icon: Headphones, t: "Biblioteca de áudios", d: "Intervenções de 2 a 5 minutos para cada sentimento." },
  { icon: Video, t: "Biblioteca de vídeos", d: "Conteúdos curtos para destravar na hora." },
  { icon: BrainCircuit, t: "Exercícios de ressignificação", d: "Reinterprete a situação e saia da paralisia." },
  { icon: Target, t: "Microações", d: "Tarefas de 10 minutos que recolocam você em movimento." },
  { icon: LineChart, t: "Dashboard de evolução", d: "Veja em números que você está avançando." },
  { icon: Trophy, t: "Registro de vitórias", d: "Cada tarefa concluída vira evidência concreta." },
  { icon: HeartPulse, t: "Check-in emocional", d: "Identifique o que está sentindo em 10 segundos." },
  { icon: CalendarCheck, t: "Evolução diária", d: "Constância sem depender de motivação." },
];

export function Recebe() {
  return (
    <section className="py-16 sm:py-24" style={{ background: BRAND.bgSoft }}>
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle
          eyebrow="O que você recebe"
          title={
            <>
              Tudo o que você precisa para <GradText>voltar a produzir</GradText>.
            </>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {RECEBE.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={0.04 * i}>
              <Card className="h-full">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: `${BRAND.blue}14` }}
                >
                  <Icon className="h-5 w-5" style={{ color: BRAND.blueDark }} />
                </div>
                <p className="mt-4 text-[15px] font-extrabold" style={{ color: BRAND.text }}>
                  {t}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: BRAND.textSoft }}>
                  {d}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Por que funciona */

const PORQUE = [
  { icon: Flame, t: "Não depende de motivação", d: "Motivação vai e volta. O botão está sempre lá." },
  { icon: ListChecks, t: "Não depende de disciplina", d: "Você não precisa mudar de vida. Só apertar um botão." },
  { icon: Zap, t: "Não depende de força de vontade", d: "O áudio faz o trabalho de redirecionar sua atenção." },
  { icon: Clock, t: "Age no momento exato", d: "Interrompe o ciclo mental quando ele começa, não depois." },
];

export function PorqueFunciona() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle
          eyebrow="Por que funciona"
          tone="green"
          title={
            <>
              Funciona justamente porque <GradText>não exige nada de você</GradText>.
            </>
          }
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PORQUE.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={0.05 * i}>
              <Card className="h-full">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: `${BRAND.green}16` }}
                >
                  <Icon className="h-5 w-5" style={{ color: BRAND.greenDark }} />
                </div>
                <p className="mt-4 text-[15px] font-extrabold" style={{ color: BRAND.text }}>
                  {t}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: BRAND.textSoft }}>
                  {d}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl p-6" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
              <p className="text-sm font-extrabold" style={{ color: "#B91C1C" }}>
                O jeito antigo
              </p>
              <ul className="mt-4 space-y-2.5">
                {["Esperar a motivação chegar", "Prometer que amanhã começa", "Se cobrar mais", "Se culpar à noite"].map((x) => (
                  <li key={x} className="flex items-start gap-2 text-sm" style={{ color: "#7F1D1D" }}>
                    <X className="mt-0.5 h-4 w-4 shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl p-6" style={{ background: `${BRAND.green}10`, border: `1px solid ${BRAND.green}44` }}>
              <p className="text-sm font-extrabold" style={{ color: BRAND.greenDark }}>
                Com o Ressignifica
              </p>
              <ul className="mt-4 space-y-2.5">
                {["Apertar o botão quando travar", "Ouvir 2 a 5 minutos", "Executar uma microação", "Registrar a vitória"].map((x) => (
                  <li key={x} className="flex items-start gap-2 text-sm" style={{ color: BRAND.text }}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND.green }} /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Transformação */

export function Transformacao() {
  const antes = ["Paralisa", "Procrastina", "Perde oportunidades", "Perde dinheiro", "Autoestima baixa"];
  const depois = ["Age", "Executa", "Produz", "Recupera a autoestima", "Volta a gerar resultados"];

  return (
    <section className="py-16 sm:py-24" style={{ background: BRAND.bgSoft }}>
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle
          eyebrow="Sua transformação"
          title={
            <>
              De travado a <GradText>em movimento</GradText>.
            </>
          }
        />

        <Reveal delay={0.1}>
          <img
            src={transformacaoImg}
            alt="Comparativo visual entre paralisia e evolução"
            loading="lazy"
            width={1280}
            height={1024}
            className="mx-auto mt-8 w-full max-w-sm"
          />
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-6" style={{ border: `1px solid ${BRAND.border}` }}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                <TrendingDown className="h-3.5 w-3.5" /> Antes
              </span>
              <ul className="mt-5 space-y-3">
                {antes.map((x) => (
                  <li key={x} className="flex items-center gap-3 text-[15px]" style={{ color: BRAND.textSoft }}>
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div
              className="h-full rounded-3xl p-6"
              style={{ background: GRADIENT, boxShadow: "0 24px 50px -28px rgba(10,207,131,0.7)" }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                <TrendingUp className="h-3.5 w-3.5" /> Depois
              </span>
              <ul className="mt-5 space-y-3">
                {depois.map((x) => (
                  <li key={x} className="flex items-center gap-3 text-[15px] font-semibold text-white">
                    <BadgeCheck className="h-4 w-4 shrink-0" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export { Play };
