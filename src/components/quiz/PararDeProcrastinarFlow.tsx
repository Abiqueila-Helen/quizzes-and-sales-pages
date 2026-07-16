import { useEffect, useState } from "react";
import { ArrowLeft, Check, Calendar, Clock3, Sparkles, ClipboardList, RefreshCw, Feather, Target } from "lucide-react";
import heroImg from "@/assets/procrastinar/hero.jpg";
import mockupImg from "@/assets/procrastinar/mockup.jpg";
import antesDepoisImg from "@/assets/procrastinar/antes-depois.jpg";
import paraQuemImg from "@/assets/procrastinar/para-quem.jpg";

const CTA_URL = "#comprar";
const TOTAL_STEPS = 10;

// Design tokens locais (dark)
const BG = "#141110";
const CARD = "#1c1816";
const BORDER = "#3a2a20";
const GOLD = "#c9a45c";
const GOLD_SOFT = "#d4b678";
const COPPER = "#c07a5f";
const COPPER_DARK = "#8a4f3e";
const GREEN = "#a8c98a";
const GREEN_DARK = "#5d7a3d";
const TEXT = "#efe6d8";
const TEXT_MUTED = "#a89a86";

function Shell({
  step,
  onBack,
  children,
}: {
  step: number;
  onBack?: () => void;
  children: React.ReactNode;
}) {
  const pct = (step / TOTAL_STEPS) * 100;
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: BG, color: TEXT }}>
      {/* Back button */}
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="fixed left-4 top-4 z-10 rounded-full p-2 transition hover:bg-white/5"
          style={{ color: TEXT_MUTED }}
          aria-label="Voltar"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
      )}
      {/* Progress bar */}
      <div className="pt-6 px-5">
        <div className="mx-auto max-w-xl h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#2a211d" }}>
          <div
            className="h-full transition-all duration-500 ease-out"
            style={{ width: `${pct}%`, backgroundColor: COPPER }}
          />
        </div>
      </div>
      <div className="px-5 pt-10 pb-32 mx-auto max-w-xl animate-[fadeUp_.4s_ease-out_both]">
        {children}
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}

function GreenCTA({ children, onClick, href }: { children: React.ReactNode; onClick?: () => void; href?: string }) {
  const cls =
    "fixed bottom-6 left-1/2 -translate-x-1/2 w-[min(560px,calc(100%-2.5rem))] rounded-full px-8 py-4 text-center text-sm sm:text-base font-semibold tracking-wide transition-all hover:brightness-95 active:scale-[0.98] shadow-[0_10px_30px_rgba(168,201,138,0.25)]";
  const style = { backgroundColor: GREEN, color: "#1c2812", border: `2px solid ${GREEN_DARK}` };
  return href ? (
    <a href={href} className={cls} style={style}>{children}</a>
  ) : (
    <button type="button" onClick={onClick} className={cls} style={style}>{children}</button>
  );
}

function CopperCTA({ children, onClick, disabled }: { children: React.ReactNode; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[min(560px,calc(100%-2.5rem))] rounded-full px-8 py-4 text-center text-sm sm:text-base font-semibold tracking-wide transition-all hover:brightness-95 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
      style={{ backgroundColor: COPPER_DARK, color: "#f6e4d6", border: `2px solid ${COPPER}` }}
    >
      {children}
    </button>
  );
}

// ---------- STEPS ----------

function Step1Hero({ next }: { next: () => void }) {
  return (
    <>
      <h1 className="text-center font-serif text-[26px] sm:text-3xl font-semibold leading-tight" style={{ color: GOLD }}>
        Você sabe o que precisa fazer.<br />
        <em className="not-italic italic" style={{ fontStyle: "italic" }}>O problema é que você não faz.</em>
      </h1>
      <p className="mt-5 text-center text-[15px] leading-relaxed" style={{ color: TEXT }}>
        Em apenas 10 dias você vai aprender a parar de{" "}
        <span style={{ color: GOLD, fontWeight: 600 }}>procrastinar</span> e{" "}
        <span style={{ color: GOLD, fontWeight: 600 }}>hackear sua mente para</span>{" "}
        <em>finalmente fazer o que precisa ser feito:</em>
      </p>
      <p className="mt-8 text-center italic font-semibold" style={{ color: GOLD_SOFT }}>
        +6770 mulheres já mudaram sua rotina com esse<br />
        protocolo de 10 passos simples.
      </p>
      <div className="mt-8 overflow-hidden rounded-2xl border" style={{ borderColor: BORDER }}>
        <img src={heroImg} alt="Mulher na escrivaninha à noite" className="w-full h-auto block" width={1024} height={1024} />
      </div>
      <GreenCTA onClick={next}>EU QUERO PARAR DE PROCRASTINAR!</GreenCTA>
    </>
  );
}

const DORES = [
  "Procrastino demais meus hábitos e projetos",
  "Não consigo terminar o que começo, zero constância...",
  "Sinto que tenho pouco tempo livre, não sei me organizar direito",
  "Me sinto desmotivada e quero mudar de vida",
  "Parece que o tempo passa e nada na minha vida muda. Preciso começar a agir.",
];

function Step2Dores({ next, back, selected, setSelected }: {
  next: () => void; back: () => void; selected: number[]; setSelected: (v: number[]) => void;
}) {
  const toggle = (i: number) => setSelected(selected.includes(i) ? selected.filter(x => x !== i) : [...selected, i]);
  return (
    <>
      <h2 className="text-center font-serif text-xl sm:text-2xl font-semibold leading-snug" style={{ color: GOLD }}>
        Antes de mais nada, eu preciso me certificar<br />
        que você <em>tem o perfil necessário</em> para o<br />
        Protocolo Do Zero À Rotina Produtiva.
      </h2>
      <p className="mt-4 text-center italic font-semibold" style={{ color: COPPER }}>
        Para garantir que você tenha resultados reais!
      </p>
      <p className="mt-6 text-center text-sm" style={{ color: TEXT }}>
        Quais são suas maiores dores com sua rotina hoje em dia?<br />
        <strong>Selecione os campos abaixo:</strong>
      </p>
      <div className="mt-6 space-y-3">
        {DORES.map((label, i) => {
          const isSelected = selected.includes(i);
          const letter = String.fromCharCode(65 + i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              className="w-full rounded-full border px-4 py-3 text-left flex items-center gap-3 transition-all"
              style={{
                backgroundColor: isSelected ? "#2a1f18" : CARD,
                borderColor: isSelected ? GOLD : BORDER,
              }}
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold"
                style={{ backgroundColor: isSelected ? GOLD : "#2a211d", color: isSelected ? "#1c1310" : GOLD_SOFT }}
              >
                {letter}
              </span>
              <span className="text-sm leading-snug" style={{ color: GOLD_SOFT }}>{label}</span>
            </button>
          );
        })}
      </div>
      <CopperCTA onClick={next} disabled={selected.length === 0}>
        ESTOU PRONTA PARA TER UMA ROTINA PRODUTIVA!
      </CopperCTA>
    </>
  );
}

const DESEJOS = [
  "Me sentir orgulhosa de mim mesma ao final do dia",
  "Ter tempo e energia para cumprir com meus hábitos e metas",
  "Provar para mim mesma que sou capaz de ser constante",
  "Parar de procrastinar e adiar a vida que eu sei que mereço viver",
  "Nada, até porque já aceitei que sou uma procrastinadora e não farei nada para mudar",
];

function Step3Desejos({ next, back, selected, setSelected }: {
  next: () => void; back: () => void; selected: number[]; setSelected: (v: number[]) => void;
}) {
  const toggle = (i: number) => setSelected(selected.includes(i) ? selected.filter(x => x !== i) : [...selected, i]);
  return (
    <>
      <h2 className="text-center font-serif text-xl sm:text-2xl font-semibold leading-snug" style={{ color: GOLD }}>
        E agora, seja SINCERA: o que você deseja e não<br />
        quer mais abrir mão na sua vida a partir de<br />
        agora?
      </h2>
      <p className="mt-4 text-center italic text-sm" style={{ color: TEXT }}>
        Selecione seus maiores desejos para sua rotina hoje em dia:
      </p>
      <div className="mt-6 space-y-3">
        {DESEJOS.map((label, i) => {
          const isSelected = selected.includes(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(i)}
              className="w-full rounded-full border px-4 py-3 text-left flex items-center gap-3 transition-all"
              style={{
                backgroundColor: isSelected ? "#2a1f18" : CARD,
                borderColor: isSelected ? GOLD : BORDER,
              }}
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border"
                style={{ borderColor: isSelected ? GOLD : "#4a3628", backgroundColor: isSelected ? GOLD : "transparent" }}
              >
                {isSelected && <Check className="h-4 w-4" style={{ color: "#1c1310" }} strokeWidth={3} />}
              </span>
              <span className="text-sm leading-snug" style={{ color: GOLD_SOFT }}>{label}</span>
            </button>
          );
        })}
      </div>
      <CopperCTA onClick={next} disabled={selected.length === 0}>EU ESTOU PRONTA PARA MUDAR!</CopperCTA>
    </>
  );
}

const TESTIMONIALS = [
  {
    name: "Karine Perrotti",
    text: "Sensação de realização … consegui levantar as 5:30 e ter uma manhã super produtiva, uma tarde tranquila, e agora uma noite relaxante. Faz 2 meses que não praticava exercícios e voltei hoje, estou finalizando o dia com o coração bem grato 🙏",
    time: "21:33",
    caption: "Produtividade, tranquilidade e relaxamento!",
    initial: "K",
    color: "#8a5a3a",
  },
  {
    name: "Amanda Souza",
    text: "Eu não acreditava que 10 dias mudariam tanto. Hoje eu abro o dia com clareza do que fazer e fecho sem culpa. Nunca mais quero voltar pra antes.",
    time: "19:12",
    caption: "Clareza e leveza no dia a dia.",
    initial: "A",
    color: "#a0632a",
  },
  {
    name: "Juliana Reis",
    text: "Depois de anos me sabotando, entendi que o problema não era falta de disciplina — era falta de método. Esse protocolo destravou tudo.",
    time: "08:47",
    caption: "Método simples, resultado real.",
    initial: "J",
    color: "#6a4a3a",
  },
];

function Step4Testemunhos({ next, back }: { next: () => void; back: () => void }) {
  const [idx, setIdx] = useState(0);
  return (
    <>
      <h2 className="text-center font-serif text-xl sm:text-2xl font-semibold leading-snug" style={{ color: GOLD }}>
        Eu sei que parece difícil acreditar que<br />
        10 dias podem mudar sua vida.
      </h2>
      <p className="mt-4 text-center italic text-sm leading-relaxed" style={{ color: TEXT }}>
        Porque sim, saiba que se você executar esse desafio, você<br />
        VAI, em 10 dias, <span style={{ color: COPPER }}>finalmente <strong>parar de procrastinar…</strong></span>
      </p>
      <p className="mt-4 text-center text-sm leading-relaxed" style={{ color: TEXT }}>
        <strong>Por isso, deixa eu te mostrar o que</strong> <span style={{ color: GOLD }}>mais de 6.700 mulheres</span>{" "}
        que já aplicaram esse protocolo estão dizendo:
      </p>
      <div className="mt-8 rounded-2xl border p-4" style={{ backgroundColor: "#0d0b0a", borderColor: BORDER }}>
        <div className="rounded-xl p-4" style={{ backgroundColor: "#1a1817" }}>
          <div className="flex items-start gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full flex items-center justify-center text-white text-sm font-semibold"
              style={{ backgroundColor: TESTIMONIALS[idx].color }}>
              {TESTIMONIALS[idx].initial}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: TEXT }}>~{TESTIMONIALS[idx].name}</p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: TEXT }}>{TESTIMONIALS[idx].text}</p>
              <p className="mt-2 text-right text-xs" style={{ color: TEXT_MUTED }}>{TESTIMONIALS[idx].time}</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-sm" style={{ color: TEXT }}>{TESTIMONIALS[idx].caption}</p>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button key={i} type="button" onClick={() => setIdx(i)}
            className="h-2 w-2 rounded-full transition-all"
            style={{ backgroundColor: i === idx ? COPPER : "#3a2a20", width: i === idx ? 20 : 8 }}
            aria-label={`Depoimento ${i + 1}`}
          />
        ))}
      </div>
      <GreenCTA onClick={next}>É ISSO QUE EU PRECISO!</GreenCTA>
    </>
  );
}

function Step5Autora({ next, back }: { next: () => void; back: () => void }) {
  return (
    <>
      <p className="text-center text-sm leading-relaxed" style={{ color: TEXT }}>
        <strong>Eu alcancei minha liberdade financeira e construí do ZERO minha carreira aos 22 anos.</strong>{" "}
        Hoje tenho mais de 1 milhão de seguidoras nas redes sociais falando sobre produtividade e neurociência e{" "}
        <span style={{ color: GOLD, fontWeight: 600 }}>mais de 10.000 alunas transformadas.</span>
      </p>
      <div className="mt-6 rounded-2xl border p-4" style={{ backgroundColor: "#f8f6f1", borderColor: BORDER }}>
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 shrink-0 rounded-full flex items-center justify-center text-white text-sm font-semibold" style={{ backgroundColor: "#c65832" }}>L</div>
          <div className="flex-1">
            <p className="text-sm font-semibold" style={{ color: "#1a1310" }}>~Lalá Martins 🌿 ✨</p>
            <p className="mt-1 text-sm leading-relaxed" style={{ color: "#1a1310" }}>
              Foi maravilhoso começar esse desafio vale muito mais do que ele foi cobrado! Já fiz muito desenvolvimento
              pessoal e imersões que não deram 1% do conteúdo apresentado aqui, e a Val é linda e meiga pra explicar
              sobre a mentalidade de auto sabotagem que precisamos saber, não poderia ter sido a melhor pílula de hoje
              pra começar e nos fazer sermos a nossa protagonista das nossas ações, termino meu dia feito e perfeito
              dando check em todos os hábitos, coisa que não tinha feito na vida ainda, esse desafio vale muito!
              Obrigada Val e equipe vcs são top! 🤎 ✨🍫🥧⏳
            </p>
            <p className="mt-2 text-right text-xs" style={{ color: "#7a6a5a" }}>22:59</p>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-sm leading-relaxed" style={{ color: TEXT }}>
        Mas nada disso veio de talento, de sorte ou de uma manhã perfeita em que eu "me encontrei".
      </p>
      <p className="mt-4 text-center text-sm" style={{ color: TEXT }}>Veio de 3 chaves inegociáveis</p>
      <ol className="mt-4 space-y-2 text-sm max-w-xs mx-auto">
        <li><span style={{ color: TEXT }}>1. </span><span style={{ color: GOLD_SOFT, fontWeight: 600 }}>Uma identidade poderosa.</span></li>
        <li><span style={{ color: TEXT }}>2. </span><span style={{ color: GOLD_SOFT, fontWeight: 600 }}>Um propósito inegociável.</span></li>
        <li><span style={{ color: TEXT }}>3. </span><span style={{ color: GOLD_SOFT, fontWeight: 600 }}>Uma rotina anti-sabotagem</span></li>
      </ol>
      <div className="mt-6 rounded-lg p-3 text-center text-sm leading-relaxed" style={{ backgroundColor: "#2a1f18", color: TEXT }}>
        Essas 3 chaves me deram o meu dia a dia dos sonhos: com foco, disciplina e constância...{" "}
        <strong>e você poderá usar o mesmo plano que eu para construir a SUA vida dos sonhos a partir de HOJE.</strong>
      </div>
      <div className="mt-4 rounded-lg p-3 text-center text-lg font-serif font-semibold leading-tight" style={{ backgroundColor: "#3a2a1e", color: GOLD }}>
        Você está pronta para começar a criar a ROTINA que sabe que nasceu para ter?
      </div>
      <GreenCTA onClick={next}>ESTOU PRONTA!</GreenCTA>
    </>
  );
}

function Step6Aviso({ next, back }: { next: () => void; back: () => void }) {
  return (
    <>
      <p className="mt-8 uppercase text-xs tracking-[0.2em] font-semibold" style={{ color: COPPER }}>
        ANTES DE SEGUIR, LEIA COM ATENÇÃO
      </p>
      <h2 className="mt-4 font-serif text-xl sm:text-2xl font-semibold leading-snug" style={{ color: GOLD }}>
        Em <span style={{ color: GOLD_SOFT }}>10 dias, e com apenas 5 minutos por dia</span>, esse Protocolo VAI eliminar a procrastinação da sua vida. <span style={{ color: GOLD_SOFT }}>Mas antes, ele vai te gerar <em>desconforto:</em></span>
      </h2>
      <p className="mt-5 text-sm leading-relaxed" style={{ color: TEXT }}>
        Ele vai colocar em cheque <strong>os padrões que fazem você se sabotar,</strong> começar e parar, e se sentir culpada sem entender por quê.
      </p>
      <p className="mt-5 text-sm leading-relaxed font-semibold" style={{ color: GOLD_SOFT }}>
        Você vai deixar de aceitar a versão sua que fica parada: e isso vai ser desconfortável.
      </p>
      <p className="mt-5 text-sm font-semibold" style={{ color: TEXT }}>Esse desconforto é o preço da sua rotina dos sonhos.</p>
      <p className="mt-4 text-base font-semibold leading-snug" style={{ color: TEXT }}>
        E é importante que você esteja ciente dele antes de decidir entrar.
      </p>
      <GreenCTA onClick={next}>Estou ciente, e é exatamente o que eu preciso!</GreenCTA>
    </>
  );
}

function Step7Tempo({ next, back, choice, setChoice }: {
  next: () => void; back: () => void; choice: string | null; setChoice: (v: string) => void;
}) {
  return (
    <>
      <div className="mt-4 overflow-hidden">
        <img src={mockupImg} alt="Protocolo Rotina Produtiva" className="w-full h-auto block" width={1024} height={1024} loading="lazy" />
      </div>
      <p className="mt-6 text-center text-sm font-semibold leading-relaxed" style={{ color: TEXT }}>
        E por último: para saber se você está preparada para iniciar sua jornada nesse Protocolo, eu preciso saber:
      </p>
      <p className="mt-3 text-center text-base leading-snug" style={{ color: GOLD }}>
        <strong>Você tem liberdade de reservar <span style={{ color: GOLD_SOFT }}>5 minutos no seu dia</span> para se dedicar à mudar sua vida?</strong>
      </p>
      <p className="mt-2 text-center italic text-sm" style={{ color: COPPER }}>
        Não mais, nem menos, <em>apenas 5 minutos no seu dia.</em>
      </p>
      <div className="mt-6 space-y-3">
        {[
          { id: "sim", label: "Sim, 05 minutos eu tenho sim." },
          { id: "nao", label: "Sem chance, não tenho tempo nem pra escovar os dentes." },
        ].map((o) => {
          const isSel = choice === o.id;
          return (
            <button key={o.id} type="button" onClick={() => setChoice(o.id)}
              className="w-full rounded-full border px-4 py-3 text-left flex items-center gap-3 transition-all"
              style={{ backgroundColor: isSel ? "#2a1f18" : CARD, borderColor: isSel ? GOLD : BORDER }}>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                style={{ borderColor: isSel ? GOLD : "#4a3628", backgroundColor: isSel ? GOLD : "transparent" }}>
                {isSel && <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#1c1310" }} />}
              </span>
              <span className="text-sm" style={{ color: GOLD_SOFT }}>{o.label}</span>
            </button>
          );
        })}
      </div>
      <CopperCTA onClick={next} disabled={!choice}>CONTINUAR</CopperCTA>
    </>
  );
}

function Step8Protocolo({ next, back }: { next: () => void; back: () => void }) {
  return (
    <>
      <p className="uppercase text-xs tracking-[0.15em] font-semibold" style={{ color: GOLD }}>
        PERFEITO: SÃO 10 DIAS. 10 PASSOS. 5 MINUTOS POR DIA. RESULTADO IMEDIATO:
      </p>
      <div className="mt-6 overflow-hidden">
        <img src={mockupImg} alt="Protocolo" className="w-full h-auto block" width={1024} height={1024} loading="lazy" />
      </div>
      <h3 className="mt-6 font-serif text-lg font-semibold leading-snug" style={{ color: TEXT }}>
        O Protocolo do Zero à Rotina Produtiva é um desafio prático, leve e eficaz de 10 dias
      </h3>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: TEXT }}>
        Nos próximos 10 dias, você aplicará um plano infalível: <span style={{ color: GOLD }}>um desafio de reprogramação de crenças e hábitos de 10 passos validados pela neurociência.</span>
      </p>
      <p className="mt-3 text-sm italic font-semibold" style={{ color: TEXT }}>
        É simples: 1 aula por dia com técnica+ exercício prático + desafio estratégico.
      </p>
      <div className="mt-5 rounded-lg p-3 flex items-start gap-2 text-sm" style={{ backgroundColor: "#2a3a20", color: "#d4e5b8" }}>
        <Check className="h-4 w-4 shrink-0 mt-0.5" style={{ color: GREEN }} />
        <span><em>Aplicação imediata. Para quem tem pouco tempo livre mas quer resultados REAIS e duradouros.</em></span>
      </div>

      <div className="mt-6 rounded-2xl p-5 border" style={{ backgroundColor: "#2a2418", borderColor: BORDER }}>
        <p className="font-semibold text-base mb-4" style={{ color: TEXT }}>Como funciona:</p>
        <div className="space-y-3">
          {[
            { icon: Calendar, text: "Duração de 10 dias" },
            { icon: Clock3, text: "1 passo prático por dia, que leva menos de 5 minutos" },
            { icon: Sparkles, text: "A cada etapa, você aplica o conteúdo na sua rotina e sente o resultado imediato" },
          ].map((it, i) => (
            <div key={i} className="rounded-lg p-3 flex items-start gap-3" style={{ backgroundColor: "#3a3020" }}>
              <it.icon className="h-4 w-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
              <span className="text-sm" style={{ color: TEXT }}>{it.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-2xl p-5 border" style={{ backgroundColor: "#2a3a20", borderColor: GREEN_DARK }}>
        <p className="font-semibold text-base mb-4" style={{ color: "#d4e5b8" }}>Você vai aprender a:</p>
        <div className="space-y-2">
          {[
            { icon: ClipboardList, text: "Estruturar uma rotina funcional que se adapta à sua realidade" },
            { icon: RefreshCw, text: "Criar hábitos que não desmoronam nos dias difíceis" },
            { icon: Feather, text: "Eliminar o peso da cobrança e agir com leveza e constância" },
            { icon: Target, text: "Recuperar o foco e a motivação todos os dias" },
          ].map((it, i) => (
            <div key={i} className="rounded-lg p-3 flex items-start gap-3" style={{ backgroundColor: "#3a4a2a" }}>
              <it.icon className="h-4 w-4 shrink-0 mt-0.5" style={{ color: GREEN }} />
              <span className="text-sm" style={{ color: "#e8f0d8" }}>{it.text}</span>
            </div>
          ))}
        </div>
      </div>

      <GreenCTA onClick={next}>Entendido!</GreenCTA>
    </>
  );
}

function Step9Resultados({ next, back }: { next: () => void; back: () => void }) {
  return (
    <>
      <h2 className="mt-6 font-serif text-xl sm:text-2xl font-semibold leading-snug" style={{ color: TEXT }}>
        Esses são os resultados que <span style={{ color: GOLD }}>as milhares de alunas do Desafio</span> tem em suas rotinas <em>(e que você terá também):</em>
      </h2>
      <div className="mt-8 overflow-hidden">
        <img src={antesDepoisImg} alt="Antes e depois do protocolo" className="w-full h-auto block" width={1024} height={1024} loading="lazy" />
      </div>
      <GreenCTA onClick={next}>É isso que eu preciso!</GreenCTA>
    </>
  );
}

function Step10ParaQuem() {
  return (
    <>
      <div className="mt-4 overflow-hidden rounded-2xl">
        <img src={paraQuemImg} alt="Para quem é o protocolo" className="w-full h-auto block" width={1024} height={1024} loading="lazy" />
      </div>
      <p className="mt-6 uppercase text-xs tracking-[0.15em] font-semibold" style={{ color: GOLD }}>
        PARA QUEM É O PROTOCOLO DO ZERO À ROTINA PRODUTIVA?
      </p>
      <h3 className="mt-4 font-serif text-lg sm:text-xl font-semibold leading-snug" style={{ color: TEXT }}>
        Para a mulher que sabe que tem potencial: mas que a procrastinação e a falta de rotina estão impedindo ela de mostrar isso.
      </h3>
      <p className="mt-6 italic text-sm" style={{ color: GOLD }}>Pra você, que quer...</p>
      <ul className="mt-3 space-y-2 text-sm list-disc pl-5" style={{ color: TEXT }}>
        <li>Um <strong>caminho claro para mudar de vida</strong>: sem enrolação</li>
        <li><strong>Parar de procrastinar</strong> e finalmente avançar na vida</li>
        <li>Construir uma <strong>rotina que funcione</strong>, mesmo sem ter muito tempo livre</li>
        <li>Se <strong>sentir orgulhosa</strong> de quem você está sendo</li>
        <li>Provar para si mesma que <strong>você é capaz de ser constante</strong></li>
      </ul>
      <GreenCTA href={CTA_URL}>Estou ciente, e é exatamente o que eu preciso!</GreenCTA>
    </>
  );
}

// ---------- FLOW ----------

export function PararDeProcrastinarFlow() {
  const [step, setStep] = useState(1);
  const [dores, setDores] = useState<number[]>([]);
  const [desejos, setDesejos] = useState<number[]>([]);
  const [tempo, setTempo] = useState<string | null>(null);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [step]);

  const next = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <Shell step={step} onBack={step > 1 ? back : undefined}>
      {step === 1 && <Step1Hero next={next} />}
      {step === 2 && <Step2Dores next={next} back={back} selected={dores} setSelected={setDores} />}
      {step === 3 && <Step3Desejos next={next} back={back} selected={desejos} setSelected={setDesejos} />}
      {step === 4 && <Step4Testemunhos next={next} back={back} />}
      {step === 5 && <Step5Autora next={next} back={back} />}
      {step === 6 && <Step6Aviso next={next} back={back} />}
      {step === 7 && <Step7Tempo next={next} back={back} choice={tempo} setChoice={setTempo} />}
      {step === 8 && <Step8Protocolo next={next} back={back} />}
      {step === 9 && <Step9Resultados next={next} back={back} />}
      {step === 10 && <Step10ParaQuem />}
    </Shell>
  );
}
